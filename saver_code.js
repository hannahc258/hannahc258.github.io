var options = {
	files: [],
	success: function () {
		alert("Success! Files saved to your Dropbox.");
	},
	cancel: function () {},
	error: function (errorMessage) {}
};

var button = Dropbox.createChooseButton(url, filename, options);
document.getElementById("container").appendChild(button);
