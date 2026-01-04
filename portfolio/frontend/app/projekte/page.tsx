/**
 * Author: Liliane Schutz
 * Projekte Übersichtsseite - Server Component
 * Loads project data and passes to FilterChips (Client Component)
 */
import { projects } from "@/lib/data/projects";
import FilterChips from "@/components/projects/FilterChips";
import styles from "./page.module.css";

export default function ProjektePage() {
  return (
    <div className={styles.page}>
      <h1>Projekte</h1>
      <p className={styles.intro}>
        Hier findest du eine Auswahl meiner Projekte aus den Bereichen Coding, UI/UX Design 
        und Datenvisualisierung. Alle Inhalte sind Platzhalter für die Entwicklung.
      </p>

      {/* FilterChips is a Client Component with useState */}
      <FilterChips projects={projects} />
    </div>
  );
}
