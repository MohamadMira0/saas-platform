// ============================================
// Tasks Management
// ============================================

// Load tasks from localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [
        { id: 1, title: 'Complete project proposal', description: 'Write and submit the project proposal', status: 'completed' },
        { id: 2, title: 'Review code changes', description: 'Review pull requests from team', status: 'in-progress' },
        { id: 3, title: 'Update documentation', description: 'Update API documentation', status: 'pending' },
    ];
    return tasks;
}

// Save tasks to localStorage
function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Render tasks
function renderTasks() {
    const tasks = loadTasks();
    const tasksContainer = document.getElementById('tasksContainer');
    
    if (!tasksContainer) return;
    
    tasksContainer.innerHTML = '';
    
    if (tasks.length === 0) {
        tasksContainer.innerHTML = '<div class="text-center py-12"><p class="text-gray-500 text-lg">No tasks yet. Create your first task!</p></div>';
        return;
    }
    
    tasks.forEach(task => {
        const taskCard = document.createElement('div');
        taskCard.className = 'bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition';
        taskCard.innerHTML = `
            <div class="flex justify-between items-start mb-4">
                <h3 class="text-xl font-semibold text-gray-900">${task.title}</h3>
                <span class="px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}">
                    ${task.status}
                </span>
            </div>
            <p class="text-gray-600 mb-4">${task.description}</p>
            <div class="flex space-x-2">
                <button onclick="editTask(${task.id})" class="flex-1 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg hover:bg-indigo-200 transition font-medium">
                    Edit
                </button>
                <button onclick="deleteTask(${task.id})" class="flex-1 bg-red-100 text-red-700 px-4 py-2 rounded-lg hover:bg-red-200 transition font-medium">
                    Delete
                </button>
            </div>
        `;
        tasksContainer.appendChild(taskCard);
    });
}

// Get status color class
function getStatusColor(status) {
    const colors = {
        'completed': 'bg-green-100 text-green-800',
        'in-progress': 'bg-yellow-100 text-yellow-800',
        'pending': 'bg-gray-100 text-gray-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
}

// Show task modal
function showTaskModal(taskId = null) {
    const modal = document.getElementById('taskModal');
    const form = document.getElementById('taskForm');
    const modalTitle = document.getElementById('taskModalTitle');
    
    if (taskId) {
        const tasks = loadTasks();
        const task = tasks.find(t => t.id === taskId);
        if (task) {
            modalTitle.textContent = 'Edit Task';
            document.getElementById('taskTitle').value = task.title;
            document.getElementById('taskDescription').value = task.description;
            document.getElementById('taskStatus').value = task.status;
            form.dataset.taskId = taskId;
        }
    } else {
        modalTitle.textContent = 'Create New Task';
        form.reset();
        delete form.dataset.taskId;
    }
    
    modal.classList.remove('hidden');
}

// Hide task modal
function hideTaskModal() {
    const modal = document.getElementById('taskModal');
    modal.classList.add('hidden');
}

// Handle task form submit
function handleTaskSubmit(e) {
    e.preventDefault();
    
    const tasks = loadTasks();
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;
    const status = document.getElementById('taskStatus').value;
    const taskId = e.target.dataset.taskId;
    
    if (taskId) {
        // Update existing task
        const index = tasks.findIndex(t => t.id === parseInt(taskId));
        if (index !== -1) {
            tasks[index] = { ...tasks[index], title, description, status };
        }
    } else {
        // Create new task
        const newTask = {
            id: Date.now(),
            title,
            description,
            status,
            createdAt: new Date().toISOString()
        };
        tasks.push(newTask);
    }
    
    saveTasks(tasks);
    renderTasks();
    hideTaskModal();
}

// Edit task
function editTask(id) {
    showTaskModal(id);
}

// Delete task
function deleteTask(id) {
    if (confirm('Are you sure you want to delete this task?')) {
        const tasks = loadTasks();
        const filtered = tasks.filter(t => t.id !== id);
        saveTasks(filtered);
        renderTasks();
    }
}

// ============================================
// Projects Management
// ============================================

// Load projects from localStorage
function loadProjects() {
    const projects = JSON.parse(localStorage.getItem('projects')) || [
        { id: 1, name: 'Website Redesign', description: 'Complete redesign of company website', status: 'active' },
        { id: 2, name: 'Mobile App', description: 'Develop new mobile application', status: 'planning' },
        { id: 3, name: 'API Integration', description: 'Integrate third-party APIs', status: 'completed' },
    ];
    return projects;
}

// Save projects to localStorage
function saveProjects(projects) {
    localStorage.setItem('projects', JSON.stringify(projects));
}

// Render projects
function renderProjects() {
    const projects = loadProjects();
    const projectsContainer = document.getElementById('projectsContainer');
    
    if (!projectsContainer) return;
    
    projectsContainer.innerHTML = '';
    
    if (projects.length === 0) {
        projectsContainer.innerHTML = '<div class="text-center py-12"><p class="text-gray-500 text-lg">No projects yet. Create your first project!</p></div>';
        return;
    }
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition';
        projectCard.innerHTML = `
            <div class="flex justify-between items-start mb-4">
                <h3 class="text-xl font-semibold text-gray-900">${project.name}</h3>
                <span class="px-3 py-1 rounded-full text-xs font-medium ${getProjectStatusColor(project.status)}">
                    ${project.status}
                </span>
            </div>
            <p class="text-gray-600 mb-4">${project.description}</p>
            <div class="flex space-x-2">
                <button onclick="editProject(${project.id})" class="flex-1 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg hover:bg-indigo-200 transition font-medium">
                    Edit
                </button>
                <button onclick="deleteProject(${project.id})" class="flex-1 bg-red-100 text-red-700 px-4 py-2 rounded-lg hover:bg-red-200 transition font-medium">
                    Delete
                </button>
            </div>
        `;
        projectsContainer.appendChild(projectCard);
    });
}

