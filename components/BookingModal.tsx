"use client";

import { useEffect, useState } from "react";
import { IoCalendarOutline, IoClose, IoVideocamOutline } from "react-icons/io5";
import { contact } from "@/data/site";

type BookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type Step = "schedule" | "contact" | "success";

type ScheduleForm = {
  date: string;
  time: string;
  reason: string;
};

type ContactForm = {
  name: string;
  email: string;
  phone: string;
};

const initialSchedule: ScheduleForm = { date: "", time: "", reason: "" };
const initialContact: ContactForm = { name: "", email: "", phone: "" };

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState<Step>("schedule");
  const [schedule, setSchedule] = useState<ScheduleForm>(initialSchedule);
  const [contactForm, setContactForm] = useState<ContactForm>(initialContact);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const resetAndClose = () => {
    setStep("schedule");
    setSchedule(initialSchedule);
    setContactForm(initialContact);
    setError("");
    onClose();
  };

  if (!isOpen) return null;

  const handleScheduleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    if (!schedule.date || !schedule.time || !schedule.reason.trim()) {
      setError("Please fill in date, time, and reason for the meeting.");
      return;
    }

    setStep("contact");
  };

  const handleFinalSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.phone.trim()) {
      setError("Please provide your name, email, and contact number.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/book-meeting", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...schedule,
          ...contactForm,
          meetLink: contact.googleMeetLink,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error ?? "Unable to submit booking request.");
      }

      setStep("success");
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="booking-overlay"
      role="presentation"
      onClick={resetAndClose}
    >
      <div
        className="booking-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="booking-close"
          aria-label="Close booking dialog"
          onClick={resetAndClose}
        >
          <IoClose aria-hidden="true" />
        </button>

        <div className="booking-meet-banner">
          <IoVideocamOutline aria-hidden="true" />
          <div>
            <p className="booking-meet-label">Google Meet</p>
            <a
              href={contact.googleMeetLink}
              target="_blank"
              rel="noopener noreferrer"
              className="booking-meet-link"
            >
              Open meeting room
            </a>
          </div>
        </div>

        {step === "schedule" && (
          <>
            <h2 id="booking-modal-title" className="booking-title">
              Schedule a Video Call
            </h2>
            <p className="booking-subtitle">
              Pick a date and time, then share a short reason so I can prepare
              for our conversation.
            </p>

            <form className="booking-form" onSubmit={handleScheduleSubmit}>
              <label className="booking-field">
                <span>Preferred Date</span>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split("T")[0]}
                  value={schedule.date}
                  onChange={(event) =>
                    setSchedule((current) => ({
                      ...current,
                      date: event.target.value,
                    }))
                  }
                />
              </label>

              <label className="booking-field">
                <span>Preferred Time</span>
                <input
                  type="time"
                  required
                  value={schedule.time}
                  onChange={(event) =>
                    setSchedule((current) => ({
                      ...current,
                      time: event.target.value,
                    }))
                  }
                />
              </label>

              <label className="booking-field">
                <span>Reason for scheduling</span>
                <textarea
                  required
                  rows={4}
                  placeholder="Briefly describe what you'd like to discuss — project scope, job opportunity, collaboration, etc."
                  value={schedule.reason}
                  onChange={(event) =>
                    setSchedule((current) => ({
                      ...current,
                      reason: event.target.value,
                    }))
                  }
                />
              </label>

              {error && <p className="booking-error">{error}</p>}

              <button type="submit" className="booking-submit">
                <IoCalendarOutline aria-hidden="true" />
                Continue
              </button>
            </form>
          </>
        )}

        {step === "contact" && (
          <>
            <h2 id="booking-modal-title" className="booking-title">
              Your Contact Details
            </h2>
            <p className="booking-subtitle">
              Almost done — share how I can reach you. You&apos;ll receive the
              meeting link and I&apos;ll get your request by email.
            </p>

            <div className="booking-summary">
              <p>
                <strong>Date:</strong> {schedule.date}
              </p>
              <p>
                <strong>Time:</strong> {schedule.time}
              </p>
              <p>
                <strong>Reason:</strong> {schedule.reason}
              </p>
            </div>

            <form className="booking-form" onSubmit={handleFinalSubmit}>
              <label className="booking-field">
                <span>Full Name</span>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={contactForm.name}
                  onChange={(event) =>
                    setContactForm((current) => ({
                      ...current,
                      name: event.target.value,
                    }))
                  }
                />
              </label>

              <label className="booking-field">
                <span>Email</span>
                <input
                  type="email"
                  required
                  placeholder="you@email.com"
                  value={contactForm.email}
                  onChange={(event) =>
                    setContactForm((current) => ({
                      ...current,
                      email: event.target.value,
                    }))
                  }
                />
              </label>

              <label className="booking-field">
                <span>Contact Number</span>
                <input
                  type="tel"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  value={contactForm.phone}
                  onChange={(event) =>
                    setContactForm((current) => ({
                      ...current,
                      phone: event.target.value,
                    }))
                  }
                />
              </label>

              {error && <p className="booking-error">{error}</p>}

              <div className="booking-actions">
                <button
                  type="button"
                  className="booking-secondary"
                  onClick={() => setStep("schedule")}
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="booking-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Booking"}
                </button>
              </div>
            </form>
          </>
        )}

        {step === "success" && (
          <div className="booking-success">
            <h2 id="booking-modal-title" className="booking-title">
              Booking Request Sent
            </h2>
            <p className="booking-subtitle">
              Thank you, {contactForm.name}! Your meeting request has been
              submitted. Check your email for confirmation and use the Google
              Meet link below at your scheduled time.
            </p>

            <div className="booking-summary">
              <p>
                <strong>Date:</strong> {schedule.date}
              </p>
              <p>
                <strong>Time:</strong> {schedule.time}
              </p>
              <p>
                <strong>Meet Link:</strong>{" "}
                <a
                  href={contact.googleMeetLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Google Meet
                </a>
              </p>
            </div>

            <button
              type="button"
              className="booking-submit"
              onClick={resetAndClose}
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
