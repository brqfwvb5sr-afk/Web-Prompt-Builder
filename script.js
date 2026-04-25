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

  const prompt = `Du bist ein sehr guter Webdesigner und Frontend-Entwickler. Erstelle KEINE typische KI-Landingpage. Ziel ist eine cleane, bildstarke, glaubwürdige Website wie eine echte lokale Geschäftswebsite.

WICHTIGER DESIGN-STIL:
Orientiere dich an echten modernen lokalen Websites: grosse echte Bilder, ruhiger Header, klare Navigation, dezente Farben, wenig unnötiger Text, keine übertriebenen Karten-Layouts. Die Website soll visuell und hochwertig wirken, nicht wie eine generische KI-Demo.

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

INTERNE NOTIZEN:
${get("notes")}

DESIGN-VORGABEN:
Stil: ${get("style")}
Ziel: ${get("goal")}
Umfang: ${get("size")}
Technik: ${get("tech")}
Deployment: ${get("deployment")}

GITHUB-STRUKTUR:
Repository: ${repoName}
Alle Dateien müssen in diesen Ordner:
projects/${folderName}/

Pflichtstruktur:
projects/${folderName}/index.html
projects/${folderName}/style.css
projects/${folderName}/script.js
projects/${folderName}/README.md
projects/${folderName}/assets/   falls Assets nötig sind

Niemals Dateien im Root erstellen. Bestehende Projekte nicht überschreiben. Wenn der Ordner existiert, verwende projects/${folderName}-2/.

QUELL-WEBSITE NUTZEN:
Wenn eine aktuelle Website angegeben ist, analysiere sie zuerst gründlich:
- sichtbare Texte
- Navigation
- Logo
- Bilder
- Öffnungszeiten
- Kontaktinfos
- Speisekarte/Leistungen/Angebot
- Ton und Stil der bestehenden Marke

Wenn die bestehende Website gute Texte enthält, darfst und sollst du diese als Grundlage verwenden. Kürze, ordne und verbessere sie, aber erfinde keine neuen Fakten. Übernimm wichtige Originalformulierungen, wenn sie professionell und passend sind. Wenn die aktuelle Website bereits gute Informationen hat, darfst du nicht nur neue KI-Texte schreiben.

LOGO IST PFLICHT:
- Jede Website MUSS ein Logo oder mindestens eine klare Wortmarke haben.
- Wenn ein echtes Logo auf der aktuellen Website existiert, nutze es oder baue es sichtbar ein, wenn technisch möglich.
- Wenn kein echtes Logo vorhanden ist, erstelle einen professionellen Logo-Platzhalter als typografische Wortmarke aus dem Geschäftsnamen.
- Der Logo-Platzhalter soll hochwertig wirken: keine billigen Initialen-Kreise, kein generisches App-Icon.
- Logo/Wortmarke muss im Header und im Footer vorkommen.
- Wenn das echte Logo nicht eingebunden werden kann, schreibe im README: "Logo muss vor Veröffentlichung durch offizielles Logo ersetzt werden."

BILDER SIND PFLICHT:
1. Prüfe die aktuelle Website, falls angegeben.
2. Nutze vorhandene öffentlich sichtbare Bilder von der aktuellen Website als Hero-/Galerie-Bilder, wenn technisch möglich.
3. Wenn Bilder nicht sicher verwendet werden können, erstelle trotzdem ein bildorientiertes Layout mit professionellen Platzhalter-Flächen.
4. Platzhalter dürfen NICHT wie langweilige graue Kästen aussehen. Sie sollen wie echte Bildbereiche wirken: grosse Flächen, dezente Overlays, branchentypische Beschriftung, saubere Komposition.
5. Bei Restaurant/Café muss der Hero visuell sein: grosses Hintergrundbild oder grosser Bildbereich mit dunklem Overlay und weisser Typografie.
6. Kein Layout, das hauptsächlich aus Textkarten auf hellem Verlauf besteht.
7. Erstelle eine Galerie-/Atmosphäre-Sektion mit 2–4 Bildflächen oder echten Bildern.
8. Schreibe im README klar, welche Bilder echt sind und welche ersetzt werden müssen.

LAYOUT-VORGABE:
Baue die Seite so:
1. Sticky oder fixer sauberer Header mit Logo, Navigation und CTA rechts.
2. Grosser Hero über fast die ganze Bildschirmhöhe mit Bild, dunklem Overlay, grossem Titel und kurzem echten Text.
3. Direkt darunter eine ruhige Intro-Sektion mit 2 Spalten: Text + Bild/Atmosphäre.
4. Angebots-/Leistungsbereich mit maximal 3–4 klaren Punkten, nicht zu viele Karten.
5. Galerie/Atmosphäre mit echten Bildern oder hochwertigen Platzhalter-Bildflächen.
6. Öffnungszeiten und Kontakt kompakt und elegant.
7. Footer dunkel oder neutral mit Kontakt, Öffnungszeiten und Demo-Hinweis.

ANTI-KI-REGELN:
Vermeide unbedingt:
- pastellfarbene riesige leere Flächen ohne Bilder
- generische Karten mit Nummern wie 01, 02, 03
- künstliche riesige Textüberschriften ohne Bildbezug
- Fake-Testimonials
- Fake-Statistiken
- erfundene Speisen, Preise, Bewertungen oder Auszeichnungen
- übertriebene Marketingwörter
- zu viel Text im Hero
- langweilige Initialen-Logos
- sterile SaaS-Optik

TEXTREGELN:
- Wenn die bestehende Website Text enthält: vorhandene Texte bevorzugen, strukturieren und modernisieren.
- Schreibe kurz, natürlich, lokal und glaubwürdig.
- Nicht zu werblich.
- Keine falschen Fakten.
- Wenn Daten fehlen: elegant weglassen oder neutral formulieren.
- Für Schweizer Kunden: Deutsch, natürliche Schweizer Schreibweise, keine übertriebene deutsche Werbesprache.

INHALT:
Pflichtbereiche:
- Home/Hero
- Über uns / Atmosphäre
- Angebot oder Speisekarte/Leistungen, nur mit bekannten Daten
- Bilder/Einblicke
- Öffnungszeiten
- Kontakt / Route / Anrufen

CTA:
Nutze vorhandene Telefon-/Website-/Maps-Daten:
- Jetzt anrufen
- Route planen
- Tischreservation anfragen, nur wenn Restaurant/Café und sinnvoll
- Kontakt aufnehmen
Falls keine E-Mail bekannt ist, kein Formular mit Fake-Mail-Ziel bauen.

TECHNIK:
- Semantisches HTML
- Sauberes CSS
- Responsive Design
- Mobile Navigation
- Grosse Bilder müssen mit object-fit: cover funktionieren
- Sinnvolle Alt-Texte
- Meta title und meta description
- Kein Tracking
- Kein Backend
- Keine unnötigen Libraries

QUALITÄTSKONTROLLE:
Vor Abschluss selbst prüfen:
1. Sieht die Seite wie eine echte moderne lokale Website aus?
2. Gibt es grosse Bilder oder hochwertige Bildflächen?
3. Ist Logo/Branding sichtbar und sauber?
4. Wurden vorhandene Texte der Website genutzt, falls vorhanden?
5. Gibt es keine generischen KI-Karten/Nummern/Gradient-Spielereien?
6. Sind alle Dateien im richtigen Ordner?
7. Sind fehlende Daten sauber behandelt?

README:
README.md muss enthalten:
- Demo-Hinweis: nicht offizielle Website
- Quelle der verwendeten Informationen
- welche Texte/Bilder/Logos von der bestehenden Website stammen
- Bildrechte- und Logo-Hinweis
- Vorschau-/Deployment-Anleitung für ${get("deployment")}

GIT-COMMANDS AM ENDE:
mkdir -p projects/${folderName}
git add projects/${folderName}
git commit -m "Add clean image-led demo for ${businessName}"
git push

OUTPUT:
Erstelle direkt die Dateien im genannten Ordner. Keine langen Erklärungen. Ergebnis muss clean, bildstark und weniger KI-mässig wirken.`;

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
