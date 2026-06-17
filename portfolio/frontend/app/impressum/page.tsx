/** Author: Liliane Schutz */

import type { Metadata } from 'next';
import PageShell from '@/components/layout/PageShell';
import PageHeader from '@/components/layout/PageHeader';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Impressum – Liliane Schutz',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ImpressumPage() {
  return (
    <PageShell>
      <PageHeader title="Impressum" />

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.heading}>Angaben gemäß § 5 DDG</h2>

          <p>
            [Vorname Nachname]<br />
            [Straße Hausnummer]<br />
            [PLZ Stadt]<br />
            Deutschland
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Kontakt</h2>
          <p>
            E-Mail: <a href="mailto:liliane.v.schutz@gmail.com" className={styles.link}>liliane.v.schutz@gmail.com</a><br />
            Telefon: [Telefonnummer]
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Wirtschafts-Identifikationsnummer</h2>
          <p>
            [W-IdNr. eintragen, sobald vom Bundeszentralamt für Steuern zugeteilt]
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Verantwortlich für den Inhalt</h2>
          <p>
            [Vorname Nachname]<br />
            [Straße Hausnummer]<br />
            [PLZ Stadt]
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte auf dieser Website nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG bin ich als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
            Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
            der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
            Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Haftung für Links</h2>
          <p>
            Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss
            habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
            der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
          </p>
          <p>
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
            einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich
            derartige Links umgehend entfernen.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
            deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
            außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung der jeweiligen
            Autorin. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch
            gestattet.
          </p>
          <p>
            Soweit die Inhalte auf dieser Seite nicht von der Betreiberin erstellt wurden, werden die
            Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
            Solltest du trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen
            entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte
            umgehend entfernen.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
