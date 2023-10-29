import React, { useState, useEffect } from 'react';
import { Image, Box } from '@chakra-ui/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';


export default function MenuCard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('data/MenuCardData.json')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Veri Yükleme Hatası", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  AOS.init();
  return (
    <div id='menuCardItems'>
      {data.map((item) => (
            <div data-aos="fade-up" className='innerMenuCard' key={item.id}>    
                <Box id='menuBox' boxSize='sm'>
                    <Image src={item.src} alt={item.alt} />
                </Box>
                <Link to={item.href}>
                    <h1>{item.title}</h1>
                </Link>
                <p>{item.description}</p>
            </div>
      ))}
    </div>
  );
}
