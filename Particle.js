class Particle {
    constructor(x, y){
        var options = {
            restitution: 0.8,
            friction: 0,
            density: 10
        }
        this.body = Bodies.circle(x, y, 15, options);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
       
    }
    display(){
        var point = this.body.position;
        push ();
        fill (this.color);
        circle(point.x, point.y, this.body.circleRadius);
        pop ();
    }
}