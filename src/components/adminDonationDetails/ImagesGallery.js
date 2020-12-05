import React, { useEffect } from 'react';

const ImagesGallery = (images) => {
    const [selectedImage, setSelectedImage] = React.useState('');

    useEffect(() => {
        function getInitialImage() {
            setSelectedImage(images.images[0]);
        }
        if (images.images.length) getInitialImage();
    }, []);

    function handleImageSelect(image) {
        setSelectedImage(image);
    }

    return (
        <section className='imgs-gallery-container'>
            <img className='imgs-gallery-selected' src={require(`../../${selectedImage}`)} alt='item' />
            <ul className='imgs-gallery-roll'>
                {images && images.images.map((image) => (
                    <img key={image} className='imgs-gallery-roll-item' onClick={() => handleImageSelect(image)} src={require(`../../${image}`)} alt='item' />
                ))}
            </ul>
        </section>
    );
}

export default ImagesGallery;