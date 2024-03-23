setInterval(function() {
    var el = document.getElementById("blinkingText");
    var colors = ['red','black'];
    el.style.color = colors[Math.floor(Math.random() * colors.length)];
}, 1000);
