// ============================================
// AGENCY - Complete Content Management System
// ============================================

// Default Data - All Website Content
const defaultData = {
    services: [
        {
            id: 1,
            title: "Web Development",
            description: "Custom websites and web applications built with modern technologies. We create responsive, fast, and secure web solutions tailored to your business needs.",
            icon: "fas fa-code"
        },
        {
            id: 2,
            title: "UI/UX Design",
            description: "Beautiful and intuitive user interfaces that enhance user experience. Our design team creates engaging designs that convert visitors into customers.",
            icon: "fas fa-palette"
        },
        {
            id: 3,
            title: "Digital Marketing",
            description: "Comprehensive digital marketing strategies to grow your online presence. We offer SEO, social media marketing, and content marketing services.",
            icon: "fas fa-bullhorn"
        },
        {
            id: 4,
            title: "Mobile Apps",
            description: "Native and cross-platform mobile applications for iOS and Android. We build apps that provide seamless user experiences across all devices.",
            icon: "fas fa-mobile-alt"
        },
        {
            id: 5,
            title: "Cloud Solutions",
            description: "Scalable cloud infrastructure and migration services. We help businesses leverage cloud technology for improved efficiency and cost savings.",
            icon: "fas fa-cloud"
        },
        {
            id: 6,
            title: "Consulting",
            description: "Expert business and technical consulting to help you make informed decisions. We analyze your needs and provide strategic recommendations.",
            icon: "fas fa-chart-line"
        }
    ],
    hero: {
        title: "We Deliver <span>Exceptional</span> Services",
        subtitle: "Transform your business with our professional solutions. We help brands grow and succeed in the digital world.",
        btnPrimary: "Our Services",
        btnPrimaryLink: "services.html",
        btnSecondary: "Get Started",
        btnSecondaryLink: "contact.html"
    },
    cta: {
        heading: "Ready to Start Your Project?",
        description: "Let's work together to bring your vision to life.",
        btnText: "Contact Us",
        btnLink: "contact.html"
    },
    features: [
        {
            id: 1,
            icon: "fas fa-rocket",
            title: "Fast Delivery",
            description: "We complete projects on time without compromising quality."
        },
        {
            id: 2,
            icon: "fas fa-lightbulb",
            title: "Creative Solutions",
            description: "Innovative ideas that set your business apart from competitors."
        },
        {
            id: 3,
            icon: "fas fa-users",
            title: "Expert Team",
            description: "Skilled professionals with years of industry experience."
        }
    ],
    about: {
        pageTitle: "About Us",
        pageSubtitle: "Learn more about our company and our mission",
        heading: "Who We Are",
        description1: "We are a full-service digital agency committed to helping businesses thrive in the modern digital landscape. With years of experience and a team of dedicated professionals, we deliver innovative solutions that drive growth and success.",
        description2: "Our approach combines creativity with technology to create memorable digital experiences. We believe in building long-term relationships with our clients through transparency, reliability, and exceptional results.",
        mission: "To empower businesses with cutting-edge digital solutions that enhance their online presence and drive measurable growth.",
        vision: "To be the most trusted digital partner for businesses seeking to transform and excel in the digital age."
    },
    team: [
        { id: 1, name: "John Smith", role: "CEO & Founder", icon: "fas fa-user" },
        { id: 2, name: "Sarah Johnson", role: "Creative Director", icon: "fas fa-user" },
        { id: 3, name: "Michael Brown", role: "Technical Lead", icon: "fas fa-user" },
        { id: 4, name: "Emily Davis", role: "Marketing Manager", icon: "fas fa-user" }
    ],
    stats: [
        { id: 1, icon: "fas fa-project-diagram", value: "500+", label: "Projects Completed" },
        { id: 2, icon: "fas fa-smile", value: "200+", label: "Happy Clients" },
        { id: 3, icon: "fas fa-award", value: "15+", label: "Awards Won" },
        { id: 4, icon: "fas fa-clock", value: "10+", label: "Years Experience" }
    ],
    contact: {
        pageTitle: "Contact Us",
        pageSubtitle: "Let's discuss your next project",
        heading: "Get In Touch",
        description: "Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
        location: "123 Business Street, City, Country",
        email: "hello@agency.com",
        phone: "+1 234 567 890",
        hours: "Mon - Fri: 9AM - 6PM",
        formTitle: "Send Message"
    },
    footer: {
        siteName: "Agency",
        description: "Professional services for your business growth.",
        copyright: "© 2026 Agency. All rights reserved.",
        socialLinks: {
            facebook: "#",
            twitter: "#",
            instagram: "#",
            linkedin: "#"
        }
    },
    messages: []
};

