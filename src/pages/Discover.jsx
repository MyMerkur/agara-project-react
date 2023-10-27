import React from 'react';
import { useState, useEffect } from 'react';
import {
    Image,
    Accordion,
    AccordionItem,
    AccordionButton,
    Box,
    AccordionIcon,
    AccordionPanel

} from '@chakra-ui/react';
export default function Discover() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('data/discoverData.json')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Veri çekme hatası:', error);
                setLoading(false);
            });
    }, [])


    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <h1>Ardahan'ı Keşfet</h1>
            {data.map((item) => (
                <div key={item.id}>
                    <Accordion allowToggle>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        {item.title}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel textAlign={'left'} display={'flex'} pb={4}>
                                {item.content}
                                <Image
                                    boxSize='200px'
                                    fit='cover'
                                    src={item.src}
                                />
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
            ))}
        </div>
    );
}
