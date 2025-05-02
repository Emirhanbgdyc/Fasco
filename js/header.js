const NavbarController = (() => {
    const selectors = {
        navbar: '.header-navbar',
        toggleButton: '#bars__button',
        closeButton: '.close-navbar'
    };

    const navbar = document.querySelector(selectors.navbar);
    const toggleButton = document.querySelector(selectors.toggleButton);

    function toggleNavbar(event) {
        event.stopPropagation();
        navbar.classList.toggle("active");
    }

    function closeNavbar() {
        navbar.classList.remove('active');
    }

    function handleOutsideClick(event) {
        const clickedInsideNavbar = event.composedPath().includes(navbar);
        const clickedToggleButton = event.composedPath().includes(toggleButton);

        if (!clickedInsideNavbar && !clickedToggleButton && navbar.classList.contains('active')) {
            closeNavbar();
        }
    }

    function init() {
        navbar.classList.remove('active');
        toggleButton.addEventListener("click", toggleNavbar);
        document.addEventListener("click", handleOutsideClick);

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navbar.classList.contains('active')) {
                closeNavbar();
            }
        });

        window.addEventListener('scroll', function () {
            if (window.scrollY > 200) {
                closeNavbar();
            }
        });

        const closeButton = document.querySelector(selectors.closeButton);
        if (closeButton) {
            closeButton.addEventListener("click", closeNavbar);
        }
    }

    return {
        init: init
    };
})();

document.addEventListener('DOMContentLoaded', NavbarController.init);
