/** Author: Liliane Schutz */

import { socialLinks } from '@/lib/data/socials';
import PageShell from '@/components/layout/PageShell';
import PageHeader from '@/components/layout/PageHeader';
import ContactForm from '@/components/contact/ContactForm';
import styles from './page.module.css';

export default function KontaktPage() {
  return (
    <PageShell>
      <PageHeader
        title="Kontakt"
        lead="Du hast ein Projekt, eine Frage oder möchtest einfach Hallo sagen? Ich freue mich von dir zu hören!"
      />

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
    </PageShell>
  );
}
