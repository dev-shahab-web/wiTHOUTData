import Link from 'next/link';
import React from 'react';

const TermsConditions = () => {
    return (
        <>
            <section className="policy-area section-space">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div className="policy-wrapper p-relative z-index-1">
                                <div className="policy-item">
                                    <h4 className="policy-title">Booking Terms and Payment Info</h4>
                                    <p>These booking Terms and Conditions contain important information. It is essential that you read them carefully and understand them as they apply to all services provided by Holy Nepal Yatra.</p>
                                </div>
                                <div className="policy-item">
                                    <h4 className="policy-title">Travel Insurance</h4>
                                    <p>We advise you to purchase a comprehensive travel insurance package against medical emergencies, natural calamities, helicopter evacuation, personal accident, and cancellation, etc. Please note that we do not provide any insurance policies.</p>
                                </div>
                                <div className="policy-item">
                                    <h4 className="policy-title">Changes By You</h4>
                                    <p>If you wish to change your tour, you must inform our staff at least 30 days before the tour. Any extra charge or loss incurred due to such change will be borne by you.</p>
                                </div>
                                <div className="policy-item">
                                    <h4 className="policy-title">Cancellation By The Company</h4>
                                    <p>We may be obliged to cancel your trip due to reasons such as border closure, permit not issued or cancelled by the government, war, riots, civil disturbances, strikes, natural disasters, terrorist activities or threat thereof, and closure of airports, etc. Under such circumstances, we will advise you as soon as possible if we can offer you an alternative trip of comparable standard or make a refund of the money paid to us after deducting the expenses that were spent to make the bookings of flights, visas, permits, hotels, and vehicle booking. A clear bill of the expenses will be provided to you so that you will be able to claim the insurance.</p>
                                </div>
                                <div className="policy-item">
                                    <h4 className="policy-title">Refund</h4>
                                    <p>No refund will be made to any tour member in case of incomplete tour program for whatsoever reasons.</p>
                                </div>
                                <div className="policy-item">
                                    <h4 className="policy-title">Age Factor</h4>
                                    <p>Please note that Kailash permit will not be issued for persons above 70 years old.</p>
                                </div>
                                <div className="policy-item">
                                    <h4 className="policy-title">Mode of Payments</h4>
                                    <ul>
                                        <li>Full payment should be made before 1 week of tour program.</li>
                                    </ul>
                                </div>
                                <div className="policy-item">
                                    <h4 className="policy-title">Tour Cancellation Policy</h4>
                                    <ul>
                                        <li>All notice of cancellation must be sent to our office in written form.</li>
                                        <li>Verbal cancellations will not be entertained.</li>
                                        <li>3 days before tour program departure date, 25% of total yatra cost will be deducted.</li>
                                        <li>1 day before tour program departure date, 50% of total trip cost will be deducted.</li>
                                        <li>There will be no refund at all if you cancel the tour program less than 1 day before the departure date.</li>
                                    </ul>
                                </div>
                                <div className="policy-contact">
                                    <h4 className="policy-title">Contact Us</h4>
                                    <p className="mb-10">If you have any questions or concerns about these Terms and Conditions, please contact us at</p>
                                    <ul>
                                        <li>Email: <span><Link href="mailto:holynepalyatra@gmail.com">holynepalyatra@gmail.com</Link></span></li>
                                    </ul>
                                    <div className="policy-address">
                                        <p className="mb-0">
                                            <Link target="_blank" href="#">
                        Shop No. 1010, Gorakhnath Road, Gorakhpur, Uttar Pradesh, Pin Code - 273015
                      </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TermsConditions;