"use server";
import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/app/lib/utils";
import ContactTemplate from "@/app/email/ContactTemplate";

const resend = new Resend(process.env.API_KEY);

export const sendEmail = async (formData: FormData) => {
        const senderEmail = formData.get('senderEmail');
        const message = formData.get('message');

        if(!validateString(senderEmail, 700)) {
                return {
                       error: 'Invalid Email'
                };
        }
        if(!validateString(message, 700)) {
                return {
                       error: 'Invalid Message'
                };
        }

        let data;
        try {
                data = await resend.emails.send({
                        from: 'Kaustubh Contact Form <onboarding@resend.dev>',
                        to: 'sonicai.me@gmail.com',
                        subject: 'Message from Kaustubh Porfolio',
                        reply_to: senderEmail as string,
                        react: React.createElement(ContactTemplate, {
                                message: message as string,
                                senderEmail: senderEmail as string,
                        }),
                });
        } catch (error) {
              return {
                error: getErrorMessage(error),
              }  
        }

        return {
                data,
        };
};