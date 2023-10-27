import React from 'react';
import '../style/style.css'
export default function Footer() {
    return (
        <footer>
            <div className='footerItemsContainer'>
                <h1>Sosyal Medya</h1>
                <ul>
                    <li>Sosyal Medya</li>
                    <li>Sosyal Medya</li>
                    <li>Sosyal Medya</li>
                </ul>
            </div>

            <div className='footerItemsContainer'>
                <h1>Menü</h1>
                <ul>
                    <li>Ana Yemekler</li>
                    <li>Tatlılar</li>
                    <li>içecekler</li>
                    <li>Aparetifler</li>
                </ul>

            </div>


            <div className='footerItemsContainer'>
                <h1>İletişim</h1>
                <ul>
                    <li>Halilefendi, Kahramanlar Cd. No:38, 75000 Merkez/Ardahan</li>
                    <li>0544 275 19 62</li>
                    <li>agara@icloud.com</li>
                </ul>
            </div>

        </footer>
    );
}
