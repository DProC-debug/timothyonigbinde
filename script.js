/* =========================================================
   Timothy Onigbinde — portfolio
   Content lives in the data arrays below: add an object to add an entry.
   ========================================================= */

/* ---------------- CONTENT ---------------- */

/** Experience timeline — newest first. `points` is optional. */
const experience = [
  {
    role: "Software Engineering Intern",
    org: "AAI Labs",
    dates: "Oct – Nov 2026",
    location: "Remote",
    // Kept high-level on purpose (NDA).
    points: [
      "Working on a system that uses vision-language models to read and extract information from 2D manufacturing and engineering drawings.",
      "Building the extraction pipeline and evaluating vision-language models.",
    ],
    tags: ["Python", "FastAPI", "Docker", "PostgreSQL", "Vision-language models"],
  },
  // { role: "", org: "", dates: "", location: "", points: [""], tags: [""] },
];

/**
 * Featured projects. `repo` / `live` are optional; omit or leave empty to hide the icon.
 * `points` is optional and shows as short bullet highlights.
 */
const featuredProjects = [
  {
    kind: "Multi-agent AI",
    title: "CryptoTradingAgent",
    description:
      "A multi-agent LLM trading system that trades Hyperliquid perpetuals autonomously, driven by Nansen on-chain Smart Money data. Built for the Nansen buildathon.",
    points: [
      "Five analysts, a bull/bear debate, trader, risk and portfolio managers",
      "Daily-loss circuit breaker and correlation-aware position limits",
    ],
    tags: ["Python", "LLM agents", "Hyperliquid", "Nansen API"],
    repo: "https://github.com/DProC-debug/CryptoTradingAgent",
    live: "",
  },
  {
    kind: "Backend · Web app",
    title: "cryptoprices",
    description:
      "An Express/EJS app with live crypto prices, coin search and price charts from the CoinGecko API, deployed on Vercel.",
    tags: ["Node.js", "Express", "EJS", "Chart.js", "REST API"],
    repo: "https://github.com/DProC-debug/cryptoprices",
    live: "https://cryptoprices-sigma.vercel.app",
  },
  {
    kind: "Vision-language models",
    title: "Engineering Drawing VLM",
    description:
      "A system that uses vision-language models to read and extract information from 2D manufacturing and engineering drawings. Part of my internship at AAI Labs.",
    points: ["My part: the extraction pipeline and evaluating vision-language models"],
    tags: ["Python", "FastAPI", "Docker", "PostgreSQL", "VLMs"],
    repo: "",
    live: "",
    note: "AAI Labs", // shown instead of links when there's no public repo
  },
];

/** Smaller "AI engineering work" cards. Add `link` (GitHub/Colab) to show the icon. */
const aiWork = [
  {
    title: "LLM benchmarking",
    description:
      "Compared GPT-4o, Claude Sonnet 4.5, Gemini 2.5 Pro, GLM-4.6 and Llama 3.3-70B on text, data and code tasks via the OpenRouter API, checking code outputs by executing them.",
    tags: ["OpenRouter", "Python", "Evaluation"],
    link: "https://colab.research.google.com/drive/17BvpZ7FaOdf_3OKizRx30XhjGYhLQRlV",
  },
  {
    title: "RAG from scratch",
    description: "Chunking, vectorisation and retrieval implemented without frameworks.",
    tags: ["Python", "Embeddings", "Retrieval"],
    link: "https://colab.research.google.com/drive/1TuJL1WP1ZgduJOYrtuKl5Zi9AnzFm8WO",
  },
  {
    title: "Quantization & model analysis",
    description: "Implemented quantization and parameter analysis from scratch in NumPy and Pandas.",
    tags: ["NumPy", "Pandas"],
    link: "https://colab.research.google.com/drive/11j-kzH9ZwWAroFDyyjj1T7KkXfg9OJGr",
  },
  {
    title: "QLoRA fine-tuning",
    description: "Fine-tuned Microsoft's Phi-2 with QLoRA.",
    tags: ["Hugging Face", "QLoRA", "Phi-2"],
    link: "https://colab.research.google.com/drive/14XBf6FKjpz24axmqndIM1uhkEZXRsFRt",
  },
];

/** Older front-end work, shown in the collapsed "Earlier work" row. */
const earlierWork = [
  { title: "First portfolio", description: "My first portfolio site", years: "2024", url: "https://dproc-debug.github.io/Tim-website/" },
  { title: "Game Website", description: "Practice site built from scratch", years: "2023–24", url: "https://dproc-debug.github.io/GD-Game-Website/" },
  { title: "Spark Exchange", description: "One of my first projects", years: "2021–22", url: "https://dproc-debug.github.io/Spark-Exchange/" },
];

