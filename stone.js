class Stone {
    constructor(x, y) {
        var options = {
          'density':0.8,
          'friction': 0.9,
          'restitution':12
        }
    }
    display(){
    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(3);
        stroke('grey')
        fill('black')
        rectMode(CENTER)
        rect(0, 0, this.width, this.height);
        pop();
      };
}