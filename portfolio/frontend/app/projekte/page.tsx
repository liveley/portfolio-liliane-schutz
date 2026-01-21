/**
 * Author: Liliane Schutz
 * Projekte Übersichtsseite - Server Component
 * Loads project data from Backend REST API
 */
import { fetchProjects } from "@/lib/api";
import PageShell from "@/components/layout/PageShell";
import PageHeader from "@/components/layout/PageHeader";
import FilterChips from "@/components/projects/FilterChips";

export default async function ProjektePage() {
  const projects = await fetchProjects();
  
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
