console.log("script.js loaded ✅");

// =======================
// 1) Mouse trail (hearts)
// =======================
let trailTick = 0;

window.addEventListener("mousemove", (e) => {
  trailTick++;
  if (trailTick % 12 !== 0) return;

  const s = document.createElement("span");
  s.textContent = Math.random() < 0.25 ? "✧" : "♥";

  s.style.position = "fixed";
  s.style.left = (e.clientX + 10) + "px";
  s.style.top  = (e.clientY + 10) + "px";
  s.style.fontSize = "14px";
  s.style.opacity = "0.9";
  s.style.pointerEvents = "none";
  s.style.zIndex = "999999";

  s.style.color = "#d31e75";
  s.style.fontFamily = "Segoe UI Symbol, Apple Color Emoji, Noto Color Emoji, system-ui, sans-serif";
  s.style.textShadow = "0 1px 0 rgba(255,255,255,.45)";

  document.body.appendChild(s);

  let o = 0.9;
  const id = setInterval(() => {
    o -= 0.06;
    s.style.opacity = String(o);
    s.style.transform = `translateY(${(0.9 - o) * 10}px)`;
    if (o <= 0) { clearInterval(id); s.remove(); }
  }, 30);
});

// =======================
// 2) Page transition
// =======================
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a");
  links.forEach(link => {
    const href = link.getAttribute("href");
    if (href && !href.startsWith("#") && !href.startsWith("http")) {
      link.addEventListener("click", e => {
        e.preventDefault();
        document.body.classList.add("fade-out");
        setTimeout(() => { window.location.href = href; }, 300);
      });
    }
  });
});

// 뒤로가기(bfcache)로 돌아와도 하얗게 안 남게
window.addEventListener("pageshow", () => {
  document.body.classList.remove("fade-out");
});

// =======================
// 3) Bubble typing (home)
// =======================
document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector(".bubble");
  if (!el) return;

  const full = el.textContent.trim();
  el.textContent = "";
  let i = 0;

  const timer = setInterval(() => {
    el.textContent = full.slice(0, i);
    i++;
    if (i > full.length) clearInterval(timer);
  }, 50);
});

// =======================
// 4) Works modal
// =======================
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  const modalCaption = document.getElementById("modalCaption");
  if (!modal || !modalImg || !modalCaption) return;

  const works = Array.from(document.querySelectorAll(".work-img"));
  const btnNext = document.querySelector(".modal-nav.next");
  const btnPrev = document.querySelector(".modal-nav.prev");

  console.log("WORKS page: script tag executed ✅", works.length);

  let currentIndex = 0;

  function showWork(index) {
    if (works.length === 0) return;
    if (index < 0) index = works.length - 1;
    if (index >= works.length) index = 0;
    currentIndex = index;

    const img = works[currentIndex];
    modalImg.src = img.src;

    const card = img.closest(".work-card");
    const titleEl = card ? card.querySelector(".work-title") : null;
    modalCaption.textContent = titleEl ? titleEl.textContent : "";
  }

  function openModal(index) {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    showWork(index);
  }

  function closeModal() {
    modal.classList.remove("is-open", "is-next", "is-prev");
    modal.setAttribute("aria-hidden", "true");
    modalImg.src = "";
    modalCaption.textContent = "";
    document.body.style.overflow = "";
  }

  function goNext() {
    modal.classList.add("is-next");
    setTimeout(() => {
      showWork(currentIndex + 1);
      modal.classList.remove("is-next");
    }, 200);
  }

  function goPrev() {
    modal.classList.add("is-prev");
    setTimeout(() => {
      showWork(currentIndex - 1);
      modal.classList.remove("is-prev");
    }, 200);
  }

  works.forEach((img, i) => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => openModal(i));
  });

  if (btnNext) btnNext.addEventListener("click", goNext);
  if (btnPrev) btnPrev.addEventListener("click", goPrev);

  modal.addEventListener("click", (e) => {
    if (e.target && e.target.dataset && e.target.dataset.close === "1") closeModal();
  });

  window.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("is-open")) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowRight") goNext();
    if (e.key === "ArrowLeft") goPrev();
  });
});

// =======================
// 5) fav click text
// =======================
document.addEventListener("DOMContentLoaded", () => {
  const fav = document.getElementById("favHeart");
  if (!fav) return;

  const notes = ["hi", "kept here", "♥", "just a note", "thank you!"];

  const text = document.createElement("div");
  text.className = "fav-text";
  document.body.appendChild(text);

  fav.addEventListener("click", () => {
    const msg = notes[Math.floor(Math.random() * notes.length)];
    text.textContent = msg;
    text.classList.add("show");

    clearTimeout(text._timer);
    text._timer = setTimeout(() => text.classList.remove("show"), 1400);
  });
});
