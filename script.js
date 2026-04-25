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

  const prompt = `Du bist ein sehr guter Webdesigner und Frontend-Entwickler. Erstelle KEINE typische KI-Landingpage. Ziel ist eine cleane, bildstarke, glaubwürdige Website wie eine echte Restaurant-/Geschäftswebsite.

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

BILDER SIND PFLICHT:
1. Prüfe die aktuelle Website, falls angegeben.
2. Nutze vorhandene öffentlich sichtbare Bilder von der aktuellen Website als Hero-/Galerie-Bilder, wenn technisch möglich.
3. Wenn Bilder nicht sicher verwendet werden können, erstelle trotzdem ein bildorientiertes Layout mit professionellen Platzhalter-Flächen.
4. Platzhalter dürfen NICHT wie langweilige graue Kästen aussehen. Sie sollen wie echte Bildbereiche wirken: grosse Flächen, dezente Overlays, branchentypische Beschriftung, saubere Komposition.
5. Bei Restaurant/Café muss der Hero visuell sein: grosses Hintergrundbild oder grosser Bildbereich mit dunklem Overlay und weisser Typografie.
6. Kein Layout, das hauptsächlich aus Textkarten auf hellem Verlauf besteht.
7. Erstelle eine Galerie-/Atmosphäre-Sektion mit 2–4 Bildflächen oder echten Bildern.
8. Schreibe im README klar, welche Bilder echt sind und welche ersetzt werden müssen.

LOGO / BRANDING:
- Wenn ein echtes Logo auf der aktuellen Website existiert, verwende es oder baue es sauber ein.
- Falls kein Logo verfügbar ist, erstelle eine hochwertige typografische Wortmarke mit dem Geschäftsnamen.
- Kein billiger Initialen-Kreis wie "RK", ausser der Nutzer verlangt es explizit.
- Header muss ein Logo/eine Wortmarke enthalten.
- Footer muss dieselbe Marke wieder aufnehmen.

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
- künstliche Überschriften wie "Schweizer und italienische Küche in ruhiger, einladender Atmosphäre" als riesige Textwand ohne Bild
- Fake-Testimonials
- Fake-Statistiken
- erfundene Speisen, Preise, Bewertungen oder Auszeichnungen
- übertriebene Marketingwörter
- zu viel Text im Hero
- langweilige Initialen-Logos
- sterile SaaS-Optik

TEXTREGELN:
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
1. Sieht die Seite im ersten Screenshot wie eine echte moderne lokale Website aus?
2. Gibt es grosse Bilder oder hochwertige Bildflächen?
3. Ist das Logo/Branding sauber?
4. Gibt es keine generischen KI-Karten/Nummern/Gradient-Spielereien?
5. Sind alle Dateien im richtigen Ordner?
6. Sind fehlende Daten sauber behandelt?

README:
README.md muss enthalten:
- Demo-Hinweis: nicht offizielle Website
- Quelle der verwendeten Informationen
- Bildrechte-Hinweis
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
