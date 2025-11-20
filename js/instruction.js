console.log("Loaded instructions...");

// første knap

document.querySelector("#knapfoerste").addEventListener("click", knapfoersteF);

function knapfoersteF() {
  console.log("knapfoerste tester");
  document.querySelector(".info-text h2").textContent = "Kontakt med monster";
  document.querySelector("#mund").classList.add("my_scale");
  document.querySelector("#mund").style.transition = "transform 2s";
  document.querySelector("#efficiency").textContent =
    "Hvis du kommer i nærheden af et monster, skal du først og fremmest være opmærksom på dets karakteristiske træk: lilla hud, gule øjne og rød mund. Selv kortvarig kontakt kan være smitsom, så hold altid afstand. Vær særlig opmærksom på uregelmæssig eller aggressiv adfærd, pludselige bevægelser og lyde, som kan indikere, at monsteret er på vej til at angribe. Brug visuelle signaler eller kommunikationsmidler som radio og mobil i stedet for fysisk kontakt for at minimere risikoen for bid.";
  document.querySelector("#requirement").textContent =
    "Hvis du har været i kontakt med et monster, skal du straks gå i selvisolation, selvom du ikke viser symptomer. Hold dig helt adskilt fra andre og overhold hygiejneregler for at forhindre yderligere spredning. Når du er symptomfri, kan du tilmelde dig behandling hos Styrelsen for Monsterbid, hvor eksperter vil vurdere risikoen og tilbyde korrekt procedure for overvågning og eventuel medicinsk intervention. Dette er afgørende for både din egen sikkerhed og for at beskytte omgivelserne mod infektion.";
  document.querySelector(".placeholder").textContent = "Efter kontakt skal du:";
}

// anden knap
document.querySelector("#knapanden").addEventListener("click", knapandenF);

function knapandenF() {
  console.log("knapanden tester");
  document.querySelector(".info-text h2").textContent = "Typiske symptomer";
  document.querySelector("#Layer_8").style.display = "block";
  document.querySelector("#Layer_8").classList.add("my_scale");
  document.querySelector("#Layer_8").style.transition = "transform 2s";
  document.querySelector("#efficiency").textContent =
    "De tidlige tegn på infektion kan være subtile, men skal tages alvorligt. Feber, svimmelhed, uro eller små sår og mærker fra bid er signaler om, at kroppen er blevet påvirket. Ved disse symptomer er det vigtigt straks at isolere sig og kontakte Styrelsen for Monsterbid for instruktioner om akut behandling.";
  document.querySelector("#requirement").textContent =
    "Hvis infektionen udvikler sig, kan symptomerne blive mere alvorlige og uforudsigelige. Aggression, muskelstivhed, forvrængede sanser og tab af selvkontrol kan gradvist overtage, hvilket gør det livsfarligt at opholde sig sammen med andre. Løbende overvågning og hurtig reaktion på ændringer er afgørende for at undgå smittespredning.";
  document.querySelector(".placeholder").textContent = "Symptomer over tid:";
}

// tredje knap
document.querySelector("#knaptredje").addEventListener("click", knaptredjeF);

function knaptredjeF() {
  console.log("knaptredje tester");
  document.querySelector(".info-text h2").textContent = "Hvad skal jeg gøre?";
  document.querySelector("#Layer_7").classList.add("my_scale");
  document.querySelector("#Layer_7").style.fill = "red";
  document.querySelector("#Layer_7").style.transition = "transform 2s";
  document.querySelector("#efficiency").textContent =
    "Hvis du har været i kontakt med et monster eller oplever symptomer, skal du straks isolere dig fra andre. Undgå fysisk kontakt, brug kommunikationsmidler som mobil eller radio, og sørg for at holde området rent for at minimere risikoen for smitte.";
  document.querySelector("#requirement").textContent =
    "Kontakt straks Styrelsen for Monsterbid for instruktioner om overvågning og behandling. Følg deres retningslinjer nøje, og vent med at genoptage kontakt med andre, indtil du er erklæret symptomfri af eksperterne.";
  document.querySelector(".placeholder").textContent = "Du skal gøre følgende:";
}
