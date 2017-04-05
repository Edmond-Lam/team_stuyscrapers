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
	.data(displayPlacesData)
	//.data(places) used for the trivial sample/test cases below
	.enter()
	.append("circle")
    	.attr("cy",function(d){
	    return d["location"]["0"];
	}) //latitude
    	.attr("cx",function(d){
	    return d["location"]["1"];
	}) //longitude
	.attr("r", "200px")
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

// for reading in json data


var getData = function(year){
    
    return data.skyscrapers[year];
}
//console.log(t.thing);
console.log(getData("1949"));



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



/*
     //var projection = d3.geo.albersUsa();
    
    svg.selectAll("circle")
	.data(places)
	.enter().append("circle", ".pin")
	.attr("r", "3px")

//to simplify, we're only doing skyscrapers built the year of






	  add circles to svg

    svg.selectAll("circle")
    .data(places).enter()
    .append("circle")
    .attr("cx", "200")
    .attr("cy", "200")
    .attr("r", "100px")
	.attr("fill", "red")
    
  */


/*
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
*/



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


/*var coord = getCoords(40.7, -74);
var dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
dot.setAttribute("id", "circle");
dot.setAttribute("fill", "blue");
dot.setAttribute("cx", coord[0]);
dot.setAttribute("cy", coord[1]);
<<<<<<< HEAD
dot.setAttribute("r", 3);
s.appendChild(dot);*/

dot.setAttribute("r", 20);
s.appendChild(dot);




//1949, 1942, 1943,1940

var sampledata = {"1949": [{"city": "Boston", "name": "John Hancock Building", "material": "steel", "height": "150.88000488281", "location": ["42.349830627441", "-71.073310852051"], "purpose": ["telecommunications", "residential", "office"]}, {"city": "New York City", "name": "100 Park Avenue", "material": "steel", "height": "135.0299987793", "location": ["40.751361846924", "-73.97875213623"], "purpose": ["telecommunications", "residential", "office"]}, {"city": "Dallas", "name": "Rio Grande Life Building", "material": "steel", "height": "90.529998779297", "location": ["32.781330108643", "-96.801719665527"], "purpose": ["telecommunications", "residential", "office"]}, {"city": "Houston", "name": "1001 McKinney Bldg.", "material": "steel", "height": "86.870002746582", "location": ["29.756830215454", "-95.364189147949"], "purpose": ["telecommunications", "residential", "office"]}, {"city": "Cincinnati", "name": "Crown Plaza Cincinnati", "material": "steel", "height": "82.910003662109", "location": ["39.102081298828", "-84.513946533203"], "purpose": ["telecommunications", "residential", "office"]}], "1942": [{"city": "Bethesda", "name": "National Naval Medical Center", "material": "steel", "height": "80.5", "location": ["39.001838684082", "-77.094207763672"], "purpose": ["telecommunications", "residential", "office"]}], "1943": [{"city": "Dallas", "name": "Mercantile Building", "material": "steel", "height": "159.41000366211", "location": ["32.780841827393", "-96.796691894531"], "purpose": ["telecommunications", "residential", "office"]}], "1940": [{"city": "Birmingham (AL)", "name": "Jefferson Tower", "material": "steel", "height": "82.199996948242", "location": ["33.505889892578", "-86.801330566406"], "purpose": ["telecommunications", "residential", "office"]}, {"city": "New York City", "name": "10 Rockefeller Plaza", "material": "steel", "height": "69.5", "location": ["40.758331298828", "-73.979598999023"], "purpose": ["telecommunications", "residential", "office"]}]}



var displayPlacesData = [];

var changeYear = function(e){
    var year = yearButton.value;
    
   // console.log(year);
  //  console.log(sampledata[year]);
    for (var i in sampledata[year]){
	displayPlacesData.push(sampledata[year][i])
//	console.log(sampledata[year][i]);
    }
    console.log(displayPlacesData);
}

//console.log(sampledata["1949"]);
for (var i in sampledata["1949"]){
 //   console.log(sampledata["1949"][i]["location"]);
}

yearButton.addEventListener("change", changeYear);
