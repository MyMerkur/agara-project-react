import React from 'react';
import { Link } from 'react-router-dom';
import '../style/style.css'
export default function MainPage() {
  return (
    <div id='MainPage'>
        <div id='MainPage_Content'>
                <Link to="/home">
                    <img src="/images/logo.png" alt="Logo" />
                </Link>
        </div>
       
    </div>
  );
}

