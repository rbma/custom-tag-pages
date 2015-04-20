
'use strict';



function changeStyles(){
	var tagPage = document.getElementById('page');
	tagPage.classList.remove('tag-page');
	tagPage.style.background = 'blue';
}



document.onload = function(){
	changeStyles();
};



