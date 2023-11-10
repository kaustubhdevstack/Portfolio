'use client'
import React from 'react';
import { useRef } from 'react';
import { sendEmail } from '@/actions/sendEmail';
import { toast } from 'react-hot-toast';
import Submit from './submit';

export default function Contact() {
  const ref = useRef<HTMLFormElement>(null);
  return (
        <section className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center">
          <h2 className="text-3xl font-medium capitalize mb-1 text-center">Get in touch</h2>
          <p className="text-center 2x text-gray-800 mb-8">Want my help for a project? then just reach out to me!</p>

          <form 
          ref={ref}
          className="mt-10 flex flex-col h-screen" 
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);
  
            if (error) {
              toast.error(error);
              return;
            }
  
            toast.success("Email sent successfully!");
            ref.current?.reset();
          }}
          >
            <input 
            className="h-10 rounded-lg border-1 p-4" 
            name="senderEmail"
            type="email" 
            placeholder="Enter your email" 
            required maxLength={700} />

            <textarea 
            className="h-52 mt-2 rounded-lg border-1 p-4" 
            name="message"
            placeholder="Type something..." 
            required maxLength={700}/>

            <Submit/>
          </form>
        </section>
  )
}
