'use client'
// Import statements
import React, { useRef, FormEvent } from 'react';
import { sendEmail } from '@/actions/sendEmail';
import { toast } from 'react-hot-toast';
import Submit from './submit';

export default function Contact() {
  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
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
      <h2 className="text-3xl font-medium capitalize mb-1 text-center">Get in touch</h2>
      <p className="text-center 2x text-gray-800 mb-8">Want my help for a project? then just reach out to me!</p>

      <form
        ref={ref}
        className="mt-10 flex flex-col h-screen"
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          handleSubmit(formData);
        }}
      >
        <input
          className="h-10 rounded-lg border-1 p-4"
          name="senderEmail"
          type="email"
          placeholder="Enter your email"
          required
          maxLength={700}
        />

        <textarea
          className="h-52 mt-2 rounded-lg border-1 p-4"
          name="message"
          placeholder="Type something..."
          required
          maxLength={700}
        />

        <Submit />
      </form>
    </section>
  );
}
