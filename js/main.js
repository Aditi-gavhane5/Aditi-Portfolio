document.addEventListener("DOMContentLoaded", () => {
  const sections = [...document.querySelectorAll(".page-section")];
  const navLinks = [...document.querySelectorAll(".nav-link")];
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileButton = document.getElementById("mobileMenuButton");
  const mobileClose = document.getElementById("mobileMenuClose");
  const lightbox = document.getElementById("lightbox");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxNote = document.getElementById("lightboxNote");
  const profilePhotoTrigger = document.getElementById("profilePhotoTrigger");
  const profileLightbox = document.getElementById("profileLightbox");
  const profileLightboxClose = document.getElementById("profileLightboxClose");
  let currentProject = 0;
  let currentGallery = [];
  let currentGalleryTitle = "";
  let currentGalleryMode = "project";

  function activateSection(id, updateHash = true) {
    if (!sections.some(s => s.id === id)) id = "about";
    sections.forEach(s => s.classList.toggle("active", s.id === id));
    navLinks.forEach(a => a.classList.toggle("active", a.dataset.section === id));
    if (updateHash && location.hash !== `#${id}`) history.replaceState(null, "", `#${id}`);
    window.scrollTo({top:0, behavior:"smooth"});
    closeMobileMenu();
  }
  function closeMobileMenu() {
    mobileMenu.classList.remove("open"); mobileMenu.setAttribute("aria-hidden","true");
    mobileButton.setAttribute("aria-expanded","false");
  }
  navLinks.forEach(a => a.addEventListener("click", e => { e.preventDefault(); activateSection(a.dataset.section); }));
  document.querySelectorAll('.brand, .about-bottom a').forEach(a => a.addEventListener("click", e => {
    const id = a.getAttribute("href")?.slice(1);
    if (id && sections.some(s => s.id === id)) { e.preventDefault(); activateSection(id); }
  }));
  mobileButton.addEventListener("click", () => {
    mobileMenu.classList.add("open"); mobileMenu.setAttribute("aria-hidden","false"); mobileButton.setAttribute("aria-expanded","true");
  });
  mobileClose.addEventListener("click", closeMobileMenu);
  mobileMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", e => { e.preventDefault(); activateSection(a.getAttribute("href").slice(1)); }));

  function showProject(index) {
    const projects = window.portfolioProjects || [];
    if (!projects.length) return;
    currentGalleryMode = "project";
    currentProject = (index + projects.length) % projects.length;
    const project = projects[currentProject];
    currentGallery = projects.filter(p => p.image).map(p => ({src:p.image, alt:`${p.name} project preview`}));
    currentGalleryTitle = project.name;
    lightboxCaption.textContent = project.name;
    lightboxNote.textContent = `${project.category} · Preview (${currentProject + 1} of ${projects.length}) — use arrows or keyboard to browse`;
    if (project.image) {
      lightboxImage.src = project.image;
      lightboxImage.alt = `${project.name} project screenshot`;
      lightboxImage.classList.add("visible");
    } else {
      lightboxImage.removeAttribute("src");
      lightboxImage.alt = "";
      lightboxImage.classList.remove("visible");
    }
  }
  function openLightbox(index) { showProject(index); lightbox.classList.add("open"); lightbox.setAttribute("aria-hidden","false"); }
  function showJourneyImage(index) {
    if (!currentGallery.length) return;
    currentProject = (index + currentGallery.length) % currentGallery.length;
    const image = currentGallery[currentProject];
    lightboxCaption.textContent = currentGalleryTitle;
    lightboxNote.textContent = `Image ${currentProject + 1} of ${currentGallery.length} — use arrows or keyboard to browse`;
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightboxImage.classList.add("visible");
  }
  function openJourneyImage(button) {
    const gallery = button.closest("[data-journey-gallery-content]");
    if (!gallery) return;
    currentGalleryTitle = gallery.dataset.journeyGalleryContent === "navy" ? "Indian Navy Hornpipe Dance" : "TAPAS – Creatives Head";
    currentGallery = [...gallery.querySelectorAll("[data-journey-image]")].map(image => ({src:image.dataset.src,alt:image.dataset.alt}));
    currentGalleryMode = "journey";
    const index = [...gallery.querySelectorAll("[data-journey-image]")].indexOf(button);
    showJourneyImage(index);
    lightbox.classList.add("open"); lightbox.setAttribute("aria-hidden","false");
  }
  function showDashboardGalleryImage(index) {
    if (!currentGallery.length) return;
    currentProject = (index + currentGallery.length) % currentGallery.length;
    const image = currentGallery[currentProject];
    lightboxCaption.textContent = image.caption;
    lightboxNote.textContent = `${currentGalleryTitle} · Image ${currentProject + 1} of ${currentGallery.length} — use arrows or keyboard to browse`;
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightboxImage.classList.add("visible");
  }
  function openDashboardGalleryImage(button) {
    const card = button.closest(".project-card");
    if (!card) return;
    currentGalleryTitle = card.querySelector("h3")?.textContent || "Project dashboard";
    currentGallery = [...card.querySelectorAll("[data-dashboard-image]")].map(image => ({src:image.dataset.src,alt:image.dataset.alt,caption:image.dataset.caption}));
    currentGalleryMode = "dashboard";
    const index = [...card.querySelectorAll("[data-dashboard-image]")].indexOf(button);
    showDashboardGalleryImage(index);
    lightbox.classList.add("open"); lightbox.setAttribute("aria-hidden","false");
  }
  function closeLightbox() { lightbox.classList.remove("open"); lightbox.setAttribute("aria-hidden","true"); }
  function openProfileLightbox() {
    profileLightbox.classList.add("open");
    profileLightbox.setAttribute("aria-hidden","false");
    profileLightboxClose.focus();
  }
  function closeProfileLightbox() {
    if (!profileLightbox.classList.contains("open")) return;
    profileLightbox.classList.remove("open");
    profileLightbox.setAttribute("aria-hidden","true");
    profilePhotoTrigger.focus({preventScroll:true});
  }
  function moveLightbox(delta) {
    if (currentGalleryMode === "journey") showJourneyImage(currentProject + delta);
    else if (currentGalleryMode === "dashboard") showDashboardGalleryImage(currentProject + delta);
    else showProject(currentProject + delta);
  }

  function copyTextToClipboard(text, onSuccess) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(onSuccess).catch(() => fallbackPrompt(text, onSuccess));
    } else {
      fallbackPrompt(text, onSuccess);
    }
  }

  function fallbackPrompt(text, onSuccess) {
    try {
      const tempInput = document.createElement("input");
      tempInput.value = text;
      tempInput.style.position = "fixed";
      tempInput.style.opacity = "0";
      document.body.appendChild(tempInput);
      tempInput.focus();
      tempInput.select();
      const success = document.execCommand("copy");
      document.body.removeChild(tempInput);
      if (success) {
        onSuccess();
        return;
      }
    } catch (_) {}
    window.prompt("Copy this email address:", text);
  }

  document.addEventListener("click", e => {
    if (e.target.closest('a[href^="mailto:"]')) return;
    const galleryButton = e.target.closest("[data-gallery]");
    if (galleryButton) openLightbox(Number(galleryButton.dataset.gallery));
    const milestoneButton = e.target.closest("[data-milestone-toggle]");
    if (milestoneButton) {
      const details = document.getElementById(milestoneButton.getAttribute("aria-controls"));
      const expanded = milestoneButton.getAttribute("aria-expanded") === "true";
      milestoneButton.setAttribute("aria-expanded", String(!expanded));
      milestoneButton.textContent = expanded ? "Show More" : "Show Less";
      details.setAttribute("aria-hidden", String(expanded));
      details.inert = expanded;
      details.classList.toggle("expanded", !expanded);
    }
    const journeyImage = e.target.closest("[data-journey-image]");
    if (journeyImage) openJourneyImage(journeyImage);
    const dashboardImage = e.target.closest("[data-dashboard-image]");
    if (dashboardImage) openDashboardGalleryImage(dashboardImage);
    const expandButton = e.target.closest("[data-expand]");
    if (expandButton) {
      const details = document.getElementById(expandButton.getAttribute("aria-controls"));
      const expanded = expandButton.getAttribute("aria-expanded") === "true";
      expandButton.setAttribute("aria-expanded", String(!expanded));
      expandButton.textContent = expanded ? "Read More ↓" : "Read Less ↑";
      details.setAttribute("aria-hidden", String(expanded));
      details.classList.toggle("expanded", !expanded);
    }
    const copyButton = e.target.closest("[data-copy-email]");
    if (copyButton) {
      const email = "gavhaneaditi5@gmail.com";
      const originalHTML = copyButton.innerHTML;
      copyTextToClipboard(email, () => {
        copyButton.innerHTML = "✓ &nbsp; Email copied";
        setTimeout(() => { copyButton.innerHTML = originalHTML; }, 2000);
      });
    }
  });
  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrev").addEventListener("click", () => moveLightbox(-1));
  document.getElementById("lightboxNext").addEventListener("click", () => moveLightbox(1));
  lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });
  profilePhotoTrigger.addEventListener("click", openProfileLightbox);
  profileLightboxClose.addEventListener("click", closeProfileLightbox);
  profileLightbox.addEventListener("click", e => { if (e.target === profileLightbox) closeProfileLightbox(); });
  window.addEventListener("keydown", e => {
    if (e.key === "Escape") { closeLightbox(); closeProfileLightbox(); closeMobileMenu(); }
    if (lightbox.classList.contains("open") && e.key === "ArrowLeft") moveLightbox(-1);
    if (lightbox.classList.contains("open") && e.key === "ArrowRight") moveLightbox(1);
  });
  window.addEventListener("hashchange", () => activateSection(location.hash.slice(1), false));
  activateSection(location.hash.slice(1) || "about", false);
});
