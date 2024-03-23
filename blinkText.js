setInterval(function() {
    var el = document.getElementById("blinkingtext");
    var colors = ['red','black'];
    el.style.color = colors[Math.floor(Math.random() * colors.length)];
}, 10);
