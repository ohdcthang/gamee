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
        this.heldDirection = this.heldDirection.filter((d: string) => d !== dir);
    }

}

