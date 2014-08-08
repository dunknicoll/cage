
var position,cageFilms;

function setup() {
  createCanvas(800, 600);
  position = createVector(width/2, height/2);
  loadJSON('cage.json', gotCage);
  cageFilms = [];
}

function draw() {
  background(200);
  for(i=0;i<cageFilms.length;i++)
  {
    push();
    var t = (millis()/(1000.0-cageFilms[i]));
    var x = (position.x+cageFilms[i]*cos(t));
    var y = (position.y+cageFilms[i]*sin(t));
    translate(x, y);
    ellipse(0,0, 16, 16);
    // rotate(1,PI/2);
    pop();
  }

}

function gotCage(cage) {
  var movies = cage[0];
  var films = movies.filmographies[0].filmography;
  for(i=0;i<films.length;i++)
  {
    var pos = films[i].year;
    pos = map(pos, 1964, 2020, 0, width/3);
    cageFilms[i] = pos;
  }
}