// ============================================
// Data Management Functions
// ============================================
function loadData() {
    const stored = localStorage.getItem('agencyData');
    if (stored) {
        return JSON.parse(stored);
    }
    return JSON.parse(JSON.stringify(defaultData));
}

function saveData(data) {
    localStorage.setItem('agencyData', JSON.stringify(data));
}

let agencyData = loadData();

// Global access functions
window.getAgencyData = () => agencyData;
window.saveAgencyData = () => saveData(agencyData);
window.resetToDefaults = () => {
    if (confirm('Are you sure? This will delete all your custom content and restore defaults!')) {
        agencyData = JSON.parse(JSON.stringify(defaultData));
        saveData(agencyData);
        location.reload();
    }
};

// ============================================
// Dark Mode Toggle
// ============================================
const darkModeToggle = document.getElementById('darkModeToggle');

if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
    });
}

// ============================================
// Mobile Menu Toggle
// ============================================
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-menu-open');
        menuToggle.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    const navLinkElements = navLinks.querySelectorAll('a');
    navLinkElements.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('mobile-menu-open');
            menuToggle.classList.remove('active');
        });
    });
}

// ============================================
// Render Functions for Website Pages
// ============================================

// Render Hero Section
function renderHero() {
    const heroContent = document.querySelector('.hero-content');
    if (!heroContent) return;
    
    const hero = agencyData.hero;
    heroContent.innerHTML = `
        <h1 class="fade-in-up">${hero.title}</h1>
        <p class="fade-in-up">${hero.subtitle}</p>
        <div class="hero-buttons fade-in-up">
            <a href="${hero.btnPrimaryLink}" class="btn btn-primary">${hero.btnPrimary}</a>
            <a href="${hero.btnSecondaryLink}" class="btn btn-secondary">${hero.btnSecondary}</a>
        </div>
    `;
}

// Render CTA Section
function renderCTA() {
    const ctaContainer = document.querySelector('.cta .container');
    if (!ctaContainer) return;
    
    const cta = agencyData.cta;
    ctaContainer.innerHTML = `
        <h2>${cta.heading}</h2>
        <p>${cta.description}</p>
        <a href="${cta.btnLink}" class="btn btn-primary">${cta.btnText}</a>
    `;
}

// Render Features Section
function renderFeatures() {
    const featuresGrid = document.querySelector('.features-grid');
    if (!featuresGrid) return;
    
    featuresGrid.innerHTML = agencyData.features.map(feature => `
        <div class="feature-card">
            <i class="${feature.icon}"></i>
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        </div>
    `).join('');
}

// Render Services Section
function renderServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    if (!servicesGrid) return;
    
    servicesGrid.innerHTML = agencyData.services.map(service => `
        <div class="service-card">
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        </div>
    `).join('');
}

// Render About Page
function renderAboutPage() {
    // Page Header
    const pageHeader = document.querySelector('.page-header');
    if (pageHeader && window.location.pathname.includes('about.html')) {
        pageHeader.innerHTML = `
            <div class="container">
                <h1>${agencyData.about.pageTitle}</h1>
                <p>${agencyData.about.pageSubtitle}</p>
            </div>
        `;
    }
    
    // About Content
    const aboutContent = document.querySelector('.about-content');
    if (aboutContent) {
        aboutContent.innerHTML = `
            <div class="about-text">
                <h2>${agencyData.about.heading}</h2>
                <p>${agencyData.about.description1}</p>
                <p>${agencyData.about.description2}</p>
            </div>
            <div class="about-image">
                <i class="fas fa-building"></i>
            </div>
        `;
    }
    
    // Mission & Vision
    const mvGrid = document.querySelector('.mv-grid');
    if (mvGrid) {
        mvGrid.innerHTML = `
            <div class="mv-card">
                <i class="fas fa-bullseye"></i>
                <h3>Our Mission</h3>
                <p>${agencyData.about.mission}</p>
            </div>
            <div class="mv-card">
                <i class="fas fa-eye"></i>
                <h3>Our Vision</h3>
                <p>${agencyData.about.vision}</p>
            </div>
        `;
    }
    
    // Team Section
    const teamSectionHeader = document.querySelector('.team-section .section-header');
    if (teamSectionHeader) {
        teamSectionHeader.innerHTML = `
            <h2>Our Team</h2>
            <p>Meet the talented people behind our success</p>
        `;
    }
    
    const teamGrid = document.querySelector('.team-grid');
    if (teamGrid) {
        teamGrid.innerHTML = agencyData.team.map(member => `
            <div class="team-card">
                <div class="team-image">
                    <i class="${member.icon}"></i>
                </div>
                <h3>${member.name}</h3>
                <p>${member.role}</p>
            </div>
        `).join('');
    }
    
    // Stats Section
    const statsGrid = document.querySelector('.stats-grid');
    if (statsGrid) {
        statsGrid.innerHTML = agencyData.stats.map(stat => `
            <div class="stat-item">
                <i class="${stat.icon}"></i>
                <h3>${stat.value}</h3>
                <p>${stat.label}</p>
            </div>
        `).join('');
    }
}

