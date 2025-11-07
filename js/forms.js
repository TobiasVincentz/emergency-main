const form = document.querySelector("form");

const fornavnOutput = document.querySelector("#fornavn_output");
const efternavnOutput = document.querySelector("#efternavn_output");
const telefonOutput = document.querySelector("#telefon_output");
const emailOutput = document.querySelector("#email_output");
const datoforbidOutput = document.querySelector("#dato_for_bid_output");
const feberOutput = document.querySelector("#feber_output");
const hosteOutput = document.querySelector("#hoste_output");
const hovedpineOutput = document.querySelector("#hovedpine_output");
const bekraeftOutput = document.querySelector("#bekraeft_output");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

function handleSubmit(event) {
  event.preventDefault();

  // 1. Saml værdierne fra formularen

  const formData = new FormData(form);
  const fornavn = formData.get("fornavn");
  const efternavn = formData.get("efternavn");
  const telefon = formData.get("telefonnummer");
  const email = formData.get("email");
  const datoforbid = formData.get("dato_for_bid");
  const feber = formData.get("feber");
  const hoste = formData.get("hoste");
  const hovedpine = formData.get("hovedpine");
  const bekraeft = formData.get("bekraeft");

  // 2. Vis værdierne i de rigtige output-felter
  fornavnOutput.textContent = fornavn;
  efternavnOutput.textContent = efternavn;
  telefonOutput.textContent = telefon;
  emailOutput.textContent = email;
  datoforbidOutput.textContent = datoforbid;
  feberOutput.textContent = feber;
  hosteOutput.textContent = hoste;
  hovedpineOutput.textContent = hovedpine;
  bekraeftOutput.textContent = bekraeft;

  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
