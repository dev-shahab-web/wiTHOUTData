import BookingComponentForm from "@/forms/BookingComponentForm";
import { RootState } from "@/redux/store";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const BookingForm = () => {
  const bookingProducts = useSelector(
      (state: RootState) => state.booking.bookingProducts
    );

    console.log("bookingProducts", bookingProducts);

  return (
    <>
      <div className="booking-form">
        {/*Stepper*/}
        {/* <div className="steps-form mb-20">
          <div className="steps-row style_two setup-panel d-flex">
            <div className="steps-step">
              <Link href="#step-one" className="step-active steps-title">
                Step 1 of 2
              </Link>
            </div>
            <div className="steps-step">
              <Link href="#step-two" className="steps-title">
                Step 2 of 2
              </Link>
            </div>
          </div>
        </div> */}

        {/* booking form */}
        <BookingComponentForm />
      </div>
    </>
  );
};

export default BookingForm;
