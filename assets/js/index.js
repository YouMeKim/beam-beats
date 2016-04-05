$(document).ready(function() {
	$('#welcome-message').one("click", function() {
		$('#welcome-message').html("<p>Now that you've played some music, let's take a look at what you made!</p>");
		$('#welcome-message').one("click", function() {
			$('#welcome-message').remove();
			$('#cover').remove();
			$('#index-wrapper').css("display","block");
		});
	});
});
