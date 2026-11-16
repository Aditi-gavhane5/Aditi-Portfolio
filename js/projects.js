window.portfolioProjects = [
  {
    name: "CompareX", category: "PRICE COMPARISON",
    description: "A web platform for bringing product prices from multiple online marketplaces together so shoppers can compare options and spot better deals.",
    image: "assets/projects/comparex.png", githubUrl: "https://github.com/Aditi-gavhane5/CompareX", skills: ["HTML", "CSS", "JavaScript", "Python", "Requests", "BeautifulSoup"],
    intro: "Compare product listings across marketplaces, track prices, and keep interesting finds in a wishlist.",
    detail: {
      overview: "CompareX brings product-price information from different online marketplaces into one place. It is intended to make the search for a suitable price less fragmented.",
      problem: "A shopper comparing the same item across several stores must repeatedly search, switch pages, and remember changing prices. That makes it harder to judge whether an offer is competitive.",
      objectives: ["Collect and present comparable product listings.", "Help users revisit products and understand price movement.", "Surface an at-a-glance Best Deal Score to support comparison."],
      features: ["Product search to find relevant listings.", "Side-by-side price comparison across supported marketplace results.", "Price history for seeing changes over time.", "Wishlist management for keeping selected products together.", "Best Deal Score as a quick comparison signal."],
      implementation: "The supplied technology list identifies a browser interface built with HTML, CSS, and JavaScript, alongside a Python component using Requests and BeautifulSoup for web requests and page parsing. The portfolio information describes a scraping workflow that gathers marketplace product and price information for the comparison experience. It does not specify the individual source sites, persistence layer, or the score formula, so those implementation details are not asserted here.",
      contribution: "My contribution was developing the CompareX project experience: connecting product discovery with price comparison and supporting features such as history, wishlists, and the deal score."
    }
  },
  {
    name: "Vendor Performance Analysis", category: "DATA ANALYTICS · POWER BI",
    description: "An end-to-end analysis of vendor sales, purchasing, inventory, and pricing data, turning business records into performance views and actionable findings.",
    image: "assets/projects/vendor-performance-analysis.png", githubUrl: "REPLACE_WITH_VENDOR_PERFORMANCE_ANALYSIS_GITHUB_URL", skills: ["SQL", "SQLite", "Python", "Pandas", "Matplotlib", "Seaborn", "Power BI", "DAX"],
    intro: "Trace the workflow from raw records through cleaning and analysis to an interactive Power BI dashboard.",
    detail: {
      overview: "This data analyst project examines vendor performance using sales, purchasing, inventory, and pricing information. Its goal is to help stakeholders understand how vendors and brands contribute to business outcomes.",
      problem: "Raw operational records can be difficult to interpret directly. Without consistent preparation and useful summaries, it is harder to identify high and low performers, understand stock positions, and connect sales activity to purchasing decisions.",
      objectives: ["Prepare analysis-ready data from source records.", "Compare vendor and brand performance using relevant measures.", "Explore sales and inventory patterns and communicate findings clearly."],
      features: ["SQL and SQLite queries for extraction, aggregation, and analysis.", "Python and Pandas ETL and data transformation.", "Exploratory analysis and visual checks with Matplotlib and Seaborn.", "Interactive Power BI dashboard pages for performance analysis.", "DAX measures and KPIs to summarize key business dimensions."],
      implementation: "The workflow begins with source data queried and aggregated in SQL/SQLite. Python and Pandas support extraction, cleaning, reshaping, and preparation for analysis. Exploratory data analysis uses Matplotlib and Seaborn to inspect distributions and relationships. Prepared results are brought into Power BI, where DAX measures and KPIs support interactive vendor, brand, sales, and inventory views. The provided material does not enumerate the specific KPI formulas or quantified findings, so no numerical claims are made.",
      contribution: "My contribution covered the analysis workflow described for the project: preparing and exploring the data, defining useful performance measures, and assembling the results into a dashboard for business review."
    }
  },
  {
    name: "EchoAI – Personal AI Assistant", category: "AI · DOCUMENT Q&A",
    description: "A web-based personal assistant for conversational questions and document-based answers, built with Python, Flask, and the Google Gemini API.",
    image: "assets/projects/echoai.png", githubUrl: "https://github.com/Aditi-gavhane5/EchoAI", skills: ["Python", "Flask", "Google Gemini API", "HTML", "CSS", "JavaScript", "JSON"],
    intro: "Chat with an AI assistant, keep conversational context, and ask questions about uploaded documents.",
    detail: {
      overview: "EchoAI is a web-based personal AI assistant that combines conversational interaction with the ability to ask questions about user-provided documents.",
      problem: "People often need both a general assistant and help making sense of their own notes or files. Moving between a chat tool and separate documents adds friction and makes follow-up questions harder to manage.",
      objectives: ["Provide a straightforward browser-based chat experience.", "Connect user prompts to the Google Gemini API.", "Support continued conversation context and document-focused questions."],
      features: ["Conversational AI interactions through a web interface.", "Persistent conversation memory as described in the supplied project brief.", "PDF, DOCX, and TXT document uploads.", "Question answering grounded in uploaded documents."],
      implementation: "The supplied stack identifies a browser interface built with HTML, CSS, and JavaScript, backed by Python and Flask. User interactions are handled through the web application, which integrates with the Google Gemini API for AI responses. JSON is included among the stated technologies. Uploaded PDF, DOCX, and TXT files support document-based questions. The project materials do not describe the precise extraction library, storage model, or memory retention mechanism, so this description avoids assuming those details.",
      contribution: "My contribution was building the web-based assistant experience and connecting the chat, conversation context, and document-question workflows using the listed technologies."
    }
  },
  {
    name: "EmberWatch", category: "WILDFIRE MONITORING",
    description: "A wildfire tracking and visualization application that presents disaster-related information through an interactive interface and map-based view.",
    image: "assets/projects/emberwatch.png", githubUrl: "https://github.com/Aditi-gavhane5/EarthWatch", skills: ["HTML", "CSS", "JavaScript", "APIs", "Google Maps"],
    intro: "Explore wildfire-related information retrieved from external services in a visual, map-oriented experience.",
    detail: {
      overview: "EmberWatch is a wildfire tracking and visualization application designed to make relevant disaster information easier to explore.",
      problem: "Wildfire information can be difficult to interpret when it is spread across data sources or presented as uncontextualized records. A visual map interface helps visitors orient themselves and inspect available information spatially.",
      objectives: ["Retrieve wildfire-related information from external APIs.", "Present the information in an accessible and interactive user interface.", "Use mapping and visualization to support exploration."],
      features: ["External API integration for wildfire-related information.", "Interactive interface for exploring disaster information.", "Map-based presentation using the Google Maps technology listed for the project."],
      implementation: "The available portfolio details identify HTML, CSS, and JavaScript for the interface, external APIs for retrieving information, and Google Maps as the mapping technology. The app presents the retrieved information in a map-oriented visual experience. The supplied material does not identify a particular API, refresh interval, data schema, or alert capability, so those are not claimed.",
      contribution: "My contribution was developing the interactive presentation layer and integrating the project’s external data and map-based visualization into a wildfire monitoring experience."
    }
  },
  {
    name: "Compressify – File Compression Platform", category: "IMAGE COMPRESSION · BROWSER TOOL",
    description: "A browser-based image compression experience whose supplied preview presents original and compressed images, a quality control, and JPG, PNG, and WEBP formats.",
    image: "assets/projects/compressify.jpeg", githubUrl: "https://github.com/Aditi-gavhane5/Compressify", skills: ["JPG", "PNG", "WEBP", "Runs in your browser"],
    intro: "A clean image-optimization interface focused on reducing file size while retaining visual quality.",
    detail: {
      overview: "Compressify is presented in the supplied application screenshot as a free, private image compression tool that runs in the browser. It addresses the practical need to reduce image file sizes for storage and sharing.",
      problem: "Large images take more storage and can be slower or less convenient to share. A simple compression workflow can help users reduce file size while considering the resulting image quality.",
      objectives: ["Make image compression approachable through a clear web interface.", "Show an original-versus-compressed comparison.", "Give users visibility into image size and a quality setting."],
      features: ["The screenshot advertises JPG, PNG, and WEBP support.", "An original and compressed comparison panel.", "Visible original and compressed file-size labels and a reduction summary.", "A displayed quality setting.", "The screenshot describes the tool as free, private, and running in the browser."],
      implementation: "The provided material for Compressify is a screenshot only; no source code or technical documentation was included. The screenshot supports the visible interface and its stated browser-based workflow, formats, size labels, and quality control, but it does not establish the implementation language, libraries, compression algorithm, upload flow, or download behavior. Those technical details are therefore left open pending source code or documentation.",
      contribution: "I created the Compressify project experience represented by the supplied preview. The current portfolio entry documents the interface and stated capabilities visible in that screenshot without making unsupported claims about its internals."
    }
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("projectsList");
  if (!target || !window.portfolioProjects) return;
  const list = items => `<ul>${items.map(item => `<li>${item}</li>`).join("")}</ul>`;
  const githubIcon = `<svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38v-1.49c-2.23.49-2.7-.94-2.7-.94-.36-.92-.89-1.16-.89-1.16-.73-.5.06-.49.06-.49.8.06 1.22.82 1.22.82.71 1.21 1.87.86 2.33.66.07-.52.28-.86.51-1.06-1.78-.2-3.64-.89-3.64-3.96 0-.88.31-1.6.82-2.16-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.65 7.65 0 0 1 8 4.35c.68 0 1.36.09 2 .27 1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.16 0 3.08-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>`;
  const repoButton = url => {
    const valid = /^https:\/\/github\.com\/[^/?#]+\/[^/?#]+\/?$/.test(url || "");
    return valid
      ? `<a class="github-button" href="${url}" target="_blank" rel="noopener noreferrer">${githubIcon}<span>View on GitHub</span></a>`
      : `<button class="github-button" type="button" disabled aria-disabled="true" title="Replace this project's repository placeholder in js/projects.js">${githubIcon}<span>View on GitHub</span></button>`;
  };
  target.innerHTML = window.portfolioProjects.map((p, i) => `
    <article class="project-card">
      <div class="project-visual ${p.image ? 'has-project-image' : ''}" data-gallery="${i}" role="button" tabindex="0" aria-label="Open ${p.name} preview">
        ${p.image ? `<img src="${p.image}" alt="${p.name} project preview" loading="lazy">` : `<div><span class="project-placeholder-icon">▣</span><strong>${p.name}</strong></div>`}
        <span class="project-number">PROJECT / 0${i + 1}</span>
        <button class="gallery-button" data-gallery="${i}" type="button">View preview &nbsp; →</button>
      </div>
      <div class="project-copy">
        <div class="project-category">${p.category}</div><h3>${p.name}</h3>
        <p class="project-intro">${p.intro}</p>
        <div class="tag-list">${p.skills.map(t => `<span class="tag">${t}</span>`).join("")}</div>
        <div class="project-details" id="project-details-${i}" aria-hidden="true">
          <h4>Project Overview</h4><p>${p.detail.overview}</p>
          <h4>Problem Statement</h4><p>${p.detail.problem}</p>
          <h4>Objectives</h4>${list(p.detail.objectives)}
          <h4>Key Features</h4>${list(p.detail.features)}
          <h4>Technical Implementation</h4><p>${p.detail.implementation}</p>
          <h4>Technologies Used</h4><p>${p.skills.join(" · ")}</p>
          <h4>My Contribution</h4><p>${p.detail.contribution}</p>
        </div>
        <div class="project-links">${repoButton(p.githubUrl)}<button class="text-link project-expand" type="button" aria-expanded="false" aria-controls="project-details-${i}" data-expand="${i}">Read More ↓</button></div>
      </div>
    </article>
  `).join("");
  target.querySelectorAll(".project-visual[role='button']").forEach(visual => {
    visual.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        visual.querySelector(".gallery-button")?.click();
      }
    });
  });
});
