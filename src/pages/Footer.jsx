import React from 'react';
import '../style/style.css'
import { PhoneIcon,EmailIcon,TriangleDownIcon } from '@chakra-ui/icons';
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
            
                <h1>İletişim</h1>
                <ul>
                    <li> <TriangleDownIcon/> Halilefendi, Kahramanlar Cd. No:38, 75000 Merkez/Ardahan</li>

                    <li> <PhoneIcon/> 0544 275 19 62</li>
                    <li> <EmailIcon/> agara@icloud.com</li>
                </ul>
            </div>

        </footer>
    );
}
