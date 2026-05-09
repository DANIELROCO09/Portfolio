const projects=[{
    title: "Random Problems Coding",
    description:
    "Collection of competitive programming problems, algorithmic challenges, and mathematical implementations.",
    image: "assets/codpro.png",
    stack:["shell"],
    github:"#"},
    {
    title: "Cryptocurrency + Social Media Signals",
    description:
    "Signal analysis platform combining cryptocurrency market data with social sentiment and trend extraction.",
    image: "assets/Crypto.png",
    stack:["Python", "NLP", "APIs"],
    github:"#" 
    }
];

const projectsGrid = document.getElementById("projects-grid");

projects.forEach(project => {
    const stackHTML = project.stack
    .map(tech=>`<span class="tech-badge">${tech}</span>`)
    .join("");
    const card = `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-card-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${stackHTML}
                </div>
                <div class="project-footer">
                    <a href="${project.github}" class="project-link">
                        View Project →
                    </a>
                </div>

            </div>
        </div>
    `;
    projectsGrid.innerHTML += card;
});