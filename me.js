document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('menu-toggle').addEventListener('click', () => {
        const navMenu = document.getElementById('nav-menu');
        if (navMenu.style.display === 'block') {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'block';
        }
    });
});
function toggleProjectDetails(project) {
    // Toggle the visibility of project details
    var details = project.querySelector('.project-details');
    details.style.display = details.style.display === 'none' ? 'block' : 'none';

    // Optionally, you can collapse other open project details
    var allProjects = document.querySelectorAll('.project');
    allProjects.forEach(function(proj) {
        if (proj !== project) {
            proj.querySelector('.project-details').style.display = 'none';
        }
    });
}
