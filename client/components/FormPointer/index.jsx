import React from 'react';
import { connect } from 'react-redux';
import { createPointer, deletePointer } from '../../store/actions/pointer.actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default connect((s) => ({
  pointer: s.pointer,
}), {
  createPointer,
  deletePointer
})(
  ({
    createPointer,
    deletePointer
  }) => {

    const [named, setNamed] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [latitude, setLatitude] = React.useState(0);
    const [longitude, setLongitude] = React.useState(0);
    const [category, setCategory] = React.useState('');
    const [opening, setOpening] = React.useState(0);
    const [closing, setClosing] = React.useState(0);
    const [phone, setPhone] = React.useState(0);
    const [image, setImage] = React.useState(null);

    const createdPointer = () => {
      const formData = new FormData();
      formData.append('named', named);
      formData.append('description', description);
      formData.append('latitude', latitude);
      formData.append('longitude', longitude);
      formData.append('category', category);
      formData.append('opening', opening);
      formData.append('closing', closing);
      formData.append('phone', phone);
      if (image) {
        formData.append('image', image);
      }

      createPointer(formData);
      toast.success('Точка успешно создана', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    const submitHandler = (e) => {
      e.preventDefault();
      createdPointer();
    }

    function deletedPointer() {
      deletePointer(named);
      toast.success('Точка успешно удалена', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    return (
      <div>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Название точки</label>
            <input
              value={named}
              onChange={(e) => setNamed(e.target.value)}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Название"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Описание</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            >
            </textarea>
          </div>
          <div className='containerInpShDol'>
            <div className='inpShirina'>
              <label for="exampleFormControlInput1" className="form-label">Ширина</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Ширина"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
              />
            </div>
            <div className='inpDolgota'>
              <label for="exampleFormControlInput1" className="form-label">Долгота</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Долгота"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
              />
            </div>
          </div>
          <div className='mb-3' style={{ marginTop: "20px" }}>
            <label for="exampleFormControlInput1" className="form-label">Категория</label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Категория не выбрана</option>
              <option>Мед учереждения</option>
              <option>Транспорт</option>
              <option>Социальные службы</option>
              <option>Магазины</option>
            </select>
          </div>
          <label for="exampleFormControlInput1" className="form-label">Часы работы</label>
          <div className='containerInpShDol'>
            <div className='inpShirina'>
              <label for="exampleFormControlInput1" className="form-label">С</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Часы"
                value={opening}
                onChange={(e) => setOpening(e.target.value)}
              />
            </div>
            <div className='inpDolgota'>
              <label for="exampleFormControlInput1" className="form-label">до</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Часы"
                value={closing}
                onChange={(e) => setClosing(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3" style={{ marginTop: "20px" }}>
            <label for="exampleFormControlInput1" className="form-label">Телефон</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Телефон"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <p>Загрузите картинку</p>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div className='btnGroupPointer'>
            <button
              style={{ width: "30%" }}
              type="button"
              className="btn btn-outline-primary"
              onClick={createdPointer}
            >
              Создать
            </button>
            <button
              style={{ width: "40%", marginLeft: "10px" }}
              type="button"
              className="btn btn-outline-danger"
              onClick={deletedPointer}
            >
              Удалить
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    )
  })
