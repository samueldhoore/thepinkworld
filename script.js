/******************************************************************/
/* Random Link */
/******************************************************************/

/* document.onclick = random_link; */

setTimeout(function random_link() {
    var sites = ['bluai', 'one', 'two'];
    var randomUrl = sites[Math.floor(Math.random() * sites.length )];
    window.open(randomUrl, "_self");
},5000);

/* 
setTimeout(function reloadpage() {
    var sites = ['bluai', 'one', 'two'];
    var randomUrl = sites[Math.floor(Math.random() * sites.length )];
    window.open(randomUrl, "_self");
}, 1000) */

setTimeout(,5000);