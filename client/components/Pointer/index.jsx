import React from 'react';
import { Placemark } from '@pbe/react-yandex-maps';

export default ({ dataPointers, onPointerClick }) => {
  function onClick() {
    alert('Привет')
  }

  return (
    <div>

      {dataPointers.map((pointer, index) => (
        <Placemark
          key={index}
          defaultGeometry={[pointer.latitude, pointer.longitude]}
          onClick={() => onPointerClick(pointer)} 
        />
      ))}
      <Placemark
        defaultGeometry={[53.214496, 63.632100]}
      />
    </div>
  )
}
