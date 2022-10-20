/******************************************************************/
/* Random Link */
/******************************************************************/

/* document.onclick = random_link; */

/* body.onload = setTimeout(random_link, 5000); */

function random_link() {
    var sites = ['bluai', 'bluai'];
    var randomUrl = sites[Math.floor(Math.random() * sites.length )];
    window.open(randomUrl, "_self");
}