import React from 'react'
import FooterScreen from '../../CommonScreens/Footer/FooterScreen'
import ProductDescription from '../ProductDescriptionScreen/ProductDescription'
import HomeAboutus from './HomeAboutus'
import HomeBizCard from './HomeBizCard'
import HomeBrand from './HomeBrand'
import HomeFetured from './HomeFetured'
import HomeGallery from './HomeGallery'
import HomeHeatMap from './HomeHeatMap'
import HomeLatest from './HomeLatest'
import HomePropertyService from './HomePropertyService'
import HomeQuestion from './HomeQuestion'
import HomeServices from './HomeServices'
import HomeSlider from './HomeSlider'
import HomeSliderSlider from './HomeSliderSlider'
import HomeTestimonial from './HomeTestimonial'

const Home = () => {
    return (
        <>
            <HomeSlider></HomeSlider>
            <HomeSliderSlider></HomeSliderSlider>
            <HomePropertyService></HomePropertyService>
            <HomeFetured></HomeFetured>
            <HomeAboutus></HomeAboutus>
            <HomeBrand></HomeBrand>
            <HomeBizCard></HomeBizCard>
            <HomeTestimonial></HomeTestimonial>
            <HomeGallery></HomeGallery>
            <HomeServices></HomeServices>
            <HomeHeatMap></HomeHeatMap>
            <HomeLatest></HomeLatest>
            <HomeQuestion></HomeQuestion>
            <FooterScreen></FooterScreen>
        </>
    )
}

export default Home