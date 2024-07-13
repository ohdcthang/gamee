import { Actor, Animation, CollisionType, Color, Engine, SpriteSheet, Vector } from "excalibur";
import { images } from "../resources";

export class WarriorComboaTk extends Actor{
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
            z: 1000
        })
        this.dir = dir

        const combo1SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboAtk1,
            grid: {
            columns: 2,
            rows: 2,
            spriteWidth: 256,
            spriteHeight: 64,
            },
        })

        const combo1 = Animation.fromSpriteSheet(combo1SpriteSheet, [0], 200);
        this.graphics.add('combo1', combo1);

        const combo2SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboAtk2,
            grid: {
            columns: 2,
            rows: 2,
            spriteWidth: 256,
            spriteHeight: 64,
            },
        })

        const combo2 = Animation.fromSpriteSheet(combo2SpriteSheet, [0], 200);
        this.graphics.add('combo2', combo2);

        const combo3SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboAtk3,
            grid: {
             columns: 2,
            rows: 2,
            spriteWidth: 256,
            spriteHeight: 64,
            },
        })

        const combo3 = Animation.fromSpriteSheet(combo3SpriteSheet, [0], 200);
        this.graphics.add('combo3', combo3);

        const combo4SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboAtk4,
            grid: {
             columns: 2,
            rows: 2,
            spriteWidth: 256,
            spriteHeight: 64,
            },
        })

        const combo4 = Animation.fromSpriteSheet(combo4SpriteSheet, [0], 200);
        this.graphics.add('combo4', combo4);

        const combo5SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboAtk5,
            grid: {
             columns: 2,
            rows: 2,
            spriteWidth: 256,
            spriteHeight: 64,
            },
        })

        const combo5 = Animation.fromSpriteSheet(combo5SpriteSheet, [0], 200);
        this.graphics.add('combo5', combo5);

        const combo6SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboAtk6,
            grid: {
             columns: 2,
            rows: 2,
            spriteWidth: 256,
            spriteHeight: 64,
            },
        })

        const combo6 = Animation.fromSpriteSheet(combo6SpriteSheet, [0], 200);
        this.graphics.add('combo6', combo6);

        const combo7SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboAtk7,
            grid: {
             columns: 2,
            rows: 2,
            spriteWidth: 256,
            spriteHeight: 64,
            },
        })

        const combo7 = Animation.fromSpriteSheet(combo7SpriteSheet, [0], 200);
        this.graphics.add('combo7', combo7);

        const combo8SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboAtk8,
            grid: {
             columns: 2,
            rows: 2,
            spriteWidth: 256,
            spriteHeight: 64,
            },
        })

        const combo8 = Animation.fromSpriteSheet(combo8SpriteSheet, [0], 200);
        this.graphics.add('combo8', combo8);

        const combo9SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboAtk9,
            grid: {
             columns: 2,
            rows: 2,
            spriteWidth: 256,
            spriteHeight: 64,
            },
        })

        const combo9 = Animation.fromSpriteSheet(combo9SpriteSheet, [0], 200);
        this.graphics.add('combo9', combo9);

        const combo10SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboAtk10,
            grid: {
             columns: 2,
            rows: 2,
            spriteWidth: 256,
            spriteHeight: 64,
            },
        })

        const combo10 = Animation.fromSpriteSheet(combo10SpriteSheet, [0], 200);
        this.graphics.add('combo10', combo10);

        const combo11SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboAtk11,
            grid: {
             columns: 2,
            rows: 2,
            spriteWidth: 256,
            spriteHeight: 64,
            },
        })

        const combo11 = Animation.fromSpriteSheet(combo11SpriteSheet, [0], 200);
        this.graphics.add('combo11', combo11);

        const combo12SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboAtk12,
            grid: {
             columns: 2,
            rows: 2,
            spriteWidth: 256,
            spriteHeight: 64,
            },
        })

        const combo12 = Animation.fromSpriteSheet(combo12SpriteSheet, [0], 200);
        this.graphics.add('combo12', combo12);

        const combo13SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboAtk13,
            grid: {
             columns: 2,
            rows: 2,
            spriteWidth: 256,
            spriteHeight: 64,
            },
        })

        const combo13 = Animation.fromSpriteSheet(combo13SpriteSheet, [0], 200);
        this.graphics.add('combo13', combo13);

        const combo14SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboAtk14,
            grid: {
             columns: 2,
            rows: 2,
            spriteWidth: 256,
            spriteHeight: 64,
            },
        })

        const combo14 = Animation.fromSpriteSheet(combo14SpriteSheet, [0], 200);
        this.graphics.add('combo14', combo14);

        const combo15SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboAtk15,
            grid: {
             columns: 2,
            rows: 2,
            spriteWidth: 256,
            spriteHeight: 64,
            },
        })

        const combo15 = Animation.fromSpriteSheet(combo15SpriteSheet, [0], 200);
        this.graphics.add('combo15', combo15);

        const combo16SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboAtk16,
            grid: {
             columns: 2,
            rows: 2,
            spriteWidth: 256,
            spriteHeight: 64,
            },
        })

        const combo16 = Animation.fromSpriteSheet(combo16SpriteSheet, [0], 200);
        this.graphics.add('combo16', combo16);

        const combo17SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboAtk17,
            grid: {
             columns: 2,
            rows: 2,
            spriteWidth: 256,
            spriteHeight: 64,
            },
        })

        const combo17 = Animation.fromSpriteSheet(combo17SpriteSheet, [0], 200);
        this.graphics.add('combo17', combo17);

        const combo18SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboAtk18,
            grid: {
             columns: 2,
            rows: 2,
            spriteWidth: 256,
            spriteHeight: 64,
            }
        })

        const combo18 = Animation.fromSpriteSheet(combo18SpriteSheet, [0], 200);
        this.graphics.add('combo18', combo18);

        const combo19SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboAtk19,
            grid: {
             columns: 2,
            rows: 2,
            spriteWidth: 256,
            spriteHeight: 64,
            },
        })

        const combo19 = Animation.fromSpriteSheet(combo19SpriteSheet, [0], 200);
        this.graphics.add('combo19', combo19);

        const combo20SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboAtk20,
            grid: {
             columns: 2,
            rows: 2,
            spriteWidth: 256,
            spriteHeight: 64,
            },
        })

        const combo20 = Animation.fromSpriteSheet(combo20SpriteSheet, [0], 200);
        this.graphics.add('combo20', combo20);

        const combo21SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboAtk21,
            grid: {
             columns: 2,
            rows: 2,
            spriteWidth: 256,
            spriteHeight: 64,
            },
        })

        const combo21 = Animation.fromSpriteSheet(combo21SpriteSheet, [0], 200);
        this.graphics.add('combo21', combo21);

        const combo22SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboAtk22,
            grid: {
             columns: 2,
            rows: 2,
            spriteWidth: 256,
            spriteHeight: 64,
            },
        })

        const combo22 = Animation.fromSpriteSheet(combo22SpriteSheet, [0], 200);
        this.graphics.add('combo22', combo22);

        const combo23SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboAtk23,
            grid: {
             columns: 2,
            rows: 2,
            spriteWidth: 256,
            spriteHeight: 64,
            },
        })

        const combo23 = Animation.fromSpriteSheet(combo23SpriteSheet, [0], 200);
        this.graphics.add('combo23', combo23);

        const combo24SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboAtk24,
            grid: {
             columns: 2,
            rows: 2,
            spriteWidth: 256,
            spriteHeight: 64,
            },
        })

        const combo24 = Animation.fromSpriteSheet(combo24SpriteSheet, [0], 200);
        this.graphics.add('combo24', combo24);

        const combo25SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboAtk25,
            grid: {
             columns: 2,
            rows: 2,
            spriteWidth: 256,
            spriteHeight: 64,
            },
        })

        const combo25 = Animation.fromSpriteSheet(combo25SpriteSheet, [0], 200);
        this.graphics.add('combo25', combo25);

        const combo26SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboAtk26,
            grid: {
             columns: 2,
            rows: 2,
            spriteWidth: 256,
            spriteHeight: 64,
            },
        })

        const combo26 = Animation.fromSpriteSheet(combo26SpriteSheet, [0], 200);
        this.graphics.add('combo26', combo26);

        const combo27SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboAtk27,
            grid: {
             columns: 2,
            rows: 2,
            spriteWidth: 256,
            spriteHeight: 64,
            },
        })

        const combo27 = Animation.fromSpriteSheet(combo27SpriteSheet, [0], 200);
        this.graphics.add('combo27', combo27);

        const combo28SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboAtk28,
            grid: {
             columns: 2,
            rows: 2,
            spriteWidth: 256,
            spriteHeight: 64,
            },
        })

        const combo28 = Animation.fromSpriteSheet(combo28SpriteSheet, [0], 200);
        this.graphics.add('combo28', combo28);


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
                {graphic: this.graphics.getGraphic('combo15'), duration: 50},
                {graphic: this.graphics.getGraphic('combo16'), duration: 50},
                {graphic: this.graphics.getGraphic('combo17'), duration: 50},
                {graphic: this.graphics.getGraphic('combo18'), duration: 50},
                {graphic: this.graphics.getGraphic('combo19'), duration: 50},
                {graphic: this.graphics.getGraphic('combo20'), duration: 50},
                {graphic: this.graphics.getGraphic('combo21'), duration: 50},
                {graphic: this.graphics.getGraphic('combo22'), duration: 50},
                {graphic: this.graphics.getGraphic('combo23'), duration: 50},
                {graphic: this.graphics.getGraphic('combo24'), duration: 50},
                {graphic: this.graphics.getGraphic('combo25'), duration: 50},
                {graphic: this.graphics.getGraphic('combo26'), duration: 50},
                {graphic: this.graphics.getGraphic('combo27'), duration: 50},
                {graphic: this.graphics.getGraphic('combo28'), duration: 50},
               
              ]
        })

        this.graphics.add('comboIdle', comboIdle)

        comboIdle.events.on('loop', a => {
            const warrior = this.scene?.world.queryManager.createTagQuery(['warrior']).getEntities()[0]
            warrior.z = 10000
            this.kill()
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
                {graphic: this.graphics.getGraphic('combo15'), duration: 50},
                {graphic: this.graphics.getGraphic('combo16'), duration: 50},
                {graphic: this.graphics.getGraphic('combo17'), duration: 50},
                {graphic: this.graphics.getGraphic('combo18'), duration: 50},
                {graphic: this.graphics.getGraphic('combo19'), duration: 50},
                {graphic: this.graphics.getGraphic('combo20'), duration: 50},
                {graphic: this.graphics.getGraphic('combo21'), duration: 50},
                {graphic: this.graphics.getGraphic('combo22'), duration: 50},
                {graphic: this.graphics.getGraphic('combo23'), duration: 50},
                {graphic: this.graphics.getGraphic('combo24'), duration: 50},
                {graphic: this.graphics.getGraphic('combo25'), duration: 50},
                {graphic: this.graphics.getGraphic('combo26'), duration: 50},
                {graphic: this.graphics.getGraphic('combo27'), duration: 50},
                {graphic: this.graphics.getGraphic('combo28'), duration: 50},
               
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
        this.addTag('warriorComboAtk')

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

 
}