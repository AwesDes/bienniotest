document.getElementById('path3270').addEventListener('click', function() {
    document.getElementById('southern-economy').style.display = "";
    document.getElementById('central-economy').style.display = "none";
    document.getElementById('northwest-economy').style.display = "none";
    document.getElementById('northeast-economy').style.display = "none";
});

document.getElementById('path3300').addEventListener('click', function() {
    document.getElementById('central-economy').style.display = "";
    document.getElementById('southern-economy').style.display = "none";
    document.getElementById('northwest-economy').style.display = "none";
    document.getElementById('northeast-economy').style.display = "none";
});

document.getElementById('path3312').addEventListener('click', function() {
    document.getElementById('northwest-economy').style.display = "";
    document.getElementById('southern-economy').style.display = "none";
    document.getElementById('central-economy').style.display = "none";
    document.getElementById('northeast-economy').style.display = "none";

});

document.getElementById('path3316').addEventListener('click', function() {
    document.getElementById('northeast-economy').style.display = "";
    document.getElementById('southern-economy').style.display = "none";
    document.getElementById('central-economy').style.display = "none";
    document.getElementById('northwest-economy').style.display = "none";
});