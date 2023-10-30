import { Input } from '@chakra-ui/react';
import React from 'react';

export default function Reservation() {
  return (
    <div className='reservationForm'>
        <form action="">
            <Input id="name" type="text" placeholder="Ad"/>
            <Input id="surname" type="text" placeholder="Soyad"/>
            <Input type="date" />
            <Input type="time" />
            <Input type="number" placeholder='Kişi Sayısı'/>
            <button>Rezervasyon Yap</button>
      </form>
    </div>
    
  );
}
