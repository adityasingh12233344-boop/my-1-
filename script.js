// Data for the Projects Section (Aap yahan apne saare project details store karein)
const projectsData = [
    {
        id: 1,
        title: "E-commerce Store",
        description: "A full-stack e-commerce solution with integrated Stripe payment gateway and user authentication. Key features include product filtering, order tracking, and a secure admin dashboard.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
        image: "project-1-full.jpg", // Detailed image
        liveUrl: "https://live-ecommerce.com",
        githubUrl: "https://github.com/myuser/ecommerce-project"
    },
    {
        id: 2,
        title: "Tech Blog Platform",
        description: "A responsive blog platform built with a focus on fast loading, SEO, and a modern UI/UX. Includes a custom CMS for easy content management.",
        tech: ["Next.js", "GraphQL", "Tailwind CSS"],
        image: "project-2-full.jpg", // Detailed image
        liveUrl: "https://live-blog.com",
        githubUrl: "https://github.com/myuser/blog-platform"
    },
    {
        id: 3,
        title: "Design Agency Site",
        description: "A sleek, interactive portfolio for a creative design agency, featuring smooth animations and a minimalist aesthetic to showcase high-quality work.",
        tech: ["HTML5", "CSS3 (SCSS)", "Vanilla JS"],
        image: "project-3-full.jpg", // Detailed image
        liveUrl: "https://live-design-agency.com",
        githubUrl: "https://github.com/myuser/design-portfolio"
    }
    // Aur projects yahan add karein
];


// 1. Hamburger Menu Toggle Logic (Mobile Responsiveness)
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Hide menu when a link is clicked on mobile
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
});


// 2. Project Details Modal Logic (Dynamic Content)
const modal = document.getElementById("projectModal");
const modalDetails = document.getElementById("modalDetails");
const closeBtn = document.querySelector(".close-btn");
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
        // Only open modal if button is clicked (or card is clicked, but not img/text etc.)
        const projectId = card.getAttribute('data-project-id');
        const project = projectsData.find(p => p.id == projectId);
        
        if (project) {
            // Content banane ka function
            const techList = project.tech.map(t => <span class="tech-tag">${t}</span>).join('');
            
            modalDetails.innerHTML = `
                <h2>${project.title}</h2>
                <img src="${project.image}" alt="${project.title}">
                <p class="modal-description">${project.description}</p>
                
                <h3>Technologies Used:</h3>
                <p class="tech-tags">${techList}</p>
                
                <div class="modal-links">
                    <a href="${project.liveUrl}" target="_blank" class="cta-button">View Live Demo</a>
                    <a href="${project.githubUrl}" target="_blank" class="cta-button github-btn">View Code (GitHub)</a>
                </div>
            `;
            
            modal.style.display = "block";
        }
    });
});

// Close Modal when 'x' is clicked
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close Modal when clicked outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// 3. Update Footer Year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Note: Aapko 'project-1-full.jpg', 'your-photo.jpg' aur 'style.css' mein
// 'tech-tag' aur 'modal-links' ke liye thodi aur styling add karni hogi
// taaki modal aur bhi behtar dikhe.