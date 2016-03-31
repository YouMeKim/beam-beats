$(document).ready(function() {
	$('#hide').click(toggleMenu);
	$('#show').click(toggleMenu);
});

function toggleMenu() {
	$("#menu").toggle("slide");
}
