var svg = d3.select("svg");

var path = d3.geoPath();

d3.json("https://unpkg.com/us-atlas@1/us/10m.json", function(error, us) {
  if (error) throw error;



  svg.append("path")
      .attr("stroke-width", 0.5)
      .attr("d", path(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; })));

  svg.append("path")
      .attr("d", path(topojson.feature(us, us.objects.nation)));
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
