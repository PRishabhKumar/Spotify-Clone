let songs = [
  {
    name: "Shri Sai Baba Kakad Aarti",
    path: "./Songs/Sai Baba Kakad Aarti.mp4",
    coverImage: "./Images/Kakad Aartit.jpeg",
  },
  {
    name: "Shri Sai Baba Madhyan Aarti",
    path: "./Songs/Sai Baba Madhyan Aarti [9xssk8IKQLw].mp3",
    coverImage: "./Images/Madhyan aartit.jpeg",
  },
  {
    name: "Shri Sai Baba Dhoop Aarti",
    path: "./Songs/Sai Baba Dhoop Aarti [di5_f3v2Kng].mp3",
    coverImage: "./Images/Dhoop aartt.jpg",
  },
  {
    name: "Shri Sai Baba Shej Aarti",
    path: "./Songs/Sai Baba Shej Aarti.mp4",
    coverImage: "./Images/Shej aarti.jpg",
  },
];

let aartis = document.querySelectorAll(".card");
let playButton = document.querySelector(".playPauseButton");
let timeBar = document.querySelector(".bar");

let song = null; // Store the current song
let playing = false; // Track play state

aartis.forEach((aarti) => {
  aarti.addEventListener("click", function () {
    // this is because arrow functions dont have their own 'this', they inherit the 'this' of the element that has called the function
    console.log("A song was selected !!!");
    let name = this.querySelector(".cardTitle").innerText;
    songObject = songs.find((aarti) => aarti.name === name);
    if (songObject) {
      playSong(songObject.path);
    } else {
      alert("Song not found !!");
    }
  });
});

let playSong = function (path) {
  //if any previous song is playing, stop that first
  if (song) {
    song.pause();
  }
  song = new Audio(path);
  song.play();
  playing = true;
};

playButton.addEventListener("click", () => {
  if (playing) {
    song.pause();
    playing = false;
  } else {
    song.play();
    playing = true;
  }
  updatePlayButton();
});

let updatePlayButton = function () {
  if (playing) {
    playButton.classList.remove("fa-circle-play");
    playButton.classList.add("fa-circle-pause");
  } else {
    playButton.classList.remove("fa-circle-pause");
    playButton.classList.add("fa-circle-play");
  }
};
