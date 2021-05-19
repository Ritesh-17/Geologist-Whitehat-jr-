class Iron {
    constructor() {
      var options = {
        'density':30,
        'friction': 3,
        'restitution':0.8
      }
      this.width = 100;
      this.height = 100;
      this.x = 555;
      this.y = 400;
      this.body = Bodies.rectangle(this.x,this.y, 95, 95, options);
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill("black")
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    }
}