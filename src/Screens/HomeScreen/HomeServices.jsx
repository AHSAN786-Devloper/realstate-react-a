import React from 'react'

const HomeServices = () => {
    return (
        <>
            <section id="home-latest " className='pb-3 grey-bg pt-3 mb-5'>
                <div className="container">
                    <div className="title padding-3">
                        <h3 className='text-center m-0'>Our Services</h3>
                        <p className='text-center m-0 grey'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi eius commodi quibusdam assumenda amet illo.</p>
                    </div>
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="services-list">
                                    <ul>
                                        <li>Drone Shooting</li>
                                        <li>HD Photoshooting</li>
                                        <li>Virtual walkthrough</li>
                                        <li>Legal Services</li>
                                        <li>Digital Marketing</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="right-img">
                                            <img src="/images/drone.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="service-para">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique numquam iste consequatur, mollitia qui quisquam voluptas veritatis reiciendis? Commodi laudantium porro, nemo numquam molestiae accusantium inventore quibusdam repellat et quasi ratione modi quidem, officiis accusamus. Nemo cum, hic placeat suscipit harum officiis! Quisquam quo nulla velit voluptatem non consequatur veritatis.
                                        </div>
                                        <div className="services-button">
                                            <button className="btn w-100 btn-success red red-btn" type="submit">Learn More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeServices