import React from 'react'
import { useFormStatus } from "react-dom";

export default function Submit() {
  const { pending } = useFormStatus();
  return (
        <button 
        className="mt-2 justify-center group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition disabled:scale-100 disabled:bg-opacity-65" 
        type="submit"
        disabled={pending}
        >
        {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
        ) : (
        <>
        Send Message
        </>
        )}
        </button>
  )
}
