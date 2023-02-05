window.addEventListener('scroll', function () {
    const btnTop = document.querySelector('.arrow__top');
    const arrowTop = document.querySelector('.bxs-up-arrow');

    if (window.scrollY > 600) {
        btnTop.classList.add('active__btn-arrow')
        arrowTop.classList.add('active__arrow')
    } else {
        btnTop.classList.remove('active__btn-arrow')
        arrowTop.classList.remove('active__arrow')
    }
})