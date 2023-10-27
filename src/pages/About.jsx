import React from 'react';
import { Image,Box } from '@chakra-ui/react'
export default function About() {
    return (
        <div id='about_content'>
            <h1>Hakkımızda</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptates
                cumque quis dolor repellendus excepturi qui sequi sed vel delectus, eaque
                deserunt recusandae corporis earum ullam quaerat a temporibus mollitia modi
                non eum veniam! Officia, quisquam nemo deserunt quia mollitia alias, illo
                incidunt doloremque ipsam neque necessitatibus quaerat, ipsa unde tenetur
                qui perferendis voluptatibus. Eos possimus adipisci vitae facere architecto?
            </p>
            <Box id='box' boxSize='sm'>
                <Image src='./images/cafe_images/323309320_1157677601550675_1092955125058651559_n.jpg' alt='cafeImage' />
            </Box>
        </div>
    );
}
