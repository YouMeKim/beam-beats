var menuShowing = true;
var visWidth = 2048;
var visHeight = 1536;

$(document).ready(function() {
	$('#hide').click(toggleMenu);
	$('#show').click(toggleMenu);

	toggleVisualizationSize();
});

function toggleMenu() {
	if (menuShowing == true) {
		menuShowing = false;
	} else {
		menuShowing = true;
	}

	$("#menu").toggle("slide");
	toggleVisualizationSize();
}

function toggleVisualizationSize() {
	var bigWidth = $(this).width();
	var smallWidth = bigWidth - 460;
	var windowHeight = $(this).height();
	var ratio = visWidth/visHeight;

	if (menuShowing) {
		// make smaller
		var ratio = smallWidth/visWidth;
		var smallHeight = visHeight * ratio;
		if (smallHeight > windowHeight) {
			console.log("bigger");
			ratio = windowHeight/visHeight;
			var smallWidth = visWidth * ratio;
			var smallHeight = windowHeight;
		}
		$("#visualization").animate({width:smallWidth}, { duration: 300, queue: false });
		$("#visualization").animate({height:smallHeight}, { duration: 300, queue: false });
		$("#visualization").animate({height:smallHeight}, { duration: 300, queue: false });
		$("#visualization").animate({height:smallHeight}, { duration: 300, queue: false });
	} else {
		var bigHeight = visHeight * ratio;
		var ratio = bigWidth/bigHeight;
		if (bigHeight > windowHeight) {
			ratio = windowHeight/visHeight;
			var bigWidth = visWidth * ratio;
			var bigHeight = windowHeight;
		}
		$("#visualization").animate({width:bigWidth}, { duration: 300, queue: false });
		$("#visualization").animate({height:bigHeight}, { duration: 300, queue: false });
	}
}