/**
 * Skills. `icon` is a Devicon path (folder/file) or omitted for a plain dot.
 * `invert: true` for logos that are black (so they show on the dark theme).
 */
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/";
const skills = [
  {
    group: "Backend",
    items: [
      { name: "Node.js", icon: "nodejs/nodejs-original" },
      { name: "Express", icon: "express/express-original", invert: true },
      { name: "PostgreSQL", icon: "postgresql/postgresql-original" },
      { name: "Python", icon: "python/python-original" },
      { name: "FastAPI", icon: "fastapi/fastapi-original" },
      { name: "Flask", icon: "flask/flask-original", invert: true },
      { name: "REST APIs" },
    ],
  },
  {
    group: "AI / LLM",
    wide: true,
    items: [
      { name: "LLM agents & multi-agent systems" },
      { name: "RAG (from scratch, no frameworks)" },
      { name: "Fine-tuning (QLoRA on Phi-2)" },
      { name: "Quantization" },
      { name: "Vision-language models" },
      { name: "LLM evaluation & benchmarking" },
      { name: "Prompt engineering" },
    ],
  },
  {
    group: "Data & ML tools",
    items: [
      { name: "Pandas", icon: "pandas/pandas-original", invert: true },
      { name: "NumPy", icon: "numpy/numpy-original" },
      { name: "Hugging Face" },
      { name: "OpenAI API" },
      { name: "OpenRouter" },
      { name: "Google Colab" },
    ],
  },
  {
    group: "Frontend",
    items: [
      { name: "React", icon: "react/react-original" },
      { name: "JavaScript", icon: "javascript/javascript-original" },
      { name: "TypeScript", icon: "typescript/typescript-original" },
      { name: "HTML", icon: "html5/html5-original" },
      { name: "CSS", icon: "css3/css3-original" },
    ],
  },
  {
    group: "Tools",
    items: [
      { name: "Git", icon: "git/git-original" },
      { name: "Docker", icon: "docker/docker-original" },
      { name: "Vercel", icon: "vercel/vercel-original", invert: true },
    ],
  },
];

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgaeonol";

/* ---------------- HELPERS ---------------- */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const icon = (id) => `<svg class="icon" aria-hidden="true"><use href="#i-${id}"/></svg>`;

const tagList = (tags = []) =>
  tags.length ? `<ul class="tags" aria-label="Tech stack">${tags.map((t) => `<li class="tag">${esc(t)}</li>`).join("")}</ul>` : "";

const linkBtn = (url, label, iconId) =>
  url
    ? `<a href="${esc(url)}" target="_blank" rel="noopener" aria-label="${esc(label)}">${icon(iconId)}</a>`
    : "";

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

/* ---------------- RENDER ---------------- */

function renderExperience() {
  const list = $("#timeline-list");
  if (!list) return;
  list.innerHTML = experience
    .map(
      (job) => `
      <li class="timeline__item reveal">
        <span class="timeline__dot" aria-hidden="true"></span>
        <article class="timeline__card">
          <p class="timeline__meta">${[job.dates, job.location].filter(Boolean).map(esc).join(" · ")}</p>
          <h3 class="timeline__role">${esc(job.role)}</h3>
          <p class="timeline__org">${esc(job.org)}</p>
          ${job.points?.length ? `<ul class="timeline__points">${job.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}
          ${tagList(job.tags)}
        </article>
      </li>`
    )
    .join("");
}

function renderProjects() {
  const featured = $("#featured-projects");
  if (featured) {
    featured.innerHTML = featuredProjects
      .map((p) => {
        const links = linkBtn(p.repo, `${p.title} source code on GitHub`, "github") + linkBtn(p.live, `${p.title} live site`, "external");
        return `
        <article class="card reveal" data-tilt>
          <div class="card__top">
            <span class="card__kind">${esc(p.kind)}</span>
            <div class="card__links">${links || `<span class="card__note">${esc(p.note || "Private")}</span>`}</div>
          </div>
          <h3 class="card__title">${esc(p.title)}</h3>
          <p class="card__desc">${esc(p.description)}</p>
          ${p.points?.length ? `<ul class="card__points">${p.points.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
          ${tagList(p.tags)}
        </article>`;
      })
      .join("");
  }

  const ai = $("#ai-work");
  if (ai) {
    ai.innerHTML = aiWork
      .map(
        (p) => `
        <article class="card card--mini reveal" data-tilt>
          <div class="card__top">
            <h4 class="card__title">${esc(p.title)}</h4>
            <div class="card__links">${linkBtn(p.link, `${p.title}: code or notebook`, "external")}</div>
          </div>
          <p class="card__desc">${esc(p.description)}</p>
          ${tagList(p.tags)}
        </article>`
      )
      .join("");
  }

  const earlier = $("#earlier-work");
  if (earlier) {
    earlier.innerHTML = earlierWork
      .map(
        (p) => `
        <li>
          <a href="${esc(p.url)}" target="_blank" rel="noopener">
            <span><span class="earlier__name">${esc(p.title)}</span><span class="earlier__desc">${esc(p.description)}</span></span>
            <span class="earlier__year">${esc(p.years)}</span>
            ${icon("external")}
          </a>
        </li>`
      )
      .join("");
  }
}

