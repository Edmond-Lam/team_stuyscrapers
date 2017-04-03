


var width = 700,
    height = 580;

var svg = d3.select( "body" )
    .append( "svg" )
    .attr( "width", width )
    .attr( "height", height );

var neighborhoods = svg.append( "g" ).attr( "id", "neighborhoods" );

var albersProjection = d3.geo.albers()
    .scale( 190000 )
    .rotate( [71.057,0] )
    .center( [0, 42.313] )
    .translate( [width/2,height/2] );

var geoPath = d3.geo.path()
    .projection( albersProjection );

neighborhoods.selectAll( "path" )
    .data( neighborhoods_json.features )
    .enter()
    .append( "path" )
    .attr( "d", geoPath );

var rodents = svg.append( "g" ).attr( "id", "rodents" );

rodents.selectAll( "path" )
    .data( rodents_json.features )
    .enter()
    .append( "path" )
    .attr( "d", geoPath )
    .on( "click", function(){
	d3.select(this).remove();
    });


