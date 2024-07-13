import { Actor, Animation, Collider, CollisionContact, CollisionType, Color, Engine, Side, SpriteSheet, vec, Vector } from "excalibur";
import { images } from "../resources";

export class Susano extends Actor{
    dir: string
    constructor(x: number, y: number, dir: string){
        super({
            x,
            y,
            width: 15,
            height: 15,
            collisionType: CollisionType.Passive,
            color: Color.Green,
            scale: new Vector(1.5,1.5),
            z: 100000000
        })
        this.dir = dir

        const combo1SpriteSheet = SpriteSheet.fromImageSource({
            image: images.susano1,
            grid: {
            columns: 2,
            rows: 2,
            spriteWidth: 64,
            spriteHeight: 64,
            },
        })

        const combo1 = Animation.fromSpriteSheet(combo1SpriteSheet, [0], 200);
        this.graphics.add('combo1', combo1);

        const combo2SpriteSheet = SpriteSheet.fromImageSource({
            image: images.susano2,
            grid: {
             columns: 2,
            rows: 2,
            spriteWidth: 64,
            spriteHeight: 64,
            },
        })

        const combo2 = Animation.fromSpriteSheet(combo2SpriteSheet, [0], 200);
        this.graphics.add('combo2', combo2);

        const combo3SpriteSheet = SpriteSheet.fromImageSource({
            image: images.susano3,
            grid: {
             columns: 2,
            rows: 2,
            spriteWidth: 64,
            spriteHeight: 64,
            },
        })

        const combo3 = Animation.fromSpriteSheet(combo3SpriteSheet, [0], 200);
        this.graphics.add('combo3', combo3);

        const combo4SpriteSheet = SpriteSheet.fromImageSource({
            image: images.susano4,
            grid: {
             columns: 2,
            rows: 2,
            spriteWidth: 64,
            spriteHeight: 64,
            },
        })

        const combo4 = Animation.fromSpriteSheet(combo4SpriteSheet, [0], 200);
        this.graphics.add('combo4', combo4);

        const combo5SpriteSheet = SpriteSheet.fromImageSource({
            image: images.susano5,
            grid: {
             columns: 2,
            rows: 2,
            spriteWidth: 64,
            spriteHeight: 64,
            },
        })

        const combo5 = Animation.fromSpriteSheet(combo5SpriteSheet, [0], 200);
        this.graphics.add('combo5', combo5);

        const combo6SpriteSheet = SpriteSheet.fromImageSource({
            image: images.susano6,
            grid: {
             columns: 2,
            rows: 2,
            spriteWidth: 64,
            spriteHeight: 64,
            },
        })

        const combo6 = Animation.fromSpriteSheet(combo6SpriteSheet, [0], 200);
        this.graphics.add('combo6', combo6);

        const combo7SpriteSheet = SpriteSheet.fromImageSource({
            image: images.susano7,
            grid: {
             columns: 2,
            rows: 2,
            spriteWidth: 64,
            spriteHeight: 64,
            },
        })

        const combo7 = Animation.fromSpriteSheet(combo7SpriteSheet, [0], 200);
        this.graphics.add('combo7', combo7);

        const combo8SpriteSheet = SpriteSheet.fromImageSource({
            image: images.susano8,
            grid: {
             columns: 2,
            rows: 2,
            spriteWidth: 64,
            spriteHeight: 64,
            },
        })

        const combo8 = Animation.fromSpriteSheet(combo8SpriteSheet, [0], 200);
        this.graphics.add('combo8', combo8);

        const combo9SpriteSheet = SpriteSheet.fromImageSource({
            image: images.susano9,
            grid: {
             columns: 2,
            rows: 2,
            spriteWidth: 64,
            spriteHeight: 64,
            },
        })

        const combo9 = Animation.fromSpriteSheet(combo9SpriteSheet, [0], 200);
        this.graphics.add('combo9', combo9);

        const combo10SpriteSheet = SpriteSheet.fromImageSource({
            image: images.susano10,
            grid: {
             columns: 2,
            rows: 2,
            spriteWidth: 64,
            spriteHeight: 64,
            },
        })

        const combo10 = Animation.fromSpriteSheet(combo10SpriteSheet, [0], 200);
        this.graphics.add('combo10', combo10);

        const combo11SpriteSheet = SpriteSheet.fromImageSource({
            image: images.susano11,
            grid: {
             columns: 2,
            rows: 2,
            spriteWidth: 64,
            spriteHeight: 64,
            },
        })

        const combo11 = Animation.fromSpriteSheet(combo11SpriteSheet, [0], 200);
        this.graphics.add('combo11', combo11);

        const combo12SpriteSheet = SpriteSheet.fromImageSource({
            image: images.susano12,
            grid: {
             columns: 2,
            rows: 2,
            spriteWidth: 64,
            spriteHeight: 64,
            },
        })

        const combo12 = Animation.fromSpriteSheet(combo12SpriteSheet, [0], 200);
        this.graphics.add('combo12', combo12);

        const combo13SpriteSheet = SpriteSheet.fromImageSource({
            image: images.susano13,
            grid: {
             columns: 2,
            rows: 2,
            spriteWidth: 64,
            spriteHeight: 64,
            },
        })

        const combo13 = Animation.fromSpriteSheet(combo13SpriteSheet, [0], 200);
        this.graphics.add('combo13', combo13);

        const combo14SpriteSheet = SpriteSheet.fromImageSource({
            image: images.susano14,
            grid: {
             columns: 2,
            rows: 2,
            spriteWidth: 64,
            spriteHeight: 64,
            },
        })

        const combo14 = Animation.fromSpriteSheet(combo14SpriteSheet, [0], 200);
        this.graphics.add('combo14', combo14);


        const comboIdle = new Animation({
            frames: [
                {graphic: this.graphics.getGraphic('combo1'), duration: 50},
                {graphic: this.graphics.getGraphic('combo2'), duration: 50},
                {graphic: this.graphics.getGraphic('combo3'), duration: 50},
                {graphic: this.graphics.getGraphic('combo4'), duration: 50},
                {graphic: this.graphics.getGraphic('combo5'), duration: 50},
                {graphic: this.graphics.getGraphic('combo6'), duration: 50},
                {graphic: this.graphics.getGraphic('combo7'), duration: 50},
                {graphic: this.graphics.getGraphic('combo8'), duration: 50},
                {graphic: this.graphics.getGraphic('combo9'), duration: 50},
                {graphic: this.graphics.getGraphic('combo10'), duration: 50},
                {graphic: this.graphics.getGraphic('combo11'), duration: 50},
                {graphic: this.graphics.getGraphic('combo12'), duration: 50},
                {graphic: this.graphics.getGraphic('combo13'), duration: 50},
                {graphic: this.graphics.getGraphic('combo14'), duration: 50},
               
              ]
        })

        this.graphics.add('comboIdle', comboIdle)

        comboIdle.events.on('loop', a => {
            // const warrior = this.scene?.world.queryManager.createTagQuery(['warrior']).getEntities()[0]
            // warrior.z = 10000
            // this.kill()
        })

        const comboIdleLeft = new Animation({
            frames: [
                {graphic: this.graphics.getGraphic('combo1'), duration: 50},
                {graphic: this.graphics.getGraphic('combo2'), duration: 50},
                {graphic: this.graphics.getGraphic('combo3'), duration: 50},
                {graphic: this.graphics.getGraphic('combo4'), duration: 50},
                {graphic: this.graphics.getGraphic('combo5'), duration: 50},
                {graphic: this.graphics.getGraphic('combo6'), duration: 50},
                {graphic: this.graphics.getGraphic('combo7'), duration: 50},
                {graphic: this.graphics.getGraphic('combo8'), duration: 50},
                {graphic: this.graphics.getGraphic('combo9'), duration: 50},
                {graphic: this.graphics.getGraphic('combo10'), duration: 50},
                {graphic: this.graphics.getGraphic('combo11'), duration: 50},
                {graphic: this.graphics.getGraphic('combo12'), duration: 50},
                {graphic: this.graphics.getGraphic('combo13'), duration: 50},
                {graphic: this.graphics.getGraphic('combo14'), duration: 50},
            ]
        })

        comboIdleLeft.flipHorizontal = true
        this.graphics.add('comboIdleLeft', comboIdleLeft)

        comboIdleLeft.events.on('loop', a => {
            const warrior = this.scene?.world.queryManager.createTagQuery(['warrior']).getEntities()[0]
            warrior.z = 10000
            this.kill()
        })

    }

