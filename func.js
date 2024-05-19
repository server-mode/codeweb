document.addEventListener("contextmenu", function(event){
event.preventDefault();

}, false)
window.frames["bf5eb931-19df-43ec-b780-c88ff784879f"].document.oncontextmenu = function(){ return false; };
document.addEventListener('DOMContentLoaded', function() {
    var iframe = document.querySelector('iframe');
    iframe.addEventListener('load', function() {
        var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        var popOutIcon = iframeDoc.querySelector('.ndfHFb-c4YZDc-Wrql6b');
        if (popOutIcon) {
            popOutIcon.style.pointerEvents = 'none';
        }
    });
});