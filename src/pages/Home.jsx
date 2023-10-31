import React from 'react';
import { Link } from 'react-router-dom';
import HomeCarousel from '../components/HomeCarousel';
import Menu from './Menu';
import Galery from './Galery';
import Footer from './Footer';
import Reservation from './Reservation'
export default function Home() {
  return (
    <div id='home'>

      <div id='homeLogo'>
        <Link to="/home">
          <img src="/images/logo.png" alt="Logo" />
        </Link>
      </div>

      <div id='homeContent'>
        <div id='history'>
          <HomeCarousel></HomeCarousel>

        </div>



      </div>

      <div id='menu'>
        <div id='menuDescription'>
          <h1>Menümüze Gözatın</h1>
          <span>Zengin İçeriklerimiz ve Özenle Hazırlanmış Menülerimiz Yöresel Ve Klasik Tatlar İle Birlikte</span>
        </div>

        <Menu></Menu>
      </div>

      <div id='galery'>
        <div id='galeryTitle'>
          <h1>Galeri</h1>
          <span>Eşsiz Yöresel Ve Tarihin Eskitemediği Lezzetler</span>
        </div>
        <Galery></Galery>
      </div>

      <div id='reservation'>
        <div id='reservationOptions'>
          <div className='reservationDescription'>
          <div>
              <h1>REZERVASYON</h1>
              <p>
                Bizimle bir masa ayırtmak için hemen rezervasyon yapın ve keyifli bir akşamın kapılarını aralayın. Bekliyoruz!
              </p>
          </div>
                <Reservation/>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
