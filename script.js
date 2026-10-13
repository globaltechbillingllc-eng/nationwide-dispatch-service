// Contact email used across every page and by the sign-up form.
const CONTACT = {
  email: "info@nationwidedispatchservice.com",
};

document.querySelectorAll("[data-email-btn]").forEach((a) => {
  a.href = "mailto:" + CONTACT.email;
});
document.querySelectorAll("[data-email]").forEach((a) => {
  a.href = "mailto:" + CONTACT.email;
  a.textContent = CONTACT.email;
});
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Mobile menu
const menuBtn = document.querySelector(".menu-btn");
const nav = document.getElementById("site-nav");
if (menuBtn && nav) {
  const setOpen = (open) => {
    menuBtn.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("open", open);
    menuBtn.querySelector(".menu-label").textContent = open ? "Close" : "Menu";
  };
  menuBtn.addEventListener("click", () => setOpen(menuBtn.getAttribute("aria-expanded") !== "true"));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("open")) { setOpen(false); menuBtn.focus(); }
  });
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
}

// Sign-up form: validates, then opens the visitor's email app with the details filled in.
const form = document.getElementById("signup-form");
if (form) {
  const msg = form.querySelector(".form-msg");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let firstBad = null;
    ["name", "phone"].forEach((id) => {
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

    window.location.href =
      "mailto:" + CONTACT.email +
      "?subject=" + encodeURIComponent("Dispatch request from " + f.name.value) +
      "&body=" + encodeURIComponent(body);

    msg.className = "form-msg ok";
    msg.textContent = "Your email app should open with your details filled in. Send it and a dispatcher will get back to you within one business day.";
  });
}
