"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import { Sparkle } from "./ui/Sparkle";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<null | { type: "success" | "error"; message: string }>(null);

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);

    if (!serviceId || !templateId || !publicKey) {
      setStatus({ type: "error", message: "Email service is not configured. Please add your EmailJS keys." });
      return;
    }

    if (!formRef.current) return;

    try {
      setSending(true);
      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey });
      setStatus({ type: "success", message: "Message sent successfully." });
      formRef.current.reset();
    } catch (err) {
      setStatus({ type: "error", message: "Failed to send message. Please try again later." });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="w-full pt-10 sm:pt-20 pb-6 sm:pb-8 justify-center flex items-center z-20" id="contact">
      <div className="flex flex-col items-center text-center w-full max-w-5xl">
        <div className="mb-5"></div>
        <Reveal>
          <h3 className="title mb-10 font-semibold">
            Let&apos;s <span className=" bg-gradient-to-r from-blue-600 to-blue-300 font-semibold bg-clip-text text-transparent">connect</span>
          </h3>
        </Reveal>

        <div className="w-full max-w-2xl mx-auto">
          <Sparkle as="div" duration={12000}>
            <div className="block w-full p-4 md:p-6">
              <form ref={formRef} onSubmit={onSubmit} className="w-full space-y-5">
                <div className="text-left">
                  <label htmlFor="user_name" className="block mb-2 text-sm md:text-base opacity-80">Your Name</label>
                  <input
                    id="user_name"
                    name="user_name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/70 text-white placeholder-white/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-white/20 backdrop-blur-xl"
                  />
                </div>

                <div className="text-left">
                  <label htmlFor="user_email" className="block mb-2 text-sm md:text-base opacity-80">Your Email address</label>
                  <input
                    id="user_email"
                    name="user_email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/70 text-white placeholder-white/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-white/20 backdrop-blur-xl"
                  />
                </div>

                <div className="text-left">
                  <label htmlFor="message" className="block mb-2 text-sm md:text-base opacity-80">Your message for me</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Write your message here..."
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/70 text-white placeholder-white/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-white/20 backdrop-blur-xl resize-y"
                  />
                </div>

                <div className="pt-2 flex justify-center">
                  <Button
                    title={sending ? "Sending..." : "Contact Me"}
                    icon={<img src="assets/send.svg" alt="Send" />}
                    position="right"
                    handleClick={() => formRef.current?.requestSubmit()}
                    otherClasses="w-full md:w-56"
                  />
                </div>

                {status && (
                  <p className={`text-sm mt-2 ${status.type === "success" ? "text-green-400" : "text-red-400"}`}>
                    {status.message}
                  </p>
                )}
              </form>
            </div>
          </Sparkle>
        </div>
      </div>
    </section>
  );
};

export default Contact;
