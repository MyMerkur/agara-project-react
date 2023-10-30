import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import HomeCarousel from '../components/HomeCarousel';
import About from './About';
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
          <h1>Tarihçe</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quas id, qui nostrum ex esse tempora
            suscipit asperiores aliquam minima hic quod amet cupiditate quae, minus officia repellendus eius
            accusantium! Accusantium iste voluptas deserunt adipisci quod eaque consequuntur illum minus incidunt
            fuga consequatur nesciunt totam vitae sed possimus blanditiis assumenda cum aperiam, atque sit ad sunt
            iusto saepe. Molestias, tenetur.
          </p>

          <HomeCarousel></HomeCarousel>

        </div>

        <div id='about'>
          <About></About>
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
