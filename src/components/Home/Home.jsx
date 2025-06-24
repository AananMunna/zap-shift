import React from 'react';
import Hero from '../Shared/Hero/Hero';
import HowItWorks from '../Shared/HowItWorks/HowItWorks';
import OurServices from '../Shared/OurServices/OurServices';
import ClientSlider from '../Shared/ClientSlider/ClientSlider';
import TrackingFeatures from '../Shared/TrackingFeatures/TrackingFeatures';
import PrioritySection from '../Shared/PrioritySection/PrioritySection';
import TestimonialSlider from '../Shared/TestimonialSlider/TestimonialSlider';
import FAQSection from '../Shared/FAQSection/FAQSection';

const Home = () => {
    return (
        <div className='bg-[#F3F5F6]'>
            <Hero></Hero>
            <HowItWorks></HowItWorks>
            <OurServices></OurServices>
            <ClientSlider></ClientSlider>
            <TrackingFeatures></TrackingFeatures>
            <PrioritySection></PrioritySection>
            <TestimonialSlider></TestimonialSlider>
            <FAQSection></FAQSection>
        </div>
    );
};

export default Home;