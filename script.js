
/* =================================
   1. MOBILE NAVIGATION MENU
================================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Toggle navigation"
  );
});

navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Toggle navigation");
  });
});


/* =================================
   2. DARK / LIGHT THEME
================================= */

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
  const isLight = document.body.classList.toggle("light-theme");

  themeToggle.textContent = isLight
    ? "Dark Mode"
    : "Light Mode";

  themeToggle.setAttribute(
    "aria-pressed",
    String(isLight)
  );
});


/* =================================
   3. DISPLAY FIVE PROJECT CARDS
================================= */

// Sample projects: personalize these to match your real work.
const projects = [
  {
    title: "C++ Programming Project",
    description:
      "Developed a program using object-oriented programming concepts.",
    technology: "C++"
  },
  {
    title: "Database Management",
    description:
      "Practised database queries, data organisation and relationships.",
    technology: "MySQL"
  },
  {
    title: "Network Diagnostics",
    description:
      "Explored network connectivity using common diagnostic commands.",
    technology: "Networking"
  },
  {
    title: "GradTrack Project",
    description:
      "Applied data structures and algorithms to a programming project.",
    technology: "C++ / DSA"
  },
  {
    title: "Computer Architecture",
    description:
      "Studied CPU cache behaviour and instruction cycle operations.",
    technology: "Computer Architecture"
  }
];

const projectList = document.getElementById("project-list");

projects.forEach(function (project) {
  const card = document.createElement("article");
  card.classList.add("project-card", "reveal");

  const heading = document.createElement("h3");
  heading.textContent = project.title;

  const description = document.createElement("p");
  description.textContent = project.description;

  const tag = document.createElement("span");
  tag.classList.add("project-tag");
  tag.textContent = project.technology;

  card.append(heading, description, tag);
  projectList.appendChild(card);
});


/* =================================
   4. REVEAL ELEMENTS ON SCROLL
================================= */

const revealElements = document.querySelectorAll(
  ".section, .project-card"
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach(function (element) {
    element.classList.add("reveal");
    observer.observe(element);
  });
} else {
  revealElements.forEach(function (element) {
    element.classList.add("visible");
  });
}


/* =================================
   5. AUTOMATIC FOOTER YEAR
================================= */

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();
