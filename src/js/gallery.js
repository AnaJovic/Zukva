$(document).ready(function () {
	function displayPhotos(data) {
	var photoHTML = '';
	$.each(data, function (i, photo) {
		photoHTML += '<div class="picbox"><figure><img src="' + photo.url + '" class="frame"  onclick="expand(this)" ></figure></div>';
	});
	$('#photos').html(photoHTML);
	}
	$.getJSON('http://localhost:3000/img', displayPhotos);
  });
  function expand(imgs) {
  var expandImg = document.getElementById('expandedImg');
  var imgex = document.getElementById('imgex');
  expandImg.src = imgs.src;
  imgex.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = 'block';
  }