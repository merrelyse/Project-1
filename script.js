// 1. Import the all three objects (Song, Musician, Playlist) that you created in the MusicData.js module file
import { Song, Musician, Playlist } from "./MusicData.js";

// 2. declare a new constant and assign to it a new musician object to describe the musician for the first song.
const Requisit = new Musician("Requisit", "Electronics", "Downtempo");

// 3. declare a new constant and assign to it a new musician object to describe the musician for the second song.
const MLBuch = new Musician("ML Buch", "Guitar", "Indie");
// 4. declare a new constant and assign to it a new musician object to describe the musician for the third song.
const JamesK = new Musician(
  "AT-XYA, James K, Enrico Demuro",
  "Electronics",
  "Dance"
);
// 5. declare a new constant and assign to it a new Song object to describe the first song
// (make sure to use the Musician object from step 2 in creating this Song object
const song1 = new Song(
  "Also With Each Other",
  Requisit,
  "Also With Each Other/Believe Me"
);
// 6. declare a new constant and assign to it a new Song object to describe the second song
// (make sure to use the Musician object from step 3 in creating this Song object
const song2 = new Song("This Far", MLBuch, "Fleshy");
// 7. declare a new constant and assign to it a new Song object to describe the third song
// (make sure to use the Musician object from step 4 in creating this Song object
const song3 = new Song("Antystar", JamesK, "Antystar");
// 8. declare a new constant called myPlaylist and assign to it a new Playlist object and make sure to use the three Song objects
//from steps 5, 6, & 7 when creating it.
//It must be called myPlaylist
//It must be called myPlaylist
const myPlaylist = new Playlist("In This Moment", song1, song2, song3);
//9. call the .getInfo() method on myPlaylist
console.log(myPlaylist.getInfo());
//DO NOT EDIT BELOW THIS LINE
//the code below here will insert the Playlist data into the webpage.
const bodyHTML = document.querySelector("body");

bodyHTML.innerHTML += `
    <ol>
        <li><em>${myPlaylist.song1.title}</em> by ${myPlaylist.song1.artist.name}</li>
        <li><em>${myPlaylist.song2.title}</em> by ${myPlaylist.song2.artist.name}</li>
        <li><em>${myPlaylist.song3.title}</em> by ${myPlaylist.song3.artist.name}</li>
    </ol>

`;
