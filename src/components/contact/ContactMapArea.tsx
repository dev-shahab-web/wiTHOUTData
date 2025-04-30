import React from 'react';

const ContactMapArea = () => {
    return (
        <>
            <div className="bd-map-area section-space-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="google-map">
                                <iframe
                                    src="https://maps.google.com/maps?q=Gorakhnath%20Temple%20Gorakhpur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    height="500"
                                    style={{ border: '0', width: '100%' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactMapArea;
