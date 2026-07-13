(function () {
  if (typeof nodes === "undefined" || !Array.isArray(nodes)) {
    return;
  }

  const PORTFOLIO_PROJECT_URL = "https://www.ahmadalhadidii.manmatic.institute/project.html?project=project-01";

  if (typeof radius === "function") {
    const originalNodeRadius = radius;
    const emphasizedNodeRadius = function (node) {
      const baseRadius = originalNodeRadius(node);
      return node && node.id === "core" ? baseRadius * 1.16 : baseRadius;
    };
    try {
      radius = emphasizedNodeRadius;
    } catch (err) {
      // Keep the original canvas radius if the global binding is read-only.
    }
    window.radius = emphasizedNodeRadius;
  }

  (function improveGraphTypography() {
    const graphCanvas = document.getElementById("canvas");
    const graphContext = graphCanvas ? graphCanvas.getContext("2d") : null;
    if (!graphContext || graphContext.__manmaticReadableType) {
      return;
    }
    graphContext.__manmaticReadableType = true;

    const nativeMeasureText = graphContext.measureText.bind(graphContext);
    const nativeFillText = graphContext.fillText.bind(graphContext);
    const readableFont = function (font) {
      const match = String(font || "").match(/^([0-9.]+)px\s+Roboto Mono/i);
      if (!match) {
        return null;
      }
      const currentSize = Number(match[1]);
      const readableSize = Math.max(currentSize + 0.65, currentSize * 1.1);
      return readableSize.toFixed(2) + "px IBM Plex Mono, Consolas, monospace";
    };

    graphContext.measureText = function (text) {
      const previousFont = this.font;
      const adjustedFont = readableFont(previousFont);
      if (adjustedFont) this.font = adjustedFont;
      const metrics = nativeMeasureText(text);
      if (adjustedFont) this.font = previousFont;
      return metrics;
    };

    graphContext.fillText = function (text, x, y, maxWidth) {
      const previousFont = this.font;
      const adjustedFont = readableFont(previousFont);
      if (adjustedFont) this.font = adjustedFont;
      if (typeof maxWidth === "number") {
        nativeFillText(text, x, y, maxWidth);
      } else {
        nativeFillText(text, x, y);
      }
      if (adjustedFont) this.font = previousFont;
    };
  })();

  const GROUP_TRACE = {
    "PROBLEM": {
      focus: "foundational risk definition",
      inputs: "brief-definition input traces and pressure-mapping reviews",
      research: "future-of-work, AI governance, and accountability references",
      outputs: "problem statement diagrams, protocol framing, and early plan priorities",
      role: "why the institution must exist before form-making",
      review: "the project converts abstract AI pressure into spatially testable obligations",
      short: "Input traces + governance research"
    },
    "ORIGINALITY": {
      focus: "typological invention",
      inputs: "program-option traces and identity critique rounds",
      research: "institutional precedents, governance models, and learning typologies",
      outputs: "new institutional protocol, sequence logic, and identity structure",
      role: "how the project avoids becoming a generic AI center",
      review: "originality is proved through organizational logic, not slogans",
      short: "Comparative critique + typology research"
    },
    "SITE RELEVANCE": {
      focus: "Aqaba-specific operational grounding",
      inputs: "site-fit workshops and force-alignment traces",
      research: "port logistics, climate, terrain, and regional transition studies",
      outputs: "site narrative diagrams, locational justification, and form drivers",
      role: "why this project belongs to this place and no other",
      review: "site forces are translated into concrete program and form moves",
      short: "Site dialogues + logistics/climate evidence"
    },
    "RESEARCH EVIDENCE": {
      focus: "evidence-backed decision making",
      inputs: "claim-check signals and assumption stress tests",
      research: "literature review, standards, case comparisons, and technical notes",
      outputs: "decision validation, technical direction, and argument credibility",
      role: "preventing intuition-only decisions",
      review: "claims are supported by verifiable sources and translated into design",
      short: "Claim checks + multidisciplinary references"
    },
    "EVALUATION CRITERIA": {
      focus: "high-standard performance testing",
      inputs: "review simulations and scoring-framework traces",
      research: "international benchmarks and architectural quality criteria",
      outputs: "evaluation matrix, proof requirements, and representation priorities",
      role: "how design quality is measured and defended",
      review: "every claim is tied to proof in plan, section, and technical narrative",
      short: "Review simulation + international benchmarks"
    },
    "PROGRAM PROTOCOL": {
      focus: "institutional sequencing",
      inputs: "workflow mapping and access-gradient signal reviews",
      research: "learning progression models and controlled-operation frameworks",
      outputs: "public-to-machine sequence, control gradients, and adjacency logic",
      role: "how humans progressively engage machine intensity",
      review: "program bands are operationally coherent and governance-aware",
      short: "Workflow critique + operation frameworks"
    },
    "PLAN DEVELOPMENT": {
      focus: "line-by-line plan intelligence",
      inputs: "iterative plan markups, redline signals, and alternative testing",
      research: "planning precedents, operational diagrams, and occupancy behavior",
      outputs: "circulation hierarchy, room adjacency, service pockets, and thresholds",
      role: "how every line in plan earns its position",
      review: "plan geometry is derived from tested decisions, not graphic styling",
      short: "Plan redlines + planning precedents"
    },
    "MASSING / SITE FIT": {
      focus: "sectional and volumetric alignment",
      inputs: "massing traces and profile-comparison loops",
      research: "topography response studies, solar envelopes, and urban fit references",
      outputs: "volume stepping, sectional hierarchy, and site anchoring",
      role: "how the building sits, rises, and relates to the ground",
      review: "massing logic is performative, contextual, and institutionally legible",
      short: "Massing loops + terrain/solar studies"
    },
    "SUSTAINABILITY": {
      focus: "climate-performance integration",
      inputs: "performance trade-off signals and system coordination rounds",
      research: "thermal behavior, passive strategy, and infrastructure performance data",
      outputs: "environmental systems, shading logic, and technical section decisions",
      role: "turning climate pressure into spatial performance",
      review: "environmental strategy is embedded in architecture, not appended later",
      short: "Performance reviews + thermal/system research"
    },
    "MACHINE LAYER": {
      focus: "high-intensity operational governance",
      inputs: "risk-control planning and oversight protocol traces",
      research: "compute operations, infrastructure resilience, and control-room references",
      outputs: "machine-zone concentration, supervision logic, and service routing",
      role: "making machine operations controlled, safe, and legible",
      review: "machine intensity is spatially governed rather than hidden",
      short: "Risk-control sessions + infrastructure references"
    },
    "TECHNICAL DRAWINGS": {
      focus: "proof through technical representation",
      inputs: "drawing-audit cycles and clarity refinement signals",
      research: "drawing standards, detailing references, and documentation protocols",
      outputs: "plans, sections, diagrams, matrices, and verification visuals",
      role: "transforming ideas into measurable proof",
      review: "technical drawings carry the burden of architectural credibility",
      short: "Drawing audits + documentation standards"
    },
    "CASE STUDIES": {
      focus: "comparative intelligence",
      inputs: "precedent extraction traces and transferability debates",
      research: "global references and institutional analog mapping",
      outputs: "translated lessons, adapted strategies, and risk avoidance",
      role: "learning what to adopt, adapt, or reject",
      review: "precedents are transformed into context-fit decisions",
      short: "Precedent debates + analog mapping"
    },
    "RENDERS / VISUAL PROOF": {
      focus: "visual and atmospheric verification",
      inputs: "scene-direction signals and narrative alignment checks",
      research: "material reference packs, scale cues, and visual communication studies",
      outputs: "review-facing imagery, atmosphere control, and perception testing",
      role: "proving spatial intent in image form",
      review: "renders communicate function, scale, and governance, not mood alone",
      short: "Scene critiques + visual communication research"
    },
    "AUTHORSHIP": {
      focus: "decision governance and accountability",
      inputs: "authorship clarification traces and responsibility mapping",
      research: "collaborative design methodology and process documentation",
      outputs: "clear ownership narrative, critique role definition, and process transparency",
      role: "showing where judgment is made and by whom",
      review: "collaboration is explicit while final architectural authorship stays clear",
      short: "Authorship dialogues + process documentation"
    }
  };

  const GROUP_WEIGHTS = {
    "PROBLEM": 6.1,
    "ORIGINALITY": 7.2,
    "SITE RELEVANCE": 6.8,
    "RESEARCH EVIDENCE": 6.4,
    "EVALUATION CRITERIA": 6.2,
    "PROGRAM PROTOCOL": 7.0,
    "PLAN DEVELOPMENT": 7.9,
    "MASSING / SITE FIT": 6.6,
    "SUSTAINABILITY": 6.3,
    "MACHINE LAYER": 7.4,
    "TECHNICAL DRAWINGS": 7.6,
    "CASE STUDIES": 5.4,
    "RENDERS / VISUAL PROOF": 5.8,
    "AUTHORSHIP": 5.1
  };

  const KEYWORD_IMPACT = [
    {
      re: /(circulation|path|route|flow|movement)/i,
      text: "It calibrates movement clarity, conflict reduction, and sequence legibility between public and controlled zones."
    },
    {
      re: /(section|layer|vertical|stack|height)/i,
      text: "It affects vertical hierarchy and sectional readability where operational intensity increases."
    },
    {
      re: /(service|support|utility|infrastructure|cooling)/i,
      text: "It strengthens hidden support logic so operational systems remain robust without compromising spatial clarity."
    },
    {
      re: /(training|learning|upskill|debrief|feedback)/i,
      text: "It sharpens the learning protocol and closes the loop between action, reflection, and improved performance."
    },
    {
      re: /(site|terrain|slope|climate|aqaba|port)/i,
      text: "It translates site pressure into concrete architectural response rather than abstract context language."
    },
    {
      re: /(drawing|diagram|matrix|detail)/i,
      text: "It raises representational accuracy so review claims can be verified directly in project documentation."
    }
  ];

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function round1(value) {
    return Math.round(value * 10) / 10;
  }

  function traceFor(group) {
    return GROUP_TRACE[group] || {
      focus: "integrated design reasoning",
      inputs: "iterative critique traces",
      research: "targeted references",
      outputs: "documented architectural decisions",
      role: "supporting project coherence",
      review: "the claim can be defended through drawings and logic",
      short: "Iterative critique + references"
    };
  }

  function keywordImpact(label) {
    const hit = KEYWORD_IMPACT.find((entry) => entry.re.test(label));
    return hit ? hit.text : "Its influence is tracked through adjacency, sequence, and representational proof across the field.";
  }

  function composeHubDescription(node) {
    const trace = traceFor(node.group);
    return node.label + " frames the project's " + trace.focus + ". " +
      "This hub is a decision stack linking " + trace.inputs + ", " + trace.research + ", and " +
      trace.outputs + " into accountable architectural moves.";
  }

  function composeTopicDescription(node) {
    const trace = traceFor(node.group);
    return node.label + " operates as a traceable decision variable inside " + node.group + ". " +
      "It was stress-tested through " + trace.inputs + ", grounded by " + trace.research + ", " +
      "and translated into " + trace.outputs + ". " + keywordImpact(node.label);
  }

  function computeProjectValue(node) {
    if (node.tier === "core") {
      return 10.0;
    }

    const base = GROUP_WEIGHTS[node.group] || (node.tier === "hub" ? 6.4 : 4.4);
    const neighborCount = node.nei ? node.nei.size : 0;
    const neighborBoost = node.tier === "hub"
      ? Math.min(1.6, neighborCount / 10)
      : Math.min(1.1, neighborCount / 16);
    const tierBias = node.tier === "hub" ? 0.95 : -0.95;
    const evidenceBoost = node.group === "PLAN DEVELOPMENT" || node.group === "TECHNICAL DRAWINGS"
      ? 0.55
      : (node.group === "CASE STUDIES" ? -0.25 : 0.15);

    const min = node.tier === "hub" ? 4.8 : 2.2;
    const max = node.tier === "hub" ? 9.4 : 7.8;

    return round1(clamp(base + neighborBoost + tierBias + evidenceBoost, min, max));
  }

  function roleTextUpgraded(node) {
    const trace = traceFor(node.group);
    return "This node governs " + trace.role + ". " +
      "This assessment was discussed during critique and is accepted only when " + trace.review + ".";
  }

  function evidenceTextUpgraded(node) {
    const trace = traceFor(node.group);
    return "Evidence chain: " + trace.inputs + " -> " + trace.research + " -> " + trace.outputs + ". " +
      "This node remains linked in the graph so the design claim can be checked against related decisions.";
  }

  function escapeHTML(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (char) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&#39;"
      }[char];
    });
  }

  function buildPanelBody(node) {
    const description = escapeHTML(node.description);
    const role = escapeHTML(roleTextUpgraded(node));
    const evidence = escapeHTML(evidenceTextUpgraded(node));
    const value = escapeHTML(Number(node.val || 0).toFixed(1));
    const projectLink = node.id === "core"
      ? "<div class=\"p-project-link-wrap\"><a class=\"p-project-link\" href=\"" + PORTFOLIO_PROJECT_URL + "\" target=\"_blank\" rel=\"noopener noreferrer\">OPEN MANMATIC PROJECT <span aria-hidden=\"true\">&#8599;</span></a></div>"
      : "";

    return projectLink +
      "<div class=\"p-sec\"><span class=\"p-sec-h\">Meaning</span><div class=\"p-sec-b\">" + description + "</div></div>" +
      "<div class=\"p-sec\"><span class=\"p-sec-h\">Design Impact</span><div class=\"p-sec-b\">" + role + "</div></div>" +
      "<div class=\"p-sec\"><span class=\"p-sec-h\">Evidence Trail</span><div class=\"p-sec-b\">" + evidence + "</div></div>" +
      "<div class=\"p-sec\"><span class=\"p-sec-h\">Project Value</span><div class=\"p-sec-b\">" +
      "Value score: " + value + "/10. This reflects discussed impact, evidence depth, and decision centrality across the project map." +
      "</div></div>";
  }

  function buildMeta(node) {
    const trace = traceFor(node.group);
    const connections = node.nei ? node.nei.size : 0;
    return "Connections: " + connections + " | Project value: " + Number(node.val || 0).toFixed(1) + "/10 | Trace: " + trace.short;
  }

  function hydrateOpenPanels(node) {
    const groupLabel = (typeof GROUP_LABELS !== "undefined" && GROUP_LABELS[node.group]) ? GROUP_LABELS[node.group] : node.group;
    const tagText = groupLabel + " · " + node.tier;
    const body = buildPanelBody(node);
    const meta = buildMeta(node);

    const panelTitle = document.getElementById("p-title");
    const panelTag = document.getElementById("p-tag");
    const panelBody = document.getElementById("p-prev");
    const panelMeta = document.getElementById("p-meta");

    if (panelTitle) panelTitle.textContent = node.label;
    if (panelTag) panelTag.textContent = tagText;
    if (panelBody) panelBody.innerHTML = body;
    if (panelMeta) panelMeta.textContent = meta;

    const mobileTitle = document.getElementById("nm-title");
    const mobileTag = document.getElementById("nm-tag");
    const mobileBody = document.getElementById("nm-body");
    const mobileMeta = document.getElementById("nm-meta");

    if (mobileTitle) mobileTitle.textContent = node.label;
    if (mobileTag) mobileTag.textContent = tagText;
    if (mobileBody) mobileBody.innerHTML = body;
    if (mobileMeta) mobileMeta.textContent = meta;

    const miniTitle = document.getElementById("mp-title");
    const miniTag = document.getElementById("mp-tag");
    if (miniTitle) miniTitle.textContent = node.label;
    if (miniTag) miniTag.textContent = tagText;
  }

  nodes.forEach(function (node) {
    if (node.tier === "hub") {
      node.description = composeHubDescription(node);
    } else if (node.tier === "topic") {
      node.description = composeTopicDescription(node);
    }
    node.val = computeProjectValue(node);
  });

  if (typeof roleText === "function") {
    roleText = roleTextUpgraded;
  } else {
    window.roleText = roleTextUpgraded;
  }

  if (typeof evidenceText === "function") {
    evidenceText = evidenceTextUpgraded;
  } else {
    window.evidenceText = evidenceTextUpgraded;
  }

  const desktopShowPanel = typeof showPanel === "function" ? showPanel : null;
  const mobileShowPanel = typeof window.showPanel === "function" ? window.showPanel : desktopShowPanel;

  function upgradedShowPanel(node) {
    if (!node) {
      return;
    }

    try {
      selected = node;
    } catch (err) {
      // Keep the visible panel usable even if the original selected binding is not writable.
    }

    const mobileMode = window.matchMedia("(max-width:900px) and (pointer:coarse), (max-height:700px) and (pointer:coarse)").matches;

    if (mobileMode) {
      const panel = document.getElementById("panel");
      const bar = document.getElementById("mobilePanelBar");
      const modal = document.getElementById("nodeModal");
      const scroll = document.getElementById("nodeModalScroll");

      if (panel) panel.classList.remove("show", "sheet-expanded", "dragging");
      if (bar) bar.classList.remove("show");
      document.body.classList.remove("panel-open");
      document.body.classList.add("node-modal-open");
      if (modal) {
        modal.classList.remove("nm-dragging");
        modal.style.transform = "";
      }
      if (scroll) {
        scroll.scrollTop = 0;
        requestAnimationFrame(function () {
          scroll.scrollTop = 0;
        });
        setTimeout(function () {
          scroll.scrollTop = 0;
        }, 60);
      }
    } else {
      const panel = document.getElementById("panel");
      const scroll = document.getElementById("p-scroll");

      document.body.classList.remove("node-modal-open");
      document.body.classList.add("panel-open");
      if (panel) {
        panel.classList.add("show");
        panel.classList.remove("dragging");
        panel.style.transform = "";
      }
      if (typeof applyPanelSheetState === "function") {
        applyPanelSheetState("compact");
      }
      if (scroll) {
        scroll.scrollTop = 0;
        requestAnimationFrame(function () {
          scroll.scrollTop = 0;
        });
      }
    }

    hydrateOpenPanels(node);
  }

  try {
    showPanel = upgradedShowPanel;
  } catch (err) {
    // Keep window.showPanel patch below if lexical reassignment is blocked.
  }
  window.showPanel = upgradedShowPanel;

  if (window.canvas && typeof window.canvas.addEventListener === "function") {
    window.canvas.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    });
    window.canvas.addEventListener("auxclick", function (e) {
      e.preventDefault();
    });
  }

  function bindReliableCloseButtons() {
    if (document.documentElement.dataset.closePatchV1 === "1") {
      return;
    }
    document.documentElement.dataset.closePatchV1 = "1";

    const closeSelector = "#p-close,#nm-close,.mp-close";
    const onCloseIntent = function (e) {
      const target = e.target;
      if (!target || typeof target.closest !== "function") {
        return;
      }
      const trigger = target.closest(closeSelector);
      if (!trigger) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      if (typeof e.stopImmediatePropagation === "function") {
        e.stopImmediatePropagation();
      }
      if (typeof window.closePanel === "function") {
        window.closePanel();
      }
    };

    document.addEventListener("click", onCloseIntent, true);
    document.addEventListener("touchend", onCloseIntent, true);
    document.addEventListener("pointerup", onCloseIntent, true);
  }

  function bindStaticControls() {
    if (document.documentElement.dataset.controlsPatchV1 === "1") {
      return;
    }
    document.documentElement.dataset.controlsPatchV1 = "1";

    const bindClick = function (id, handler) {
      const el = document.getElementById(id);
      if (!el) {
        return;
      }
      el.addEventListener("click", function (e) {
        e.preventDefault();
        handler();
      });
    };

    bindClick("btn-rot", function () {
      if (typeof toggleRot === "function") toggleRot();
    });
    bindClick("btn-labels", function () {
      if (typeof toggleLabels === "function") toggleLabels();
    });
    bindClick("btn-search", function () {
      if (typeof toggleSrch === "function") toggleSrch();
    });
    bindClick("btn-reset", function () {
      if (typeof resetAll === "function") resetAll();
    });
    bindClick("filter-prev", function () {
      if (typeof scrollFilters === "function") scrollFilters(-1);
    });
    bindClick("filter-next", function () {
      if (typeof scrollFilters === "function") scrollFilters(1);
    });

    const searchInput = document.getElementById("search-input");
    if (searchInput) {
      searchInput.addEventListener("input", function () {
        if (typeof doSearch === "function") doSearch(searchInput.value);
      });
    }
  }

  function panelIsOpen() {
    return document.body.classList.contains("panel-open") || document.body.classList.contains("node-modal-open");
  }

  function pickNodeAtPoint(x, y) {
    if (typeof pick !== "function" || typeof x !== "number" || typeof y !== "number") {
      return null;
    }
    try {
      return pick(x, y);
    } catch (err) {
      return null;
    }
  }

  function pointFromEvent(e) {
    if (!e) {
      return null;
    }
    if (typeof e.clientX === "number" && typeof e.clientY === "number") {
      return { x: e.clientX, y: e.clientY };
    }
    const touch = e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : null;
    if (touch && typeof touch.clientX === "number" && typeof touch.clientY === "number") {
      return { x: touch.clientX, y: touch.clientY };
    }
    return null;
  }

  function pickNodeFromEvent(e) {
    const point = pointFromEvent(e);
    if (!point) {
      return null;
    }
    return pickNodeAtPoint(point.x, point.y);
  }

  function coreNodeAtPoint(x, y) {
    const picked = pickNodeAtPoint(x, y);
    if (picked && picked.id === "core") {
      return picked;
    }

    const coreNode = nodes.find(function (node) {
      return node && node.id === "core";
    });
    if (!coreNode || !coreNode.screen) {
      return null;
    }

    const compact = window.innerWidth < 900 || window.innerHeight < 660;
    const labelWidth = compact ? 78 : 96;
    const labelHeight = compact ? 22 : 28;
    const left = coreNode.screen.x - 12;
    const right = coreNode.screen.x + labelWidth;
    const top = coreNode.screen.y - labelHeight / 2;
    const bottom = coreNode.screen.y + labelHeight / 2;
    return x >= left && x <= right && y >= top && y <= bottom ? coreNode : null;
  }

  function coreNodeFromEvent(e) {
    const point = pointFromEvent(e);
    return point ? coreNodeAtPoint(point.x, point.y) : null;
  }

  function openCorePanel(coreNode) {
    if (coreNode && typeof window.showPanel === "function") {
      window.showPanel(coreNode);
    }
  }

  function bindCoreProjectLink() {
    if (document.documentElement.dataset.coreProjectLinkV1 === "1") {
      return;
    }
    document.documentElement.dataset.coreProjectLinkV1 = "1";

    const graphCanvas = document.getElementById("canvas");
    if (!graphCanvas) {
      return;
    }

    let mouseStart = null;
    let mouseMoved = false;
    let touchStart = null;
    let touchMoved = false;
    let ignoreClickUntil = 0;

    document.addEventListener("mousedown", function (e) {
      if (e.target !== graphCanvas) {
        mouseStart = null;
        return;
      }
      mouseStart = { x: e.clientX, y: e.clientY };
      mouseMoved = false;
    }, true);

    document.addEventListener("mousemove", function (e) {
      if (mouseStart && Math.hypot(e.clientX - mouseStart.x, e.clientY - mouseStart.y) > 9) {
        mouseMoved = true;
      }
    }, true);

    document.addEventListener("touchstart", function (e) {
      if (e.target !== graphCanvas || !e.touches || !e.touches.length) {
        touchStart = null;
        return;
      }
      const touch = e.touches[0];
      touchStart = { x: touch.clientX, y: touch.clientY };
      touchMoved = false;
    }, true);

    document.addEventListener("touchmove", function (e) {
      if (!touchStart || !e.touches || !e.touches.length) {
        return;
      }
      const touch = e.touches[0];
      if (Math.hypot(touch.clientX - touchStart.x, touch.clientY - touchStart.y) > 9) {
        touchMoved = true;
      }
    }, true);

    document.addEventListener("touchend", function (e) {
      if (!touchStart || touchMoved || e.target !== graphCanvas) {
        touchStart = null;
        touchMoved = false;
        return;
      }
      const coreNode = coreNodeFromEvent(e);
      touchStart = null;
      touchMoved = false;
      if (!coreNode) {
        return;
      }
      ignoreClickUntil = Date.now() + 700;
      e.preventDefault();
      e.stopPropagation();
      if (typeof e.stopImmediatePropagation === "function") {
        e.stopImmediatePropagation();
      }
      openCorePanel(coreNode);
    }, true);

    document.addEventListener("click", function (e) {
      const suppressSyntheticClick = Date.now() < ignoreClickUntil;
      const isGraphClick = e.target === graphCanvas;
      const coreNode = isGraphClick && !mouseMoved ? coreNodeFromEvent(e) : null;
      mouseStart = null;
      mouseMoved = false;
      if (suppressSyntheticClick || !coreNode) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      if (typeof e.stopImmediatePropagation === "function") {
        e.stopImmediatePropagation();
      }
      openCorePanel(coreNode);
    }, true);
  }

  function bindPortfolioLoader() {
    const loader = document.getElementById("loading");
    if (!loader || !loader.classList.contains("portfolio-loader")) {
      document.body.classList.add("portfolio-ready");
      return;
    }

    document.body.classList.add("portfolio-intro");
    loader.hidden = false;
    loader.classList.remove("is-complete");
    loader.style.removeProperty("display");
    loader.style.removeProperty("opacity");

    const progressPrimary = document.getElementById("loading-progress");
    const progressSecondary = document.getElementById("loading-progress-secondary");
    const progressBar = document.getElementById("loading-progress-bar");
    const state = document.getElementById("loading-state");
    const frame = document.getElementById("loading-frame");
    const signal = document.getElementById("loading-signal");
    const activeBinary = document.getElementById("loading-active-binary");
    const phase = document.getElementById("loading-phase");
    const announcement = document.getElementById("loading-announcement");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reducedMotion ? 320 : 1900;
    let finished = false;
    let startedAt = 0;

    const renderProgress = function (ratio) {
      const value = Math.min(100, Math.round(ratio * 100));
      const formatted = String(value).padStart(3, "0");
      const binary = value.toString(2).padStart(8, "0");
      loader.style.setProperty("--loader-ratio", ratio.toFixed(3));
      if (progressPrimary) progressPrimary.textContent = formatted;
      if (progressSecondary) progressSecondary.textContent = formatted;
      if (progressBar) progressBar.style.transform = "scaleX(" + ratio.toFixed(3) + ")";
      if (frame) frame.textContent = String(Math.min(6, Math.floor(ratio * 6) + 1)).padStart(2, "0") + " / 06";
      if (signal) signal.textContent = (ratio * 377).toFixed(3).padStart(7, "0");
      if (activeBinary) activeBinary.textContent = binary + " / " + binary.split("").reverse().join("");

      if (ratio < 0.24) {
        if (state) state.textContent = "SYSTEM INITIALIZATION";
        if (phase) phase.textContent = "ARCHIVE ACCESS";
      } else if (ratio < 0.54) {
        if (state) state.textContent = "INPUT TRACE";
        if (phase) phase.textContent = "FIELD ASSEMBLY";
      } else if (ratio < 0.82) {
        if (state) state.textContent = "NETWORK CALIBRATION";
        if (phase) phase.textContent = "CONNECTION MAPPING";
      } else {
        if (state) state.textContent = "FIELD READY";
        if (phase) phase.textContent = "MANMATIC ONLINE";
      }
    };

    const finish = function () {
      if (finished) return;
      finished = true;
      renderProgress(1);
      loader.classList.add("is-complete");
      loader.setAttribute("aria-hidden", "true");
      document.body.classList.remove("portfolio-intro");
      document.body.classList.add("portfolio-ready");
      if (announcement) announcement.textContent = "ManMaTIC project field ready.";
      window.setTimeout(function () {
        loader.hidden = true;
        loader.style.setProperty("display", "none", "important");
      }, reducedMotion ? 180 : 560);
    };

    const step = function (now) {
      if (!startedAt) startedAt = now;
      const linear = Math.min(1, (now - startedAt) / duration);
      const eased = 1 - Math.pow(1 - linear, 1.35);
      renderProgress(eased);
      if (linear < 1) {
        window.requestAnimationFrame(step);
      } else {
        finish();
      }
    };

    renderProgress(0);
    window.requestAnimationFrame(step);
    window.setTimeout(finish, 3200);
  }

  function bindOutsideTapBehavior() {
    if (document.documentElement.dataset.outsideTapPatchV3 === "1") {
      return;
    }
    document.documentElement.dataset.outsideTapPatchV3 = "1";

    const insideSelectors = "#panel,#nodeModal,#mobilePanelBar,#srch";
    let touchStartPoint = null;
    let ignoreClickUntil = 0;

    const onTouchStart = function (e) {
      if (!panelIsOpen() || !e.touches || !e.touches.length) {
        touchStartPoint = null;
        return;
      }
      const t = e.touches[0];
      touchStartPoint = { x: t.clientX, y: t.clientY };
    };

    const onOutsideIntent = function (e, isTouch) {
      if (!panelIsOpen()) {
        return;
      }
      if (!isTouch && Date.now() < ignoreClickUntil) {
        return;
      }
      if (isTouch) {
        const t = e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : null;
        if (t && touchStartPoint) {
          const moved = Math.hypot(t.clientX - touchStartPoint.x, t.clientY - touchStartPoint.y);
          if (moved > 9) {
            touchStartPoint = null;
            return;
          }
        }
        touchStartPoint = null;
        ignoreClickUntil = Date.now() + 450;
      }

      const target = e.target;
      if (target && typeof target.closest === "function" && target.closest(insideSelectors)) {
        return;
      }

      const node = pickNodeFromEvent(e);
      if (node && typeof window.showPanel === "function") {
        e.preventDefault();
        e.stopPropagation();
        if (typeof e.stopImmediatePropagation === "function") {
          e.stopImmediatePropagation();
        }
        window.showPanel(node);
        return;
      }

      if (typeof window.closePanel === "function") {
        e.preventDefault();
        e.stopPropagation();
        if (typeof e.stopImmediatePropagation === "function") {
          e.stopImmediatePropagation();
        }
        window.closePanel();
      }
    };

    document.addEventListener("touchstart", onTouchStart, true);
    document.addEventListener("touchend", function (e) {
      onOutsideIntent(e, true);
    }, true);
    document.addEventListener("click", function (e) {
      onOutsideIntent(e, false);
    }, true);
  }

  function applyMobileLabelMode() {
    const media = window.matchMedia("(max-width:900px) and (pointer:coarse), (max-height:700px) and (pointer:coarse)");
    const sync = function () {
      if (!media.matches) {
        return;
      }
      try {
        labels = true;
      } catch (err) {
        // Keep UI-only fallback below if lexical label variable is not writable.
      }
      const labelBtn = document.getElementById("btn-labels");
      if (labelBtn) {
        labelBtn.classList.add("on");
      }
    };

    sync();
    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", sync);
    } else if (typeof media.addListener === "function") {
      media.addListener(sync);
    }
  }

  bindPortfolioLoader();
  bindStaticControls();
  bindReliableCloseButtons();
  bindCoreProjectLink();
  bindOutsideTapBehavior();
  applyMobileLabelMode();

  const filterNote = document.getElementById("filter-note");
  if (filterNote) {
    filterNote.innerHTML = "<b>Every node in the graph</b> reflects the impact of <b>design decisions</b> discussed throughout the process. <b>Every line in the plan</b>, and <b>every idea within the project</b>, emerged through <b>critical thinking, research, questioning, and refinement</b>, turning the graph into a <b>visible evidence trail</b> of the <b>design process</b>.";
  }
})();
