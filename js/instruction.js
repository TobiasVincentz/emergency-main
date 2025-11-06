console.log("Loaded instructions...");

// første knap

document.querySelector("#knapfoerste").addEventListener("click", knapfoersteF);

function knapfoersteF() {
  console.log("knapfoerste tester");
  document.querySelector(".info-text h2").textContent = "Kontakt med monster";
  document.querySelector("#mund").classList.add("my_scale");
  document.querySelector("#mund").style.transition = "transform 2s";
}

// anden knap
document.querySelector("#knapanden").addEventListener("click", knapandenF);

function knapandenF() {
  console.log("knapanden tester");
  document.querySelector(".info-text h2").textContent = "Typiske symptomer";
  document.querySelector("#Layer_8").style.display = "block";
  document.querySelector("#Layer_8").classList.add("my_scale");
  document.querySelector("#Layer_8").style.transition = "transform 2s";
}

// tredje knap
document.querySelector("#knaptredje").addEventListener("click", knaptredjeF);

function knaptredjeF() {
  console.log("knaptredje tester");
  document.querySelector(".info-text h2").textContent = "Hvad skal jeg gøre?";
  document.querySelector("#Layer_7").classList.add("my_scale");
  document.querySelector("#Layer_7").style.fill = "red";
  document.querySelector("#Layer_7").style.transition = "transform 2s";
}
