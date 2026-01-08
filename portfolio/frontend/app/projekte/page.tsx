/**
 * Author: Liliane Schutz
 * Projekte Übersichtsseite - Server Component
 * Loads project data and passes to FilterChips (Client Component)
 */
import { getAllProjects } from "@/lib/data/projects";
import PageShell from "@/components/layout/PageShell";
import PageHeader from "@/components/layout/PageHeader";
import FilterChips from "@/components/projects/FilterChips";

export default function ProjektePage() {
  const projects = getAllProjects();
  
  return (
    <PageShell>
      <PageHeader
        title="Projekte"
        lead="Hier findest du eine Auswahl meiner Projekte aus den Bereichen Coding, UI/UX Design und Datenvisualisierung."
      />

      {/* FilterChips is a Client Component with useState */}
      <FilterChips projects={projects} />
    </PageShell>
  );
}
