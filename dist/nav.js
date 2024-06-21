// navbar.js

document.addEventListener('DOMContentLoaded', function () {
    const navbarLinks = document.querySelectorAll('.navbar-link');

    navbarLinks.forEach(navbarLink => {
        navbarLink.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }

            const navbarToggler = document.getElementById('navbarToggler');
            if (navbarToggler) {
                navbarToggler.click(); // Close navbar menu on click if it exists
            }
        });
    });
});
