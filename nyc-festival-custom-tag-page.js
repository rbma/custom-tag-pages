
'use strict';

/*global $:false */



function changeStyles(){
	var tagPage = $('.tag-page');

	tagPage.css({
		background: 'blue'
	});
}



$(document).ready(function(){
	changeStyles();
});



