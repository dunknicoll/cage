
var middle,cageFilms,canCage;

function setup() {
  createCanvas(800, 600);
  canCage = false;
  middle = createVector(width/2, height/2);
  cageFilms = [];
  loadJSON('cage.json', gotCage);
}

function draw() {
  background(200);
  if (canCage) {
    for(i=0;i<cageFilms.length;i++)
    {
      cageFilms[i].update();
      cageFilms[i].render();
    }
  }
}

function gotCage(cage) {
  var movies = cage[0];
  var films = movies.filmographies[0].filmography;
  for(i=0;i<films.length;i++)
  {
    cageFilms[i] = new Film(films[i]);
  }
  canCage = true;
}

function Film(film) {
  this.title    = film.title;
  this.year     = film.year;
  this.offset   = map(this.year, 1964, 2020, 0, width/3);
  this.t        = (millis()/(1000.0-this.offset));
  this.px       = (middle.x+this.offset*cos(this.t));
  this.py       = (middle.y+this.offset*sin(this.t));
}

Film.prototype.render = function() {
  push();
    fill(255);
    noStroke();
    translate(this.px, this.py);
    ellipse(0,0, 10, 10);
    fill(0);
    text(this.title, 5, 5); 
  pop();
};

Film.prototype.update = function() {
  this.t = (millis()/(1000.0-this.offset));
  this.px = (middle.x+this.offset*cos(this.t));
  this.py = (middle.y+this.offset*sin(this.t));
};
