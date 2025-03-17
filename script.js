document.addEventListener('DOMContentLoaded', function() {
    // Project data - replace with your actual projects
    const projectsData = [
        {
            "day": 4,
            "title": "AI-Powered Image Editor",
            "description": "A revolutionary tool that uses AI to enhance and transform your photos magically.",
            "url": "https://aiphotoshop.in/"
        },
        {
            "day": 3,
            "title": "Smart Photo Organizer",
            "description": "An intelligent system that automatically sorts and categorizes your photo library.",
            "url": "https://aiphotoshop.in/"
        },
        {
            "day": 2,
            "title": "PDF Document Scanner",
            "description": "Turn your phone into a powerful document scanner with OCR capabilities.",
            "url": "https://aiphotoshop.in/"
        },
        {
            "day": 1,
            "title": "Voice Notes Transcriber",
            "description": "Automatically transcribe your voice notes into searchable text documents.",
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