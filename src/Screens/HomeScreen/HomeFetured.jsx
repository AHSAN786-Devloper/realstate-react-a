import React from 'react'
import Slider from "react-slick";


const HomeFetured = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section id="home-latest" className='pb-4'>
                <div className="container">
                    <div className="title padding-3">
                        <h5 className='text-center m-0 green'>Featured</h5>
                        <h3 className='text-center m-0'>Best Property Listing</h3>
                        <p className='text-center m-0 grey'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi eius commodi quibusdam assumenda amet illo.</p>
                    </div>
                    <div className="col-lg-12">
                        <div className="row">
                            <Slider {...settings}>
                                <div className="col-lg-3 p-2">
                                    <div className="latest-post">
                                        <div className="latest-post-img">
                                            <img src="images/property/1 (1).png" alt="" />
                                        </div>
                                        <div className="latest-post-price d-flex justify-content-between mt-3">
                                            <h5 className='mb-0'>₹ 22,999</h5>
                                            <img src="images/home-small-icon/sell.png" alt="rent" />
                                        </div>
                                        <div className="latest-post-name">
                                            <h5 className='m-0'>Nainagiri apartment</h5>
                                        </div>
                                        <div className="latest-post-location">
                                            <p className='m-0'>Lashkar, Gwalior</p>
                                        </div>
                                        <div className="latest-post-extra d-flex">
                                            <div>
                                                <img src="images/home-small-icon/1 (1).png" alt="" />
                                                <p className='m-0'> 5</p>
                                            </div>
                                            <div>
                                                <img src="images/home-small-icon/1 (2).png" alt="" />
                                                <p className='m-0'> 3</p>
                                            </div>
                                            <div>
                                                <img src="images/home-small-icon/1 (3).png" alt="" />
                                                <p className='m-0'> 2500</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 p-2">
                                    <div className="latest-post">
                                        <div className="latest-post-img">
                                            <img src="images/property/1 (2).png" alt="" />
                                        </div>
                                        <div className="latest-post-price d-flex justify-content-between mt-3">
                                            <h5 className='mb-0'>₹ 22,999</h5>
                                            <img src="images/home-small-icon/sell.png" alt="rent" />
                                        </div>
                                        <div className="latest-post-name">
                                            <h5 className='m-0'>Nainagiri apartment</h5>
                                        </div>
                                        <div className="latest-post-location">
                                            <p className='m-0'>Lashkar, Gwalior</p>
                                        </div>
                                        <div className="latest-post-extra d-flex">
                                            <div>
                                                <img src="images/home-small-icon/1 (1).png" alt="" />
                                                <p className='m-0'> 5</p>
                                            </div>
                                            <div>
                                                <img src="images/home-small-icon/1 (2).png" alt="" />
                                                <p className='m-0'> 3</p>
                                            </div>
                                            <div>
                                                <img src="images/home-small-icon/1 (3).png" alt="" />
                                                <p className='m-0'> 2500</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 p-2">
                                    <div className="latest-post">
                                        <div className="latest-post-img">
                                            <img src="images/property/1 (3).png" alt="" />
                                        </div>
                                        <div className="latest-post-price d-flex justify-content-between mt-3">
                                            <h5 className='mb-0'>₹ 22,999</h5>
                                            <img src="images/home-small-icon/sell.png" alt="rent" />
                                        </div>
                                        <div className="latest-post-name">
                                            <h5 className='m-0'>Nainagiri apartment</h5>
                                        </div>
                                        <div className="latest-post-location">
                                            <p className='m-0'>Lashkar, Gwalior</p>
                                        </div>
                                        <div className="latest-post-extra d-flex">
                                            <div>
                                                <img src="images/home-small-icon/1 (1).png" alt="" />
                                                <p className='m-0'> 5</p>
                                            </div>
                                            <div>
                                                <img src="images/home-small-icon/1 (2).png" alt="" />
                                                <p className='m-0'> 3</p>
                                            </div>
                                            <div>
                                                <img src="images/home-small-icon/1 (3).png" alt="" />
                                                <p className='m-0'> 2500</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 p-2">
                                    <div className="latest-post">
                                        <div className="latest-post-img">
                                            <img src="images/property/1 (4).png" alt="" />
                                        </div>
                                        <div className="latest-post-price d-flex justify-content-between mt-3">
                                            <h5 className='mb-0'>₹ 22,999</h5>
                                            <img src="images/home-small-icon/sell.png" alt="rent" />
                                        </div>
                                        <div className="latest-post-name">
                                            <h5 className='m-0'>Nainagiri apartment</h5>
                                        </div>
                                        <div className="latest-post-location">
                                            <p className='m-0'>Lashkar, Gwalior</p>
                                        </div>
                                        <div className="latest-post-extra d-flex">
                                            <div>
                                                <img src="images/home-small-icon/1 (1).png" alt="" />
                                                <p className='m-0'> 5</p>
                                            </div>
                                            <div>
                                                <img src="images/home-small-icon/1 (2).png" alt="" />
                                                <p className='m-0'> 3</p>
                                            </div>
                                            <div>
                                                <img src="images/home-small-icon/1 (3).png" alt="" />
                                                <p className='m-0'> 2500</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 p-2">
                                    <div className="latest-post">
                                        <div className="latest-post-img">
                                            <img src="images/property/1 (5).png" alt="" />
                                        </div>
                                        <div className="latest-post-price d-flex justify-content-between mt-3">
                                            <h5 className='mb-0'>₹ 22,999</h5>
                                            <img src="images/home-small-icon/sell.png" alt="rent" />
                                        </div>
                                        <div className="latest-post-name">
                                            <h5 className='m-0'>Nainagiri apartment</h5>
                                        </div>
                                        <div className="latest-post-location">
                                            <p className='m-0'>Lashkar, Gwalior</p>
                                        </div>
                                        <div className="latest-post-extra d-flex">
                                            <div>
                                                <img src="images/home-small-icon/1 (1).png" alt="" />
                                                <p className='m-0'> 5</p>
                                            </div>
                                            <div>
                                                <img src="images/home-small-icon/1 (2).png" alt="" />
                                                <p className='m-0'> 3</p>
                                            </div>
                                            <div>
                                                <img src="images/home-small-icon/1 (3).png" alt="" />
                                                <p className='m-0'> 2500</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
            <section id="home-latest" className='pb-4'>
                <div className="container">
                    <div className="col-lg-12">
                        <div className="row">
                            <Slider {...settings}>
                            <div className="col-lg-3 p-2">
                                    <div className="latest-post">
                                        <div className="latest-post-img">
                                            <img src="images/property/1 (1).png" alt="" />
                                        </div>
                                        <div className="latest-post-price d-flex justify-content-between mt-3">
                                            <h5 className='mb-0'>₹ 22,999</h5>
                                            <img src="images/home-small-icon/sell.png" alt="rent" />
                                        </div>
                                        <div className="latest-post-name">
                                            <h5 className='m-0'>Nainagiri apartment</h5>
                                        </div>
                                        <div className="latest-post-location">
                                            <p className='m-0'>Lashkar, Gwalior</p>
                                        </div>
                                        <div className="latest-post-extra d-flex">
                                            <div>
                                                <img src="images/home-small-icon/1 (1).png" alt="" />
                                                <p className='m-0'> 5</p>
                                            </div>
                                            <div>
                                                <img src="images/home-small-icon/1 (2).png" alt="" />
                                                <p className='m-0'> 3</p>
                                            </div>
                                            <div>
                                                <img src="images/home-small-icon/1 (3).png" alt="" />
                                                <p className='m-0'> 2500</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 p-2">
                                    <div className="latest-post">
                                        <div className="latest-post-img">
                                            <img src="images/property/1 (2).png" alt="" />
                                        </div>
                                        <div className="latest-post-price d-flex justify-content-between mt-3">
                                            <h5 className='mb-0'>₹ 22,999</h5>
                                            <img src="images/home-small-icon/sell.png" alt="rent" />
                                        </div>
                                        <div className="latest-post-name">
                                            <h5 className='m-0'>Nainagiri apartment</h5>
                                        </div>
                                        <div className="latest-post-location">
                                            <p className='m-0'>Lashkar, Gwalior</p>
                                        </div>
                                        <div className="latest-post-extra d-flex">
                                            <div>
                                                <img src="images/home-small-icon/1 (1).png" alt="" />
                                                <p className='m-0'> 5</p>
                                            </div>
                                            <div>
                                                <img src="images/home-small-icon/1 (2).png" alt="" />
                                                <p className='m-0'> 3</p>
                                            </div>
                                            <div>
                                                <img src="images/home-small-icon/1 (3).png" alt="" />
                                                <p className='m-0'> 2500</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 p-2">
                                    <div className="latest-post">
                                        <div className="latest-post-img">
                                            <img src="images/property/1 (3).png" alt="" />
                                        </div>
                                        <div className="latest-post-price d-flex justify-content-between mt-3">
                                            <h5 className='mb-0'>₹ 22,999</h5>
                                            <img src="images/home-small-icon/sell.png" alt="rent" />
                                        </div>
                                        <div className="latest-post-name">
                                            <h5 className='m-0'>Nainagiri apartment</h5>
                                        </div>
                                        <div className="latest-post-location">
                                            <p className='m-0'>Lashkar, Gwalior</p>
                                        </div>
                                        <div className="latest-post-extra d-flex">
                                            <div>
                                                <img src="images/home-small-icon/1 (1).png" alt="" />
                                                <p className='m-0'> 5</p>
                                            </div>
                                            <div>
                                                <img src="images/home-small-icon/1 (2).png" alt="" />
                                                <p className='m-0'> 3</p>
                                            </div>
                                            <div>
                                                <img src="images/home-small-icon/1 (3).png" alt="" />
                                                <p className='m-0'> 2500</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 p-2">
                                    <div className="latest-post">
                                        <div className="latest-post-img">
                                            <img src="images/property/1 (4).png" alt="" />
                                        </div>
                                        <div className="latest-post-price d-flex justify-content-between mt-3">
                                            <h5 className='mb-0'>₹ 22,999</h5>
                                            <img src="images/home-small-icon/sell.png" alt="rent" />
                                        </div>
                                        <div className="latest-post-name">
                                            <h5 className='m-0'>Nainagiri apartment</h5>
                                        </div>
                                        <div className="latest-post-location">
                                            <p className='m-0'>Lashkar, Gwalior</p>
                                        </div>
                                        <div className="latest-post-extra d-flex">
                                            <div>
                                                <img src="images/home-small-icon/1 (1).png" alt="" />
                                                <p className='m-0'> 5</p>
                                            </div>
                                            <div>
                                                <img src="images/home-small-icon/1 (2).png" alt="" />
                                                <p className='m-0'> 3</p>
                                            </div>
                                            <div>
                                                <img src="images/home-small-icon/1 (3).png" alt="" />
                                                <p className='m-0'> 2500</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 p-2">
                                    <div className="latest-post">
                                        <div className="latest-post-img">
                                            <img src="images/property/1 (5).png" alt="" />
                                        </div>
                                        <div className="latest-post-price d-flex justify-content-between mt-3">
                                            <h5 className='mb-0'>₹ 22,999</h5>
                                            <img src="images/home-small-icon/sell.png" alt="rent" />
                                        </div>
                                        <div className="latest-post-name">
                                            <h5 className='m-0'>Nainagiri apartment</h5>
                                        </div>
                                        <div className="latest-post-location">
                                            <p className='m-0'>Lashkar, Gwalior</p>
                                        </div>
                                        <div className="latest-post-extra d-flex">
                                            <div>
                                                <img src="images/home-small-icon/1 (1).png" alt="" />
                                                <p className='m-0'> 5</p>
                                            </div>
                                            <div>
                                                <img src="images/home-small-icon/1 (2).png" alt="" />
                                                <p className='m-0'> 3</p>
                                            </div>
                                            <div>
                                                <img src="images/home-small-icon/1 (3).png" alt="" />
                                                <p className='m-0'> 2500</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeFetured