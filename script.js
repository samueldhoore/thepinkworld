/******************************************************************/
/* Random Link */
/******************************************************************/

/* document.onclick = reloadpage; */

function reloadpage() {
    var sites = ['bluai', 'one', 'two'];
    var randomUrl = sites[Math.floor(Math.random() * sites.length )];
    window.open(randomUrl, "_self");
}