// Render Contact Page
function renderContactPage() {
    const pageHeader = document.querySelector('.page-header');
    if (pageHeader && window.location.pathname.includes('contact.html')) {
        pageHeader.innerHTML = `
            <div class="container">
                <h1>${agencyData.contact.pageTitle}</h1>
                <p>${agencyData.contact.pageSubtitle}</p>
            </div>
        `;
    }
    
    const contactInfo = document.querySelector('.contact-info');
    if (contactInfo) {
        contactInfo.innerHTML = `
            <h2>${agencyData.contact.heading}</h2>
            <p>${agencyData.contact.description}</p>
            <div class="contact-items">
                <div class="contact-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <div>
                        <h4>Location</h4>
                        <p>${agencyData.contact.location}</p>
                    </div>
                </div>
                <div class="contact-item">
                    <i class="fas fa-envelope"></i>
                    <div>
                        <h4>Email</h4>
                        <p>${agencyData.contact.email}</p>
                    </div>
                </div>
                <div class="contact-item">
                    <i class="fas fa-phone"></i>
                    <div>
                        <h4>Phone</h4>
                        <p>${agencyData.contact.phone}</p>
                    </div>
                </div>
                <div class="contact-item">
                    <i class="fas fa-clock"></i>
                    <div>
                        <h4>Working Hours</h4>
                        <p>${agencyData.contact.hours}</p>
                    </div>
                </div>
            </div>
        `;
    }
    
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.innerHTML = `
            <h2>${agencyData.contact.formTitle}</h2>
            <div class="form-row">
                <input type="text" id="contactName" placeholder="Your Name" required>
                <input type="email" id="contactEmail" placeholder="Your Email" required>
            </div>
            <input type="text" id="contactSubject" placeholder="Subject" required>
            <textarea id="contactMessage" placeholder="Your Message" rows="6" required></textarea>
            <button type="submit" class="btn btn-primary">Send Message</button>
        `;
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const subject = document.getElementById('contactSubject').value;
            const message = document.getElementById('contactMessage').value;
            
            agencyData.messages.push({
                id: Date.now(),
                name,
                email,
                subject,
                message,
                date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
            });
            saveData(agencyData);
            
            contactForm.reset();
            alert('Thank you! Your message has been sent.');
        });
    }
}

// Render Footer
function renderFooter() {
    const footerBrand = document.querySelector('.footer-brand');
    const footerBottom = document.querySelector('.footer-bottom');
    const socialIcons = document.querySelector('.footer-social');
    
    if (footerBrand) {
        footerBrand.innerHTML = `
            <h3>${agencyData.footer.siteName}<span>.</span></h3>
            <p>${agencyData.footer.description}</p>
        `;
    }
    
    if (footerBottom) {
        footerBottom.innerHTML = `<p>${agencyData.footer.copyright}</p>`;
    }
    
    if (socialIcons) {
        const social = agencyData.footer.socialLinks;
        const socialDiv = socialIcons.querySelector('.social-icons');
        if (socialDiv) {
            socialDiv.innerHTML = `
                <a href="${social.facebook}"><i class="fab fa-facebook-f"></i></a>
                <a href="${social.twitter}"><i class="fab fa-twitter"></i></a>
                <a href="${social.instagram}"><i class="fab fa-instagram"></i></a>
                <a href="${social.linkedin}"><i class="fab fa-linkedin-in"></i></a>
            `;
        }
    }
}

