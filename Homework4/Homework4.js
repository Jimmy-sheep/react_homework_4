var dataUrl = "https://api.github.com/users/Jimmy-sheep";
var data = $.getJSON(dataUrl);

data.done( function( msg ) {
	$("#pic").html($("<img/>").attr("src", msg.avatar_url));
	$("#name").html($("<h2/>").text(msg.login));
	$("#type").html($("<p/>").text(msg.type));
	$("#loc").html($("<p/>").text(msg.location));
	$("#email").html($("<p/>").text("o123546789@gmail.com"));
	$("#link").html($("<p/>").text(msg.blog));
});
data.fail( function( msg ) {
	console.log(msg);
	$("#contain").html("Fail!");
});