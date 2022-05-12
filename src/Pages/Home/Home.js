import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Banner2 from './Banner2';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Banner2></Banner2>
            <MakeAppoinment></MakeAppoinment>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div >
    );
};

export default Home;