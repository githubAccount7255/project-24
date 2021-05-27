class Iron {
    constructor(x, y) {
        var options = {
          'density':0.8,
          'friction': 3,
          'restitution':30
        }
    } 
    display(){
    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(3);
        stroke('red')
        fill('silver')
        rectMode(CENTER)
        rect(0, 0, this.width, this.height);
        pop();
      };
}