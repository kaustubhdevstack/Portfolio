'use client'
import React from 'react';
import { useRef } from 'react';
import { sendEmail } from '@/actions/sendEmail';
import { toast } from 'react-hot-toast';
import Submit from './submit';

export default function Contact() {
  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData) => {
    try {
      const response = await sendEmail(formData);

      // Check if the response has the expected structure
      if (!response || !response.data) {
        throw new Error("Invalid response structure");
      }

      // Destructure the data from the response
      const { data, error } = response;

      // Check if there's an error in the response
      if (error) {
        toast.error(error);
        return;
      }

      toast.success("Email sent successfully!");
      ref.current?.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send email. Please try again.");
    }
  };

  return (
    <section className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center">
      {/* ... (other JSX) */}
      <form
        ref={ref}
        className="mt-10 flex flex-col h-screen"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(new FormData(e.target));
        }}
      >
        {/* ... (other input and textarea elements) */}
        <Submit />
      </form>
    </section>
  );
}
