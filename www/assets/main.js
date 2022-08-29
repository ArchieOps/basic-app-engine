"use strict";

// adding an event listener before going to github
let github = document.querySelector("#githubLink")
github.addEventListener("click", function(e){
    if(!confirm("Apakah anda yakin ingin meninggalkan halaman?")){
        e.preventDefault();
    }
});

// adding an event listner to the music link
let musicsLink= document.getElementsByClassName("musicLink");
for (let music of musicsLink){
    music.addEventListener("click", function(e){
        if(!confirm("Apakah anda yakin ingin meninggalkan halaman?")){
            e.preventDefault();
        }
    });
}
