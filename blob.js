/// blob.js
var backupAlert = window.alert;
document.addEventListener('DOMContentLoaded', function () {
    if (window.self !== window.top && document.title === "uBlobeBM") {
        return;
    }
    if ((window.location.hostname.endsWith('.google.com') && window.location.hostname !== 'www.google.com') || window.location.hostname == 'www.youtube.com') {
        window.addEventListener('keydown', function (event) {
            if (event.code == "Backquote" && event.ctrlKey && event.shiftKey) {
                window.alert("uBlobeBM failed to load on this page! Error: Google Subdomain");
            }
        });
        return;
    }
    var main = 'https://randomaccount57.github.io/uBlobeBM-fork/main.js';
    var fallback = 'https://cdn.jsdelivr.net/gh/randomAccount57/uBlobeBM-fork@23fd1f1b34af0179ddb79153f9142b084c4c51e1/main.js';
    var script = document.createElement('script');
    script.src = main;
    script.onerror = function () {
        var script2 = document.createElement('script');
        script2.src = fallback;
        /*script2.onerror = function () {
            alert("did not work")
        };*/
        document.body.appendChild(script2);
    };
    document.body.appendChild(script);
});
