/** Author: Liliane Schutz */

import type { Metadata } from 'next';
import PageShell from '@/components/layout/PageShell';
import PageHeader from '@/components/layout/PageHeader';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Datenschutz – Liliane Schutz',
  robots: {
    index: false,
    follow: false,
  },
};

const name  = process.env.NEXT_PUBLIC_IMPRESSUM_NAME   ?? '[Name]';
const strasse = process.env.NEXT_PUBLIC_IMPRESSUM_STRASSE ?? '[Straße Hausnummer]';
const ort   = process.env.NEXT_PUBLIC_IMPRESSUM_ORT    ?? '[PLZ Stadt]';
const email = process.env.NEXT_PUBLIC_IMPRESSUM_EMAIL  ?? '[E-Mail]';

export default function DatenschutzPage() {
  return (
    <PageShell>
      <PageHeader
        title="Datenschutzerklarung"
        lead="Stand: Juni 2026"
      />

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.heading}>1. Verantwortliche Person</h2>
          <p>
            Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
          </p>
          <p>
            {name}<br />
            {strasse}<br />
            {ort}<br />
            Deutschland<br />
            E-Mail: <a href={`mailto:${email}`} className={styles.link}>{email}</a>
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>2. Hosting</h2>
          <p>
            Diese Website wird bei <strong>Cloudflare Pages</strong> (Cloudflare, Inc., 101 Townsend St.,
            San Francisco, CA 94107, USA) gehostet. Cloudflare verarbeitet beim Aufruf dieser Website
            automatisch Server-Logdaten, darunter IP-Adressen, Browsertyp, aufgerufene Seiten und Zeitstempel.
          </p>
          <p>
            Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und
            stabilen Betrieb der Website). Mit Cloudflare besteht ein Auftragsverarbeitungsvertrag.
            Cloudflare ist unter dem EU-US Data Privacy Framework zertifiziert.
          </p>
          <p>
            Weitere Informationen: <a href="https://www.cloudflare.com/de-de/privacypolicy/" className={styles.link} target="_blank" rel="noopener noreferrer">Cloudflare Datenschutzrichtlinie</a>
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>3. Schriftarten (Google Fonts)</h2>
          <p>
            Diese Website verwendet Schriftarten des Dienstes Google Fonts (Google LLC, 1600 Amphitheatre
            Parkway, Mountain View, CA 94043, USA). Die Schriftarten werden beim Aufruf der Website
            von den Servern von Google geladen. Dabei wird deine IP-Adresse an Google übermittelt.
          </p>
          <p>
            Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer konsistenten
            typografischen Darstellung). Google ist unter dem EU-US Data Privacy Framework zertifiziert.
          </p>
          <p>
            {/* TODO: Sobald Fonts lokal gehostet werden, diesen Abschnitt entfernen. */}
            Weitere Informationen: <a href="https://policies.google.com/privacy" className={styles.link} target="_blank" rel="noopener noreferrer">Google Datenschutzrichtlinie</a>
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>4. Kontaktformular</h2>
          <p>
            Wenn du das Kontaktformular auf dieser Website nutzt, werden die eingegebenen Daten (Name,
            E-Mail-Adresse, Betreff und Nachricht) verarbeitet und in einer Datenbank gespeichert
            (Cloudflare D1, gehostet bei Cloudflare).
          </p>
          <p>
            Diese Daten werden ausschließlich zur Beantwortung deiner Anfrage verwendet und nicht an Dritte
            weitergegeben. Die Speicherung erfolgt auf Servern von Cloudflare (USA, EU-US Data Privacy
            Framework zertifiziert).
          </p>
          <p>
            Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung von
            Kontaktanfragen).
          </p>
          <p>
            Speicherdauer: [z. B. 90 Tage nach Beantwortung der Anfrage, danach manuelle Loschung].
            Du kannst jederzeit die Loschung deiner gespeicherten Daten verlangen (siehe Abschnitt 8).
          </p>
          <p>
            Die Ubertragung des Formulars erfolgt verschlusselt (HTTPS/TLS).
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>5. Cookies</h2>
          <p>
            Diese Website verwendet ein technisch notwendiges Cookie:
          </p>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Zweck</th>
                <th>Speicherdauer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>intro_seen</code></td>
                <td>Speichert, ob die Intro-Animation bereits gezeigt wurde, um sie bei erneuten Besuchen zu uberspringen.</td>
                <td>Session / bis zum Loschen des Browser-Caches</td>
              </tr>
            </tbody>
          </table>
          <p>
            Das Cookie dient ausschließlich der Steuerung der Seitennavigation und enthalt keine
            personenbezogenen Daten. Es wird kein Tracking oder Profiling vorgenommen.
          </p>
          <p>
            Rechtsgrundlage: § 25 Abs. 2 Nr. 2 TDDDG (technisch notwendig).
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>6. Externe Links</h2>
          <p>
            Diese Website enthalt Links zu externen Profilen auf GitHub und LinkedIn. Das Anklicken dieser
            Links fuhrt dich zu den jeweiligen Plattformen, die ihrerseits eigene Datenschutzbestimmungen
            haben. Fur die Datenverarbeitung durch diese Plattformen bin ich nicht verantwortlich.
          </p>
          <ul className={styles.list}>
            <li>
              GitHub: <a href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement" className={styles.link} target="_blank" rel="noopener noreferrer">GitHub Datenschutzerklarung</a>
            </li>
            <li>
              LinkedIn: <a href="https://de.linkedin.com/legal/privacy-policy" className={styles.link} target="_blank" rel="noopener noreferrer">LinkedIn Datenschutzerklarung</a>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>7. Keine Analyse- oder Tracking-Tools</h2>
          <p>
            Diese Website verwendet keine Analyse- oder Tracking-Dienste (z. B. Google Analytics,
            Matomo oder ahnliche). Es werden keine Nutzungsprofile erstellt.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>8. Deine Rechte</h2>
          <p>Du hast gemaß DSGVO folgende Rechte:</p>
          <ul className={styles.list}>
            <li><strong>Auskunft</strong> (Art. 15 DSGVO): Auskunft uber die uber dich gespeicherten Daten</li>
            <li><strong>Berichtigung</strong> (Art. 16 DSGVO): Berichtigung unrichtiger Daten</li>
            <li><strong>Loschung</strong> (Art. 17 DSGVO): Loschung deiner Daten, sofern keine gesetzliche Aufbewahrungspflicht besteht</li>
            <li><strong>Einschrankung</strong> (Art. 18 DSGVO): Einschrankung der Verarbeitung</li>
            <li><strong>Datenubertragbarkeit</strong> (Art. 20 DSGVO): Ubertragung deiner Daten in einem maschinenlesbaren Format</li>
            <li><strong>Widerspruch</strong> (Art. 21 DSGVO): Widerspruch gegen die Verarbeitung auf Basis berechtigter Interessen</li>
          </ul>
          <p>
            Zur Ausubung dieser Rechte wende dich per E-Mail an:{' '}
            <a href={`mailto:${email}`} className={styles.link}>{email}</a>
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>9. Beschwerderecht</h2>
          <p>
            Du hast das Recht, dich bei einer Datenschutzaufsichtsbehorde zu beschweren. Die zustandige
            Behorde richtet sich nach deinem Wohnort. Eine Ubersicht aller deutschen Aufsichtsbehorden
            findest du auf der Website des{' '}
            <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" className={styles.link} target="_blank" rel="noopener noreferrer">
              Bundesbeauftragten fur den Datenschutz und die Informationsfreiheit (BfDI)
            </a>.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>10. Sicherheit</h2>
          <p>
            Diese Website ubertragt alle Daten verschlusselt uber HTTPS (TLS). Trotz technischer und
            organisatorischer Maßnahmen kann keine vollstandige Sicherheit garantiert werden.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>11. Anderungen dieser Datenschutzerklarung</h2>
          <p>
            Diese Datenschutzerklarung kann angepasst werden, wenn sich rechtliche Anforderungen andern
            oder neue Dienste eingesetzt werden. Die jeweils aktuelle Version ist auf dieser Seite
            abrufbar. Stand: Juni 2026.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