// ============================================
// Admin Panel - Section Navigation
// ============================================
window.showSection = function(section) {
    // Hide all sections
    const sections = ['servicesSection', 'teamSection', 'messagesSection', 'heroSection',
                      'featuresSection', 'aboutSection', 'statsSection', 'contactSection', 'footerSection'];
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
    
    // Show selected section
    const sectionMap = {
        'services': 'servicesSection',
        'team': 'teamSection',
        'messages': 'messagesSection',
        'hero': 'heroSection',
        'features': 'featuresSection',
        'about': 'aboutSection',
        'stats': 'statsSection',
        'contact': 'contactSection',
        'footer': 'footerSection'
    };
    
    const targetId = sectionMap[section];
    if (targetId) {
        document.getElementById(targetId).style.display = 'block';
    }
};

// ============================================
// Admin Panel - Services Management
// ============================================
function renderAdminServicesTable() {
    const tbody = document.getElementById('servicesTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = agencyData.services.map(service => `
        <tr>
            <td>${service.id}</td>
            <td><i class="${service.icon}"></i></td>
            <td><strong>${service.title}</strong></td>
            <td>${service.description.substring(0, 60)}...</td>
            <td>
                <button class="btn-icon" onclick="editService(${service.id})" title="Edit">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon btn-delete" onclick="deleteService(${service.id})" title="Delete">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
    
    const totalServices = document.getElementById('totalServices');
    if (totalServices) totalServices.textContent = agencyData.services.length;
}

function addService(event) {
    event.preventDefault();
    
    const newService = {
        id: Date.now(),
        title: document.getElementById('serviceTitle').value,
        icon: document.getElementById('serviceIcon').value,
        description: document.getElementById('serviceDescription').value
    };
    
    agencyData.services.push(newService);
    saveData(agencyData);
    renderAdminServicesTable();
    renderServices();
    document.getElementById('addServiceForm').reset();
    alert('Service added successfully!');
}

window.editService = function(id) {
    const service = agencyData.services.find(s => s.id === id);
    if (service) {
        document.getElementById('editServiceId').value = service.id;
        document.getElementById('editServiceTitle').value = service.title;
        document.getElementById('editServiceIcon').value = service.icon;
        document.getElementById('editServiceDescription').value = service.description;
        document.getElementById('editModal').style.display = 'flex';
    }
};

function updateService(event) {
    event.preventDefault();
    const id = parseInt(document.getElementById('editServiceId').value);
    const index = agencyData.services.findIndex(s => s.id === id);
    
    if (index !== -1) {
        agencyData.services[index] = {
            id: id,
            title: document.getElementById('editServiceTitle').value,
            icon: document.getElementById('editServiceIcon').value,
            description: document.getElementById('editServiceDescription').value
        };
        saveData(agencyData);
        renderAdminServicesTable();
        renderServices();
        closeModal('editModal');
        alert('Service updated successfully!');
    }
}

window.deleteService = function(id) {
    if (confirm('Are you sure you want to delete this service?')) {
        agencyData.services = agencyData.services.filter(s => s.id !== id);
        saveData(agencyData);
        renderAdminServicesTable();
        renderServices();
        alert('Service deleted!');
    }
};

// ============================================
// Admin Panel - Team Management
// ============================================
function renderAdminTeamTable() {
    const tbody = document.getElementById('teamTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = agencyData.team.map(member => `
        <tr>
            <td>${member.id}</td>
            <td><i class="${member.icon}"></i></td>
            <td><strong>${member.name}</strong></td>
            <td>${member.role}</td>
            <td>
                <button class="btn-icon" onclick="editTeamMember(${member.id})" title="Edit">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn-icon btn-delete" onclick="deleteTeamMember(${member.id})" title="Delete">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
    
    const totalTeam = document.getElementById('totalTeam');
    if (totalTeam) totalTeam.textContent = agencyData.team.length;
}

function addTeamMember(event) {
    event.preventDefault();
    
    const newMember = {
        id: Date.now(),
        name: document.getElementById('memberName').value,
        role: document.getElementById('memberRole').value,
        icon: document.getElementById('memberIcon').value || 'fas fa-user'
    };
    
    agencyData.team.push(newMember);
    saveData(agencyData);
    renderAdminTeamTable();
    renderAboutPage();
    document.getElementById('addTeamForm').reset();
    alert('Team member added successfully!');
}

window.editTeamMember = function(id) {
    const member = agencyData.team.find(m => m.id === id);
    if (member) {
        document.getElementById('editMemberId').value = member.id;
        document.getElementById('editMemberName').value = member.name;
        document.getElementById('editMemberRole').value = member.role;
        document.getElementById('editMemberIcon').value = member.icon;
        document.getElementById('editTeamModal').style.display = 'flex';
    }
};

function updateTeamMember(event) {
    event.preventDefault();
    const id = parseInt(document.getElementById('editMemberId').value);
    const index = agencyData.team.findIndex(m => m.id === id);
    
    if (index !== -1) {
        agencyData.team[index] = {
            id: id,
            name: document.getElementById('editMemberName').value,
            role: document.getElementById('editMemberRole').value,
            icon: document.getElementById('editMemberIcon').value
        };
        saveData(agencyData);
        renderAdminTeamTable();
        renderAboutPage();
        closeModal('editTeamModal');
        alert('Team member updated successfully!');
    }
}

window.deleteTeamMember = function(id) {
    if (confirm('Are you sure you want to delete this team member?')) {
        agencyData.team = agencyData.team.filter(m => m.id !== id);
        saveData(agencyData);
        renderAdminTeamTable();
        renderAboutPage();
        alert('Team member deleted!');
    }
};

// ============================================
// Admin Panel - Features Management
// ============================================
function renderAdminFeaturesList() {
    const featuresList = document.getElementById('featuresList');
    if (!featuresList) return;
    
    featuresList.innerHTML = agencyData.features.map((feature, index) => `
        <div class="message-item" style="margin-bottom: 15px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <strong><i class="${feature.icon}"></i> ${feature.title}</strong>
                    <p style="margin: 5px 0; color: var(--gray);">${feature.description}</p>
                </div>
                <div style="display: flex; gap: 8px;">
                    <button class="btn-icon" onclick="editFeature(${feature.id})" title="Edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-icon btn-delete" onclick="deleteFeature(${feature.id})" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    const totalFeatures = document.getElementById('totalFeatures');
    if (totalFeatures) totalFeatures.textContent = agencyData.features.length;
}

window.addNewFeature = function() {
    const newFeature = {
        id: Date.now(),
        icon: "fas fa-star",
        title: "New Feature",
        description: "Feature description goes here..."
    };
    agencyData.features.push(newFeature);
    saveData(agencyData);
    renderAdminFeaturesList();
    renderFeatures();
    alert('New feature added! Edit it to customize.');
};

window.editFeature = function(id) {
    const feature = agencyData.features.find(f => f.id === id);
    if (feature) {
        document.getElementById('editFeatureId').value = feature.id;
        document.getElementById('editFeatureIcon').value = feature.icon;
        document.getElementById('editFeatureTitle').value = feature.title;
        document.getElementById('editFeatureDesc').value = feature.description;
        document.getElementById('editFeatureModal').style.display = 'flex';
    }
};

function updateFeature(event) {
    event.preventDefault();
    const id = parseInt(document.getElementById('editFeatureId').value);
    const index = agencyData.features.findIndex(f => f.id === id);
    
    if (index !== -1) {
        agencyData.features[index] = {
            id: id,
            icon: document.getElementById('editFeatureIcon').value,
            title: document.getElementById('editFeatureTitle').value,
            description: document.getElementById('editFeatureDesc').value
        };
        saveData(agencyData);
        renderAdminFeaturesList();
        renderFeatures();
        closeModal('editFeatureModal');
        alert('Feature updated successfully!');
    }
}

window.deleteFeature = function(id) {
    if (confirm('Delete this feature?')) {
        agencyData.features = agencyData.features.filter(f => f.id !== id);
        saveData(agencyData);
        renderAdminFeaturesList();
        renderFeatures();
        alert('Feature deleted!');
    }
};

// ============================================
// Admin Panel - Stats Management
// ============================================
function renderAdminStatsList() {
    const statsList = document.getElementById('statsList');
    if (!statsList) return;
    
    statsList.innerHTML = agencyData.stats.map(stat => `
        <div class="message-item" style="margin-bottom: 15px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <strong><i class="${stat.icon}"></i> ${stat.value} - ${stat.label}</strong>
                </div>
                <div style="display: flex; gap: 8px;">
                    <button class="btn-icon" onclick="editStat(${stat.id})" title="Edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-icon btn-delete" onclick="deleteStat(${stat.id})" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

window.addNewStat = function() {
    const newStat = {
        id: Date.now(),
        icon: "fas fa-star",
        value: "0+",
        label: "New Stat"
    };
    agencyData.stats.push(newStat);
    saveData(agencyData);
    renderAdminStatsList();
    renderAboutPage();
    alert('New stat added! Edit it to customize.');
};

window.editStat = function(id) {
    const stat = agencyData.stats.find(s => s.id === id);
    if (stat) {
        document.getElementById('editStatId').value = stat.id;
        document.getElementById('editStatIcon').value = stat.icon;
        document.getElementById('editStatValue').value = stat.value;
        document.getElementById('editStatLabel').value = stat.label;
        document.getElementById('editStatModal').style.display = 'flex';
    }
};

function updateStat(event) {
    event.preventDefault();
    const id = parseInt(document.getElementById('editStatId').value);
    const index = agencyData.stats.findIndex(s => s.id === id);
    
    if (index !== -1) {
        agencyData.stats[index] = {
            id: id,
            icon: document.getElementById('editStatIcon').value,
            value: document.getElementById('editStatValue').value,
            label: document.getElementById('editStatLabel').value
        };
        saveData(agencyData);
        renderAdminStatsList();
        renderAboutPage();
        closeModal('editStatModal');
        alert('Stat updated successfully!');
    }
}

window.deleteStat = function(id) {
    if (confirm('Delete this stat?')) {
        agencyData.stats = agencyData.stats.filter(s => s.id !== id);
        saveData(agencyData);
        renderAdminStatsList();
        renderAboutPage();
        alert('Stat deleted!');
    }
};

// ============================================
// Admin Panel - Messages Management
// ============================================
function renderAdminMessages() {
    const messagesList = document.getElementById('messagesList');
    if (!messagesList) return;
    
    if (agencyData.messages.length === 0) {
        messagesList.innerHTML = '<p style="padding: 20px; color: var(--gray);">No messages yet.</p>';
        return;
    }
    
    messagesList.innerHTML = agencyData.messages.map(msg => `
        <div class="message-item">
            <div class="message-header">
                <span class="message-from">${msg.name} (${msg.email})</span>
                <span class="message-date">${msg.date}</span>
            </div>
            <div class="message-subject">${msg.subject}</div>
            <p class="message-preview">${msg.message}</p>
            <button class="btn-icon btn-delete" onclick="deleteMessage(${msg.id})" style="margin-top: 10px;" title="Delete">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
    
    const totalMessages = document.getElementById('totalMessages');
    if (totalMessages) totalMessages.textContent = agencyData.messages.length;
}

window.deleteMessage = function(id) {
    if (confirm('Delete this message?')) {
        agencyData.messages = agencyData.messages.filter(m => m.id !== id);
        saveData(agencyData);
        renderAdminMessages();
    }
};

// ============================================
// Admin Panel - Form Handlers
// ============================================

// Hero Section
function saveHeroSettings(event) {
    event.preventDefault();
    
    agencyData.hero = {
        title: document.getElementById('heroTitle').value,
        subtitle: document.getElementById('heroSubtitle').value,
        btnPrimary: document.getElementById('heroBtn1').value,
        btnPrimaryLink: document.getElementById('heroBtn1Link').value,
        btnSecondary: document.getElementById('heroBtn2').value,
        btnSecondaryLink: document.getElementById('heroBtn2Link').value
    };
    
    saveData(agencyData);
    renderHero();
    alert('Hero section updated successfully!');
}

// CTA Section
function saveCTASettings(event) {
    event.preventDefault();
    
    agencyData.cta = {
        heading: document.getElementById('ctaHeading').value,
        description: document.getElementById('ctaDesc').value,
        btnText: document.getElementById('ctaBtnText').value,
        btnLink: document.getElementById('ctaBtnLink').value
    };
    
    saveData(agencyData);
    renderCTA();
    alert('CTA section updated successfully!');
}

// About Header
function saveAboutHeader(event) {
    event.preventDefault();
    
    agencyData.about.pageTitle = document.getElementById('aboutPageTitle').value;
    agencyData.about.pageSubtitle = document.getElementById('aboutPageSubtitle').value;
    
    saveData(agencyData);
    renderAboutPage();
    alert('About header updated successfully!');
}

// About Content
function saveAboutContent(event) {
    event.preventDefault();
    
    agencyData.about.heading = document.getElementById('aboutHeading').value;
    agencyData.about.description1 = document.getElementById('aboutDesc1').value;
    agencyData.about.description2 = document.getElementById('aboutDesc2').value;
    
    saveData(agencyData);
    renderAboutPage();
    alert('About content updated successfully!');
}

// Mission & Vision
function saveMissionVision(event) {
    event.preventDefault();
    
    agencyData.about.mission = document.getElementById('aboutMission').value;
    agencyData.about.vision = document.getElementById('aboutVision').value;
    
    saveData(agencyData);
    renderAboutPage();
    alert('Mission & Vision updated successfully!');
}

// Contact Header
function saveContactHeader(event) {
    event.preventDefault();
    
    agencyData.contact.pageTitle = document.getElementById('contactPageTitle').value;
    agencyData.contact.pageSubtitle = document.getElementById('contactPageSubtitle').value;
    
    saveData(agencyData);
    renderContactPage();
    alert('Contact header updated successfully!');
}

// Contact Info
function saveContactInfo(event) {
    event.preventDefault();
    
    agencyData.contact = {
        ...agencyData.contact,
        heading: document.getElementById('contactHeading').value,
        description: document.getElementById('contactDesc').value,
        email: document.getElementById('contactEmail').value,
        phone: document.getElementById('contactPhone').value,
        location: document.getElementById('contactLocation').value,
        hours: document.getElementById('contactHours').value,
        formTitle: document.getElementById('contactFormTitle').value
    };
    
    saveData(agencyData);
    renderContactPage();
    alert('Contact information updated successfully!');
}

// Footer Settings
function saveFooterSettings(event) {
    event.preventDefault();
    
    agencyData.footer = {
        siteName: document.getElementById('siteName').value,
        description: document.getElementById('footerDesc').value,
        copyright: document.getElementById('copyright').value,
        socialLinks: {
            facebook: document.getElementById('socialFacebook').value,
            twitter: document.getElementById('socialTwitter').value,
            instagram: document.getElementById('socialInstagram').value,
            linkedin: document.getElementById('socialLinkedin').value
        }
    };
    
    saveData(agencyData);
    renderFooter();
    alert('Footer settings updated successfully!');
}

// ============================================
// Modal Helper
// ============================================
window.closeModal = function(modalId) {
    document.getElementById(modalId).style.display = 'none';
};

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
};

// ============================================
// Initialize on Page Load
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Render website content
    renderHero();
    renderCTA();
    renderFeatures();
    renderServices();
    renderAboutPage();
    renderContactPage();
    renderFooter();
    
    // Admin panel initialization
    if (document.getElementById('servicesTableBody')) {
        renderAdminServicesTable();
        renderAdminTeamTable();
        renderAdminFeaturesList();
        renderAdminStatsList();
        renderAdminMessages();
        
        // Form event listeners
        const addServiceForm = document.getElementById('addServiceForm');
        if (addServiceForm) addServiceForm.addEventListener('submit', addService);
        
        const editServiceForm = document.getElementById('editServiceForm');
        if (editServiceForm) editServiceForm.addEventListener('submit', updateService);
        
        const addTeamForm = document.getElementById('addTeamForm');
        if (addTeamForm) addTeamForm.addEventListener('submit', addTeamMember);
        
        const editTeamForm = document.getElementById('editTeamForm');
        if (editTeamForm) editTeamForm.addEventListener('submit', updateTeamMember);
        
        const editFeatureForm = document.getElementById('editFeatureForm');
        if (editFeatureForm) editFeatureForm.addEventListener('submit', updateFeature);
        
        const editStatForm = document.getElementById('editStatForm');
        if (editStatForm) editStatForm.addEventListener('submit', updateStat);
        
        // Hero Form
        const heroForm = document.getElementById('heroForm');
        if (heroForm) heroForm.addEventListener('submit', saveHeroSettings);
        
        // CTA Form
        const ctaForm = document.getElementById('ctaForm');
        if (ctaForm) ctaForm.addEventListener('submit', saveCTASettings);
        
        // About Forms
        const aboutHeaderForm = document.getElementById('aboutHeaderForm');
        if (aboutHeaderForm) aboutHeaderForm.addEventListener('submit', saveAboutHeader);
        
        const aboutContentForm = document.getElementById('aboutContentForm');
        if (aboutContentForm) aboutContentForm.addEventListener('submit', saveAboutContent);
        
        const missionVisionForm = document.getElementById('missionVisionForm');
        if (missionVisionForm) missionVisionForm.addEventListener('submit', saveMissionVision);
        
        // Contact Forms
        const contactHeaderForm = document.getElementById('contactHeaderForm');
        if (contactHeaderForm) contactHeaderForm.addEventListener('submit', saveContactHeader);
        
        const contactInfoForm = document.getElementById('contactInfoForm');
        if (contactInfoForm) contactInfoForm.addEventListener('submit', saveContactInfo);
        
        // Footer Form
        const footerForm = document.getElementById('footerForm');
        if (footerForm) footerForm.addEventListener('submit', saveFooterSettings);

        // Populate forms with current values
        // Hero
        const heroTitleInput = document.getElementById('heroTitle');
        if (heroTitleInput) {
            document.getElementById('heroTitle').value = agencyData.hero.title;
            document.getElementById('heroSubtitle').value = agencyData.hero.subtitle;
            document.getElementById('heroBtn1').value = agencyData.hero.btnPrimary;
            document.getElementById('heroBtn1Link').value = agencyData.hero.btnPrimaryLink;
            document.getElementById('heroBtn2').value = agencyData.hero.btnSecondary;
            document.getElementById('heroBtn2Link').value = agencyData.hero.btnSecondaryLink;
            document.getElementById('ctaHeading').value = agencyData.cta.heading;
            document.getElementById('ctaDesc').value = agencyData.cta.description;
            document.getElementById('ctaBtnText').value = agencyData.cta.btnText;
            document.getElementById('ctaBtnLink').value = agencyData.cta.btnLink;
        }
        
        // About
        const aboutPageTitleInput = document.getElementById('aboutPageTitle');
        if (aboutPageTitleInput) {
            document.getElementById('aboutPageTitle').value = agencyData.about.pageTitle;
            document.getElementById('aboutPageSubtitle').value = agencyData.about.pageSubtitle;
            document.getElementById('aboutHeading').value = agencyData.about.heading;
            document.getElementById('aboutDesc1').value = agencyData.about.description1;
            document.getElementById('aboutDesc2').value = agencyData.about.description2;
            document.getElementById('aboutMission').value = agencyData.about.mission;
            document.getElementById('aboutVision').value = agencyData.about.vision;
        }
        
        // Contact
        const contactPageTitleInput = document.getElementById('contactPageTitle');
        if (contactPageTitleInput) {
            document.getElementById('contactPageTitle').value = agencyData.contact.pageTitle;
            document.getElementById('contactPageSubtitle').value = agencyData.contact.pageSubtitle;
            document.getElementById('contactHeading').value = agencyData.contact.heading;
            document.getElementById('contactDesc').value = agencyData.contact.description;
            document.getElementById('contactEmail').value = agencyData.contact.email;
            document.getElementById('contactPhone').value = agencyData.contact.phone;
            document.getElementById('contactLocation').value = agencyData.contact.location;
            document.getElementById('contactHours').value = agencyData.contact.hours;
            document.getElementById('contactFormTitle').value = agencyData.contact.formTitle;
        }
        
        // Footer
        const siteNameInput = document.getElementById('siteName');
        if (siteNameInput) {
            document.getElementById('siteName').value = agencyData.footer.siteName;
            document.getElementById('footerDesc').value = agencyData.footer.description;
            document.getElementById('copyright').value = agencyData.footer.copyright;
            document.getElementById('socialFacebook').value = agencyData.footer.socialLinks.facebook;
            document.getElementById('socialTwitter').value = agencyData.footer.socialLinks.twitter;
            document.getElementById('socialInstagram').value = agencyData.footer.socialLinks.instagram;
            document.getElementById('socialLinkedin').value = agencyData.footer.socialLinks.linkedin;
        }
    }
});
