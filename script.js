const isLoggedIn = true;
document.addEventListener('DOMContentLoaded', function () {

    const loginSignUpLarge = document.getElementById('loginSignUpDropdown');
    const cartLarge = document.getElementById('cart-icon');
    const profileLarge = document.getElementById('profile-icon');

    const loginSignUpMobile = document.getElementById('loginSignUpDropdownMobile');
    const cartMobile = document.getElementById('cart-icon-mobile');
    const profileMobile = document.getElementById('profile-icon-mobile');

    function toggleVisibility() {
        if (isLoggedIn) {
            loginSignUpLarge.classList.add('d-none');
            cartLarge.classList.remove('d-none');
            profileLarge.classList.remove('d-none');

            loginSignUpMobile.classList.add('d-none');
            cartMobile.classList.remove('d-none');
            profileMobile.classList.remove('d-none');
        } else {
            loginSignUpLarge.classList.remove('d-none');
            cartLarge.classList.add('d-none');
            profileLarge.classList.add('d-none');

            loginSignUpMobile.classList.remove('d-none');
            cartMobile.classList.add('d-none');
            profileMobile.classList.add('d-none');
        }
    }

    toggleVisibility();

});


function orderNow() {
    if (!isLoggedIn) {
        $('#notLoggedIn').modal('show');
        setTimeout(function () {
            $('#notLoggedIn').modal('hide');
        }, 3000);
    } else {
        window.location.href = 'singleProduct.html';
    }
}
function addToCart() {


    if (!isLoggedIn) {
        $('#notLoggedIn').modal('show');
        setTimeout(function () {
            $('#notLoggedIn').modal('hide');
        }, 3000);
    } else {
        $('#LoggedIn').modal('show');
        setTimeout(function () {
            $('#LoggedIn').modal('hide');
        }, 3000);
    }
}


document.addEventListener('DOMContentLoaded', function () {
    $('.count').prop('disabled', true);
    $(document).on('click', '.plus', function () {
        $('.count').val(parseInt($('.count').val()) + 1);
    });
    $(document).on('click', '.minus', function () {
        $('.count').val(parseInt($('.count').val()) - 1);
        if ($('.count').val() == 0) {
            $('.count').val(1);
        }
    });
})

document.addEventListener('DOMContentLoaded', function () {
    const NavBar = document.getElementById('navbar');

    window.onscroll = function () {
        if (window.scrollY > 0) {
            NavBar.classList.add('navbar-shadow');
        } else {
            NavBar.classList.remove('navbar-shadow');
        }
    };
});

var product_infos = document.querySelectorAll('.product_info-item');

product_infos.forEach(function (product_info) {
    product_info.addEventListener('click', function () {
        // Close all product_infos
        product_infos.forEach(function (otherproduct_info) {
            if (otherproduct_info !== product_info) {
                otherproduct_info.classList.remove('show');
            }
        });

        // Toggle the selected product_info
        this.classList.toggle('show');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var veganElement = document.getElementById('vegan');
    var nonVeganElement = document.getElementById('non-vegan');
    var viewAll = document.getElementById('view-all');


    veganElement.addEventListener('click', function (event) {
        event.preventDefault();

        document.querySelectorAll('.product_card[id="vegan"]').forEach(function (element) {
            element.style.display = 'block';
        });

        document.querySelectorAll('.product_card[id="non-vegan"]').forEach(function (element) {
            element.style.display = 'none';
        });
    });

    nonVeganElement.addEventListener('click', function (event) {
        event.preventDefault();

        document.querySelectorAll('.product_card[id="vegan"]').forEach(function (element) {
            element.style.display = 'none';
        });

        document.querySelectorAll('.product_card[id="non-vegan"]').forEach(function (element) {
            element.style.display = 'block';
        });
    });
    viewAll.addEventListener('click', function (event) {
        event.preventDefault();

        document.querySelectorAll('.product_card[id="vegan"]').forEach(function (element) {
            element.style.display = 'block';
        });

        document.querySelectorAll('.product_card[id="non-vegan"]').forEach(function (element) {
            element.style.display = 'block';
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('navbarToggleBtn');

    toggleBtn.addEventListener('click', function () {
        this.classList.toggle('opened');
    });
});

