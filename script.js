/******************************************************************/
/* Random Link */
/******************************************************************/

document.onclick = refresh;

function refresh() {
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