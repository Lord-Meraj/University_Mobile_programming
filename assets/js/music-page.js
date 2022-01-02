const songs = ['Adele-Million-Years-Ago-128', 'Cecilia_Krull_My_Life_Is_Going_On_128', 'Sting-Shape-of-My-Heart-128', 'Taylor-Swift-Last-Christmas-128'];
function sendtopage(song){
var name=song;
sessionStorage.setItem("songname", name);
window.open("index.html", "_self");
}
for(var i=0;i<songs.length;i++)
    document.write('<div class="card mb-3 circle1" style="max-width: 90%;margin-left: 5%;"><div class="row align-items-center g-0"><div class="col-md-1 col-2 col-sm-2"><img src="assets/Imges/cover.png" style="border-radius: 15px 50px 30px 5px; padding: 10px;" id="cover" class="img-fluid rounded-start rounded-circle col-md-10 col-12"></div><div class="col-md-10 col-8 col-sm-8 "><div class="card-body"><p onclick="sendtopage(this.innerHTML)" id="singer" style="text-align: left;cursor: pointer;" class=" card-title">'+songs[i]+'</p></div><audio src="assets/music/'+songs[i]+'.mp3" id="audio"></audio></div></div></div>');