"use client";
import { selectTourData } from "@/data/nice-select-data";
import NiceSelect from "@/elements/NiceSelect";
import ErrorMessage from "@/elements/error-message/ErrorMessage";
import React from "react";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { toast } from "sonner";
import emailjs from "emailjs-com";

interface ContactFormData {
  fullName: string;
  email: string;
  tourType: string;
  message: string;
  agreeTerms: boolean;
}

const ContactPageForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm<ContactFormData>();

  const onSubmit: SubmitHandler<ContactFormData> = (data) => {
    console.log(data, "Form Data");
    const toastId = toast.loading("");
    emailjs
      .send(
        "service_b8eo7se", // replace with your EmailJS service ID
        "template_rwvvw4m", // replace with your EmailJS template ID
        {
          fullName: data.fullName,
          email: data.email,
          tourType: data.tourType,
          message: data.message,
          agreeTerms: data.agreeTerms ? "Agreed" : "Not Agreed",
        },
        "QOKuOSRQ8LqAoC6PN" // replace with your EmailJS public key
      )
      .then(
        (result) => {
          toast.success("Message Sent Successfully", { id: toastId, duration: 2000 });
          reset();
        },
        (error) => {
          toast.error("Failed to send message. Please try again.", { id: toastId, duration: 2000 });
        }
      );
  };

  // No longer needed, handled by Controller
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row gy-24 contact-page-form">
          <div className="col-md-12">
            <div className="floating-form-input">
              <input
                type="text"
                className="inputText"
                id="fullName"
                {...register("fullName", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                  maxLength: {
                    value: 35,
                    message: "Name cannot exceed 15 characters",
                  },
                })}
              />
              <span className="floating-label">Full Name</span>
              {errors.fullName && (
                <ErrorMessage message={errors.fullName.message as string} />
              )}
            </div>
          </div>
          <div className="col-md-12">
            <div className="floating-form-input">
              <input
                type="text"
                className="inputText"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              <span className="floating-label">Your Email</span>
              {errors.email && (
                <ErrorMessage message={errors.email.message as string} />
              )}
            </div>
          </div>
          <div className="col-md-12">
            <div className="input-box-select">
              <Controller
                name="tourType"
                control={control}
                defaultValue={selectTourData[0]?.option || ""}
                rules={{ required: "Tour type is required" }}
                render={({ field }) => (
                  <NiceSelect
                    options={selectTourData}
                    defaultCurrent={0}
                    onChange={option => field.onChange(option.option)}
                    name="tourType"
                    className=""
                    placeholder="Tour Type"
                  />
                )}
              />
              {errors.tourType && (
                <ErrorMessage message={errors.tourType.message as string} />
              )}
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-input-box">
              <div className="floating-form-input">
                <textarea
                  className="textareaText"
                  id="message"
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 2,
                      message: "Message must be at least 2 characters",
                    },
                    maxLength: {
                      value: 200,
                      message: "Message cannot exceed 200 characters",
                    },
                  })}
                ></textarea>
                <span className="floating-label-two">Your Message</span>
                {errors.message && (
                  <ErrorMessage message={errors.message.message as string} />
                )}
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="contact-form-check mb-20">
              <Controller
                name="agreeTerms"
                control={control}
                defaultValue={false}
                rules={{ required: "You must agree to the terms and policies" }}
                render={({ field }) => (
                  <label className="footer-form-check-label has-black">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      checked={field.value}
                      onChange={e => field.onChange(e.target.checked)}
                    />
                    <svg viewBox="0 0 64 64" height="2em" width="2em">
                      <path
                        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                        pathLength="575.0541381835938"
                        className="path"
                      ></path>
                    </svg>{" "}
                    I agree to all terms and policies
                  </label>
                )}
              />
              {errors.agreeTerms && (
                <ErrorMessage message={errors.agreeTerms.message as string} />
              )}
            </div>
            <div className="contact-form-btn">
              <button
                type="submit"
                className="bd-primary-btn btn-style has-arrow is-bg radius-60"
              >
                <span className="bd-primary-btn-arrow arrow-right">
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
                <span className="bd-primary-btn-text">Sent Now</span>
                <span className="bd-primary-btn-circle"></span>
                <span className="bd-primary-btn-arrow arrow-left">
                  <i className="fa-regular fa-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactPageForm;
