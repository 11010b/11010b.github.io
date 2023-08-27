const navbarItem = document.querySelector('.navItem');
const hamburgerMenu = document.getElementById('hamburgerList');
const togglerMode = document.getElementById('mode');
const bodyElement = document.querySelectorAll('html *');
const fullPhoto = document.querySelector('.full');
let photoGal = document.getElementById('fullPhoto');
const containerThumb = document.querySelector('#gallery .container');
const navbarBrand = document.querySelector('.navbar .navbarBrand a');

// Bila hamburger menu di klik
hamburgerMenu.addEventListener('click', function (e) {
    if (navbarItem.classList.contains('active')) {
        hamburgerMenu.style.animation = 'halfSpinBack 0.3s linear forwards';
    } else {
        hamburgerMenu.style.animation = 'halfSpin 0.3s linear forwards';
    }
    navbarItem.classList.toggle('active');
    e.preventDefault();
});
// Menghilangkan navbar item bila klik selain di navbar
document.addEventListener('click', function (e) {
    if (!hamburgerMenu.contains(e.target) && !navbarItem.contains(e.target)) {
        navbarItem.classList.remove('active');
    }
});
// Change mode
togglerMode.addEventListener('click', function () {
    if (togglerMode.classList.contains('dark')) {
        togglerMode.style.animation = `halfSpinBack1 0.3s linear forwards`;
        setTimeout(() => {
            bodyElement.forEach(function (e) {
                e.classList.toggle('dark');
            });
            togglerMode.innerHTML = `<i class="bi bi-sun-fill"></i>`;
            togglerMode.style.color = 'var(--light)';
        }, 400);
    } else {
        togglerMode.style.animation = `halfSpin1 0.3s linear forwards`;
        setTimeout(() => {
            bodyElement.forEach(function (e) {
                e.classList.toggle('dark');
            });
            togglerMode.innerHTML = `<i class="bi bi-moon-stars-fill"></i>`;
            togglerMode.style.color = 'var(--dark)';
        }, 400);
    }
});

// Display the full photo
containerThumb.addEventListener('click', (e) => {
    if (e.target.className == 'thumb') {
        fullPhoto.src = e.target.src;
        photoGal.classList.remove('d-none');
    }
    if (e.target.classList.contains('dark')) {
        fullPhoto.src = e.target.src;
        photoGal.classList.remove('d-none');
    }
});
// Close the full photo when click the window except the photo
photoGal.addEventListener('click', (event) => {
    if (!fullPhoto.contains(event.target)) {
        photoGal.classList.add('d-none');
    }
    if (!fullPhoto.contains(event.target) && photoGal.classList.contains('dark')) {
        photoGal.classList.add('d-none');
    }
});

navbarBrand.addEventListener('click', (e) => e.preventDefault());
