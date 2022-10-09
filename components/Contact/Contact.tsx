/** @format */

import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:belkaid.abdulah@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-center gap-12 mx-auto items-center">
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+213556355064</p>
          </div>
        </div>

        <div className="">
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">belkaid.abdulah@gmail.com</p>
          </div>
        </div>

        <div className="">
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Algiers/Algeria</p>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 mx-auto w-full"
      >
        <div className="flex space-x-2">
          <input
            {...register("name")}
            placeholder="Enter Your Name"
            className="contactInput w-[50%]"
            type="text"
          />
          <input
            {...register("email")}
            placeholder="Enter Your Email"
            className="contactInput w-[50%]"
            type="text"
          />
        </div>
        <input
          {...register("subject")}
          placeholder="Subject"
          className="contactInput"
          type="text"
        />
        <textarea
          {...register("message")}
          className="contactInput"
          placeholder="Your Message"
        />

        <button
          type="submit"
          className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
