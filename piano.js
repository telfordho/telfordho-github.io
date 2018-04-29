let notes = [
  'f3', 'g3', 'a3', 'b3',
  'c4', 'd4', 'e4', 'f4',
  'g4', 'a4', 'b4', 'c5',
  'fs3', 'gs3', 'as3', 'cs4',
  'ds4', 'fs4', 'gs4', 'as4'
]
let keycode = [
  97, 115, 100, 102,
  103, 104, 106, 107,
  108, 59, 39, 92,
  119, 101, 114, 121,
  117, 111, 112, 91
]

let fileroute = [];
notes.map((note, index) => fileroute.push('./sound/' + notes[index] + '.mp3'));

let jqeryId = [];
notes.map((note, index) => jqeryId.push('#' + notes[index].toUpperCase()));



for (let i = 0; i < fileroute.length; i++) {

  $(jqeryId[i]).on('mousedown', function () {
    $.playSound(fileroute[i]);
    $(this).addClass('playing')
  })
    .css('cursor', 'pointer')

    .on('mouseup', function () {
      $(this).removeClass(' playing');

    });

  $(window).on('keypress', function (e) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == keycode[i]) {
      $.playSound(fileroute[i]);
      $(jqeryId[i]).addClass('playing')
    }

  })
    .on('keyup', function () {
      $(jqeryId[i]).removeClass(' playing');

    });

}

$('.short-div-piano').on('mouseover', function () {

  $(this).css('cursor', 'pointer')

})




// $(function(){

// 	var howler_example = new Howl({
// 		src: ['/audio/sample/SampleAudio_0.4mb.mp3'],
// 		volume: 0.5
// 	});

// 	$("#howler-play").on("click", function(){
// 		howler_example.play();
// 	});

// 	$("#howler-pause").on("click", function(){
// 		howler_example.pause();
// 	});

// 	$("#howler-stop").on("click", function(){
// 		howler_example.stop();
// 	});

// 	$("#howler-volup").on("click", function(){
// 		var vol = howler_example.volume();
// 		vol += 0.1;
// 		if (vol > 1) {
// 			vol = 1;
// 		}
// 		howler_example.volume(vol);
// 	});

// 	$("#howler-voldown").on("click", function(){
// 		var vol = howler_example.volume();
// 		vol -= 0.1;
// 		if (vol < 0) {
// 			vol = 0;
// 		}
// 		howler_example.volume(vol);
// 	});

// });

// function playSound(e) {

//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const curKey = document.querySelector(`.wkey[data-key="${e.keyCode}"], .bkey[data-key="${e.keyCode}"]`); // this selects all wkey and bkey classes

//     // if (!audio) return; // stop the function from running altogether 
//     audio.currentTime = 0; // rewind to the start
//     console.log(audio);
//     audio.play();
//     curKey.classList.add('playing');
//   }

//   function removeTransition(e) {
//     if (e.propertyName !== 'transform') return; // skip if not transform
//     this.classList.remove('playing');
//   }

//   const keys = document.querySelectorAll('.wkey, .bkey');
//   console.log(keys);
//   keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//   window.addEventListener('keydown', playSound);

// var sound = new Howl({
//   src: ['./sound/f3.mp3']
// });


