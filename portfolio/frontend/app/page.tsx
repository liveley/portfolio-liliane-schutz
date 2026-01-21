/**
 * Author: Liliane Schutz
 * Home Page - Landing mit Hero und CTAs
 */

import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import AuroraHeading from "@/components/ui/AuroraHeading";
import FeaturedProjectsClient from "@/components/projects/FeaturedProjectsClient";
import styles from "./page.module.css";

export default function Home() {

  return (
    <PageShell>
        <section className={styles.hero}>
          <AuroraHeading as="h1" size="large">
            Hallo, ich bin Liliane.
          </AuroraHeading>
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

        <FeaturedProjectsClient />
      </PageShell>
  );
}
