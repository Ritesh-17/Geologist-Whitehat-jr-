class Stone {
    constructor() {
      var options = {
        'density':12,
        'friction': 0.9,
        'restitution':0.8
      }
      this.width = 30;
      this.height = 60;
      this.x = 205;
      this.y = 400;
      this.body = Bodies.rectangle(this.x,this.y, 26, 56, options);
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill("gray")
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    }
}