// Get project status color
function getProjectStatusColor(status) {
    const colors = {
        'completed': 'bg-green-100 text-green-800',
        'active': 'bg-blue-100 text-blue-800',
        'planning': 'bg-gray-100 text-gray-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
}

// Show project modal
function showProjectModal(projectId = null) {
    const modal = document.getElementById('projectModal');
    const form = document.getElementById('projectForm');
    const modalTitle = document.getElementById('projectModalTitle');
    
    if (projectId) {
        const projects = loadProjects();
        const project = projects.find(p => p.id === projectId);
        if (project) {
            modalTitle.textContent = 'Edit Project';
            document.getElementById('projectName').value = project.name;
            document.getElementById('projectDescription').value = project.description;
            document.getElementById('projectStatus').value = project.status;
            form.dataset.projectId = projectId;
        }
    } else {
        modalTitle.textContent = 'Create New Project';
        form.reset();
        delete form.dataset.projectId;
    }
    
    modal.classList.remove('hidden');
}

// Hide project modal
function hideProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.add('hidden');
}

// Handle project form submit
function handleProjectSubmit(e) {
    e.preventDefault();
    
    const projects = loadProjects();
    const name = document.getElementById('projectName').value;
    const description = document.getElementById('projectDescription').value;
    const status = document.getElementById('projectStatus').value;
    const projectId = e.target.dataset.projectId;
    
    if (projectId) {
        // Update existing project
        const index = projects.findIndex(p => p.id === parseInt(projectId));
        if (index !== -1) {
            projects[index] = { ...projects[index], name, description, status };
        }
    } else {
        // Create new project
        const newProject = {
            id: Date.now(),
            name,
            description,
            status,
            createdAt: new Date().toISOString()
        };
        projects.push(newProject);
    }
    
    saveProjects(projects);
    renderProjects();
    hideProjectModal();
}

// Edit project
function editProject(id) {
    showProjectModal(id);
}

// Delete project
function deleteProject(id) {
    if (confirm('Are you sure you want to delete this project?')) {
        const projects = loadProjects();
        const filtered = projects.filter(p => p.id !== id);
        saveProjects(filtered);
        renderProjects();
    }
}

// ============================================
// Form Validation
// ============================================

// Validate login form
function validateLoginForm(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (!email || !password) {
        alert('Please fill in all fields');
        return false;
    }
    
    // Mock login - save to localStorage
    localStorage.setItem('user', JSON.stringify({ email, name: email.split('@')[0] }));
    window.location.href = 'dashboard.html';
    return false;
}

// Validate register form
function validateRegisterForm(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (!name || !email || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return false;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return false;
    }
    
    if (password.length < 6) {
        alert('Password must be at least 6 characters');
        return false;
    }
    
    // Mock register - save to localStorage
    localStorage.setItem('user', JSON.stringify({ email, name }));
    window.location.href = 'dashboard.html';
    return false;
}

// ============================================
// Initialize
// ============================================

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Render tasks if on tasks page
    if (document.getElementById('tasksContainer')) {
        renderTasks();
    }
    
    // Render projects if on projects page
    if (document.getElementById('projectsContainer')) {
        renderProjects();
    }
    
    // Check if user is logged in (for protected pages)
    const currentPage = window.location.pathname;
    const protectedPages = ['dashboard.html', 'tasks.html', 'projects.html'];
    
    if (protectedPages.some(page => currentPage.includes(page))) {
        const user = localStorage.getItem('user');
        if (!user) {
            window.location.href = 'login.html';
        }
    }
    
    // Setup form handlers
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', validateLoginForm);
    }
    
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', validateRegisterForm);
    }
    
    const taskForm = document.getElementById('taskForm');
    if (taskForm) {
        taskForm.addEventListener('submit', handleTaskSubmit);
    }
    
    const projectForm = document.getElementById('projectForm');
    if (projectForm) {
        projectForm.addEventListener('submit', handleProjectSubmit);
    }
});
