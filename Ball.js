class Ball{
    constructor(x,y,r){
        var options = {isStatic:false,restitution:0.8,friction:0.3}
        this.body = Bodies.circle(x,y,r,options)
        World.add(world,this.body)
        this.r = r
        

    }
    display(){
        ellipseMode(CENTER)
        var pos = this.body.position
        ellipse(pos.x,pos.y,this.r,this.r)
    }
}