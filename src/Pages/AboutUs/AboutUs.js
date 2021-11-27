import React from 'react';
import aboutLogo from '../../images/aboutus.jpg';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>

            <div className="about-style d-flex row">
                <div className="about mt-4 p-4">
                    <div className=""><h2 className="text-white">About Us :</h2></div>

                </div>
                <div >
                    <img width="300px" className="mt-4 col-4" src={aboutLogo} alt="" />
                </div>
                <div className=" col-12-lg mt-4">
                    <h2>Our Proud History</h2>
                    <p className="m-4">It all began in 1986 when Multiple Sclerosis Limited (MSL) identified the need for high-quality care services for people living with this chronic disease.

                        By 1999, MSL recognised the time had come to establish NanoCare as a separate legal entity. A savvy and experienced Board was appointed and we were firmly on the path to growth.

                        This growth was boosted by a series of acquisitions within the care sector between 2001 and 2008. By then, we had earned a reputation as an experienced and sizeable private care service provider.

                        In 2010, the purchase and integration of Nationwide Health & Aged Care Services represented a major milestone in our growth as specialist cleaning and laundry services bolstered our business portfolio.

                        At around the same time, NanoCare partnered with the US-based Healthcare at Home.  In 2013, NanoCare acquired the business. This nurse-led service has provided a safe, high-quality alternative to hospital care for people with cancer and chronic disease.

                        Today, we are proud to continue our work as a wholly-owned, not-for-profit subsidiary of MSL</p>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;