    onInitialize(_engine: Engine): void {
        this.addTag('susano')

        this.graphics.use('comboIdle')

    }
    

    onPreUpdate(_engine: Engine, _delta: number): void {
        if(this.dir === 'LEFT'){
            this.graphics.use('comboIdleLeft')
        }else if(this.dir === 'RIGHT'){
            this.graphics.use('comboIdle')
        }else if(this.dir === 'INIT'){
            this.graphics.use('comboIdle')
        }

        const goblin = this.scene?.world.queryManager.createTagQuery(['goblin']).getEntities()[0]

        if(goblin){
            //@ts-expect-error
            const ad = goblin?.pos.sub(this.pos)
    
            this.vel = ad?.normalize().scale(vec(150, 150))

            if(this.vel.x < 0) {
                this.graphics.use('comboIdleLeft')
            }else{
                this.graphics.use('comboIdle')
            }
        }

        // if(this.isOffScreen){
        //     this.kill()
        // }

        // this.on("collisionstart", (ev) => {
        //     // console.log("🚀 ~ Balls ~ this.on ~ ev:", ev.other)
            
        //     if (ev.other.hasTag('goblin')) {
        //       this.graphics.use('hitIde')
        //       this.vel.x = -20
        //       this.dir = ''
        //     // //   setTimeout(() => {
        //     //       this.kill();
        //     // // },500)
        //     }
        // });
    }

    onCollisionStart(self: Collider, other: Collider, side: Side, contact: CollisionContact): void {
        if (other.owner.hasTag('goblin')) {
           this.kill()
          }
    }

 
}