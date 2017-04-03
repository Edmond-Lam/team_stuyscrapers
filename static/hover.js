var svg = document.getElementById("slate");

var showInfo = function(){
    var x = this.getAttribute("cx");
    var y = parseInt(this.getAttribute("cy")) - 50;
    var info = document.createElementNS("http://www.w3.org/2000/svg", "g");
    var box = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    box.setAttribute("width", 70);
    box.setAttribute("height", 50);
    box.setAttribute("fill", "white");
    box.setAttribute("stroke", "black");
    box.setAttribute("id", "box");
    box.setAttribute("x", x);
    box.setAttribute("y", y);
    var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", x);
    text.setAttribute("y", y + 25);
    text.setAttribute("font-family", "Verdana");
    text.setAttribute("font-size", "10");
    text.innerHTML = "x: " + x + " ,y: " + y;
    text.setAttribute("id", "text");
    
    svg.appendChild(box);
    svg.appendChild(text);
};

var removeInfo = function(){
    var text = document.getElementById("text");
    text.parentNode.removeChild(text);
    var box = document.getElementById("box");
    box.parentNode.removeChild(box);
}

var drawCircle = function(e){
    var r = 10;
    var cx = e.offsetX;
    var cy = e.offsetY;
    var dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    dot.setAttribute("id", "circle");
    dot.setAttribute("fill", "blue");
    dot.setAttribute("cx", cx);
    dot.setAttribute("cy", cy);
    dot.setAttribute("r", r);
    dot.setAttribute("class", "dot");
    dot.addEventListener("mouseover", showInfo);
    dot.addEventListener("mouseout", removeInfo);
    svg.appendChild(dot);
};

svg.addEventListener("click", drawCircle);

