import React from 'react';
import BannerAbout from '../../AboutUs/BannerAbout/BannerAbout';
import ProductCard from '../ProductCard/ProductCard';

const Product = () => {
    return (
        <div className='bg-[#FBFFED]'>
            <BannerAbout img={'https://i.ibb.co/SPRVTqv/markus-spiske-ZKNs-Vqb-RSPE-unsplash.jpg'} title={'Our Products'}/>
            <ProductCard/>
        </div>
    );
};

export default Product;