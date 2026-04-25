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

  const prompt = `Du bist ein erfahrener Webdesigner, Frontend-Entwickler und Conversion-Texter. Erstelle keine generische KI-Website. Erstelle eine glaubwürdige, lokale, hochwertige Demo-Website, die wie eine echte Website eines kleinen Schweizer Geschäfts wirkt.

AUFGABE:
Erstelle eine Demo-Website für ein lokales Geschäft und speichere alle Dateien sauber in einem eigenen Unterordner im bestehenden GitHub-Repository.

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

INTERNE NOTIZEN FÜR DIE WEBSITE:
${get("notes")}

DESIGN-VORGABEN:
Stil: ${get("style")}
Ziel der Website: ${get("goal")}
Umfang: ${get("size")}
Technik: ${get("tech")}
Deployment-Ziel: ${get("deployment")}

GITHUB-ORDNERSTRUKTUR – ABSOLUT WICHTIG:
Repository: ${repoName}
Erstelle KEINE Dateien direkt im Root-Verzeichnis.
Erstelle ALLE Dateien ausschliesslich in:
projects/${folderName}/

Pflichtdateien:
projects/${folderName}/index.html
projects/${folderName}/style.css
projects/${folderName}/script.js
projects/${folderName}/README.md

Falls Bilder, Logos oder Assets gebraucht werden:
projects/${folderName}/assets/

Wenn projects/${folderName}/ bereits existiert, verwende projects/${folderName}-2/.
Bestehende Projekte niemals überschreiben.

BILDER UND LOGO – SEHR WICHTIG:
1. Wenn eine aktuelle Website angegeben ist, analysiere deren sichtbare Inhalte und verwende vorhandene öffentlich sichtbare Bilder/Logo nur dann, wenn sie seriös eingebunden werden können.
2. Speichere fremde Bilder nicht ungeprüft dauerhaft als eigene Assets, ausser sie sind offensichtlich Bestandteil der Kundendemo und öffentlich auf der bestehenden Website sichtbar. Besser: verlinke sie nur oder dokumentiere im README, dass Bildrechte geprüft werden müssen.
3. Wenn keine echten Bilder vorhanden sind, verwende hochwertige neutrale Platzhalter: keine kitschigen Stockfoto-Klischees, keine KI-typischen generischen Menschenbilder, keine unpassenden Icons.
4. Verwende CSS-Placeholder, Farbflächen, dezente Muster oder branchentypische neutrale Bildbereiche mit klarer Beschriftung wie "Bild folgt".
5. Erstelle ein einfaches textbasiertes Logo/Wordmark aus dem Geschäftsnamen. Kein generisches Kreis-Icon mit Initialen, ausser es passt wirklich. Das Logo soll im Header und optional im Footer erscheinen.
6. Wenn ein echtes Logo auf der aktuellen Website existiert, verwende es als Referenz oder binde es ein, falls technisch und rechtlich sinnvoll. Sonst erstelle eine zurückhaltende typografische Wortmarke.

ANTI-KI-DESIGN-REGELN:
Vermeide unbedingt typische KI-Website-Merkmale:
- keine übertriebenen Gradient-Hintergründe ohne Grund
- keine generischen Karten mit immer gleichen Icons
- keine künstlichen Superlative wie "Ihr vertrauenswürdiger Partner für alles"
- keine erfundenen 5-Sterne-Bewertungen
- keine Fake-Statistiken wie "10+ Jahre Erfahrung", wenn nicht angegeben
- keine riesigen Hero-Texte mit leerem Marketing-Blabla
- keine austauschbaren Texte wie "Qualität, Vertrauen und Leidenschaft"
- keine komplett überfüllte Landingpage
- keine erfundenen Teammitglieder

REALISTISCHER LOOK:
Die Website soll so aussehen, als hätte ein kleiner professioneller Webdesigner sie für ein echtes lokales Geschäft gebaut:
- dezente Farben, passend zur Branche
- klare Navigation
- echtes Layout mit genügend Weissraum
- gute Typografie
- glaubwürdige Texte
- lokale Hinweise, wenn sie aus den Daten ableitbar sind
- Header mit Logo/Wortmarke
- Footer mit Kontakt, Öffnungszeiten und Demo-Hinweis
- mobile Navigation oder sauberer responsive Header

INHALTLICHE REGELN:
- Erfinde keine falschen Fakten, keine Preise, keine Bewertungen, keine Auszeichnungen und keine nicht angegebenen Angebote.
- Wenn Informationen fehlen, verwende neutrale Formulierungen oder Platzhalter.
- Nutze interne Notizen als Design-/Inhaltshinweise, aber schreibe sie nicht direkt peinlich sichtbar auf die Website.
- Falls keine E-Mail bekannt ist, kein Fake-Mail schreiben.
- Falls keine Website bekannt ist, keinen Website-Link erfinden.
- Falls keine Bilder vorhanden sind, visuelle Platzhalter verwenden und im README notieren.
- Schreibe auf Deutsch, natürlich und passend für die Schweiz.

PFLICHT-SEKTIONEN:
1. Header mit Logo/Wortmarke und Navigation
2. Hero mit klarem Nutzenversprechen und CTA
3. Kurze Vorstellung des Geschäfts
4. Angebot / Leistungen / Menü / Services passend zur Branche
5. Visueller Bereich mit echten Bildern oder hochwertigen Platzhaltern
6. Öffnungszeiten
7. Standort / Kontakt / Route planen
8. Abschliessender CTA
9. Footer mit Logo/Wortmarke, Kontaktinfos und Demo-Hinweis

BRANCHENLOGIK:
- Restaurant/Café: Atmosphäre, Angebot, Öffnungszeiten, Reservation/Anruf, Karte nur wenn Daten vorhanden
- Coiffeur/Kosmetik: Leistungen, Termin-Anfrage, sauberer hochwertiger Look
- Handwerker: Leistungen, Region, Kontaktanfrage, Vertrauen ohne Fake-Bewertungen
- Detailhandel: Sortiment, Standort, Öffnungszeiten, Besuch im Laden
- Praxis: ruhig, seriös, übersichtlich, keine medizinischen Versprechen

TECHNISCHE ANFORDERUNGEN:
- Vollständig lauffähiger Code
- Semantisches HTML
- Modernes CSS mit responsive Design
- JavaScript nur, wenn sinnvoll
- Kein Backend
- Keine Tracking-Skripte
- Möglichst keine unnötigen externen Abhängigkeiten
- Barrierearme Kontraste und lesbare Schriftgrössen
- Meta title und meta description setzen
- Sinnvolle Alt-Texte für Bilder/Platzhalter

README:
Erstelle README.md mit:
- Projektname
- Geschäftsdaten
- Hinweis: Demo-Website, nicht offizielle Website
- Bild-/Logo-Hinweis: echte Bilder nur mit Rechten verwenden
- lokale Vorschau-Anleitung
- Deployment-Hinweis für ${get("deployment")}

SHELL / GIT-HINWEISE:
Gib am Ende kurz passende Commands an:
mkdir -p projects/${folderName}
git add projects/${folderName}
git commit -m "Add demo website for ${businessName}"
git push

QUALITÄTSKONTROLLE VOR ABSCHLUSS:
Prüfe selbst:
- Sieht die Seite noch generisch oder klar KI-generiert aus? Wenn ja, überarbeiten.
- Gibt es Logo/Wortmarke, Header und Footer?
- Werden fehlende Daten sauber behandelt?
- Sind Bilder oder Platzhalter professionell gelöst?
- Liegen alle Dateien im richtigen Ordner?

OUTPUT:
Erstelle direkt die Dateien im genannten Ordner. Keine langen Erklärungen. Ziel ist eine fertige, glaubwürdige, verkaufbare Demo-Website.`;

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
