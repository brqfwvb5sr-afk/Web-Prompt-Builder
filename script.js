function get(id){return document.getElementById(id).value||"nicht bekannt"}

document.getElementById("promptForm").addEventListener("submit",function(e){
 e.preventDefault();

 const prompt = `Du bist ein professioneller Fullstack-Webentwickler.

AUFGABE:
Erstelle eine hochwertige Demo-Website für ein lokales Geschäft.

GESCHÄFT:
Name: ${get("businessName")}
Branche: ${get("businessType")}
Ort: ${get("location")}
Adresse: ${get("address")}
Telefon: ${get("phone")}
E-Mail: ${get("email")}
Website: ${get("currentWebsite")}
Google Maps: ${get("mapsLink")}

ÖFFNUNGSZEITEN:
${get("hours")}

BESCHREIBUNG:
${get("description")}

NOTIZEN (WICHTIG – berücksichtigen, aber nichts erfinden):
${get("notes")}

DESIGN:
Stil: ${get("style")}
Ziel: ${get("goal")}
Umfang: ${get("size")}

TECHNIK:
Verwende: ${get("tech")}

WICHTIG:
- Keine erfundenen Fakten
- Fehlende Daten klar als Platzhalter anzeigen
- Fokus auf Conversion

REPOSITORY:
Name: ${get("repoName")}

Erstelle:
- komplette Projektstruktur
- index.html / oder App
- styles
- README.md

SHELL / SETUP:
Erstelle auch die notwendigen Commands, z. B.:
- git init
- npm install (falls nötig)
- start / dev command

DEPLOYMENT:
Ziel: ${get("deployment")}
Erkläre genau, wie deployt wird

OUTPUT:
- vollständiger Code
- keine unnötigen Erklärungen
- direkt nutzbar
`;

 document.getElementById("output").value=prompt;
});

document.getElementById("copyBtn").onclick=()=>navigator.clipboard.writeText(document.getElementById("output").value);
document.getElementById("clearBtn").onclick=()=>{document.getElementById("promptForm").reset();document.getElementById("output").value=""};