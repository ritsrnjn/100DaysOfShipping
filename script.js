document.addEventListener('DOMContentLoaded', function() {
    // Project data - replace with your actual projects
    const projectsData = [
        {
            "day": 15,
            "title": "Grid Slicer",
            "description": "Crop your images into a grid",
            "url": "https://gridslicer-production.up.railway.app/"
        },
        {
            "day": 14,
            "title": "Personality Finder",
            "description": "Quiz based personality finder",
            "url": "https://lissajous-production.up.railway.app/"
        },
        {
            "day": 13,
            "title": "Lissajous Simulator",
            "description": "Control the Lissajous curve with sliders",
            "url": "https://lissajous-production.up.railway.app/"
        },
        {
            "day": 12,
            "title": "Spirograph Visualisations",
            "description": "Randome Spirograph visualisations",
            "url": "https://spirograph-production.up.railway.app/"
        },
        {
            "day": 11,
            "title": "theproductframe.ai",
            "description": "An automated Instagram page, for generating product shots, part of project synt-social",
            "url": "https://www.instagram.com/theproductframe.ai/"
        },
        {
            "day": 10,
            "title": "Hustle With Nysa",
            "description": "An automated Instagram page, part of project synt-social",
            "url": "https://www.instagram.com/hustle.with.nysa/"
        },
        {
            "day": 9,
            "title": "Solar System Distance",
            "description": "Solar System Distance visualisations using THREE.js",
            "url": "https://solar-distance-production.up.railway.app/"
        },
        {
            "day": 8,
            "title": "Cosmic Visualisations",
            "description": "Directory of cosmic visualisations using THREE.js",
            "url": "https://cosmic-visualisations-production.up.railway.app/"
        },
        {
            "day": 7,
            "title": "Life Calendar Extension",
            "description": "Life Calendar Extension for Chrome to lock in! - not deployed yet on chrome web store",
            "url": "https://bolthackathon-windowsxp-production.up.railway.app/"
        },
        {
            "day": 6,
            "title": "AI logo generator",
            "description": "Generate logos with AI, built with Next.js and sonnet 3.7",
            "url": "https://ai-logo-generator-production.up.railway.app/"
        },
        {
            "day": 5,
            "title": "Windows XP - The Largest Hackthon",
            "description": "Wiindows XP themed announcement of the Largest Hackathon in the world",
            "url": "https://bolthackathon-windowsxp-production.up.railway.app/"
        },
        {
            "day": 4,
            "title": "The Largest Hackthon",
            "description": "The Largest Hackathon in the world",
            "url": "https://bolthackathon-production.up.railway.app/"
        },
        {
            "day": 3,
            "title": "NeuraTech 2077 store",
            "description": "Next-Gen AI Companions, Experience the pinnacle of synthetic intelligence",
            "url": "https://neuratech2077store-production.up.railway.app/"
        },
        {
            "day": 2,
            "title": "AI-Powered Doodle Canvas",
            "description": "AI powered doodle canvas, draw with AI.",
            "url": "https://aidoodle.fun/"
        },
        {
            "day": 1,
            "title": "AI-Powered Image Editor",
            "description": "AI first image editor, edit images with AI.",
            "url": "https://aiphotoshop.in/"
        }
    ];
    
    // Set current day to the latest project day
    const currentDay = projectsData.length > 0 ? projectsData[0].day : 1;
    document.getElementById('current-day').textContent = currentDay;
    
    // Generate project grid
    const projectGrid = document.getElementById('project-grid');
    
    // Add projects
    projectsData.forEach(project => {
        projectGrid.appendChild(createProjectElement(project));
    });
    
    function createProjectElement(project) {
        const projectElement = document.createElement('div');
        projectElement.className = 'project';
        projectElement.addEventListener('click', function() {
            window.open(project.url, '_blank');
        });
        
        const content = document.createElement('div');
        content.className = 'project-content';
        
        const number = document.createElement('div');
        number.className = 'project-number';
        number.textContent = project.day;
        
        const title = document.createElement('div');
        title.className = 'project-title';
        title.textContent = project.title;
        
        const description = document.createElement('div');
        description.className = 'project-description';
        description.textContent = project.description;
        
        content.appendChild(number);
        content.appendChild(title);
        projectElement.appendChild(content);
        projectElement.appendChild(description);
        
        return projectElement;
    }
    
    // Update ship day label with the current project
    const shipDayLabel = document.querySelector('.current-day span');
    shipDayLabel.textContent = currentDay;

    const ship = document.querySelector('.ship');
    ship.addEventListener('click', function() {
        // Get the latest project (last item in the array)
        const latestProject = projectsData[0];
        // Open the URL in a new tab
        window.open(latestProject.url, '_blank');
    });
});