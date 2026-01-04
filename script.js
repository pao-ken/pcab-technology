// ================================
// CONFIGURACIÓN RÁPIDA (EDITA AQUÍ)
// ================================

// 1) Coloca tu número oficial (con código de país).
// Perú: +51 -> ejemplo: 51987654321 (SIN +, SIN espacios)
const WHATSAPP_NUMBER = "51999999999";

// 2) Mensaje automático para inscripciones (editable)
const WA_MESSAGE =
  "Hola, soy _____. Quiero información para inscribirme en P-CAB Technology.\n" +
  "Edad del alumno: ___\n" +
  "Curso de interés: (Niños / Adolescentes / Jóvenes)\n" +
  "¿Horarios y costo, por favor?";

// 3) Próximo inicio (texto visible en portada)
const NEXT_START_TEXT = "Próximo inicio: (coloca fecha real aquí)";

// ================================

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const nextStartEl = document.getElementById("nextStart");
if (nextStartEl) nextStartEl.textContent = NEXT_START_TEXT;

// WhatsApp link
const waBtn = document.getElementById("waBtn");
if (waBtn) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;
  waBtn.href = url;
}

// Menú móvil
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Cerrar menú al hacer click en un enlace (móvil)
  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

// Botones "próximamente"
document.querySelectorAll("[data-soon]").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    showToast("🚧 Este acceso está en preparación. Si deseas activarlo, escríbenos por WhatsApp.");
  });
});

// Toast helper
const toast = document.getElementById("toast");
let toastTimer = null;

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}
