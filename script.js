// Contact details used across the page and by the sign-up form.
// Change these three values and every phone link, email link and the form update together.
const CONTACT = {
  phoneDisplay: "(000) 000-0000",
  phoneTel: "+10000000000",
  email: "dispatch@example.com",
};

document.querySelectorAll("[data-phone]").forEach((a) => {
  a.href = "tel:" + CONTACT.phoneTel;
  a.textContent = a.textContent.replace(/\(000\) 000-0000/, CONTACT.phoneDisplay);
});
document.querySelectorAll("[data-email]").forEach((a) => {
  a.href = "mailto:" + CONTACT.email;
  a.textContent = CONTACT.email;
});
document.getElementById("year").textContent = new Date().getFullYear();

// Sign-up form: validates, then opens the visitor's email app with the details filled in.
const form = document.getElementById("signup-form");
const msg = form.querySelector(".form-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const required = ["name", "phone"];
  let firstBad = null;
  required.forEach((id) => {
    const el = form.elements[id];
    const bad = !el.value.trim();
    el.setAttribute("aria-invalid", bad ? "true" : "false");
    if (bad && !firstBad) firstBad = el;
  });
  if (firstBad) {
    msg.className = "form-msg error";
    msg.textContent = "Add your name and phone number so a dispatcher can call you back.";
    firstBad.focus();
    return;
  }

  const f = form.elements;
  const body = [
    "Name: " + f.name.value,
    "Company: " + f.company.value,
    "MC number: " + f.mc.value,
    "Trucks: " + f.trucks.value,
    "Equipment: " + f.equipment.value,
    "Phone: " + f.phone.value,
    "Email: " + f.email.value,
    "Lanes / notes: " + f.notes.value,
  ].join("\n");

  const subject = "Dispatch request from " + f.name.value;
  window.location.href =
    "mailto:" + CONTACT.email +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);

  msg.className = "form-msg ok";
  msg.textContent = "Your email app should open with your details filled in. Send it and we'll call you back within one business day.";
});
