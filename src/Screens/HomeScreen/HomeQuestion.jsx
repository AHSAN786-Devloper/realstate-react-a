import React from 'react'

const HomeQuestion = () => {
    return (
        <>
            <section id="home-latest " className='pb-3 pt-3 mb-5'>
                <div className="container">
                    <div className="title padding-3">
                        <h3 className='text-center m-0'>Have Question In</h3>
                        <p className='text-center m-0 grey'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi eius commodi quibusdam assumenda amet illo.</p>
                    </div>
                    <div className="col-lg-8" style={{margin: "auto"}}>
                        <div className="row combine-input">
                            <div className="col-md-9">
                                <input type="email" id="widget-subscribe-form-email" name="widget-subscribe-form-email" className="form-control not-dark required email-address" placeholder="Enter your Email" />
                            </div>
                            <div className="col-md-3">
                                <button className="btn w-100 btn-success red red-btn" type="submit">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeQuestion