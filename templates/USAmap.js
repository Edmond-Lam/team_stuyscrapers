var svg = d3.select("svg");

var path = d3.geoPath();

//loads the USA map data
d3.json("https://unpkg.com/us-atlas@1/us/10m.json", function(error, us) {
  if (error) throw error;



  svg.append("path")
      .attr("stroke-width", 0.5)
	.attr("d", path(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; })));

    svg.append("path")
	.attr("d", path(topojson.feature(us, us.objects.nation)));


    var projection = d3.geo.albersUsa();
    
    svg.selectAll(".pin")
	.data(places)
	.enter().append("circle", ".pin")
	.attr("r", "50px")

    console.log(projection([d.location.longitude]));
     /**   .attr("cx",function(d) {
      return "" + projection([
          d.location.longitude])});

	/**.attr("cx","500")//projection[d.location.longitude])
        .attr("cy","500");//projection[d.location.latitude]);

     add circles to svg
    svg.selectAll("circle")
	.data([aa,bb]).enter()
	.append("circle")
	.attr("cx", function (d) { console.log(projection(d)); return projection(d)[0]; })
	.attr("cy", function (d) { return projection(d)[1]; })
	.attr("r", "100px")
	.attr("fill", "red")
**/
    
});

var viewButton = document.getElementById("view");
//var viewButton = d3.select("select");
//console.log(viewButton);



var changeColor = function(e){
    //the console log codes are pseudo codes for the function
    //we need to display the various views

    
    if (viewButton.value == "height"){
	console.log("height"); 
    }
    
    else if (viewButton.value == "materials"){
	console.log("materials");
    }

    else if (viewButton.value == "usage"){
	console.log("usage");
    }
}
console.log("height");//by default show the height view
viewButton.addEventListener("change", changeColor);


//trying to plot points

var places = [
  {
    name: "New York City",
    location: {
      latitude: 40.7128,
      longitude: -74.0059
    }
  },
  {
    name: "Houston",
    location: {
      latitude: 29.7604,
      longitude: -95.3698
    }
  }
]
