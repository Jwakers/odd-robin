"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

type ContactFormProps = {
  idPrefix?: string;
  variant?: "default" | "agency";
};

export function ContactForm({ idPrefix = "", variant = "default" }: ContactFormProps) {
  const isAgency = variant === "agency";
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const successRef = useRef<HTMLDivElement>(null);
  const nameId = `${idPrefix}name`;
  const emailId = `${idPrefix}email`;
  const messageId = `${idPrefix}message`;
  const statusId = `${idPrefix}status`;
  const fieldClass = `w-full border border-outline-variant bg-background p-3.5 text-base outline-none transition-colors focus:border-primary ${isAgency ? "text-foreground placeholder:text-foreground" : ""}`;
  const labelClass = isAgency ? "text-sm font-bold text-foreground" : "text-sm font-medium text-outline";

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      source: String(formData.get("source") ?? ""),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus("error");
      setMessage("Please fill in your name, email address and message.");
      return;
    }

    setStatus("sending");
    setMessage("");

    try {
      const res = await fetch("https://formspree.io/f/mdenprpy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Your message couldn’t be sent. Please try again.");

      setStatus("success");
      setMessage("Thank you for your message. I will be in touch soon.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage(
        "Your message couldn’t be sent. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className="flex w-full flex-col items-center gap-6 border border-outline-variant bg-surface p-8 text-center md:p-12">
        <div className="h-1 w-12 shrink-0 bg-accent" aria-hidden="true" />
        <h3 className="font-mono text-lg font-bold uppercase tracking-[0.08em] text-primary">
          Message received
        </h3>
        <p className={`max-w-md text-sm leading-relaxed ${isAgency ? "text-foreground" : "text-outline"}`}>Thanks — your enquiry has been sent. I’ll be in touch.</p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setMessage("");
          }}
          className="font-mono text-[13px] font-bold uppercase tracking-[0.12em] text-primary underline underline-offset-4 transition-colors hover:text-primary-fixed"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      className={`flex w-full flex-col border border-outline-variant bg-surface ${isAgency ? "gap-6 p-6 md:p-8" : "gap-5 p-8 md:p-9"}`}
      onSubmit={onSubmit}
      aria-busy={status === "sending"}
      aria-describedby={statusId}
    >
      <input type="hidden" name="source" value={isAgency ? "agency-page" : "standard-enquiry"} />
      {!isAgency ? <div className="h-1 w-12 shrink-0 bg-accent" aria-hidden="true" /> : null}

      <div className="flex flex-col gap-2">
        <label htmlFor={nameId} className={labelClass}>
          {isAgency ? "Your name" : "Name"}
        </label>
        <input
          id={nameId}
          name="name"
          type="text"
          autoComplete="name"
          required
          className={fieldClass}
          placeholder={isAgency ? "Alex, Studio name" : "Your name"}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={emailId} className={labelClass}>
          {isAgency ? "Email address" : "Email"}
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          autoComplete="email"
          required
          className={fieldClass}
          placeholder={isAgency ? "you@youragency.co.uk" : "Your email address"}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={messageId} className={labelClass}>
          {isAgency ? "A little about the project" : "What do you need help with?"}
        </label>
        <textarea
          id={messageId}
          name="message"
          rows={4}
          required
          className={`${fieldClass} min-h-[132px] resize-y`}
          placeholder={isAgency ? "The brief, likely timings and where you need support…" : "Tell me a little about your business and where you need support."}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className={`inline-flex min-h-14 w-full items-center justify-center gap-1 bg-primary px-4 py-4 font-bold text-surface transition-colors hover:bg-primary-fixed disabled:cursor-not-allowed disabled:opacity-70 ${isAgency ? "text-[15px] leading-[22px]" : "font-mono text-[13px] uppercase tracking-[0.12em]"}`}
      >
        {status === "sending" ? "Sending…" : isAgency ? "Send project enquiry" : "Request your review"}
        {isAgency && status !== "sending" ? <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" /> : null}
      </button>

      <p id={statusId} role="status" aria-live="polite" aria-atomic="true" className={`text-[13px] leading-[21px] ${status === "error" ? "text-red-700" : isAgency ? "text-foreground" : "text-outline"}`}>
        {status === "sending" ? "Sending your message…" : message || (isAgency ? "I’ll use your details to reply to your enquiry." : "No pressure. Just a clear first step.")}
      </p>
    </form>
  );
}
