$(document).ready(function () {
    function displayPhotos(data) {
      var photoHTML = '';
      $.each(data, function (i, photo) {
        photoHTML += '<div class="picbox"><figure><img src="' + photo.url + '" class="frame"  onclick="myFunction(this)" ></figure></div>';
      });
      $('#photos').html(photoHTML);
    }
    $.getJSON('http://localhost:3000/img', displayPhotos);
  });
  function myFunction(imgs) {
  var expandImg = document.getElementById('expandedImg');
  var imgText = document.getElementById('imgtext');
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = 'block';
  }