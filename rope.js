class Rope{  
    constructor(body1,body2){
        var options = {
            'bodyA':body1,
            'bodyB':body2
        }

        this.chain = Constraint.create(options)
    
        World.add(world, this.chain)
    }

    display(){
        var PointA = this.chain.bodyA.position
        var PointB = this.chain.bodyB.position
        strokeWeight(4)
        line(PointA.x, PointA.y, PointB.x, PointB.y)

    }
}