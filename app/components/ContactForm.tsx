"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  neighborhood: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  neighborhood?: string;
  message?: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

const initialFormData: FormData = {
  name: "",
  email: "",
  neighborhood: "",
  message: "",
};

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!data.neighborhood.trim()) {
    errors.neighborhood = "Neighborhood is required";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required";
  }

  return errors;
}

export default function ContactForm(): JSX.Element {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [touched, setTouched] = useState<Record<keyof FormData, boolean>>({
    name: false,
    email: false,
    neighborhood: false,
    message: false,
  });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));

      if (touched[name as keyof FormData]) {
        const fieldErrors = validateForm({ ...formData, [name]: value });
        setErrors((prev) => ({ ...prev, [name]: fieldErrors[name as keyof FormErrors] }));
      }
    },
    [formData, touched]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name } = e.target;
      setTouched((prev) => ({ ...prev, [name]: true }));
      const fieldErrors = validateForm(formData);
      setErrors((prev) => ({ ...prev, [name]: fieldErrors[name as keyof FormErrors] }));
    },
    [formData]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const allTouched: Record<keyof FormData, boolean> = {
        name: true,
        email: true,
        neighborhood: true,
        message: true,
      };
      setTouched(allTouched);

      const validationErrors = validateForm(formData);
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length > 0) {
        return;
      }

      setStatus("submitting");

      try {
        await new Promise((resolve) => setTimeout(resolve, 1200));
        setStatus("success");
      } catch {
        setStatus("error");
      }
    },
    [formData]
  );

  const isSubmitting = status === "submitting";

  return (
    <section
      id="contact"
      className="py-[96px] bg-[var(--color-canvas)]"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[560px]">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="py-12"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-trust)" }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 10L8 14L16 6"
                        stroke="#ffffff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h2
                    id="contact-heading"
                    className="text-[28px] md:text-[40px] leading-[1.1] tracking-[-0.015em] font-[family-name:var(--font-display)]"
                    style={{ color: "var(--color-text)" }}
                  >
                    Thanks! We&apos;ll be in touch soon.
                  </h2>
                </div>
                <p
                  className="text-[17px] leading-[1.65]"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  We received your message and will get back to you within one business day to discuss a walking schedule that works for you.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2
                  id="contact-heading"
                  className="text-[28px] md:text-[40px] leading-[1.1] tracking-[-0.015em] font-[family-name:var(--font-display)] mb-4"
                  style={{ color: "var(--color-text)" }}
                >
                  Let&apos;s talk about your dog.
                </h2>
                <p
                  className="text-[17px] leading-[1.65] mb-10"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Tell us a bit about your pet and your neighborhood. We&apos;ll get back to you within one business day to discuss a walking schedule that works for you.
                </p>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="flex flex-col gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[14px] font-medium leading-[1.4] tracking-[0.06em] uppercase mb-2"
                        style={{ color: "var(--color-text)" }}
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={isSubmitting}
                        aria-invalid={errors.name ? "true" : "false"}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className="w-full px-4 py-3 bg-white border rounded text-[16px] leading-[1.5] transition-colors duration-200 ease-out disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{
                          borderColor: errors.name
                            ? "#C85A2A"
                            : "var(--color-border)",
                          borderRadius: "var(--radius-input)",
                          color: "var(--color-text)",
                          fontFamily: "var(--font-body)",
                        }}
                        placeholder="Your name"
                      />
                      <AnimatePresence>
                        {errors.name && (
                          <motion.p
                            id="name-error"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-[14px] leading-[1.5] mt-2"
                            style={{ color: "var(--color-accent)" }}
                          >
                            {errors.name}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[14px] font-medium leading-[1.4] tracking-[0.06em] uppercase mb-2"
                        style={{ color: "var(--color-text)" }}
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={isSubmitting}
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className="w-full px-4 py-3 bg-white border rounded text-[16px] leading-[1.5] transition-colors duration-200 ease-out disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{
                          borderColor: errors.email
                            ? "var(--color-accent)"
                            : "var(--color-border)",
                          borderRadius: "var(--radius-input)",
                          color: "var(--color-text)",
                          fontFamily: "var(--font-body)",
                        }}
                        placeholder="you@example.com"
                      />
                      <AnimatePresence>
                        {errors.email && (
                          <motion.p
                            id="email-error"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-[14px] leading-[1.5] mt-2"
                            style={{ color: "var(--color-accent)" }}
                          >
                            {errors.email}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <div>
                      <label
                        htmlFor="neighborhood"
                        className="block text-[14px] font-medium leading-[1.4] tracking-[0.06em] uppercase mb-2"
                        style={{ color: "var(--color-text)" }}
                      >
                        Neighborhood
                      </label>
                      <input
                        id="neighborhood"
                        name="neighborhood"
                        type="text"
                        value={formData.neighborhood}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={isSubmitting}
                        aria-invalid={errors.neighborhood ? "true" : "false"}
                        aria-describedby={
                          errors.neighborhood ? "neighborhood-error" : undefined
                        }
                        className="w-full px-4 py-3 bg-white border rounded text-[16px] leading-[1.5] transition-colors duration-200 ease-out disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{
                          borderColor: errors.neighborhood
                            ? "var(--color-accent)"
                            : "var(--color-border)",
                          borderRadius: "var(--radius-input)",
                          color: "var(--color-text)",
                          fontFamily: "var(--font-body)",
                        }}
                        placeholder="e.g., Silver Lake"
                      />
                      <AnimatePresence>
                        {errors.neighborhood && (
                          <motion.p
                            id="neighborhood-error"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-[14px] leading-[1.5] mt-2"
                            style={{ color: "var(--color-accent)" }}
                          >
                            {errors.neighborhood}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-[14px] font-medium leading-[1.4] tracking-[0.06em] uppercase mb-2"
                        style={{ color: "var(--color-text)" }}
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={isSubmitting}
                        aria-invalid={errors.message ? "true" : "false"}
                        aria-describedby={
                          errors.message ? "message-error" : undefined
                        }
                        className="w-full px-4 py-3 bg-white border rounded text-[16px] leading-[1.5] transition-colors duration-200 ease-out resize-y disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{
                          borderColor: errors.message
                            ? "var(--color-accent)"
                            : "var(--color-border)",
                          borderRadius: "var(--radius-input)",
                          color: "var(--color-text)",
                          fontFamily: "var(--font-body)",
                        }}
                        placeholder="Tell us about your dog and what you're looking for..."
                      />
                      <AnimatePresence>
                        {errors.message && (
                          <motion.p
                            id="message-error"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-[14px] leading-[1.5] mt-2"
                            style={{ color: "var(--color-accent)" }}
                          >
                            {errors.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {status === "error" && (
                      <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[14px] leading-[1.5]"
                        style={{ color: "var(--color-accent)" }}
                      >
                        Something went wrong. Please try again.
                      </motion.p>
                    )}

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-[14px] font-medium leading-[1.4] tracking-[0.06em] uppercase border-none cursor-pointer transition-colors duration-200 ease-out disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[var(--color-accent-hover)]"
                        style={{
                          backgroundColor: "var(--color-accent)",
                          color: "#ffffff",
                          borderRadius: "var(--radius-button)",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <circle
                                cx="8"
                                cy="8"
                                r="6"
                                stroke="rgba(255,255,255,0.3)"
                                strokeWidth="2"
                              />
                              <path
                                d="M8 2A6 6 0 0 1 14 8"
                                stroke="#ffffff"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          "Get in touch"
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
