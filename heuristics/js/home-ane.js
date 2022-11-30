if (localStorage.getItem('ansNum') != null) {
        
        localStorage.removeItem('ansNum');
    }

$ (function () {
	$('h1').textillate({ 
        in: { effect: 'bounceIn'}});
});

$ (function () {
	$('.intro-home').textillate({ 
        initialDelay: 1500,
        in: { effect: 'fadeInUp', sync: true}});
});

