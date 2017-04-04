
var $element = $('#ranges');
var $handle;
var $text = $( "#text" )

$element
    .rangeslider({
	polyfill: false,
	onInit: function() {
	    $handle = $('.rangeslider__handle', this.$range);
	    updateInfo($handle[0], this.value);
	    updateInfo($text, $element.rangeslider.value + 1);
	}
    })
    .on('input', function() {
	updateInfo($handle[0], this.value);
	text.textContent = this.value;
    });

function updateInfo(el, val) {
    el.textContent = val;
}

