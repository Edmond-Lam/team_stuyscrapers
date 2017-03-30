var svg = document.getElementById("slate");

var showInfo = function(){
    var x = this.getAttribute("cx");
    var y = parseInt(this.getAttribute("cy")) - 30;
    var box = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    box.setAttribute("width", 50);
    box.setAttribute("height", 30);
    box.setAttribute("fill", "black");
    box.setAttribute("id", "text");
    box.setAttribute("x", x);
    box.setAttribute("y", y);
    svg.appendChild(box);
};

var removeInfo = function(){
    var text = document.getElementById("text");
    text.parentNode.removeChild(text);
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

