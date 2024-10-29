import React from 'react';
import { YMaps, Map } from '@pbe/react-yandex-maps';
import './style.scss';
import axios from 'axios';
import News from '../../components/News';
import Pointer from '../../components/Pointer';

export default () => {

  const [pointersDate, setPointersDate] = React.useState([]);
  const [newsData, setNewsData] = React.useState([]);
  const [selectedPointer, setSelectedPointer] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('');


  React.useEffect(() => {
    axios.get('http://localhost:7000/api/news')
      .then(function (response) {
        setNewsData(response.data);
      });
  }, []);

  React.useEffect(() => {
    axios.get('http://localhost:7000/api/pointers')
      .then(function (response) {
        setPointersDate(response.data);
      });
  }, []);

  const handlePointerClick = (pointer) => {
    setSelectedPointer(pointer);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredPointers = pointersDate.filter(pointer => {
    const name = pointer.named || ''; // Используем 'named'
    const matchesSearchTerm = name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? pointer.category === selectedCategory : true;
    return matchesSearchTerm && matchesCategory;
  });

  return (
    <div className='containerHome'>
      <div className='blockForm'>
        <div className='itemForm'>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Название точки"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              onChange={handleSearchChange}
            />
            <button
              className="btn btn-outline-primary"
              type="button"
              id="button-addon2">
              Поиск
            </button>
          </div>
        </div>
        <div className='itemSelect'>
          <select className="form-select" onChange={handleCategoryChange} aria-label="Large select example">
              <option value={''}>Категория не выбрана</option>
              <option value={'Мед учереждения'}>Мед учереждения</option>
              <option value={'Транспорт'}>Транспорт</option>
              <option value={'Социальные службы'}>Социальные службы</option>
              <option value={'Магазины'}>Магазины</option>
          </select>
        </div>
      </div>
      <div className='containerMapOne'>
        <div className='itemMapOne'>
          <YMaps >
            <Map
              key={selectedCategory}
              defaultState={{ center: [53.214496, 63.632100], zoom: 12 }}
              className='mapStyles'
            >
              <Pointer
                dataPointers={filteredPointers}
                onPointerClick={handlePointerClick}
              />
            </Map>
          </YMaps>
        </div>
        <div className='itemPanelOne'>
          {selectedPointer &&
            <div className="card" >
              {selectedPointer.image && (
                <img src={`http://localhost:7000/${selectedPointer.image}`} className="card-img-top" alt={selectedPointer.named} />
              )}
              <div className="card-body">
                <h5 className="card-title">{selectedPointer.named || ''}</h5>
                <p className="card-text">
                  {selectedPointer.description || ''}
                </p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{selectedPointer.phone || ''}</li>
                  <li className="list-group-item">С {selectedPointer.opening} до {selectedPointer.closing}</li>
                  <li className="list-group-item">Категория: {selectedPointer.category}</li>
                </ul>
              </div>
            </div>
          }
        </div>
      </div>
      <div className='itemNewsPanel'>
        <h1>Новости:</h1>
        <div className='cardNewsOne'>
          {newsData.map((news, index) => (
            <div className='cardNewsOnes'>
              <div
                className="card"
                key={index}
                style={{ marginLeft: '20px' }}
              >
              {news.image && <img src={`http://localhost:7000/${news.image}`} className="card-img-top" alt={news.named} />}
                <div
                  className="card-body"
                >
                  <h5 className="card-title">{news.named}</h5>
                  <p className="card-text">
                    {news.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div >
  )
}
