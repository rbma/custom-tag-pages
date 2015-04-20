
'use strict';

/*global $:false */



function changeStyles(){
	var blue = '#00283e';
	var pink = '#e71680';
	var tagPage = $('.tag-page');
	var div = $('.article');
	var text = div.find('.text-content');

	
	// ------------------------------------------------
	// Change background of whole page
	//
	tagPage.css({
		background: blue
	});

	// ------------------------------------------------
	// Change background of individual recommendation
	//
	
	div.css({
		background: blue
	});


	
	// ------------------------------------------------
	// Change text headers
	//
	
	text.find('h3').css({
		color: 'white'
	});

	text.find('p').css({
		color: 'white'
	});


	// ------------------------------------------------
	// Remove load more button
	//

	var loadmore = $('#loadmore');
	loadmore.remove();
	



	
}




// -------------------------------------------------
//
// Load
// 
// -------------------------------------------------

$(document).ready(function(){
	changeStyles();
});



