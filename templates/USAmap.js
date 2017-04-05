var svg = d3.select("svg");

var path = d3.geoPath();

//loads the USA map data
var makeMap = function(){
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
	    .enter()
	    .append("circle")
    	    .attr("cy",function(d){
		var coord = getCoords(d["location"]["0"],d["location"]["1"]);
		// console.log(coord[0]);
		return coord[0];
	    }) //latitude
    	    .attr("cx",function(d){

		var coord = getCoords(d["location"]["0"],d["location"]["1"]);
		// console.log(coord[1]);
		return coord[1];

	    }) //longitude
	    .attr("r", "20px")
	    .style("fill",function(d){
		if (viewNum == 0){
		    if(d["height"] > 400){
			return "#990000";
		    }
		    else if (d["height"] >100){
			return "#ff3300";
		    }
		    else{
			return "#ff9933";
		    }
		}
		else if (viewNum == 1){
		    console.log("viewNum ==1");
		    if(d["material"] == "steel"){
			return "#e0e0d1";
		    }
		    else if (d["material"] == "concrete"){
			return "gray";
		    }
		    else{
			return "black";
		    }
		}
		//most buildings consist of both offices/residential/communication
		//so it's not useful to depict
	    })
	
	
    });
};



//trying to plot points

var places = [
  {
    name: "New York City",
    location: {
      latitude: 100.7128,//y
      longitude: 100.0059//x
    }
  },
  {
    name: "Houston",
    location: {
      latitude: 100.7604,
      longitude: 95.3698
    }
  }
]

var longi = [74,95]
var lat = [40,29]



var viewButton = document.getElementById("view");




// for reading in json data
var getData = function(year){
    
    return data.skyscrapers[year];
}

var getDataMulti = function(year){
    var y = parseInt(year);
    var items = [];
    for(var i = 1884; i <= y; i++){
	var str_year = "" + i;
	var now = getData(str_year);
	if(now != undefined){
	    items = items.concat(now);
	}
    }
    return items;
};


//console.log(getData("1940"));

//console.log(getDataMulti("1940"));



var viewNum = 0;
var changeView = function(e){
    var tableHeading = document.getElementById("vHead");
    var c1 = document.getElementById("color1");
    var var1 = document.getElementById("var1");
    var var2 = document.getElementById("var2");
    var var3 = document.getElementById("var3");
    var c2 = document.getElementById("color2");
    var c3 = document.getElementById("color3");

   // console.log(viewButton.value);
    
    if (viewButton.value == "height"){
	viewNum = 0;
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
	viewNum=1;
	console.log("materials");
	tableHeading.innerHTML = "Materials";

	c1.style.backgroundColor = "#e0e0d1";
	var1.innerHTML = "STEEL";

	c2.style.backgroundColor = "gray";
	var2.innerHTML = "CONCRETE";

	c3.style.backgroundColor = "black";
	var3.innerHTML = "OTHER";
    }

    else if (viewButton.value == "usage"){
	viewNum=2;
	console.log("usage");
	tableHeading.innerHTML = "Usage";
	
	c1.style.backgroundColor = "#003399";
	var1.innerHTML = "OFFICE";

	c2.style.backgroundColor = "#00ffff";
	var2.innerHTML = "RESIDENTIAL";

	c3.style.backgroundColor = "#66ff99";
	var3.innerHTML = "OTHER";
    }
    makeMap();
};



viewButton.addEventListener("change", changeView);





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
   // console.log(coord);
    return coord;
}


var displayPlacesData = [];


var yearButton = document.getElementById("year");

var clear = function(){
    while(svg.firstChild){
	svg.removeChild(svg.firstChild);
    };
  
}

var changeYear = function(e){
    console.log(yearButton.value);
    // console.log(getDataMulti(yearButton.value));
    clear();
    displayPlacesData=[];
    displayPlacesData = getDataMulti(yearButton.value);
    console.log(displayPlacesData);
    makeMap();
}

yearButton.addEventListener("change",changeYear);


makeMap();
