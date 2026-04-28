/** Author: Liliane Schutz */
'use client';

import Image from 'next/image';
import { Project } from '@/lib/types';
import AuroraHeading from '@/components/ui/AuroraHeading';
import ProjectMeta from './ProjectMeta';
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
        {project.coverImage && (
          <div className={styles.heroImage}>
            <Image
              src={project.coverImage}
              alt={project.title}
              width={1200}
              height={600}
              className={styles.heroImageImg}
              priority
            />
          </div>
        )}
        <AuroraHeading as="h1" size="large" className={styles.title}>{project.title}</AuroraHeading>
        
        {/* Mobile View: side-by-side grid split */}
        <div className={styles.mobileGrid}>
            <div className={styles.introText}>
                <p className={styles.description}>{project.shortDescription}</p>
                {hasDetailContent && project.detail?.context && (
                <p className={styles.context}>{project.detail.context}</p>
                )}
            </div>
             {/* Project Meta - Mobile View */}
            <div className={styles.metaSection}>
                <ProjectMeta project={project} />
            </div>
        </div>
      </section>

      {/* Project Meta - Tablet (non-mobile but < 1024px) handled via CSS hiding */}

      {/* Problem & Goals */}
      <section className={styles.section}>
        <AuroraHeading as="h2" className={styles.sectionTitle}>Problem & Ziele</AuroraHeading>
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
          <AuroraHeading as="h2" className={styles.sectionTitle}>Meine Rolle</AuroraHeading>
          <div className={styles.content}>
            <p>{project.detail.role}</p>
          </div>
        </section>
      )}

      {/* Process */}
      <section className={styles.section}>
        <AuroraHeading as="h2" className={styles.sectionTitle}>Prozess</AuroraHeading>
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
        <AuroraHeading as="h2" className={styles.sectionTitle}>Screens & Designs</AuroraHeading>
        <div className={styles.screens}>
          {hasDetailContent && project.detail?.images && project.detail.images.length > 0 ? (
            project.detail.images.map((imageSrc, index) => (
              <ImageWithCaption
                key={`${project.slug}-image-${index + 1}`}
                src={imageSrc}
                alt={`${project.title} - ${formatImageLabel(imageSrc, index + 1)}`}
                caption={formatImageLabel(imageSrc, index + 1)}
              />
            ))
          ) : project.coverImage ? (
            <ImageWithCaption
              src={project.coverImage}
              alt={`${project.title} - Hauptansicht`}
              caption="Hauptansicht der Anwendung"
            />
          ) : null}
        </div>
      </section>

      {/* Results */}
      <section className={styles.section}>
        <AuroraHeading as="h2" className={styles.sectionTitle}>Ergebnisse</AuroraHeading>
        <div className={styles.content}>
          {hasDetailContent && project.detail?.results && project.detail.results.length > 0 ? (
            <ul className={styles.list}>
              {project.detail.results.map((result, index) => (
                <li key={index}>{result}</li>
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

function formatImageLabel(imagePath: string, fallbackIndex: number): string {
  const fixedCaption = getFixedImageCaption(imagePath);
  if (fixedCaption) return fixedCaption;

  const file = imagePath.split('/').pop() ?? '';
  const noExt = file.replace(/\.[a-zA-Z0-9]+$/, '');

  const normalized = noExt
    .replace(/^screen[-_. ]*\d+[-_. ]*/i, '')
    .replace(/- iMockup - iPhone \d+ Pro Max/i, '')
    .replace(/[_.-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (!normalized) return `Bild ${fallbackIndex}`;

  const titled = normalized
    .split(' ')
    .map((word) => {
      if (!word) return word;
      if (/^[A-Z]{2,}$/.test(word)) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');

  return titled;
}

function getFixedImageCaption(imagePath: string): string | null {
  const captions: Record<string, string> = {
    "/projects/life-threads/screen-01-intro-hero.png": "Intro mit Kennzahlen und Kontext",
    "/projects/life-threads/screen-02-year-at-a-glance.png": "Jahresansicht mit Aktivitätsmustern",
    "/projects/life-threads/screen-03-day-clock-phase.png": "Day-Clock mit Phasenvergleich",
    "/projects/life-threads/screen-04-sunburst-sportmix.png": "Sunburst: Aktivitätsmix über Phasen",
    "/projects/life-threads/screen-05-phase-explorer.png": "Phase Explorer für freie Vergleiche",

    "/projects/ressource-realms/screen-00-start-screen.png": "Startmenü des Spiels",
    "/projects/ressource-realms/screen-02-game-explanation.png": "Spielerklärung und Einstieg",
    "/projects/ressource-realms/screen-03-hexagons-chosen.png": "3D-Spielbrett mit Hexfeldern",
    "/projects/ressource-realms/screen-06-Entwicklungskarten.png": "Entwicklungskarten-Interface",
    "/projects/ressource-realms/screen-08-victory-screen.png": "Siegansicht mit Endstand",

    "/projects/studyid/screen-01-welcome.png": "Willkommensansicht von Joy",
    "/projects/studyid/screen-02-chat-example.png": "Fachliche Frage im Chatverlauf",
    "/projects/studyid/screen-03-chat-window-big.png": "Chatfenster mit Lernkontext",
    "/projects/studyid/Screenshot 2025-01-20 205411.png": "Upload-Feedback für neue PDFs",
    "/projects/studyid/Screenshot 2025-01-23 174928.png": "Geladener Verlauf aus gespeicherten Chats",

    "/projects/walkable-memory/screen-01-landing-laptop.png": "Landing mit Tour-Einstieg",
    "/projects/walkable-memory/screen-02-map-overview-single.png": "Kartenübersicht der Stationen",
    "/projects/walkable-memory/screen-03-route-mode.png": "Geführter Routenmodus",
    "/projects/walkable-memory/screen-04-memory-moment2.png": "Memory-Moment Detailansicht",
    "/projects/walkable-memory/screen-05-list-progress.png": "Listenansicht mit Fortschritt",

    "/projects/swm/screen-01-landing.png": "Landing des Change Portals",
    "/projects/swm/screen-02-classification.png": "Projektklassifizierung mit Leitfragen",
    "/projects/swm/screen-03-dynamic-form.png": "Dynamisches Formular mit Feldlogik",
    "/projects/swm/screen-04-chat-assistant-2.png": "Chat-Assistent im Formularflow",
    "/projects/swm/screen-05-dashboard-session-details.png": "Dashboard mit Session-Details",

    "/projects/uchimizu/Uchimizu-preview-screen.png": "Uchimizu Startscreen und visuelle Vorschau",
    "/projects/uchimizu/impactseite-2.png": "Impact-Seite mit Wirkung und FAQ",
    "/projects/uchimizu/join-2.png": "Join-Bereich mit Beteiligungsstufen",
    "/projects/uchimizu/uchimizu-empathize-and-discover.png": "Research: Empathize & Discover",
    "/projects/uchimizu/uchimizu-user-journey-empathy-map.png": "Journey und Empathy Map aus der Synthese",
  };

  return captions[imagePath] ?? null;
}
