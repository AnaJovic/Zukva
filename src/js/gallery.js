$(document).ready(function () {
	function displayPhotos(data) {
	var photoHTML = '';
	$.each(data, function (i, photo) {
		photoHTML += '<div class="picbox"><figure><img src="' + photo.url + '" alt="' + photo.name + '" class="frame"  onclick="expand(this)" ><figcaption>' + photo.name + '</figcaption></figure></div>';
	});
	$('#photos').html(photoHTML);
	}
	$.getJSON('http://localhost:3000/img', displayPhotos);
  });
  function expand(imgs) {
  var expandImg = document.getElementById('expandedImg');
  var imgtext = document.getElementById('imgtext');
  expandImg.src = imgs.src;
 imgtext.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = 'block';
  }