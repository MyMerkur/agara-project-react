import React from 'react';
import { Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';


export default function HomeCarousel() {

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleImageOpacity = () => {
        const fadeStart = 900;
        const fadeEnd = 500;

        const opacity = Math.min(
            Math.max((scrollPosition - fadeStart) / (fadeEnd - fadeStart), 0),
            1
        );

        return opacity;
    };






    return (
        <div className='innerHistory'>
        <div className='homeIntro'>
                    <h1>Hakkımızda</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis explicabo dolore,
                        ullam est, nostrum vitae velit provident animi possimus iste labore magnam enim
                        error molestias natus beatae, nisi dolores neque. Aut veniam quod ipsa id odio in,
                        quisquam ipsum? Omnis praesentium dignissimos cum, placeat esse amet cumque quibusdam autem.
                        Totam, consequuntur voluptatem! Voluptate quis eum similique exercitationem aut magnam, repellat,
                        veniam porro, qui non quae accusamus laborum error nulla quaerat animi cum natus beatae asperiores
                        reprehenderit magni? Ad non assumenda vero inventore reiciendis vitae tempore laboriosam! Nam culpa id,
                        eligendi nisi minus, quibusdam nostrum, corporis repellat ea provident vitae cum modi ut. Animi molestias
                        reprehenderit magnam, alias fugit, atque eveniet quis est hic cupiditate temporibus non. Magnam, adipisci
                        eveniet saepe quaerat nam ea aut a molestiae amet ipsum ipsam ab ullam et eaque recusandae facere quod numquam
                        odit dolores reiciendis! Cumque, quisquam aspernatur. Totam quia quidem maiores, id consectetur laborum.
                    </p>
        </div>
            
            <Image
                src="https://hdresim.net/resimler/r7/ardahan(3).jpg"
                alt="city"
                width={'70%'}
                style={{ opacity: handleImageOpacity() }}
            />
        </div>
    );
}
