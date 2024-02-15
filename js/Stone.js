class Stone {
  constructor(x, y, w, h) {
    let options = {
      restitution: 0.8,
    };

    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);

    this.color = color;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    strokeWeight(1);
    
    // Create a colour object with the random values
    this.color = color(this.r, this.g, this.b);

    // Set the fill colour to the random colour
    fill(this.color);
    //fill(55,78,120);
    ellipseMode(CENTER);
    ellipse(0, 0, this.w, this.h);
    noStroke();
    pop();
  }
}
