
'use strict';



function changeStyles(){
	var tagPage = document.getElementById('page');
	console.log('Loaded');
	tagPage.classList.remove('tag-page');
	tagPage.style.background = 'blue';
}



document.onload = function(){
	setTimeout(changeStyles, 2000);
};