function renderSkills() {
  const grid = $("#skills-grid");
  if (!grid) return;
  grid.innerHTML = skills
    .map(
      (g) => `
      <div class="skill-group reveal${g.wide ? " skill-group--wide" : ""}">
        <h3 class="skill-group__title">${esc(g.group)}</h3>
        <ul class="chips">
          ${g.items
            .map(
              (s) => `<li class="chip skill">${
                s.icon
                  ? `<img src="${DEVICON}${s.icon}.svg" alt="" width="18" height="18" loading="lazy"${s.invert ? ' class="invert"' : ""}>`
                  : `<span class="skill__dot" aria-hidden="true"></span>`
              }${esc(s.name)}</li>`
            )
            .join("")}
        </ul>
      </div>`
    )
    .join("");

  // If a logo fails to load, swap it for the plain dot.
  $$(".skill img", grid).forEach((img) =>
    img.addEventListener("error", () => {
      const dot = document.createElement("span");
      dot.className = "skill__dot";
      dot.setAttribute("aria-hidden", "true");
      img.replaceWith(dot);
    })
  );
}

/* ---------------- NAV ---------------- */

function initNav() {
  const header = $(".site-header");
  const toggle = $(".nav__toggle");
  const menu = $("#nav-menu");
  const links = $$(".nav__link");

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.classList.toggle("is-open", open);
  };

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    setOpen(open);
    if (open) links[0]?.focus();
  });

  links.forEach((a) => a.addEventListener("click", () => setOpen(false)));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("is-open")) {
      setOpen(false);
      toggle.focus();
    }
  });

  document.addEventListener("click", (e) => {
    if (menu.classList.contains("is-open") && !header.contains(e.target)) setOpen(false);
  });

  // Scroll-spy: highlight the link for the section in the middle of the viewport.
  const byId = new Map(links.map((a) => [a.getAttribute("href").slice(1), a]));
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) => {
          a.classList.remove("is-active");
          a.removeAttribute("aria-current");
        });
        const link = byId.get(entry.target.id);
        if (link) {
          link.classList.add("is-active");
          link.setAttribute("aria-current", "true");
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  $$("main section[id]").forEach((s) => spy.observe(s));

  // Scrolled state + progress bar, batched to one write per frame.
  const bar = $(".scroll-progress");
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      bar.style.transform = `scaleX(${p})`;
      header.classList.toggle("is-scrolled", window.scrollY > 8);
      ticking = false;
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---------------- REVEAL ---------------- */

function initReveal() {
  const els = $$(".reveal");
  if (reducedMotion.matches || !("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  // Stagger siblings inside grids.
  ["#featured-projects", "#ai-work", "#skills-grid", "#timeline-list"].forEach((sel) =>
    $$(`${sel} > .reveal`).forEach((el, i) => el.style.setProperty("--delay", `${Math.min(i, 5) * 80}ms`))
  );

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.classList.add("is-visible");
        io.unobserve(el);
        // Once the reveal has finished, drop the classes so hover/tilt transitions take over.
        const done = (ev) => {
          if (ev.target !== el) return; // ignore transitions bubbling up from children
          el.removeEventListener("transitionend", done);
          el.classList.remove("reveal", "is-visible");
          el.style.removeProperty("--delay");
        };
        el.addEventListener("transitionend", done);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  els.forEach((el) => io.observe(el));
}

/* ---------------- TYPED ROLE ---------------- */

function initTyped() {
  const el = $(".hero__typed");
  if (!el) return;
  const roles = JSON.parse(el.dataset.roles || "[]");
  if (reducedMotion.matches || roles.length < 2) return; // keep static first role

  let r = 0;
  let i = roles[0].length;
  let deleting = true;
  const HOLD = 1800;

  const tick = () => {
    const word = roles[r];
    if (deleting) {
      i--;
      el.textContent = word.slice(0, i);
      if (i === 0) {
        deleting = false;
        r = (r + 1) % roles.length;
        return setTimeout(tick, 300);
      }
      return setTimeout(tick, 40);
    }
    const next = roles[r];
    i++;
    el.textContent = next.slice(0, i);
    if (i === next.length) {
      deleting = true;
      return setTimeout(tick, HOLD);
    }
    setTimeout(tick, 75);
  };
  setTimeout(tick, HOLD);
}

/* ---------------- HERO GLOW ---------------- */

function initHeroGlow() {
  const hero = $(".hero");
  const glow = $(".hero__glow");
  if (!hero || !glow || reducedMotion.matches || !finePointer.matches) return;

  let x = 0, y = 0, raf = 0;
  hero.addEventListener("pointermove", (e) => {
    const rect = hero.getBoundingClientRect();
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    hero.classList.add("has-glow");
    if (!raf) {
      raf = requestAnimationFrame(() => {
        glow.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        raf = 0;
      });
    }
  });
  hero.addEventListener("pointerleave", () => hero.classList.remove("has-glow"));
}

/* ---------------- CARD TILT ---------------- */

function initTilt() {
  if (reducedMotion.matches || !finePointer.matches) return;
  const MAX = 5; // degrees

  $$("[data-tilt]").forEach((card) => {
    let raf = 0;
    card.addEventListener("pointermove", (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        card.classList.add("is-tilting");
        card.style.setProperty("--ry", `${(px * MAX * 2).toFixed(2)}deg`);
        card.style.setProperty("--rx", `${(-py * MAX * 2).toFixed(2)}deg`);
        raf = 0;
      });
    });
    card.addEventListener("pointerleave", () => {
      card.classList.remove("is-tilting");
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    });
  });
}

/* ---------------- CONTACT FORM ---------------- */

function initForm() {
  const form = $("#contact-form");
  if (!form) return;
  const status = $("#form-status");
  const button = $("button[type=submit]", form);
  const label = $(".btn__label", button);

  const rules = {
    name: (v) => (v.trim().length >= 2 ? "" : "Please enter your name."),
    email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "" : "Please enter a valid email address."),
    message: (v) => (v.trim().length >= 10 ? "" : "Please write a message (at least 10 characters)."),
  };

  const validateField = (input) => {
    const rule = rules[input.name];
    if (!rule) return true;
    const msg = rule(input.value);
    const field = input.closest(".field");
    field.classList.toggle("is-invalid", Boolean(msg));
    input.setAttribute("aria-invalid", msg ? "true" : "false");
    $(".field__error", field).textContent = msg;
    return !msg;
  };

  Object.keys(rules).forEach((name) => {
    const input = form.elements[name];
    input.addEventListener("blur", () => input.value && validateField(input));
    input.addEventListener("input", () => input.closest(".field").classList.contains("is-invalid") && validateField(input));
  });

  const setStatus = (msg, type) => {
    status.textContent = msg;
    status.className = `form__status${type ? " is-" + type : ""}`;
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const inputs = Object.keys(rules).map((n) => form.elements[n]);
    const results = inputs.map(validateField);
    if (results.includes(false)) {
      inputs[results.indexOf(false)].focus();
      setStatus("", "");
      return;
    }

    form.classList.add("is-loading");
    button.disabled = true;
    label.textContent = "Sending…";
    setStatus("", "");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        form.reset();
        $$(".field", form).forEach((f) => f.classList.remove("is-invalid"));
        setStatus("Thanks! Your message has been sent. I'll get back to you soon.", "success");
      } else {
        const data = await res.json().catch(() => ({}));
        const detail = data?.errors?.map((x) => x.message).join(", ");
        setStatus(detail || "Something went wrong. Please try again or email me directly.", "error");
      }
    } catch {
      setStatus("Network error. Please check your connection or email me directly.", "error");
    } finally {
      form.classList.remove("is-loading");
      button.disabled = false;
      label.textContent = "Send message";
    }
  });
}

/* ---------------- BOOT ---------------- */

renderExperience();
renderProjects();
renderSkills();
initNav();
initReveal();
initTyped();
initHeroGlow();
initTilt();
initForm();
$("#year").textContent = new Date().getFullYear();
