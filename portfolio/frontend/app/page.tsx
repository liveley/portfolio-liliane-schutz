/**
 * Author: Liliane Schutz
 * Home Page - Landing mit Hero und CTAs
 */
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import styles from "./page.module.css";

export default function Home() {
  return (
    <PageShell>
      <div className={styles.home}>
      <section className={styles.hero}>
        <h1>Hallo, ich bin Liliane.</h1>
        <p className={styles.intro}>
          Ich studiere Informatik und Design und entwickle digitale Produkte mit Fokus auf User Experience und sauberen Code. 
          Hier findest du meine Projekte, meine Skills und wie du mich erreichen kannst.
        </p>
        <div className={styles.ctas}>
          <Link href="/projekte" className={styles.primaryButton}>
            Meine Projekte
          </Link>
          <Link href="/ueber-mich" className={styles.secondaryButton}>
            Über mich
          </Link>
          <Link href="/kontakt" className={styles.secondaryButton}>
            Kontakt
          </Link>
        </div>
      </section>

      <section className={styles.featuredSection}>
        <h2>Featured Projects</h2>
        <p className={styles.placeholder}>
          [Platzhalter für Featured Projects – wird in Step 5 implementiert]
        </p>
      </section>
      </div>
    </PageShell>
  );
}
