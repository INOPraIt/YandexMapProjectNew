import React from 'react';
import './style.scss';
import { YMaps, Map, SearchControl } from '@pbe/react-yandex-maps';
import Pointer from '../../components/Pointer';
import FormNews from '../../components/FormNews';
import FormPointer from '../../components/FormPointer';
import axios from 'axios';

export default () => {
  const [dataPointers, setDataPointers] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:7000/api/pointers')
      .then(function (response) {
        setDataPointers(response.data);
      });
  }, []);

  console.log('data', dataPointers);

  return (
    <>
      <h2 className='textAdmin'>Админ панель</h2>
      <div className='containerAdmin'>
        <div className='mapContainerAdminPanel'>
          <YMaps>
            <Map
              defaultState={{ center: [53.214496, 63.632100], zoom: 12 }}
              className='mapStylesAdminPanel'
            >
              <Pointer
                dataPointers={dataPointers}
              />
              <SearchControl options={{ float: "right" }} />
            </Map>
          </YMaps>
        </div>
        <div className='formCreatePointer'>
          <FormPointer />
        </div>
        <div className='newsItem'>
          <FormNews />
        </div>
      </div>
    </>
  )
}
