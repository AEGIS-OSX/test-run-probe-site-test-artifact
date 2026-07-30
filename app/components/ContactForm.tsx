"use client";

import { useState, FormEvent, ChangeEvent } from "react";
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

export default function ContactForm(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    neighborhood: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const validate = (data: FormData): FormErrors => {
    const newErrors: FormErrors = {};
    if (!data.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!data.neighborhood.trim()) {
      newErrors.neighborhood = "Neighborhood is required";
    }
    if (!data.message.trim()) {
      newErrors.message = "Message is required";
    }
    return newErrors;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    setErrors({});
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[var(--color-canvas)]"
      aria-labelledby="contact-headline"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16">
          <div className="order-2 lg:order-1">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-[17px] leading-[1.65] text-[var(--color-text)]">
                    {`Thanks for reaching out! We'll be in touch within one business day.`}
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
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    noValidate
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium leading-[1.4] tracking-[0.06em] uppercase text-[var(--color-text)]"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        aria-invalid={errors.name ? "true" : "false"}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={`mt-2 w-full px-4 py-3 bg-[rgb(255,255,255)] border text-base leading-[1.5] text-[var(--color-text)] font-[family-name:var(--font-body)] transition-colors duration-200 ease-out outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/15 focus:ring-offset-0 rounded-[var(--radius-input)] ${
                          errors.name
                            ? "border-[var(--color-accent)]"
                            : "border-[var(--color-border)]"
                        }`}
                      />
                      <AnimatePresence>
                        {errors.name && (
                          <motion.p
                            id="name-error"
                            role="alert"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-2 text-sm leading-[1.5] text-[var(--color-accent)]"
                          >
                            {errors.name}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-[1.4] tracking-[0.06em] uppercase text-[var(--color-text)]"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                        className={`mt-2 w-full px-4 py-3 bg-[rgb(255,255,255)] border text-base leading-[1.5] text-[var(--color-text)] font-[family-name:var(--font-body)] transition-colors duration-200 ease-out outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/15 focus:ring-offset-0 rounded-[var(--radius-input)] ${
                          errors.email
                            ? "border-[var(--color-accent)]"
                            : "border-[var(--color-border)]"
                        }`}
                      />
                      <AnimatePresence>
                        {errors.email && (
                          <motion.p
                            id="email-error"
                            role="alert"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-2 text-sm leading-[1.5] text-[var(--color-accent)]"
                          >
                            {errors.email}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <div>
                      <label
                        htmlFor="neighborhood"
                        className="block text-sm font-medium leading-[1.4] tracking-[0.06em] uppercase text-[var(--color-text)]"
                      >
                        Neighborhood
                      </label>
                      <input
                        type="text"
                        id="neighborhood"
                        name="neighborhood"
                        value={formData.neighborhood}
                        onChange={handleChange}
                        aria-invalid={errors.neighborhood ? "true" : "false"}
                        aria-describedby={
                          errors.neighborhood ? "neighborhood-error" : undefined
                        }
                        className={`mt-2 w-full px-4 py-3 bg-[rgb(255,255,255)] border text-base leading-[1.5] text-[var(--color-text)] font-[family-name:var(--font-body)] transition-colors duration-200 ease-out outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/15 focus:ring-offset-0 rounded-[var(--radius-input)] ${
                          errors.neighborhood
                            ? "border-[var(--color-accent)]"
                            : "border-[var(--color-border)]"
                        }`}
                      />
                      <AnimatePresence>
                        {errors.neighborhood && (
                          <motion.p
                            id="neighborhood-error"
                            role="alert"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-2 text-sm leading-[1.5] text-[var(--color-accent)]"
                          >
                            {errors.neighborhood}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium leading-[1.4] tracking-[0.06em] uppercase text-[var(--color-text)]"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        aria-invalid={errors.message ? "true" : "false"}
                        aria-describedby={
                          errors.message ? "message-error" : undefined
                        }
                        className={`mt-2 w-full px-4 py-3 bg-[rgb(255,255,255)] border text-base leading-[1.5] text-[var(--color-text)] font-[family-name:var(--font-body)] transition-colors duration-200 ease-out outline-none resize-y focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/15 focus:ring-offset-0 rounded-[var(--radius-input)] ${
                          errors.message
                            ? "border-[var(--color-accent)]"
                            : "border-[var(--color-border)]"
                        }`}
                      />
                      <AnimatePresence>
                        {errors.message && (
                          <motion.p
                            id="message-error"
                            role="alert"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-2 text-sm leading-[1.5] text-[var(--color-accent)]"
                          >
                            {errors.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-accent)] text-[rgb(255,255,255)] rounded-[var(--radius-button)] text-sm font-medium leading-[1.4] tracking-[0.06em] uppercase transition-colors duration-200 ease-out hover:bg-[var(--color-accent-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Get in touch"}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="order-1 lg:order-2">
            <h2
              id="contact-headline"
              className="font-[family-name:var(--font-display)] text-[28px] leading-[1.15] tracking-[-0.015em] text-[var(--color-text)] md:text-[40px] md:leading-[1.1]"
            >
              {`Let's talk about your dog.`}
            </h2>
            <p className="mt-6 text-[17px] leading-[1.65] text-[var(--color-text-muted)]">
              Tell us a bit about your pet and your neighborhood. We&apos;ll get back to you within one business day to discuss a walking schedule that works for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
