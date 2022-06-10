let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');



let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song = [
   {
     name: "Khamoshiyan",
     path: "music/khamoshiyan.mp3",
     img: "img/arjit.png",
     singer: "Arjit Singh"
	},
	{
	 name: "Zehnaseeb",
	 path: "music/Zehnaseeb.mp3",
	 img: "img/Zehnaseeb.jpg",
	 singer: "Chinmayi Sripaada, Shekhar Ravjiani"
   },
   {
     name: "Aaj Dil Shayrana",
     path: "music/aaj dil shayrana.mp3",
     img: "img/Aaj dil shayrana.jpg",
     singer: "Arjit Singh"
	},
	{
	  name: "_Jashn E bahara",
	  path: "music/Jashn E bahara.mp3",
	  img: "img/Jashan e bahara.jpg",
	  singer: "Javed Ali"
	},
	{
	  name: "Sanu Ek Pal Chain",
	  path: "music/sanu ek pal chain.mp3",
	  img: "img/Sanu ek pal chain.jpg",
	  singer: "Ustad Rahat Fateh Ali Khan"
	},
   {
     name: "Bandeya",
     path: "music/bandeya.mp3",
     img: "img/Bandeya.jpg",
     singer: "Arjit Singh"
   },
   {
	name: "Ishaqzade",
	path: "music/Ishaqzaade.mp3",
	img: "img/Ishaqzaade.jpg",
	singer: "Javed Ali, Shreya Ghoshal"
  },
   {
	name: "Lae Dooba",
	path: "music/Lae_Dooba.mp3",
	img: "img/lae dooba.jpg",
	singer: "Sunidhi Chauhan"
  },
   {
	name: "Sawarne Lage",
	path: "music/Sawarne Lage.mp3",
	img: "img/sawarne lage.jpg",
	singer: "Jubin Nautiyal"
  },
   {
	name: "Tum Sath Ho",
	path: "music/Tum Sath Ho.mp3",
	img: "img/tum sath ho.jpg",
	singer: "Arijit Singh, Alka Yagnik"
  },
   {
	name: "A Thousand Years",
	path: "music/A Thousand Years.mp3",
	img: "img/a thousand year.jpg",
	singer: "Christina Perri"
  },
   {
	name: "Bhare Naina",
	path: "music/Bhare Naina.mp3",
	img: "img/bhare nainia.jpg",
	singer: "Vishal Dadlani, Shekhar Ravjiani, Nandini Srikar"
  },
   {
	name: "Chand Sifarish",
	path: "music/Chand Sifarish.mp3",
	img: "img/chand sifarish.jpg",
	singer: "Shaan"
  },
   {
	name: "Lag Jaa Gale",
	path: "music/Lag Jaa Gale.mp3",
	img: "img/lag ja gale.jpg",
	singer: "Sanam"
  },
   {
	name: "Patakha Guddi",
	path: "music/Patakha Guddi.mp3",
	img: "img/patakha guddi.jpg",
	singer: "A.R.Rahman"
  },
   {
	name: "SubhanAllah",
	path: "music/SubhanAllah.mp3",
	img: "img/subhanallah.jpg",
	singer: "Sreeram"
  },
   {
	name: "Teri Khushboo ",
	path: "music/Teri Khushboo .mp3",
	img: "img/teri khushboo.jpg",
	singer: "Arijit Singh"
  },
   {
	name: "Yeh Raaten Yeh Mausam",
	path: "music/Yeh Raaten Yeh Mausam.mp3",
	img: "img/yeh raaten yeh mausam.jpg",
	singer: "Sanam"
  },
   {
	name: "Attention",
	path: "music/Attention.mp3",
	img: "img/attention.jpg",
	singer: "Charli Puth"
  },
   {
	name: "Awari",
	path: "music/Awari.mp3",
	img: "img/awari.jpg",
	singer: "Momina Mustehsan, Rabbi Ahmad, Adnan Dhul"
  }
];


// All functions


// function load the track
function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


//mute sound function
function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }


// reset song slider
 function reset_slider(){
 	slider.value = 0;
 }

// play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


// next song
function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


// previous song
function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


// change volume
function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

//Add song duration
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');

track.addEventListener('timeupdate',()=>{
	let track_curr = track.currentTime;
	let track_dur = track.duration;

	let min = Math.floor(track_dur/60);
	let sec = Math.floor(track_dur%60);
	if(sec<10){
		sec=`0${sec}`
	}
	currentEnd.innerText = `${min} : ${sec}`;
	
	let min1=0.00, sec1=0.00;
	 min1 = Math.floor(track_curr/60);
	 sec1 = Math.floor(track_curr%60);
	if(sec1<10){
		sec1=`0${sec1}`
	}
	currentStart.innerText = `${min1} : ${sec1}`;
})	


// autoplay function
function autoplay_switch(){
	if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "rgba(255,255,255,0.2)";
	}else{
       autoplay = 1;
       auto_play.style.background = "#FF8A65";
	}
}


function range_slider(){
	let position = 0;
        
        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       
       // function will run when the song is over
       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
     }