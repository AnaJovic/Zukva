$(document).ready(function () {
	function displayPhotos(data) {
	var photoShow = '';
	$.each(data, function (i, photo) {
		photoShow += '<div class="picbox"><figure><img src="' + photo.url + '" alt="' + photo.imgname + '" class="frame"  onclick="expandImage(this)" ><figcaption>' + photo.imgname + '</figcaption></figure></div>';
	});
	$('#photos').html(photoShow);
	}
	$.getJSON('http://localhost:3000/img', displayPhotos);
  });
  function expandImage(imgs) {
  var expandImg = document.getElementById('expandedImg');
  var imgText = document.getElementById('imgtext');
  expandImg.src = imgs.src;
 imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = 'block';
  }