import { Actor, Animation, CollisionType, Color, Engine, SpriteSheet } from "excalibur";
import { images } from "../resources";

export class Balls extends Actor{
    dir: string
    constructor(x: number, y: number, dir: string){
        super({
            x,
            y,
            width: 15,
            height: 15,
            collisionType: CollisionType.Passive,
            color: Color.Green,
            z: 1000000
        })
        this.dir = dir

        const ball1SpriteSheet = SpriteSheet.fromImageSource({
            image: images.ball1,
            grid: {
            columns: 4,
            rows: 4,
            spriteWidth: 96,
            spriteHeight: 96,
            },
        })

        const ball1 = Animation.fromSpriteSheet(ball1SpriteSheet, [0], 200);
        this.graphics.add('ball1', ball1);


        const ball2SpriteSheet = SpriteSheet.fromImageSource({
            image: images.ball2,
            grid: {
             columns: 4,
            rows: 4,
            spriteWidth: 96,
            spriteHeight: 96,
            },
        })

        const ball2 = Animation.fromSpriteSheet(ball2SpriteSheet, [0], 200);
        this.graphics.add('ball2', ball2);
        

        const ball3SpriteSheet = SpriteSheet.fromImageSource({
            image: images.ball3,
            grid: {
             columns: 4,
            rows: 4,
            spriteWidth: 96,
            spriteHeight: 96,
            },
        })

        const ball3 = Animation.fromSpriteSheet(ball3SpriteSheet, [0], 200);
        this.graphics.add('ball3', ball3);

        const ball4SpriteSheet = SpriteSheet.fromImageSource({
            image: images.ball4,
            grid: {
            columns: 4,
            rows: 4,
            spriteWidth: 96,
            spriteHeight: 96,
            },
        })

        const ball4 = Animation.fromSpriteSheet(ball4SpriteSheet, [0], 200);
        this.graphics.add('ball4', ball4);

        const ballIde =  new Animation({
            frames: [
                {graphic: this.graphics.getGraphic('ball1'), duration: 200},
                {graphic: this.graphics.getGraphic('ball2'), duration: 200},
                {graphic: this.graphics.getGraphic('ball3'), duration: 200},
                {graphic: this.graphics.getGraphic('ball4'), duration: 200},
              ]
        })

        const ballIdeLeft =  new Animation({
            frames: [
                {graphic: this.graphics.getGraphic('ball1'), duration: 200},
                {graphic: this.graphics.getGraphic('ball2'), duration: 200},
                {graphic: this.graphics.getGraphic('ball3'), duration: 200},
                {graphic: this.graphics.getGraphic('ball4'), duration: 200},
              ]
        })
        ballIdeLeft.flipHorizontal = true

        this.graphics.add('ballIdeLeft', ballIdeLeft);
        this.graphics.add('ballIde', ballIde);


        const hit1SpriteSheet = SpriteSheet.fromImageSource({
            image: images.hit1,
            grid: {
             columns: 4,
            rows: 4,
            spriteWidth: 96,
            spriteHeight: 96,
            },
        })

        const hit1 = Animation.fromSpriteSheet(hit1SpriteSheet, [0], 200);
        this.graphics.add('hit1', hit1);

        const hit2SpriteSheet = SpriteSheet.fromImageSource({
            image: images.hit2,
            grid: {
             columns: 4,
            rows: 4,
            spriteWidth: 96,
            spriteHeight: 96,
            },
        })

        const hit2 = Animation.fromSpriteSheet(hit2SpriteSheet, [0], 200);
        this.graphics.add('hit2', hit2);

        const hit3SpriteSheet = SpriteSheet.fromImageSource({
            image: images.hit3,
            grid: {
             columns: 4,
            rows: 4,
            spriteWidth: 96,
            spriteHeight: 96,
            },
        })

        const hit3 = Animation.fromSpriteSheet(hit3SpriteSheet, [0], 200);
        this.graphics.add('hit3', hit3);

        const hit4SpriteSheet = SpriteSheet.fromImageSource({
            image: images.hit4,
            grid: {
             columns: 4,
            rows: 4,
            spriteWidth: 96,
            spriteHeight: 96,
            },
        })

        const hit4 = Animation.fromSpriteSheet(hit4SpriteSheet, [0], 200);
        this.graphics.add('hit4', hit4);

        const hit5SpriteSheet = SpriteSheet.fromImageSource({
            image: images.hit5,
            grid: {
             columns: 4,
            rows: 4,
            spriteWidth: 96,
            spriteHeight: 96,
            },
        })

        const hit5 = Animation.fromSpriteSheet(hit5SpriteSheet, [0], 200);
        this.graphics.add('hit5', hit5);

         const hit6SpriteSheet = SpriteSheet.fromImageSource({
            image: images.hit6,
            grid: {
             columns: 4,
            rows: 4,
            spriteWidth: 96,
            spriteHeight: 96,
            },
        })

        const hit6 = Animation.fromSpriteSheet(hit6SpriteSheet, [0], 200);
        this.graphics.add('hit6', hit6);

        const hit7SpriteSheet = SpriteSheet.fromImageSource({
            image: images.hit7,
            grid: {
             columns: 4,
            rows: 4,
            spriteWidth: 96,
            spriteHeight: 96,
            },
        })

        const hit7 = Animation.fromSpriteSheet(hit7SpriteSheet, [0], 200);
        this.graphics.add('hit7', hit7);

        const hitIde =  new Animation({
            frames: [
                {graphic: this.graphics.getGraphic('hit1'), duration: 200},
                {graphic: this.graphics.getGraphic('hit2'), duration: 200},
                {graphic: this.graphics.getGraphic('hit3'), duration: 200},
                {graphic: this.graphics.getGraphic('hit4'), duration: 200},
                {graphic: this.graphics.getGraphic('hit5'), duration: 200},
                {graphic: this.graphics.getGraphic('hit6'), duration: 200},
                {graphic: this.graphics.getGraphic('hit7'), duration: 200},
              ]
        })
        hitIde.events.on('loop', a => {
            this.kill()
        })

        this.graphics.add('hitIde', hitIde)
        this.graphics.use('ballIde')

    }

    onInitialize(_engine: Engine): void {
        this.addTag('ball')

    }
    

    onPreUpdate(_engine: Engine, _delta: number): void {
        if(this.dir === 'LEFT'){
            this.vel.x -= 500
            this.graphics.use('ballIdeLeft')
        }else if(this.dir === 'RIGHT'){
            this.graphics.use('ballIde')

            this.vel.x += 500
        }else if(this.dir === 'INIT'){
            this.vel.x += 500
        }

        if(this.isOffScreen){
            this.kill()
        }

        this.on("collisionstart", (ev) => {
            // console.log("🚀 ~ Balls ~ this.on ~ ev:", ev.other)
            
            if (ev.other.hasTag('goblin')) {
              this.graphics.use('hitIde')
              this.vel.x = -20
              this.dir = ''
            // //   setTimeout(() => {
            //       this.kill();
            // // },500)
            }
        });
    }

 
}