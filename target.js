// Target class (position and width)
class Target {
  constructor(x, y, w, l, id, category) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.label = l;
    this.id = id;
    this.category = category;
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
    fill(color(155, 155, 155));

    circle(this.x, this.y, this.width);
     rectMode(CENTER)
    square(this.x, this.y, this.width);

    //textFont("Arial", 40);
    //text("🧃", this.x, this.y);
    // Draw label
    textFont("Arial", 12);
    fill(color(255, 255, 255));

    textAlign(CENTER);
    text(this.label, this.x, this.y);
    text(this.category, this.x, this.y + 10);
  }
  
  mouseOver() {
    
  }
}