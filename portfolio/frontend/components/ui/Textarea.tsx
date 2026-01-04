/** Author: Liliane Schutz */

import styles from './Textarea.module.css';

interface TextareaProps {
  id: string;
  name: string;
  label: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  error?: string;
  disabled?: boolean;
  rows?: number;
}

export default function Textarea({
  id,
  name,
  label,
  value,
  placeholder,
  onChange,
  onBlur,
  required = false,
  error,
  disabled = false,
  rows = 5,
}: TextareaProps) {
  const errorId = `${id}-error`;

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {required && <span className={styles.required} aria-label="erforderlich"> *</span>}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        rows={rows}
        className={`${styles.textarea} ${error ? styles.textareaError : ''}`}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        required={required}
      />
      {error && (
        <span id={errorId} className={styles.error} role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
