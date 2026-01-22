/** Author: Liliane Schutz */

import TransitionLink from "@/components/layout/TransitionLink";
import PageShell from "@/components/layout/PageShell";
import PageHeader from "@/components/layout/PageHeader";
import Button from "@/components/ui/Button";
import styles from "./not-found.module.css";

/**
 * Not Found Page (404)
 * App Router convention: app/not-found.tsx
 * Wird automatisch bei unmatched routes angezeigt
 */
export default function NotFound() {
  return (
    <PageShell>
      <div className={styles.container}>
        {/* Large 404 in background */}
        <div className={styles.background404} aria-hidden="true">
          404
        </div>

        {/* Content */}
        <div className={styles.content}>
          <PageHeader
            title="Seite nicht gefunden"
            lead="Die Seite existiert nicht oder ist gerade unter Bearbeitung."
          />

          <div className={styles.actions}>
               <TransitionLink href="/" className={styles.link}>
                 <Button variant="primary">Zur Startseite</Button>
               </TransitionLink>
            <TransitionLink href="/projekte" className={styles.link}>
              <Button variant="secondary">Zu den Projekten</Button>
            </TransitionLink>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
