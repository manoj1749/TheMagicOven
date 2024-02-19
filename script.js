document.addEventListener('DOMContentLoaded', function () {
    const isLoggedIn = false;

    // Elements for larger screens
    const loginSignUpLarge = document.getElementById('loginSignUpDropdown');
    const cartLarge = document.getElementById('cart-icon');
    const profileLarge = document.getElementById('profile-icon');

    // Elements for mobile screens
    const loginSignUpMobile = document.getElementById('loginSignUpDropdownMobile');
    const cartMobile = document.getElementById('cart-icon-mobile');
    const profileMobile = document.getElementById('profile-icon-mobile');

    function toggleVisibility() {
        if (isLoggedIn) {
            // User is logged in
            loginSignUpLarge.classList.add('d-none');
            cartLarge.classList.remove('d-none');
            profileLarge.classList.remove('d-none');

            // For mobile screens
            loginSignUpMobile.classList.add('d-none');
            cartMobile.classList.remove('d-none');
            profileMobile.classList.remove('d-none');
        } else {
            // User is not logged in
            loginSignUpLarge.classList.remove('d-none');
            cartLarge.classList.add('d-none');
            profileLarge.classList.add('d-none');

            // For mobile screens
            loginSignUpMobile.classList.remove('d-none');
            cartMobile.classList.add('d-none');
            profileMobile.classList.add('d-none');
        }
    }

    toggleVisibility();

});



document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('navbarToggleBtn');

    toggleBtn.addEventListener('click', function () {
        // Toggle the 'opened' class to switch between hamburger and cross icon
        this.classList.toggle('opened');
    });
});