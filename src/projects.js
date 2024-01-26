'use strict';

const projectContainer = document.querySelector('.projects');
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');

categories.addEventListener('click', (event) => {
    const filter = event.target.dataset.category;
    if (filter == null) {
        return;
    }

    handleActiveSelection(event.target);
    filterProjects(filter);
});

function handleActiveSelection(target) {
    const active = document.querySelector('.category--selected');
    active.classList.remove('category--selected');
    target.classList.add('category--selected');
}

function filterProjects(filter) {
    projects.forEach(project => {
        if (filter === 'all' || filter === project.dataset.type) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
    projectContainer.classList.add('anim-out');
    setTimeout(() => {
        projectContainer.classList.remove('anim-out');
    }, 250);
}