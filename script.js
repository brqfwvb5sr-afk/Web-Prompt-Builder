function get(id) {
  const el = document.getElementById(id);
  const value = el ? el.value.trim() : "";
  return value || "nicht bekannt";
}

function slugify(text) {
  return (text || "website-demo")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "website-demo";
}

document.getElementById("promptForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const businessName = get("businessName");
  const folderName = slugify(businessName + " " + get("location"));
  const repoName = get("repoName") === "nicht bekannt" ? "Web-Prompt-Builder" : get("repoName");

  const prompt = `Du bist ein professioneller Fullstack-Webentwickler und UI/UX-Designer.

AUFGABE:
Erstelle eine hochwertige Demo-Website für ein lokales Geschäft und speichere sie sauber in einem eigenen Unterordner im bestehenden GitHub-Repository.

GESCHÄFTSDATEN:
Name: ${businessName}
Branche: ${get("businessType")}
Ort / Region: ${get("location")}
Adresse: ${get("address")}
Telefon / WhatsApp: ${get("phone")}
E-Mail: ${get("email")}
Aktuelle Website: ${get("currentWebsite")}
Google-Maps-Link: ${get("mapsLink")}

ÖFFNUNGSZEITEN:
${get("hours")}

BESCHREIBUNG / ÖFFENTLICHE INFORMATIONEN:
${get("description")}

NOTIZEN FÜR DIE WEBSITE:
${get("notes")}

DESIGN-VORGABEN:
Stil: ${get("style")}
Ziel der Website: ${get("goal")}
Umfang: ${get("size")}
Technik: ${get("tech")}
Deployment-Ziel: ${get("deployment")}

SEHR WICHTIGE REGELN:
- Erfinde keine falschen Fakten, keine Bewertungen, keine Preise, keine Auszeichnungen und keine nicht angegebenen Angebote.
- Wenn Informationen fehlen, verwende neutrale Platzhalter oder schreibe zurückhaltend, z. B. "Kontakt aufnehmen" statt falsche Angaben.
- Nutze die Notizen als inhaltliche Hinweise, aber veröffentliche keine internen Notizen direkt als peinlichen Klartext.
- Die Website soll wie eine seriöse Kundendemo wirken, nicht wie ein KI-Experiment.
- Schreibe alle Texte natürlich, professionell und passend zur Branche.
- Die Seite muss auf Smartphone, Tablet und Desktop gut aussehen.
- Achte auf saubere Abstände, gute Typografie, klare Buttons und schnelle Ladezeit.

GITHUB-ORDNERSTRUKTUR – ABSOLUT WICHTIG:
Das bestehende GitHub-Repository heisst:
${repoName}

Erstelle KEINE Dateien direkt im Root-Verzeichnis.
Erstelle ALLE Dateien ausschliesslich in diesem Unterordner:
projects/${folderName}/

Die Struktur muss genau so aussehen:
projects/${folderName}/index.html
projects/${folderName}/style.css
projects/${folderName}/script.js
projects/${folderName}/README.md

Falls du zusätzliche Dateien brauchst, müssen sie ebenfalls in diesem Ordner liegen, z. B.:
projects/${folderName}/assets/

WICHTIG:
- Überschreibe keine bestehenden Projekte im Ordner projects/.
- Wenn der Ordner projects/ bereits existiert, erstelle nur den neuen Unterordner projects/${folderName}/.
- Wenn der Unterordner projects/${folderName}/ bereits existiert, frage nicht nach, sondern erstelle eine Variante mit Suffix, z. B. projects/${folderName}-2/.
- Jede neue Website muss in einem eigenen Unterordner liegen, damit mehrere Kundendemos übersichtlich bleiben.

INHALT DER WEBSITE:
Erstelle je nach Branche passende Sektionen:
1. Hero-Bereich mit klarer Überschrift und Call-to-Action
2. Kurzvorstellung des Geschäfts
3. Angebote / Leistungen / Menü / Services passend zur Branche
4. Warum dieses Geschäft? Vertrauens- und Nutzenargumente
5. Öffnungszeiten
6. Standort / Kontakt
7. Abschliessender Call-to-Action

CALL-TO-ACTION:
Nutze passende Buttons, z. B.:
- Jetzt anrufen
- Kontakt aufnehmen
- Route planen
- Reservation anfragen
Falls keine E-Mail bekannt ist, verwende keine E-Mail-Adresse im Kontaktformular.
Falls keine Website bekannt ist, schreibe nicht "Besuchen Sie unsere Website".

TECHNISCHE ANFORDERUNGEN:
- Erstelle vollständigen, lauffähigen Code.
- Nutze semantisches HTML.
- Nutze modernes CSS mit responsive Design.
- JavaScript nur verwenden, wenn es sinnvoll ist.
- Keine externen Abhängigkeiten, ausser sie sind wirklich nötig.
- Kein Backend.
- Keine Tracking-Skripte.
- Keine erfundenen Bilder. Nutze neutrale Platzhalter oder CSS-Flächen, falls keine Bilder vorhanden sind.

README:
Erstelle in projects/${folderName}/README.md:
- Name des Projekts
- Kurzbeschreibung
- verwendete Geschäftsdaten
- Hinweis, dass es eine Demo ist
- Anleitung zur lokalen Vorschau
- Deployment-Hinweis für ${get("deployment")}

SHELL / GIT-HINWEISE:
Gib am Ende kurz passende Commands an, z. B.:
mkdir -p projects/${folderName}
# Dateien in projects/${folderName}/ erstellen
git add projects/${folderName}
git commit -m "Add demo website for ${businessName}"
git push

OUTPUT:
- Erstelle direkt die Dateien im genannten Ordner.
- Gib nur notwendige kurze Hinweise aus.
- Keine langen Erklärungen.
- Ziel ist eine fertige, verkaufbare Demo-Website.`;

  document.getElementById("output").value = prompt;
});

document.getElementById("copyBtn").onclick = async () => {
  const text = document.getElementById("output").value;
  if (!text) return;
  await navigator.clipboard.writeText(text);
};

document.getElementById("clearBtn").onclick = () => {
  document.getElementById("promptForm").reset();
  document.getElementById("output").value = "";
};
