var svg = d3.select("svg");

var path = d3.geoPath();

//loads the USA map data

var us = "https://unpkg.com/us-atlas@1/us/10m.json";
d3.json(us, function(error, us) {
  if (error) throw error;



  svg.append("path")
      .attr("stroke-width", 0.5)
	.attr("d", path(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; })));

    svg.append("path")
	.attr("d", path(topojson.feature(us, us.objects.nation)));



    d3.select("svg").selectAll("circle")
	.data(places)
	.enter()
	.append("circle")
    	.attr("cy",function(d){
	    return d["location"]["latitude"];
	}) //latitude
    	.attr("cx",function(d){
	    return d["location"]["longitude"];
	}) //longitude
	.attr("r", "50px")
	.style("fill", "red");
    
});

//trying to plot points

var places = [
  {
    name: "New York City",
    location: {
      latitude: 40.7128,//y
      longitude: 74.0059//x
    }
  },
  {
    name: "Houston",
    location: {
      latitude: 29.7604,
      longitude: 95.3698
    }
  }
]

var longi = [74,95]
var lat = [40,29]



var viewButton = document.getElementById("view");




var changeView = function(e){

    
    var tableHeading = document.getElementById("vHead");
    var c1 = document.getElementById("color1");
    var var1 = document.getElementById("var1");
    var var2 = document.getElementById("var2");
    var var3 = document.getElementById("var3");
    var c2 = document.getElementById("color2");
    var c3 = document.getElementById("color3");

    console.log(viewButton.value);
    
    if (viewButton.value == "height"){

	
	console.log("height");

	tableHeading.innerHTML = "Height"


	c1.style.backgroundColor = "#990000";
	var1.innerHTML = "> 400 m";
	
	c2.style.backgroundColor = "#ff3300";
	var2.innerHTML = "> 100 m";
	
	c3.style.backgroundColor = "#ff9933";
	var3.innerHTML = "<= 100 m";
    }
    
    else if (viewButton.value == "materials"){

	console.log("materials");
	tableHeading.innerHTML = "Materials";

	c1.style.backgroundColor = "#e0e0d1";
	var1.innerHTML = "STEEL";

	c2.style.backgroundColor = "gray";
	var2.innerHTML = "CONCRETE";

	c3.style.backgroundColor = "black";
	var3.innerHTML = "COMPOSITE";
    }

    else if (viewButton.value == "usage"){
	
	console.log("usage");
	tableHeading.innerHTML = "Usage";
	

	
	c1.style.backgroundColor = "#003399";
	var1.innerHTML = "OFFICE";

	c2.style.backgroundColor = "#00ffff";
	var2.innerHTML = "RESIDENTIAL";

	c3.style.backgroundColor = "#66ff99";
	var3.innerHTML = "OTHER";
    }
};

//console.log("height");//by default show the height view
viewButton.addEventListener("change", changeView);





var yearButton = document.getElementById("year");




var changeYear = function(e){
    console.log(yearButton.value);

}

yearButton.addEventListener("change", changeYear);


var getCoord = function(e){
   // alert(e.offsetX + ", " + e.offsetY);
}

var s = document.getElementById("slate");

s.addEventListener("click", getCoord);

lat = 47 * Math.PI/180;
merc = Math.log(Math.tan((Math.PI/4)+(lat/2)));
cy = (600/2) - (960*merc/(2*Math.PI)) + 24;
cx = (-122 + 124)* (960/57) + 30;
var dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
dot.setAttribute("id", "circle");
dot.setAttribute("fill", "blue");
dot.setAttribute("cx", cx);
dot.setAttribute("cy", cy);
dot.setAttribute("r", 3);
s.appendChild(dot);
console.log(cx);
console.log(cy);



