class Ground {
    constructor(x, y, w, h){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
       
    }
    display(){
        var point = this.body.position;
        push ();
        fill ("brown");
        rectMode(CENTER);
        rect(point.x, point.y, this.width, this.height);
        pop ();
    }
}