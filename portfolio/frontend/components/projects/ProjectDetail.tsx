/** Author: Liliane Schutz */

import { Project } from '@/lib/types';
import styles from './ProjectDetail.module.css';
import ProcessStep from './ProcessStep';
import ImageWithCaption from '../ui/ImageWithCaption';
import Button from '../ui/Button';

interface ProjectDetailProps {
  project: Project;
  prevProject?: Project;
  nextProject?: Project;
}

export default function ProjectDetail({ project, prevProject, nextProject }: ProjectDetailProps) {
  // Placeholder process steps - vary slightly by slug
  const processSteps = getProcessStepsForProject(project.slug);
  
  return (
    <article className={styles.detail}>
      {/* Intro Section */}
      <section className={styles.intro}>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.description}>{project.shortDescription}</p>
      </section>

      {/* Problem & Goals */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Problem & Ziele</h2>
        <div className={styles.content}>
          <p>
            Dieses Projekt adressiert zentrale Herausforderungen im Bereich {project.category}.
          </p>
          <ul className={styles.list}>
            <li>Identifikation der Kernprobleme und User Needs</li>
            <li>Definition klarer, messbarer Projektziele</li>
            <li>Entwicklung eines ganzheitlichen Lösungsansatzes</li>
            <li>Fokus auf Usability und technische Machbarkeit</li>
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Prozess</h2>
        <div className={styles.processSteps}>
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              stepNumber={index + 1}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </section>

      {/* Screens */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Screens & Designs</h2>
        <div className={styles.screens}>
          <ImageWithCaption
            src=""
            alt={`${project.title} - Übersichtsansicht`}
            caption="Hauptansicht der Anwendung"
          />
          <ImageWithCaption
            src=""
            alt={`${project.title} - Detailansicht`}
            caption="Detailansicht mit Interaktionselementen"
          />
          <ImageWithCaption
            src=""
            alt={`${project.title} - Mobile Ansicht`}
            caption="Responsive Mobile-Darstellung"
          />
        </div>
      </section>

      {/* Outcomes */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Ergebnisse</h2>
        <div className={styles.content}>
          <p>
            Das Projekt wurde erfolgreich umgesetzt und erreichte die gesteckten Ziele:
          </p>
          <ul className={styles.list}>
            <li>Erfolgreiche Implementierung aller Kernfunktionalitäten</li>
            <li>Positive Testresultate bei User Testing und Code Review</li>
            <li>Skalierbare Architektur mit klarer Dokumentation</li>
            <li>Einsatz moderner Best Practices und Design Patterns</li>
            <li>Potenzial für zukünftige Erweiterungen gegeben</li>
          </ul>
        </div>
      </section>

      {/* Navigation */}
      <nav className={styles.navigation}>
        <div className={styles.navLeft}>
          <Button href="/projekte" variant="secondary">
            ← Alle Projekte
          </Button>
        </div>
        <div className={styles.navRight}>
          {prevProject && (
            <Button href={`/projekte/${prevProject.slug}`} variant="secondary">
              ← Vorheriges
            </Button>
          )}
          {nextProject && (
            <Button href={`/projekte/${nextProject.slug}`} variant="secondary">
              Nächstes →
            </Button>
          )}
        </div>
      </nav>
    </article>
  );
}

// Helper function to generate varied placeholder steps
function getProcessStepsForProject(slug: string) {
  const baseSteps = [
    {
      title: 'Research & Analyse',
      description: 'Umfassende Recherche zu Nutzeranforderungen, technischen Rahmenbedingungen und Best Practices im Bereich.'
    },
    {
      title: 'Konzeption',
      description: 'Entwicklung eines Lösungskonzepts mit Wireframes, User Flows und technischer Architektur.'
    },
    {
      title: 'Prototyping',
      description: 'Iterative Erstellung von Prototypen zur Validierung des Konzepts und frühzeitigem Testing.'
    },
    {
      title: 'Implementierung',
      description: 'Technische Umsetzung mit modernen Frameworks und Tools, unter Berücksichtigung von Code-Qualität und Performance.'
    }
  ];

  // Add variation based on slug
  if (slug === 'projekt-alpha' || slug === 'projekt-beta') {
    return [
      ...baseSteps,
      {
        title: 'Testing & Optimierung',
        description: 'Durchführung von User Tests, Performance-Optimierung und Bugfixing vor dem Launch.'
      }
    ];
  }

  return baseSteps;
}
