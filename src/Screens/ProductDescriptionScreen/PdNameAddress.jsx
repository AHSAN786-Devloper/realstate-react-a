import React, { useState } from 'react'
import Slider from "react-slick";
import FooterScreen from '../../CommonScreens/Footer/FooterScreen';
import HomeQuestion from '../HomeScreen/HomeQuestion';
import HomeSlider from '../HomeScreen/HomeSlider';

const PdNameAddress = () => {
  const [toggle, setToggle] = useState(1);
  const [accord, setAccord] = useState(0);
  const i = 1;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>

      <section id="name-address">
        <div className="container">
          <div className="col-lg-12">
            <div className="row">
              {/* DESCRIPTION */}
              <div className="col-lg-8">
                <div className="col-lg-12">
                  <div className="pd-address">
                    <h4 className='mb-0 mt-3'>Harrison Apartments</h4>
                    <p> <img src="images/home-small-icon/location.png" alt="" /> Dhervannur, Jaipur</p>
                  </div>
                  <div className="pd-dec">
                    <div className="dec-title">
                      <h4>Description</h4>
                    </div>
                    <div className="dec-para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus hic minima quibusdam perferendis odio rem provident iure suscipit ut et animi repellat nobis officiis nemo ea ratione sapiente, tempore officia! Reprehenderit, facilis corrupti. Fugiat distinctio consequatur sunt nostrum, molestiae reiciendis repellendus, explicabo, reprehenderit nihil dolorum atque praesentium sequi at?
                      <br />
                      <br />
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsam amet atque inventore voluptas enim. Non nemo ea facilis sequi.
                    </div>
                  </div>
                </div>
                {/* Property Detail */}
                <div className="col-lg-12">
                  <div className="pd-dec">
                    <div className="dec-title">
                      <h4>Property Detail</h4>
                    </div>
                    <div className="property-details d-flex">
                      <div className="col-lg-6">
                        <div className="pd-details d-flex justify-content-around">
                          <p className='grey'>Property ID</p>
                          <p>HZ29</p>
                        </div>
                        <div className="pd-details d-flex justify-content-around">
                          <p className='grey'>Home Area</p>
                          <p>120 sqft</p>
                        </div>
                        <div className="pd-details d-flex justify-content-around">
                          <p className='grey'>Property ID</p>
                          <p>HZ29</p>
                        </div>
                        <div className="pd-details d-flex justify-content-around">
                          <p className='grey'>Home Area</p>
                          <p>120 sqft</p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="pd-details d-flex justify-content-around">
                          <p className='grey'>Property ID</p>
                          <p>HZ29</p>
                        </div>
                        <div className="pd-details d-flex justify-content-around">
                          <p className='grey'>Home Area</p>
                          <p>120 sqft</p>
                        </div>
                        <div className="pd-details d-flex justify-content-around">
                          <p className='grey'>Property ID</p>
                          <p>HZ29</p>
                        </div>
                        <div className="pd-details d-flex justify-content-around">
                          <p className='grey'>Home Area</p>
                          <p>120 sqft</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* f and f */}
                <div className="col-lg-12">
                  <div className="pd-dec">
                    <div className="dec-title">
                      <h4>Facts and Features</h4>
                    </div>
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="fnf d-flex col-lg-3">
                          <div className="fnf-img">
                            <img src="images/pro-dec/icon/1 (1).png" alt="" />
                          </div>
                          <div className="fnf-list">
                            <h5 className='mb-0'>Living Room</h5>
                            <small className='gery'>20 * 16 sq feet</small>
                          </div>
                        </div>
                        <div className="fnf d-flex col-lg-3">
                          <div className="fnf-img">
                            <img src="images/pro-dec/icon/1 (1).png" alt="" />
                          </div>
                          <div className="fnf-list">
                            <h5 className='mb-0'>Living Room</h5>
                            <small className='gery'>20 * 16 sq feet</small>
                          </div>
                        </div>
                        <div className="fnf d-flex col-lg-3">
                          <div className="fnf-img">
                            <img src="images/pro-dec/icon/1 (3).png" alt="" />
                          </div>
                          <div className="fnf-list">
                            <h5 className='mb-0'>Living Room</h5>
                            <small className='gery'>20 * 16 sq feet</small>
                          </div>
                        </div>
                        <div className="fnf d-flex col-lg-3">
                          <div className="fnf-img">
                            <img src="images/pro-dec/icon/1 (4).png" alt="" />
                          </div>
                          <div className="fnf-list">
                            <h5 className='mb-0'>Living Room</h5>
                            <small className='gery'>20 * 16 sq feet</small>
                          </div>
                        </div>
                        <div className="fnf d-flex col-lg-3">
                          <div className="fnf-img">
                            <img src="images/pro-dec/icon/1 (5).png" alt="" />
                          </div>
                          <div className="fnf-list">
                            <h5 className='mb-0'>Living Room</h5>
                            <small className='gery'>20 * 16 sq feet</small>
                          </div>
                        </div>
                        <div className="fnf d-flex col-lg-3">
                          <div className="fnf-img">
                            <img src="images/pro-dec/icon/1 (6).png" alt="" />
                          </div>
                          <div className="fnf-list">
                            <h5 className='mb-0'>Living Room</h5>
                            <small className='gery'>20 * 16 sq feet</small>
                          </div>
                        </div>
                        <div className="fnf d-flex col-lg-3">
                          <div className="fnf-img">
                            <img src="images/pro-dec/icon/1 (7).png" alt="" />
                          </div>
                          <div className="fnf-list">
                            <h5 className='mb-0'>Living Room</h5>
                            <small className='gery'>20 * 16 sq feet</small>
                          </div>
                        </div>
                        <div className="fnf d-flex col-lg-3">
                          <div className="fnf-img">
                            <img src="images/pro-dec/icon/1 (1).png" alt="" />
                          </div>
                          <div className="fnf-list">
                            <h5 className='mb-0'>Living Room</h5>
                            <small className='gery'>20 * 16 sq feet</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* IMAGE SLIDER */}
                <div className="col-lg-12">
                  <div className="pd-dec">
                    <div className="dec-title">
                      <h4>From our Gallery</h4>
                    </div>
                    <div className="col-lg-12">
                      <div className="row">
                        <Slider {...settings}>
                          <div className="gallery-img">
                            <img src="images/pd.png" alt="" />
                          </div>
                          <div className="gallery-img">
                            <img src="images/pd.png" alt="" />
                          </div>
                          <div className="gallery-img">
                            <img src="images/pd.png" alt="" />
                          </div>
                          <div className="gallery-img">
                            <img src="images/pd.png" alt="" />
                          </div>
                        </Slider>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Amenities */}
                <div className="col-lg-12">
                  <div className="pd-dec">
                    <div className="dec-title">
                      <h4>Amenities</h4>
                    </div>
                    <div className="amenities d-flex">
                      <div className="col-lg-4">
                        <div className="amenities-details">
                          <p mb-0 mt-2><input type="checkbox" checked /> Air Conditioning</p>
                          <p mb-0 mt-2><input type="checkbox" checked /> Air Conditioning</p>
                          <p mb-0 mt-2><input type="checkbox" checked /> Air Conditioning</p>
                          <p mb-0 mt-2><input type="checkbox" checked /> Air Conditioning</p>
                          <p mb-0 mt-2><input type="checkbox" checked /> Air Conditioning</p>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="amenities-details">
                          <p mb-0 mt-2><input type="checkbox" checked /> Air Conditioning</p>
                          <p mb-0 mt-2><input type="checkbox" checked /> Air Conditioning</p>
                          <p mb-0 mt-2><input type="checkbox" checked /> Air Conditioning</p>
                          <p mb-0 mt-2><input type="checkbox" checked /> Air Conditioning</p>
                          <p mb-0 mt-2><input type="checkbox" checked /> Air Conditioning</p>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="amenities-details">
                          <p mb-0 mt-2><input type="checkbox" checked /> Air Conditioning</p>
                          <p mb-0 mt-2><input type="checkbox" checked /> Air Conditioning</p>
                          <p mb-0 mt-2><input type="checkbox" checked /> Air Conditioning</p>
                          <p mb-0 mt-2><input type="checkbox" checked /> Air Conditioning</p>
                          <p mb-0 mt-2><input type="checkbox" checked /> Air Conditioning</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* location */}
                <div className="col-lg-12">
                  <div className="pd-dec">
                    <div className="dec-title">
                      <h4>Location</h4>
                    </div>
                    <div className="col-lg-12">
                      <div className="row">
                        <div>
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
                            width="600"
                            height="300"
                            style={{ border: "0" }}
                            allowfullscreen=""
                            loading="lazy"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* HOUSE MAP */}
                <div className="col-lg-12">
                  <div className="pd-dec">
                    <div className="dec-title">
                      <h4>Floor Plans</h4>
                    </div>
                    <div className="col-lg-12">
                      <div className="row">
                        <Slider {...settings}>
                          <div className="gallery-img">
                            <img src="images/pro-dec/CompositeLayer (10).png" alt="" />
                          </div>
                        </Slider>
                      </div>
                    </div>
                  </div>
                </div>
                {/* VIODO */}
                <div className="col-lg-12">
                  <div className="pd-dec">
                    <div className="dec-title">
                      <h4>Property Video</h4>
                    </div>
                    <div className="col-lg-12">
                      <div className="row">
                        <Slider {...settings}>
                          <div className="gallery-img">
                            <video width="600" height="300">
                              <source src="/video/messiermarathon.mp4" type="video/mp4" />
                            </video>
                          </div>
                        </Slider>
                      </div>
                    </div>
                  </div>
                </div>
                {/* QUESTIONS AND ANSWERS */}
                <div className="col-lg-12">
                  <div className="pd-dec">
                    <div className="dec-title">
                      <h4>Questions and Answers</h4>
                    </div>
                    <div className="col-lg-12">
                      <div className="row">
                        {toggle === 1 ? <><div>
                          <br />
                          <br />
                        </div>
                          <div className="faq">
                            <h4>Frequently asked questions</h4>
                            <div className="accordion">

                              <div className="accordion-item" key={i}>
                                <div className="accordion-item-header" onClick={() => { setAccord(1) }}>
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </div>
                                <div className="accordion-item-body" style={{ display: accord === i ? 'contents' : 'none' }}>
                                  <div className="accordion-item-body-content" >
                                    <div className="form-group row">
                                      <label className="col-sm-12 col-form-label">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus eos magnam tenetur, ullam nesciunt nihil porro alias vero sint iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat architecto ipsa at recusandae neque. Culpa dignissimos quidem dolores et?</label>
                                    </div>

                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item" key={i}>
                                <div className="accordion-item-header" onClick={() => { setAccord(2) }}>
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </div>
                                <div className="accordion-item-body" style={{ display: accord === i ? 'contents' : 'none' }}>
                                  <div className="accordion-item-body-content" >
                                    <div className="form-group row">
                                      <label className="col-sm-12 col-form-label">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus eos magnam tenetur, ullam nesciunt nihil porro alias vero sint iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat architecto ipsa at recusandae neque. Culpa dignissimos quidem dolores et?</label>
                                    </div>

                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item" key={i}>
                                <div className="accordion-item-header" onClick={() => { setAccord(3) }}>
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </div>
                                <div className="accordion-item-body" style={{ display: accord === i ? 'contents' : 'none' }}>
                                  <div className="accordion-item-body-content" >
                                    <div className="form-group row">
                                      <label className="col-sm-12 col-form-label">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus eos magnam tenetur, ullam nesciunt nihil porro alias vero sint iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat architecto ipsa at recusandae neque. Culpa dignissimos quidem dolores et?</label>
                                    </div>

                                  </div>
                                </div>
                              </div>

                            </div>
                          </div></> : <div></div>}
                      </div>
                    </div>
                  </div>
                </div>
                {/* related properties */}
                <div className="col-lg-12">
                  <div className="pd-dec">
                    <div className="dec-title">
                      <h4>Related Properties</h4>
                    </div>
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="latest-post">
                            <div className="latest-post-img">
                              <img src="images/image1.webp" alt="" />
                            </div>
                            <div className="latest-post-price d-flex justify-content-between mt-3">
                              <h5 className='mb-0'>₹ 22,999</h5>
                              <img src="images/home-small-icon/sell.png" alt="rent" />
                            </div>
                            <div className="latest-post-name">
                              <h5 className='m-0'>Nainagiri apartment</h5>
                            </div>
                            <div className="latest-post-location d-flex">
                              <p className='m-0'>Lashkar, Gwalior</p>
                            </div>
                            <div className="latest-post-extra d-flex">
                              <p className='m-0'><span><img src="images/home-small-icon/1 (1).png" alt="" /></span> 5</p>
                              <p className='m-0'><span><img src="images/home-small-icon/1 (2).png" alt="" /></span> 3</p>
                              <p className='m-0'><span><img src="images/home-small-icon/1 (3).png" alt="" /></span> 2500</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="latest-post">
                            <div className="latest-post-img">
                              <img src="images/image1.webp" alt="" />
                            </div>
                            <div className="latest-post-price d-flex justify-content-between mt-3">
                              <h5 className='mb-0'>₹ 22,999</h5>
                              <img src="images/home-small-icon/sell.png" alt="rent" />
                            </div>
                            <div className="latest-post-name">
                              <h5 className='m-0'>Nainagiri apartment</h5>
                            </div>
                            <div className="latest-post-location d-flex">
                              <p className='m-0'>Lashkar, Gwalior</p>
                            </div>
                            <div className="latest-post-extra d-flex">
                              <p className='m-0'><span><img src="images/home-small-icon/1 (1).png" alt="" /></span> 5</p>
                              <p className='m-0'><span><img src="images/home-small-icon/1 (2).png" alt="" /></span> 3</p>
                              <p className='m-0'><span><img src="images/home-small-icon/1 (3).png" alt="" /></span> 2500</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="latest-post">
                            <div className="latest-post-img">
                              <img src="images/image1.webp" alt="" />
                            </div>
                            <div className="latest-post-price d-flex justify-content-between mt-3">
                              <h5 className='mb-0'>₹ 22,999</h5>
                              <img src="images/home-small-icon/sell.png" alt="rent" />
                            </div>
                            <div className="latest-post-name">
                              <h5 className='m-0'>Nainagiri apartment</h5>
                            </div>
                            <div className="latest-post-location d-flex">
                              <p className='m-0'>Lashkar, Gwalior</p>
                            </div>
                            <div className="latest-post-extra d-flex">
                              <p className='m-0'><span><img src="images/home-small-icon/1 (1).png" alt="" /></span> 5</p>
                              <p className='m-0'><span><img src="images/home-small-icon/1 (2).png" alt="" /></span> 3</p>
                              <p className='m-0'><span><img src="images/home-small-icon/1 (3).png" alt="" /></span> 2500</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>





              <div className="col-lg-4 right-side">
                <div className="col-lg-10 pt-3 pb-3">
                  <div className="contact-card">
                    <div className="contact-card-img">
                      <img src="images/pro-dec/1.png" className='img-fluid' alt="" />
                    </div>
                    <div className="contact-card-name">
                      <h5 className='mb-0 mt-4'>Lorem ipsum dolor sit.</h5>
                    </div>
                    <div className="contact-card-degree">
                      <small>Lorem, ipsum dolor.</small>
                    </div>
                    <div className="contact-card-review mt-2 mb-3">
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>

                      <small className='grey'> (5 Review)</small>
                    </div>
                    <div className="contact-card-para">
                      <small className='grey'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus commodi natus soluta unde eligendi minima?
                      </small>
                    </div>
                    <div className="contact-card-btn">
                      <button className="btn btn-success red red-btn" style={{ padding: "0.375rem 1.75rem" }} type="submit">Contact</button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-10 pt-3 pb-3">
                  <div className="contact-card">
                    <div className="dec-title col-lg-12">
                      <h4 className='mb-2'>Enquiry Form</h4>
                    </div>
                    <input type="text" class="form-control right-contact" placeholder='Your Name' />
                    <input type="email" class="form-control right-contact" placeholder='Your Email' />
                    <input type="phone" class="form-control right-contact" placeholder='Your Phone' />
                    <textarea name="" class="form-control right-contact" id="" cols="30" rows="10" placeholder='Write Message...'></textarea>
                  </div>
                </div>

                <div className="col-lg-10 pt-3 pb-3">
                  <div className="contact-card">
                    <div className="dec-title col-lg-12">
                      <h4 className='mb-2'>Top Rated Product</h4>
                    </div>
                    <div className="trp d-flex">
                      <div className="trp-img">
                        <img src="images/property/1 (1).png" alt="" className="img-fluid trp-img-img" />
                      </div>
                      <div className="trp-content">
                        <div className="trp-stars">
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                        </div>
                        <div className="trp-name">
                          <p className='mb-0'>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="trp-price">
                          <small className="grey">Rs 30000</small>
                        </div>
                      </div>
                    </div>
                    <div className="trp d-flex">
                      <div className="trp-img">
                        <img src="images/property/1 (1).png" alt="" className="img-fluid trp-img-img" />
                      </div>
                      <div className="trp-content">
                        <div className="trp-stars">
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                        </div>
                        <div className="trp-name">
                          <p className='mb-0'>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="trp-price">
                          <small className="grey">Rs 30000</small>
                        </div>
                      </div>
                    </div>
                    <div className="trp d-flex">
                      <div className="trp-img">
                        <img src="images/property/1 (1).png" alt="" className="img-fluid trp-img-img" />
                      </div>
                      <div className="trp-content">
                        <div className="trp-stars">
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                        </div>
                        <div className="trp-name">
                          <p className='mb-0'>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="trp-price">
                          <small className="grey">Rs 30000</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-10 pt-3 pb-3">
                  <div className="contact-card">
                    <div className="dec-title col-lg-12">
                      <h4 className='mb-2'>Top Categories</h4>
                    </div>
                    <div className="top-category col-lg-12 d-flex">
                      <p className="top-category-name col-lg-8 mb-0 mt-3">Lorem, ipsum.</p>
                      <p className="top-category-number col-lg-4 mb-0 mt-3">(10)</p>
                    </div>
                    <div className="top-category col-lg-12 d-flex">
                      <p className="top-category-name col-lg-8 mb-0 mt-3">Lorem, ipsum.</p>
                      <p className="top-category-number col-lg-4 mb-0 mt-3">(10)</p>
                    </div>
                    <div className="top-category col-lg-12 d-flex">
                      <p className="top-category-name col-lg-8 mb-0 mt-3">Lorem, ipsum.</p>
                      <p className="top-category-number col-lg-4 mb-0 mt-3">(10)</p>
                    </div>
                    <div className="top-category col-lg-12 d-flex">
                      <p className="top-category-name col-lg-8 mb-0 mt-3">Lorem, ipsum.</p>
                      <p className="top-category-number col-lg-4 mb-0 mt-3">(10)</p>
                    </div>
                    <div className="top-category col-lg-12 d-flex">
                      <p className="top-category-name col-lg-8 mb-0 mt-3">Lorem, ipsum.</p>
                      <p className="top-category-number col-lg-4 mb-0 mt-3">(10)</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-10 pt-3 pb-3">
                  <div className="contact-card">
                    <div className="dec-title col-lg-12">
                      <h4 className='mb-2'>Top Properties</h4>
                    </div>
                    <div className="col-lg-12 p-2">
                      <div className="latest-post">
                        <div className="latest-post-img">
                          <img src="images/image1.webp" alt="" />
                        </div>
                        <div className="latest-post-price d-flex justify-content-between mt-3">
                          <h5 className='mb-0'>₹ 22,999</h5>
                          <img src="images/home-small-icon/sell.png" alt="rent" />
                        </div>
                        <div className="latest-post-name">
                          <h5 className='m-0'>Nainagiri apartment</h5>
                        </div>
                        <div className="latest-post-location d-flex">
                          <p className='m-0'>Lashkar, Gwalior</p>
                        </div>
                        <div className="latest-post-extra d-flex">
                          <p className='m-0'><span><img src="images/home-small-icon/1 (1).png" alt="" /></span> 5</p>
                          <p className='m-0'><span><img src="images/home-small-icon/1 (2).png" alt="" /></span> 3</p>
                          <p className='m-0'><span><img src="images/home-small-icon/1 (3).png" alt="" /></span> 2500</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-10 pt-3 pb-3">
                  <div className="contact-card">
                    <div className="dec-title col-lg-12">
                      <h4 className='mb-2'>Latest Blogs</h4>
                    </div>
                    <div className="trp d-flex col-lg-12">
                      <div className="trp-img col-lg-3">
                        <img src="images/property/1 (1).png" alt="" className="img-fluid trp-img-img" />
                      </div>
                      <div className="trp-content col-lg-9">
                        <div className="trp-name">
                          <p className='mb-0'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="trp-price">
                          <small className="grey">May 19, 2021</small>
                        </div>
                      </div>
                    </div>
                    <div className="trp d-flex col-lg-12">
                      <div className="trp-img col-lg-3">
                        <img src="images/property/1 (1).png" alt="" className="img-fluid trp-img-img" />
                      </div>
                      <div className="trp-content col-lg-9">
                        <div className="trp-name">
                          <p className='mb-0'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="trp-price">
                          <small className="grey">May 19, 2021</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* question */}
        <HomeQuestion></HomeQuestion>
        {/* footer */}
        <FooterScreen></FooterScreen>
      </section>
    </>
  )
}

export default PdNameAddress