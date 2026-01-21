/** Author: Liliane Schutz */
'use client';

import { useState, FormEvent, ChangeEvent, FocusEvent } from 'react';
import { submitContactForm } from '@/lib/api';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';
import styles from './ContactForm.module.css';

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface FormTouched {
  name: boolean;
  email: boolean;
  subject: boolean;
  message: boolean;
}

type SubmitStatus = 'idle' | 'success' | 'error';

// Validation functions
function validateName(value: string): string | undefined {
  const trimmed = value.trim();
  if (!trimmed) {
    return 'Name ist erforderlich';
  }
  if (trimmed.length < 2) {
    return 'Name muss mindestens 2 Zeichen lang sein';
  }
  return undefined;
}

function validateEmail(value: string): string | undefined {
  const trimmed = value.trim();
  if (!trimmed) {
    return 'E-Mail ist erforderlich';
  }
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(trimmed)) {
    return 'Bitte gültige E-Mail-Adresse eingeben';
  }
  return undefined;
}

function validateSubject(value: string): string | undefined {
  const trimmed = value.trim();
  if (!trimmed) {
    return 'Betreff ist erforderlich';
  }
  if (trimmed.length < 3) {
    return 'Betreff muss mindestens 3 Zeichen lang sein';
  }
  return undefined;
}

function validateMessage(value: string): string | undefined {
  const trimmed = value.trim();
  if (!trimmed) {
    return 'Nachricht ist erforderlich';
  }
  if (trimmed.length < 10) {
    return 'Nachricht muss mindestens 10 Zeichen lang sein';
  }
  return undefined;
}

function validateAll(values: FormValues): FormErrors {
  return {
    name: validateName(values.name),
    email: validateEmail(values.email),
    subject: validateSubject(values.subject),
    message: validateMessage(values.message),
  };
}

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [touched, setTouched] = useState<FormTouched>({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    // Live revalidation if field is already touched
    if (touched[name as keyof FormTouched]) {
      const fieldError =
        name === 'name'
          ? validateName(value)
          : name === 'email'
          ? validateEmail(value)
          : name === 'subject'
          ? validateSubject(value)
          : validateMessage(value);

      setErrors((prev) => ({
        ...prev,
        [name]: fieldError,
      }));
    }
  };

  const handleBlur = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    // Validate field on blur
    const fieldError =
      name === 'name'
        ? validateName(value)
        : name === 'email'
        ? validateEmail(value)
        : name === 'subject'
        ? validateSubject(value)
        : validateMessage(value);

    setErrors((prev) => ({
      ...prev,
      [name]: fieldError,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate all fields
    const validationErrors = validateAll(values);

    // Check if there are any errors
    const hasErrors = Object.values(validationErrors).some(
      (error) => error !== undefined
    );

    if (hasErrors) {
      // Set all fields as touched and show errors
      setTouched({
        name: true,
        email: true,
        subject: true,
        message: true,
      });
      setErrors(validationErrors);
      setSubmitStatus('idle');
      return;
    }

    // Submit to Backend API
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await submitContactForm({
        name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message
      });

      // Success
      setIsSubmitting(false);
      setSubmitStatus('success');

      // Reset form after success
      setValues({ name: '', email: '', subject: '', message: '' });
      setTouched({ name: false, email: false, subject: false, message: false });
      setErrors({});
    } catch (error) {
      console.error('Contact form submission failed:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
    }
  };

  return (
    <div className={styles.container}>
      {submitStatus === 'success' && (
        <div className={styles.successBanner} role="alert">
          <svg
            className={styles.successIcon}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z"
              fill="currentColor"
            />
          </svg>
          <span>Vielen Dank für deine Nachricht! Ich melde mich so schnell wie möglich zurück.</span>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className={styles.errorBanner} role="alert">
          <span>Fehler beim Senden. Bitte versuche es erneut oder kontaktiere mich direkt per E-Mail.</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className={styles.form} noValidate>
        <Input
          id="name"
          name="name"
          label="Name"
          type="text"
          value={values.name}
          placeholder="Max Mustermann"
          onChange={handleChange}
          onBlur={handleBlur}
          required
          error={touched.name ? errors.name : undefined}
          disabled={isSubmitting}
          autoComplete="name"
        />

        <Input
          id="email"
          name="email"
          label="E-Mail"
          type="email"
          value={values.email}
          placeholder="max@example.com"
          onChange={handleChange}
          onBlur={handleBlur}
          required
          error={touched.email ? errors.email : undefined}
          disabled={isSubmitting}
          autoComplete="email"
        />

        <Input
          id="subject"
          name="subject"
          label="Betreff"
          type="text"
          value={values.subject}
          placeholder="Projektanfrage / Zusammenarbeit / ..."
          onChange={handleChange}
          onBlur={handleBlur}
          required
          error={touched.subject ? errors.subject : undefined}
          disabled={isSubmitting}
        />

        <Textarea
          id="message"
          name="message"
          label="Nachricht"
          value={values.message}
          placeholder="Deine Nachricht an mich..."
          onChange={handleChange}
          onBlur={handleBlur}
          required
          error={touched.message ? errors.message : undefined}
          disabled={isSubmitting}
          rows={6}
        />

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
        </Button>
      </form>
    </div>
  );
}
