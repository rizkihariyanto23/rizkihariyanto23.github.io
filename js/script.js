// Get the modal
var modal = document.getElementById('myModal');

var images = document.getElementsByClassName('img-thumbnail'); // make new variable images to save class
var arr = [...images]; // convert images(html collection) to array
const modalImg = document.getElementById("img-modal");
const captionText = document.getElementById("caption");

// looping arr
arr.forEach(el => {
  // add event click every element
  el.addEventListener('click', () => {
    // get image path
    let src = el.getAttribute('src');
    let caption = el.getAttribute('alt');
      modal.style.display = "block";
      modalImg.src = src;
      captionText.innerHTML = caption;
  })
})

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// parallax
$(window).on('load', function(){
	$('.kiri').addClass('kiri-go');
	$('.kanan').addClass('kanan-go')
});

$(window).scroll(function(){
	const wScroll = $(this).scrollTop();

	$('.jumbotron img').css({
		'transform': 'translate(0px, '+ wScroll / 4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform': 'translate(0px, '+ wScroll / 2 +'%)'
	});

	$('.jumbotron p').css({
		'transform': 'translate(0px, '+ wScroll / 1.2 +'%)'
	});


	// portfolio
	if( wScroll > $('.portfolio').offset().top - 600 ) {
		
		$('.portfolio .img-thumbnail').each(function(i) {
			setTimeout(function() {
				$('.portfolio .img-thumbnail').eq(i).addClass('muncul');
			}, 180 * (i+1))

		});

	}

});