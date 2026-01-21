/**
 * Author: Liliane Schutz
 * Home Page - Landing mit Hero und CTAs
 */

import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import ProjectCard from "@/components/projects/ProjectCard";
import AuroraHeading from "@/components/ui/AuroraHeading";
import { fetchProjects } from "@/lib/api";
import styles from "./page.module.css";

export default async function Home() {
  const featuredProjects = await fetchProjects({ featured: true });

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

        {featuredProjects.length > 0 && (
          <section className={styles.featuredSection}>
            <AuroraHeading as="h2" size="large" className={styles.featuredTitle}>Featured Projects</AuroraHeading>
            <div className={styles.featuredGrid}>
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}
      </PageShell>
  );
}
