import React from 'react'
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const HomeTestimonial = () => {
    return (
        <>
            <section id="home-latest " className='pb-5 grey-bg pt-5'>
                <div className="container">
                    <div className="title padding-3">
                        <h5 className='text-center m-0 green'>Tastimonial</h5>
                        <h3 className='text-center m-0'>What They Are Saying</h3>
                        <p className='text-center m-0 grey'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi eius commodi quibusdam assumenda amet illo.</p>
                    </div>
                    <div className="col-lg-12">
                        <div className="row">
                            <AutoplaySlider
                                play={true}
                                bullets={false}
                                cancelOnInteraction={false} // should stop playing on user interaction
                                interval={3000}
                            >
                                <div className="home-testi d-flex">
                                    <div className="col-lg-4">
                                        <img src="images/home-testi/Group 45.png" alt="" />
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="testi-para">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis illo aliquid nihil. Culpa, aliquid saepe excepturi repudiandae commodi voluptates hic magnam assumenda quas ipsam nesciunt neque omnis illum? Vero quae ratione dolorum atque? Corrupti debitis a, ducimus ipsa veniam maxime neque ad eveniet nisi deleniti unde officiis at voluptatum quos? Natus similique tempore.
                                        </div>
                                        <div className="title">
                                            <h3 className='mb-0 mt-4'>Diana Lansdovne</h3>
                                            <p className='mb-0'>CEO of Themeyou</p>
                                        </div>
                                    </div>
                                </div>
                            </AutoplaySlider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeTestimonial