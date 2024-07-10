export class DirectionQueue {
    heldDirection: any

    constructor(){
        this.heldDirection = []
    }

    get direction() {
        return this.heldDirection[0] ?? null;
    }

    add(dir: string){
        const exist = this.heldDirection.includes(dir)
        if(exist){
            return
        }
        this.heldDirection.unshift(dir)
    }

    remove(dir: string){
        console.log("🚀 ~ DirectionQueue ~ remove ~ dir:", dir)
        console.log("🚀 ~ DirectionQueue ~ remove ~  this.heldDirection11111:",  this.heldDirection)

        this.heldDirection = this.heldDirection.filter((d: string) => d !== dir);
        console.log("🚀 ~ DirectionQueue ~ remove ~  this.heldDirection:",  this.heldDirection)
    }

}

