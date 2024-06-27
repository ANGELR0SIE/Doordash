window.addEventListener('scroll', function() {
    const header = document.getElementById('stickyHeader');
    if (window.scrollY > 100 ) {
        header.classList.add('sticky-header-visible');
    } else {
        header.classList.remove('sticky-header-visible');
    }
});