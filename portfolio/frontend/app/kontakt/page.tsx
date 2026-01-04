/** Author: Liliane Schutz */

import { socialLinks } from '@/lib/data/socials';
import ContactForm from '@/components/contact/ContactForm';
import styles from './page.module.css';

export default function KontaktPage() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <section className={styles.intro}>
          <h1 className={styles.title}>Kontakt</h1>
          <p className={styles.description}>
            Du hast ein Projekt, eine Frage oder möchtest einfach Hallo sagen?
            Ich freue mich von dir zu hören!
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Direkt erreichen</h2>
          <div className={styles.socialLinks}>
            {socialLinks.map((link) => (
              <a
                key={link.type}
                href={link.url}
                className={styles.socialLink}
                target={link.type !== 'E-Mail' ? '_blank' : undefined}
                rel={link.type !== 'E-Mail' ? 'noopener noreferrer' : undefined}
              >
                <span className={styles.socialLinkType}>{link.type}</span>
                <span className={styles.socialLinkLabel}>{link.label}</span>
              </a>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Kontaktformular</h2>
          <ContactForm />
        </section>
      </div>
    </div>
  );
}
