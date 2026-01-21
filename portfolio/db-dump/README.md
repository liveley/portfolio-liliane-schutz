# MongoDB Dump – Praktikum 07

**Autorin:** Liliane Schutz

Dieser Ordner enthält einen vollständigen Dump der `portfoliodb` Datenbank.

## Übersicht

**Erstellt am:** 17.01.2026  
**Datenbank:** portfoliodb  
**Collections:**
- `projects` (6 Dokumente)
- `contactSubmissions` (Struktur vorhanden für Kontaktformular-Submissions)

## Projekte im Dump

1. **Life Threads** – Interaktive Datenvisualisierung (data, featured)
2. **Ressource Realms** – 3D-Strategiespiel (coding, featured)
3. **studyID Lern-Bot** – KI-Chatbot (coding)
4. **Walkable Memory** – Digitale Erinnerungstour (uiux)
5. **ReadEra Vokabellern-System** – n8n Workflow (coding)
6. **SWM Change Management** – KI-gestützte Changebegleitung (coding, featured)

## Dump erstellen

```bash
# 1. Im Docker Container mongodump ausführen
docker exec portfolio-mongodb mongodump \
  --username=admin \
  --password=portfolio2026 \
  --authenticationDatabase=admin \
  --db=portfoliodb \
  --out=/tmp/dump

# 2. Dump aus Container auf Host kopieren
docker cp portfolio-mongodb:/tmp/dump/portfoliodb ./db-dump/portfoliodb-DATUM
```

## Dump wiederherstellen (Restore)

```bash
# Variante 1: Mit docker exec
docker exec -i portfolio-mongodb mongorestore \
  --username=admin \
  --password=portfolio2026 \
  --authenticationDatabase=admin \
  --db=portfoliodb \
  /tmp/dump/portfoliodb

# Variante 2: Lokaler mongorestore (falls MongoDB Tools installiert)
mongorestore \
  --uri="mongodb://admin:portfolio2026@localhost:27017/?authSource=admin" \
  --db=portfoliodb \
  ./db-dump/portfoliodb
```

## Dump-Struktur

```
portfoliodb/
├── projects.bson              # Binäre Daten (6 Projekte)
├── projects.metadata.json     # Schema, Indizes, Validierung
└── prelude.json               # MongoDB Version Info
```

## Verwendete Credentials

**Wichtig für Wiederherstellung:**
- **Username:** admin
- **Password:** portfolio2026
- **Auth Database:** admin
- **Target Database:** portfoliodb

## Für Abgabe

Dieser Dump ist Teil der Praktikum-07-Abgabe und kann mit den obigen Befehlen in einer MongoDB-Instanz wiederhergestellt werden.

## Wie wurde der Dump erzeugt?

```bash
# 1. Im Docker Container mongodump ausführen
docker exec portfolio-mongo-aufgabe07 mongodump --db portfoliodb --out /tmp/dump

# 2. Dump aus Container kopieren
docker cp portfolio-mongo-aufgabe07:/tmp/dump/portfoliodb ./db-dump/portfoliodb
```

## Dump wiederherstellen (Restore)

```bash
# Variante 1: Mit docker exec
docker exec -i portfolio-mongo-aufgabe07 mongorestore --db portfoliodb /tmp/dump/portfoliodb

# Variante 2: Lokaler mongorestore (falls MongoDB Tools installiert)
mongorestore --db portfoliodb ./db-dump/portfoliodb
```

## Inhalt

### Collection: projects
- Life Threads – Interaktive Datenvisualisierung
- Ressource Realms – 3D-Strategiespiel  
- studyID Lern-Bot
- Walkable Memory – Digitale Erinnerungstour

### Collection: contactSubmissions
Leer (Struktur vorhanden für Kontaktformular-Submissions)

## Verwendete Befehle

```bash
# Dump erstellen
mongodump --db portfoliodb --out ./db-dump

# Dump wiederherstellen
mongorestore --db portfoliodb ./db-dump/portfoliodb

# Einzelne Collection wiederherstellen
mongorestore --db portfoliodb --collection projects ./db-dump/portfoliodb/projects.bson
```
