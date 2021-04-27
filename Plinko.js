class Plinko {
    constructor(x, y){
        var options = {
            isStatic: true,
            density: 100,
            friction: 0
        }
        this.body = Bodies.circle(x, y, 15, options);
        
        World.add(world, this.body);
       
    }
    display(){
        var point = this.body.position;
        push ();
        fill ("white");
        circle(point.x, point.y, this.body.circleRadius);
        pop ();
    }
}