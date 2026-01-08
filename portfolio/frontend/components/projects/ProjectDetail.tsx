/** Author: Liliane Schutz */

import Image from 'next/image';
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
  const hasDetailContent = project.detail !== undefined;
  
  return (
    <article className={styles.detail}>
      {/* Intro Section with Main Image */}
      <section className={styles.intro}>
        {project.image && (
          <div className={styles.heroImage}>
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={600}
              className={styles.heroImageImg}
              priority
            />
          </div>
        )}
        <h1 className={`${styles.title} heading-colorful`} data-text={project.title}>{project.title}</h1>
        <p className={styles.description}>{project.shortDescription}</p>
        {hasDetailContent && project.detail?.context && (
          <p className={styles.context}>{project.detail.context}</p>
        )}
      </section>

      {/* Problem & Goals */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Problem & Ziele</h2>
        <div className={styles.content}>
          {hasDetailContent && project.detail?.problem ? (
            <>
              <p>{project.detail.problem}</p>
              {project.detail.goals && project.detail.goals.length > 0 && (
                <ul className={styles.list}>
                  {project.detail.goals.map((goal, index) => (
                    <li key={index}>{goal}</li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <>
              <p>
                Dieses Projekt adressiert zentrale Herausforderungen im Bereich {project.category}.
              </p>
              <ul className={styles.list}>
                <li>Identifikation der Kernprobleme und User Needs</li>
                <li>Definition klarer, messbarer Projektziele</li>
                <li>Entwicklung eines ganzheitlichen Lösungsansatzes</li>
                <li>Fokus auf Usability und technische Machbarkeit</li>
              </ul>
            </>
          )}
        </div>
      </section>

      {/* Role (if available) */}
      {hasDetailContent && project.detail?.role && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Meine Rolle</h2>
          <div className={styles.content}>
            <p>{project.detail.role}</p>
          </div>
        </section>
      )}

      {/* Process */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Prozess</h2>
        <div className={styles.processSteps}>
          {hasDetailContent && project.detail?.process && project.detail.process.length > 0 ? (
            project.detail.process.map((step, index) => (
              <ProcessStep
                key={index}
                stepNumber={index + 1}
                title={step.title}
                description={step.description}
              />
            ))
          ) : (
            getDefaultProcessSteps().map((step, index) => (
              <ProcessStep
                key={index}
                stepNumber={index + 1}
                title={step.title}
                description={step.description}
              />
            ))
          )}
        </div>
      </section>

      {/* Screens - Placeholder Images */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Screens & Designs</h2>
        <div className={styles.screens}>
          {project.image && (
            <ImageWithCaption
              src={project.image}
              alt={`${project.title} - Hauptansicht`}
              caption="Hauptansicht der Anwendung"
            />
          )}
          <ImageWithCaption
            src=""
            alt={`${project.title} - Weitere Ansicht`}
            caption="Weitere Ansichten folgen"
          />
        </div>
      </section>

      {/* Outcomes */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Ergebnisse</h2>
        <div className={styles.content}>
          {hasDetailContent && project.detail?.outcomes && project.detail.outcomes.length > 0 ? (
            <ul className={styles.list}>
              {project.detail.outcomes.map((outcome, index) => (
                <li key={index}>{outcome}</li>
              ))}
            </ul>
          ) : (
            <>
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
            </>
          )}
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

// Default process steps as fallback
function getDefaultProcessSteps() {
  return [
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
}
