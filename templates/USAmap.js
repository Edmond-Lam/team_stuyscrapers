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

////////////////////////////////////////////////////////////////////////
    //THIS CREATES A RANDOM CIRCLE...aka it works
    /**

    svg.append("circle")
//	.data(places)
//	.enter()

	.attr("cy",200)
	.attr("cx", 200)

//	.attr("cy",function(d){return d[0]["location"]["latitude"];}) //latitude
//	.attr("cx",function(d){return d[0]["location"]["longitude"];}) //longitude
    
	.attr("r", "50px")
	.style("fill", "red");

    ////////////////////////////////////////////////////////////////////

 **/

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
//var viewButton = d3.select("select");
//console.log(viewButton);









var changeView = function(e){
    //the console log codes are pseudo codes for the function
    //we need to display the various views
    
    var tableHeading = document.getElementById("vHead");
    var c1 = document.getElementById("color1");
    var var1 = document.getElementById("var1");
    var var2 = document.getElementById("var2");
    var var3 = document.getElementById("var3");
    var c2 = document.getElementById("color2");
    var c3 = document.getElementById("color3");
    
    
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




console.log("latitude: "+places[0]["location"]["latitude"]);
console.log("longitude: "+places[0]["location"]["longitude"]);

//PARSE TROUGH THE DICTIONARYYYYY




     //var projection = d3.geo.albersUsa();
    /**
    svg.selectAll("circle")
	.data(places)
	.enter().append("circle", ".pin")
	.attr("r", "50px")

   // console.log(projection([d.location.longitude]));
    /**   .attr("cx",function(d) {
	  return "" + projection([
          d.location.longitude])});

	  /**.attr("cx","500")//projection[d.location.longitude])
          .attr("cy","500");//projection[d.location.latitude]);

	  add circles to svg

    svg.selectAll("circle")
	.data(places).enter()
	.append("circle")
	.attr("cx", "200");
	.attr("cy", "200");
	.attr("r", "100px")
	.attr("fill", "red")
    
  



    circles.selectAll("div")
	.data(lat)
	.enter()
	.append("circle")
	.attr("cy", function(d){return d+"px";}) //latitude
	.attr("r",30);

    
    circles.selectAll("div")
	.data(longi)
	.enter()
	.append("circle")
	.attr("cx", function(d){return d+"px";}) //longitude
	.attr("r",30);
    
	});


    svg.selectAll("circle")
	.data([aa,bb]).enter()
	.append("circle")
	.attr("cx",100)
	      //function (d) { console.log(projection(d)); return projection(d)[0]; })
	.attr("cy",100)
	      //function (d) { return projection(d)[1]; })
	.attr("r", "50px")
	.attr("fill", "red")

    aa = [-122.490402, 37.786453];
    bb = [-122.389809, 37.72728];

    
});
**/


var s = document.getElementById("slate");



var getCoords = function(lat, lon){
    var height = 600;
    var southMostLat = 25;
    var deltaLat = 24;
    var offSetY = 11;
    var cy = height - ((lat - southMostLat) * (height / deltaLat)) + offSetY;
    var width = 960;
    var westMostLon = -124;
    var deltaLon = 57;
    var offSetX = 25;
    var cx = (lon - westMostLon) * (width / deltaLon) + offSetX;
    var coord = [cx, cy];
    console.log(coord);
    return coord;
}
var coord = getCoords(40.7, -74);
var dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
dot.setAttribute("id", "circle");
dot.setAttribute("fill", "blue");
dot.setAttribute("cx", coord[0]);
dot.setAttribute("cy", coord[1]);
dot.setAttribute("r", 3);
s.appendChild(dot);




