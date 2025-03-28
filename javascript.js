//Javascript file
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');
tabLinks.forEach(link => {
    link.addEventListener('click', () => {
        tabLinks.forEach(item => item.classList.remove('active'));
        tabContents.forEach(item => item.classList.remove('active'));

        link.classList.add('active');
        document.getElementById(link.getAttribute('data-tab')).classList.add('active');
    });
});

//Google tag (gtag.js)
(function() {
    const script = document.createElement('script');
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-1GSMZ9NY9Z";
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-1GSMZ9NY9Z');
})();