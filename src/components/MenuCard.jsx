import React, { useState, useEffect } from 'react';
import { Image } from '@chakra-ui/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

export default function MenuCard() {
  const [menuData, setMenuData] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    // Fetch menu data
    fetch('data/menu.json')
      .then((response) => response.json())
      .then((menuData) => {
        setMenuData(menuData);
        console.log("Yemekler",menuData)
      })
      .catch((error) => {
        console.log("Menu verileri yüklenirken bir hata oluştu...:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch card data
    fetch('data/MenuCardData.json')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log("İconlar",data)
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

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredMenuData = menuData.filter((item) => item.category === selectedCategory);

  return (
    <div id='menuCardItems'>
      <ul>
        {data.map((menuIcon) => (
          <li onClick={() => handleClick(menuIcon.category)} data-aos="fade-up" className='innerMenuCard' key={menuIcon.id}>
            <Link>
              <Image src={menuIcon.src} alt={menuIcon.title} />
              <h5>{menuIcon.title}</h5>
            </Link>
          </li>
        ))}
      </ul>

      <ul className='menuData'>
        {filteredMenuData.map((item) => (
          <li data-aos="fade-up" key={item.id}>
            <Image src={item.src} alt={item.alt} />
            <div className='menuDescription'>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
