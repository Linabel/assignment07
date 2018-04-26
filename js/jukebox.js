/*eslint-env browser*/

var $ = function (id) {
    'use strict';
    return window.document.getElementById(id);
}

var Jukebox = function () {
    "use strict";
    var albums = [],
        self;

    self = {
        addAlbum: function (album) {
            albums.push(album);
        },
        favoriteAlbum: function () {
            var max = -1,
                fav, i;

            for (i = 0; i < albums.length; i += 1) {
                if (albums[i].played > max) {
                    max = albums[i].played;
                    fav = albums[i];
                }
            }
            return fav.display();
        }
    };
    return self;
};

var Album = function (artist, title) {
    "use strict";

    var displayAlbum = function () {
        $('menu').innerHTML += `<option value='${title}'>${title} by ${artist}</option>`;
    }
    displayAlbum();
    var self = {
        played: 0,
        play: function () {
            self.played += 1;
        },
        display: function () {
            return artist + " : " + title + ". The album has been played " + this.played + " times.";
        }
    };
    return self;
};

window.addEventListener('load', function () {

    var jbox = new Jukebox();

    var music = [["Imagin Dragons", "Evolve"], ["Imagin Dragons", "Mirrors"], ["Imagin Dragons", "Night Visions"]];

    var albums = [];

    for (var i = 0; i < music.length; i++) {
        albums[i] = new Album(music[i][0], music[i][1]);
        jbox.addAlbum(albums[i]);
    }
    
    var menu = $('menu');

    $('play').addEventListener('click', function (e) {
        
        for(var i = 0; i<albums.length; i++){
            if(music[i][1] === menu.value){
                albums[i].play();
            }
        }
    });
    
    $('show-favs').addEventListener('click', function(){
        $('favoriteAlbum').innerHTML = "You favorite album is " + jbox.favoriteAlbum()
    });
});

