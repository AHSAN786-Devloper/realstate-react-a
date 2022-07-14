import React from 'react'
import FooterScreen from '../../CommonScreens/Footer/FooterScreen'
import HomeQuestion from '../HomeScreen/HomeQuestion'
import HomeSlider from '../HomeScreen/HomeSlider'
import ListingProperty from './ListingProperty'

const Listing = () => {
  return (
    <>
    <HomeSlider></HomeSlider>
    <ListingProperty></ListingProperty>
    <HomeQuestion></HomeQuestion>
    <FooterScreen></FooterScreen>
    </>
  )
}

export default Listing