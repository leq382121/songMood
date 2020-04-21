const decode = require('audio-decode');
const fs = require('fs-extra');
let musicFileName = "music.txt";
 
//as a callback
// decode(buffer, (err, audioBuffer) => {});
 
//as a promise
// decode(buffer).then(audioBuffer => {}, err => {});

fs.unlink(musicFileName);
fs.createFile(musicFileName);


decode(fs.readFileSync('./sound/TomasS X Villius - On My Way.mp3'))
.then(
  console.log(audioBuffer)
)
.catch(console.error)



