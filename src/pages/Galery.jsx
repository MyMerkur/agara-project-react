import React, { useState, useEffect } from 'react';
import '../style/style.css'
import { Image } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react';
import { TriangleDownIcon,TriangleUpIcon } from '@chakra-ui/icons';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    useDisclosure
} from '@chakra-ui/react'

export default function Galery() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [visibleImages, setVisibleImages] = useState(6);
    const [loadLess, setLoadLess] = useState(false);

    useEffect(() => {
        fetch('data/galeryData.json')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setFilteredData(data.slice(0, visibleImages));
                setLoading(false);
            })
            .catch((error) => {
                console.log("Veri Yükleme Hatası", error);
                setLoading(false);
            });
    }, [visibleImages]);

    const filterCategory = (category) => {
        if (category === 'all') {
            setFilteredData(data.slice(0, visibleImages));
        } else {
            const filteredData = data.filter((item) => item.category === category);
            setFilteredData(filteredData.slice(0, visibleImages));
        }
    };

    const loadMoreImages = () => {
        setVisibleImages(visibleImages + 6);
        setFilteredData(data.slice(0, visibleImages + 6));
        setLoadLess(true);
    };

    const loadLessImages = () => {
        setVisibleImages(6);
        setFilteredData(data.slice(0, 6));
        setLoadLess(false);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div id='galeryItem'>
            <ul>
                <li onClick={() => filterCategory('all')}>Tüm Galeri</li>
                <li onClick={() => filterCategory('cafe')}>Cafe</li>
                <li onClick={() => filterCategory('meals')}>Yemekler</li>
                <li onClick={() => filterCategory('deserts')}>Tatlılar</li>
                <li onClick={() => filterCategory('drinks')}>İçecekler</li>
            </ul>
            <div id='galeryImages'>
                {filteredData.map((item) => (
                    <div key={item.id}>
                        <Box onClick={() => {
                            setSelectedImage(item);
                            onOpen();
                        }} boxSize='sm'>
                            <Image src={item.src} alt={item.alt} />
                        </Box>
                    </div>
                ))}
            </div>
            {filteredData.length < data.length && (
                <div id='moreButtons'>
                    <button
                        onClick={loadMoreImages}
                        style={{ display: filteredData.length === visibleImages ? 'block' : 'none' }}
                    >
                       Daha Fazla <TriangleDownIcon/>
                    </button>
                    {loadLess && (
                        <button onClick={loadLessImages}>Daha Az <TriangleUpIcon/></button>
                    )}
                </div>
            )}
            <Modal  isOpen={isOpen} onClose={onClose}>
                <ModalOverlay opacity={0} />
                <ModalContent  boxShadow="none" backgroundColor="transparent">
                    <ModalBody padding={0}>
                        {selectedImage && (
                            <Box boxSize='xl'>
                                <Image
                                 src={selectedImage.src} 
                                 alt={selectedImage.alt}
                                 style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                                  />
                            </Box>
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
}
