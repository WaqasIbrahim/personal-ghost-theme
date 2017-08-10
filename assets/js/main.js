(function(){

	'use strict';

	var body = document.querySelector('body');

	// Toggle Navigation
	var navToggle = document.getElementById('nav-toggle');

	navToggle.addEventListener('click', function(e) {
		e.preventDefault();
		this.classList.toggle('active');

		body.classList.toggle('nav-open');
	}, false);

	
	// Sharing Links
	var socialLinks = document.getElementsByClassName('social-share');

	for(var i = 0, len = socialLinks.length; i < len; i++) {
		socialLinks[i].addEventListener('click', function(e) {
			e.preventDefault();
			popup(this.href);
		}, false);
	}

	function popup(url) {
		var left = (screen.width - 570) / 2,
		top = (screen.height - 570) / 2,
		params = 'menubar=no,toolbar=no,status=no,width=570,height=570,top=' + top + ',left=' + left;
		
		window.open(url, '_blank', params);
	}

})();