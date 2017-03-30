var svg = document.getElementById("slate");

var showInfo = function(){
    var x = this.getAttribute("cx");
    var y = this.getAttribute("cy");
    alert(x + y);
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
    svg.appendChild(dot);
};

svg.addEventListener("click", drawCircle);

