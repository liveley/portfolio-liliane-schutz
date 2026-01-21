/**
 * Author: Liliane Schutz
 * Projekte Übersichtsseite - Client Component
 * Loads project data from REST API via Pages Functions
 */

import PageShell from "@/components/layout/PageShell";
import PageHeader from "@/components/layout/PageHeader";
import ProjectsListClient from "@/components/projects/ProjectsListClient";

export default function ProjektePage() {
  return (
    <PageShell>
      <PageHeader
        title="Projekte"
        lead="Hier findest du eine Auswahl meiner Projekte aus den Bereichen Coding, UI/UX Design und Datenvisualisierung."
      />

      <ProjectsListClient />
    </PageShell>
  );
}
