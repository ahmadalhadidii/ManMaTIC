(function () {
  if (typeof nodes === "undefined" || !Array.isArray(nodes)) {
    return;
  }

  const GROUP_TRACE = {
    "PROBLEM": {
      focus: "foundational risk definition",
      conversations: "brief-definition dialogues and pressure-mapping reviews",
      research: "future-of-work, AI governance, and accountability references",
      outputs: "problem statement diagrams, protocol framing, and early plan priorities",
      role: "why the institution must exist before form-making",
      review: "the project converts abstract AI pressure into spatially testable obligations",
      short: "Conversations + governance research"
    },
    "ORIGINALITY": {
      focus: "typological invention",
      conversations: "program-option comparisons and identity critique rounds",
      research: "institutional precedents, governance models, and learning typologies",
      outputs: "new institutional protocol, sequence logic, and identity structure",
      role: "how the project avoids becoming a generic AI center",
      review: "originality is proved through organizational logic, not slogans",
      short: "Comparative critique + typology research"
    },
    "SITE RELEVANCE": {
      focus: "Aqaba-specific operational grounding",
      conversations: "site-fit workshops and force-alignment discussions",
      research: "port logistics, climate, terrain, and regional transition studies",
      outputs: "site narrative diagrams, locational justification, and form drivers",
      role: "why this project belongs to this place and no other",
      review: "site forces are translated into concrete program and form moves",
      short: "Site dialogues + logistics/climate evidence"
    },
    "RESEARCH EVIDENCE": {
      focus: "evidence-backed decision making",
      conversations: "claim-check sessions and assumption stress tests",
      research: "literature review, standards, case comparisons, and technical notes",
      outputs: "decision validation, technical direction, and argument credibility",
      role: "preventing intuition-only decisions",
      review: "claims are supported by verifiable sources and translated into design",
      short: "Claim checks + multidisciplinary references"
    },
    "EVALUATION CRITERIA": {
      focus: "high-standard performance testing",
      conversations: "review simulations and scoring-framework calibration",
      research: "international benchmarks and architectural quality criteria",
      outputs: "evaluation matrix, proof requirements, and representation priorities",
      role: "how design quality is measured and defended",
      review: "every claim is tied to proof in plan, section, and technical narrative",
      short: "Review simulation + international benchmarks"
    },
    "PROGRAM PROTOCOL": {
      focus: "institutional sequencing",
      conversations: "workflow mapping and access-gradient critiques",
      research: "learning progression models and controlled-operation frameworks",
      outputs: "public-to-machine sequence, control gradients, and adjacency logic",
      role: "how humans progressively engage machine intensity",
      review: "program bands are operationally coherent and governance-aware",
      short: "Workflow critique + operation frameworks"
    },
    "PLAN DEVELOPMENT": {
      focus: "line-by-line plan intelligence",
      conversations: "iterative plan markups, redline sessions, and alternative testing",
      research: "planning precedents, operational diagrams, and occupancy behavior",
      outputs: "circulation hierarchy, room adjacency, service pockets, and thresholds",
      role: "how every line in plan earns its position",
      review: "plan geometry is derived from tested decisions, not graphic styling",
      short: "Plan redlines + planning precedents"
    },
    "MASSING / SITE FIT": {
      focus: "sectional and volumetric alignment",
      conversations: "massing critiques and profile-comparison loops",
      research: "topography response studies, solar envelopes, and urban fit references",
      outputs: "volume stepping, sectional hierarchy, and site anchoring",
      role: "how the building sits, rises, and relates to the ground",
      review: "massing logic is performative, contextual, and institutionally legible",
      short: "Massing loops + terrain/solar studies"
    },
    "SUSTAINABILITY": {
      focus: "climate-performance integration",
      conversations: "performance trade-off reviews and system coordination rounds",
      research: "thermal behavior, passive strategy, and infrastructure performance data",
      outputs: "environmental systems, shading logic, and technical section decisions",
      role: "turning climate pressure into spatial performance",
      review: "environmental strategy is embedded in architecture, not appended later",
      short: "Performance reviews + thermal/system research"
    },
    "MACHINE LAYER": {
      focus: "high-intensity operational governance",
      conversations: "risk-control planning and oversight protocol sessions",
      research: "compute operations, infrastructure resilience, and control-room references",
      outputs: "machine-zone concentration, supervision logic, and service routing",
      role: "making machine operations controlled, safe, and legible",
      review: "machine intensity is spatially governed rather than hidden",
      short: "Risk-control sessions + infrastructure references"
    },
    "TECHNICAL DRAWINGS": {
      focus: "proof through technical representation",
      conversations: "drawing-audit cycles and clarity refinement reviews",
      research: "drawing standards, detailing references, and documentation protocols",
      outputs: "plans, sections, diagrams, matrices, and verification visuals",
      role: "transforming ideas into measurable proof",
      review: "technical drawings carry the burden of architectural credibility",
      short: "Drawing audits + documentation standards"
    },
    "CASE STUDIES": {
      focus: "comparative intelligence",
      conversations: "precedent extraction sessions and transferability debates",
      research: "global references and institutional analog mapping",
      outputs: "translated lessons, adapted strategies, and risk avoidance",
      role: "learning what to adopt, adapt, or reject",
      review: "precedents are transformed into context-fit decisions",
      short: "Precedent debates + analog mapping"
    },
    "RENDERS / VISUAL PROOF": {
      focus: "visual and atmospheric verification",
      conversations: "scene-direction critiques and narrative alignment checks",
      research: "material reference packs, scale cues, and visual communication studies",
      outputs: "review-facing imagery, atmosphere control, and perception testing",
      role: "proving spatial intent in image form",
      review: "renders communicate function, scale, and governance, not mood alone",
      short: "Scene critiques + visual communication research"
    },
    "AUTHORSHIP": {
      focus: "decision governance and accountability",
      conversations: "authorship clarification dialogues and responsibility mapping",
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
      conversations: "iterative critique sessions",
      research: "targeted references",
      outputs: "documented architectural decisions",
      role: "supporting project coherence",
      review: "the claim can be defended through drawings and logic",
      short: "Iterative critique + references"
    };
  }

  function keywordImpact(label) {
    const hit = KEYWORD_IMPACT.find((entry) => entry.re.test(label));
    return hit ? hit.text : "Its influence is tracked through adjacency, sequence, and representational proof across the atlas.";
  }

  function composeHubDescription(node) {
    const trace = traceFor(node.group);
    return node.label + " frames the project's " + trace.focus + ". " +
      "This hub is a decision stack linking " + trace.conversations + ", " + trace.research + ", and " +
      trace.outputs + " into accountable architectural moves.";
  }

  function composeTopicDescription(node) {
    const trace = traceFor(node.group);
    return node.label + " operates as a traceable decision variable inside " + node.group + ". " +
      "It was stress-tested through " + trace.conversations + ", grounded by " + trace.research + ", " +
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
    return "Evidence chain: " + trace.conversations + " -> " + trace.research + " -> " + trace.outputs + ". " +
      "This node remains linked in the graph so the design claim can be checked against related decisions.";
  }

  function buildPanelBody(node) {
    return "<div class=\"p-sec\"><span class=\"p-sec-h\">Meaning</span><div class=\"p-sec-b\">" + node.description + "</div></div>" +
      "<div class=\"p-sec\"><span class=\"p-sec-h\">Design Impact</span><div class=\"p-sec-b\">" + roleTextUpgraded(node) + "</div></div>" +
      "<div class=\"p-sec\"><span class=\"p-sec-h\">Evidence Trail</span><div class=\"p-sec-b\">" + evidenceTextUpgraded(node) + "</div></div>" +
      "<div class=\"p-sec\"><span class=\"p-sec-h\">Project Value</span><div class=\"p-sec-b\">" +
      "Value score: " + Number(node.val || 0).toFixed(1) + "/10. This reflects discussed impact, evidence depth, and decision centrality across the project map." +
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

    const mobileMode = window.matchMedia("(max-width:900px) and (pointer:coarse), (max-height:700px) and (pointer:coarse)").matches;

    if (mobileMode && typeof mobileShowPanel === "function") {
      mobileShowPanel(node);
    } else if (typeof desktopShowPanel === "function") {
      desktopShowPanel(node);
    } else if (typeof mobileShowPanel === "function") {
      mobileShowPanel(node);
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
        labels = false;
      } catch (err) {
        // Keep UI-only fallback below if lexical label variable is not writable.
      }
      const labelBtn = document.getElementById("btn-labels");
      if (labelBtn) {
        labelBtn.classList.remove("on");
      }
    };

    sync();
    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", sync);
    } else if (typeof media.addListener === "function") {
      media.addListener(sync);
    }
  }

  bindReliableCloseButtons();
  bindOutsideTapBehavior();
  applyMobileLabelMode();

  const filterNote = document.getElementById("filter-note");
  if (filterNote) {
    filterNote.innerHTML = "Each family in the graph reflects the impact of discussed design decisions; in plan development, <b>every decision and every line</b> was produced through discussion, critical thinking, and research, and that evidence trail is visible in the graph.";
  }
})();
