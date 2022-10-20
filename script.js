/******************************************************************/
/* Random Link */
/******************************************************************/

body.onload = reloadpage
document.onclick = reloadpage;

function reloadpage() {
    var sites = ['bluai', 'one', 'two'];
    var randomUrl = sites[Math.floor(Math.random() * sites.length )];
    window.open(randomUrl, "_self");
}

/* 
setTimeout(function reloadpage() {
    var sites = ['bluai', 'one', 'two'];
    var randomUrl = sites[Math.floor(Math.random() * sites.length )];
    window.open(randomUrl, "_self");
}, 1000) */