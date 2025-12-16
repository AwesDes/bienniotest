document.getElementById('South').addEventListener('click', function() {
    document.getElementById('southern-economy').style.display = "";
    document.getElementById('central-economy').style.display = "none";
    document.getElementById('northwest-economy').style.display = "none";
    document.getElementById('northeast-economy').style.display = "none";
});

document.getElementById('Central').addEventListener('click', function() {
    document.getElementById('central-economy').style.display = "";
    document.getElementById('southern-economy').style.display = "none";
    document.getElementById('northwest-economy').style.display = "none";
    document.getElementById('northeast-economy').style.display = "none";
});

document.getElementById('Northwest').addEventListener('click', function() {
    document.getElementById('northwest-economy').style.display = "";
    document.getElementById('southern-economy').style.display = "none";
    document.getElementById('central-economy').style.display = "none";
    document.getElementById('northeast-economy').style.display = "none";

});

document.getElementById('Northeast').addEventListener('click', function() {
    document.getElementById('northeast-economy').style.display = "";
    document.getElementById('southern-economy').style.display = "none";
    document.getElementById('central-economy').style.display = "none";
    document.getElementById('northwest-economy').style.display = "none";
});