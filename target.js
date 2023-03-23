// Target class (position and width)
class Target {
  constructor(x, y, w, l, id, category, letter) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.label = l;
    this.id = id;
    this.category = category;
    this.letter = letter;
  }

  // Checks if a mouse click took place
  // within the target
  clicked(mouse_x, mouse_y) {
    return dist(this.x, this.y, mouse_x, mouse_y) < this.width / 2;
  }


  // Draws the target (i.e., a circle)
  // and its label
  draw() {
    // Draw target
    if (this.id >= 0 && this.id <= 27)
      fill(color(236, 126, 34));
    else if (this.id >= 28 && this.id <= 36)
      fill(color(12, 12, 238));
    else if (this.id >= 37 && this.id <= 57)
      fill(color(108, 29, 228));
    else
      fill(color(150, 0, 150));

    circle(this.x, this.y, this.width);

    // Draw label
    textFont("Arial", 14);
    fill(color(255, 255, 255));
    textAlign(CENTER);
    text(this.label, this.x, this.y);

    if (this.letter != '-1') {
      let pos_x = this.x - this.width / 2; 
      let pos_y = this.y - (this.width / 4);
      textStyle(BOLD);
      text(this.letter, pos_x, pos_y);
    }

    /*circle(this.x, this.y, this.width);
    rectMode(CENTER);
    noFill();
    stroke('yellow');
    // square(this.x, this.y, this.width);
    rect(this.x, this.y, this.width, this.width);
    stroke(color(155, 155, 155));
    //textFont("Arial", 40);
    //text("🧃", this.x, this.y);
    // Draw label
    textFont("Arial", 12);
    fill(color(255, 255, 255));
    textAlign(CENTER);
    text(this.label, this.x, this.y);
    text(this.category, this.x, this.y + 10);*/
  }
}