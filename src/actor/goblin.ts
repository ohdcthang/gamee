import { Actor, CollisionType, Color, SpriteSheet, Animation, Engine, vec, Collider, CollisionContact, Side, Vector, Scene } from "excalibur";
import { images } from "../resources";

export class Goblin extends Actor{
    hp: number
    constructor(x: number, y: number){
        super({
            x,
            y,
            collisionType: CollisionType.Passive,
            width: 50,
            height: 50,
            color: Color.Green,
            scale: new Vector(1.5,1.5)
        })

        this.hp = 50

        const goblin1SpriteSheet = SpriteSheet.fromImageSource({
            image: images.goblin1,
            grid: {
            columns: 2,
            rows: 2,
            spriteWidth: 128,
            spriteHeight: 64,
            },
        })

        const idle1 = Animation.fromSpriteSheet(goblin1SpriteSheet, [0], 200);
        this.graphics.add('idle1', idle1);

        const goblin2SpriteSheet = SpriteSheet.fromImageSource({
            image: images.goblin2,
            grid: {
            columns: 2,
            rows: 2,
            spriteWidth: 128,
            spriteHeight: 64,
            },
        })

        const idle2 = Animation.fromSpriteSheet(goblin2SpriteSheet, [0], 200);
        this.graphics.add('idle2', idle2);

        const goblin3SpriteSheet = SpriteSheet.fromImageSource({
            image: images.goblin3,
            grid: {
            columns: 2,
            rows: 2,
            spriteWidth: 128,
            spriteHeight: 64,
            },
        })

        const idle3 = Animation.fromSpriteSheet(goblin3SpriteSheet, [0], 200);
        this.graphics.add('idle3', idle3);

        const goblin4SpriteSheet = SpriteSheet.fromImageSource({
            image: images.goblin4,
            grid: {
            columns: 2,
            rows: 2,
            spriteWidth: 128,
            spriteHeight: 64,
            },
        })

        const idle4 = Animation.fromSpriteSheet(goblin4SpriteSheet, [0], 200);
        this.graphics.add('idle4', idle4);

        const goblin5SpriteSheet = SpriteSheet.fromImageSource({
            image: images.goblin5,
            grid: {
            columns: 2,
            rows: 2,
            spriteWidth: 128,
            spriteHeight: 64,
            },
        })

        const idle5 = Animation.fromSpriteSheet(goblin5SpriteSheet, [0], 200);
        this.graphics.add('idle5', idle5);

        const goblin6SpriteSheet = SpriteSheet.fromImageSource({
            image: images.goblin6,
            grid: {
            columns: 2,
            rows: 2,
            spriteWidth: 128,
            spriteHeight: 64,
            },
        })

        const idle6 = Animation.fromSpriteSheet(goblin6SpriteSheet, [0], 200);
        this.graphics.add('idle6', idle6);

        const goblin7SpriteSheet = SpriteSheet.fromImageSource({
            image: images.goblin7,
            grid: {
            columns: 2,
            rows: 2,
            spriteWidth: 128,
            spriteHeight: 64,
            },
        })
        

        const idle7 = Animation.fromSpriteSheet(goblin7SpriteSheet, [0], 200);
        this.graphics.add('idle7', idle7);

        const goblinRunning1SpriteSheet = SpriteSheet.fromImageSource({
            image: images.goblinRunnung1,
            grid: {
            columns: 2,
            rows: 2,
            spriteWidth: 128,
            spriteHeight: 64,
            },
        })
        

        const idleRunning1 = Animation.fromSpriteSheet(goblinRunning1SpriteSheet, [0], 200);
        this.graphics.add('idleRunning1', idleRunning1);

        const goblinRunning2SpriteSheet = SpriteSheet.fromImageSource({
            image: images.goblinRunnung2,
            grid: {
            columns: 2,
            rows: 2,
            spriteWidth: 128,
            spriteHeight: 64,
            },
        })
        

        const idleRunning2 = Animation.fromSpriteSheet(goblinRunning2SpriteSheet, [0], 200);
        this.graphics.add('idleRunning2', idleRunning2);


        const goblinRunning3SpriteSheet = SpriteSheet.fromImageSource({
            image: images.goblinRunnung3,
            grid: {
            columns: 2,
            rows: 2,
            spriteWidth: 128,
            spriteHeight: 64,
            },
        })
        

        const idleRunning3 = Animation.fromSpriteSheet(goblinRunning3SpriteSheet, [0], 200);
        this.graphics.add('idleRunning3', idleRunning3);

        const goblinRunning4SpriteSheet = SpriteSheet.fromImageSource({
            image: images.goblinRunnung4,
            grid: {
            columns: 2,
            rows: 2,
            spriteWidth: 128,
            spriteHeight: 64,
            },
        })
        

        const idleRunning4 = Animation.fromSpriteSheet(goblinRunning4SpriteSheet, [0], 200);
        this.graphics.add('idleRunning4', idleRunning4);

        const goblinRunning5SpriteSheet = SpriteSheet.fromImageSource({
            image: images.goblinRunnung5,
            grid: {
            columns: 2,
            rows: 2,
            spriteWidth: 128,
            spriteHeight: 64,
            },
        })
        

        const idleRunning5 = Animation.fromSpriteSheet(goblinRunning5SpriteSheet, [0], 200);
        this.graphics.add('idleRunning5', idleRunning5);

        const goblinRunning6SpriteSheet = SpriteSheet.fromImageSource({
            image: images.goblinRunnung6,
            grid: {
            columns: 2,
            rows: 2,
            spriteWidth: 128,
            spriteHeight: 64,
            },
        })
        

        const idleRunning6 = Animation.fromSpriteSheet(goblinRunning6SpriteSheet, [0], 200);
        this.graphics.add('idleRunning6', idleRunning6);


        const goblinRunning7SpriteSheet = SpriteSheet.fromImageSource({
            image: images.goblinRunnung7,
            grid: {
            columns: 2,
            rows: 2,
            spriteWidth: 128,
            spriteHeight: 64,
            },
        })
        

        const idleRunning7 = Animation.fromSpriteSheet(goblinRunning7SpriteSheet, [0], 200);
        this.graphics.add('idleRunning7', idleRunning7);

        const goblinRunning8SpriteSheet = SpriteSheet.fromImageSource({
            image: images.goblinRunnung8,
            grid: {
            columns: 2,
            rows: 2,
            spriteWidth: 128,
            spriteHeight: 64,
            },
        })
        

        const idleRunning8 = Animation.fromSpriteSheet(goblinRunning8SpriteSheet, [0], 200);
        this.graphics.add('idleRunning8', idleRunning8)

        const goblinDeath1SpriteSheet = SpriteSheet.fromImageSource({
            image: images.goblinDeath1,
            grid: {
            columns: 2,
            rows: 2,
            spriteWidth: 128,
            spriteHeight: 64,
            },
        })
        

        const idleDeath1 = Animation.fromSpriteSheet(goblinDeath1SpriteSheet, [0], 200);
        this.graphics.add('idleDeath1', idleDeath1);

        const goblinDeath2SpriteSheet = SpriteSheet.fromImageSource({
            image: images.goblinDeath2,
            grid: {
            columns: 2,
            rows: 2,
            spriteWidth: 128,
            spriteHeight: 64,
            },
        })
        

        const idleDeath2 = Animation.fromSpriteSheet(goblinDeath2SpriteSheet, [0], 200);
        this.graphics.add('idleDeath2', idleDeath2);

        const goblinDeath3SpriteSheet = SpriteSheet.fromImageSource({
            image: images.goblinDeath3,
            grid: {
            columns: 2,
            rows: 2,
            spriteWidth: 128,
            spriteHeight: 64,
            },
        })
        

        const idleDeath3 = Animation.fromSpriteSheet(goblinDeath3SpriteSheet, [0], 200);
        this.graphics.add('idleDeath3', idleDeath3);

        const goblinDeath4SpriteSheet = SpriteSheet.fromImageSource({
            image: images.goblinDeath4,
            grid: {
            columns: 2,
            rows: 2,
            spriteWidth: 128,
            spriteHeight: 64,
            },
        })
        

        const idleDeath4 = Animation.fromSpriteSheet(goblinDeath4SpriteSheet, [0], 200);
        this.graphics.add('idleDeath4', idleDeath4);

        const goblinDeath5SpriteSheet = SpriteSheet.fromImageSource({
            image: images.goblinDeath5,
            grid: {
            columns: 2,
            rows: 2,
            spriteWidth: 128,
            spriteHeight: 64,
            },
        })
        

        const idleDeath5 = Animation.fromSpriteSheet(goblinDeath5SpriteSheet, [0], 200);
        this.graphics.add('idleDeath5', idleDeath5);


        const goblinDeath6SpriteSheet = SpriteSheet.fromImageSource({
            image: images.goblinDeath6,
            grid: {
            columns: 2,
            rows: 2,
            spriteWidth: 128,
            spriteHeight: 64,
            },
        })
        

        const idleDeath6 = Animation.fromSpriteSheet(goblinDeath6SpriteSheet, [0], 200);
        this.graphics.add('idleDeath6', idleDeath6);

        const goblinDeath7SpriteSheet = SpriteSheet.fromImageSource({
            image: images.goblinDeath7,
            grid: {
            columns: 2,
            rows: 2,
            spriteWidth: 128,
            spriteHeight: 64,
            },
        })
        

        const idleDeath7 = Animation.fromSpriteSheet(goblinDeath7SpriteSheet, [0], 200);
        this.graphics.add('idleDeath7', idleDeath7);

        const goblinDeath8SpriteSheet = SpriteSheet.fromImageSource({
            image: images.goblinDeath8,
            grid: {
            columns: 2,
            rows: 2,
            spriteWidth: 128,
            spriteHeight: 64,
            },
        })
        

        const idleDeath8 = Animation.fromSpriteSheet(goblinDeath8SpriteSheet, [0], 200);
        this.graphics.add('idleDeath8', idleDeath8);

        const goblinDeath9SpriteSheet = SpriteSheet.fromImageSource({
            image: images.goblinDeath9,
            grid: {
            columns: 2,
            rows: 2,
            spriteWidth: 128,
            spriteHeight: 64,
            },
        })
        

        const idleDeath9 = Animation.fromSpriteSheet(goblinDeath9SpriteSheet, [0], 200);
        this.graphics.add('idleDeath9', idleDeath9);

        const goblinDeath10SpriteSheet = SpriteSheet.fromImageSource({
            image: images.goblinDeath10,
            grid: {
            columns: 2,
            rows: 2,
            spriteWidth: 128,
            spriteHeight: 64,
            },
        })
        

        const idleDeath10 = Animation.fromSpriteSheet(goblinDeath10SpriteSheet, [0], 200);
        this.graphics.add('idleDeath10', idleDeath10);




        const mainIdle = new Animation({
            frames: [
                {graphic: this.graphics.getGraphic('idle1'), duration: 200},
                {graphic: this.graphics.getGraphic('idle2'), duration: 200},
                {graphic: this.graphics.getGraphic('idle3'), duration: 200},
                {graphic: this.graphics.getGraphic('idle4'), duration: 200},
                {graphic: this.graphics.getGraphic('idle5'), duration: 200},
                {graphic: this.graphics.getGraphic('idle6'), duration: 200},
                {graphic: this.graphics.getGraphic('idle7'), duration: 200},
              ]
        })
        
       
        this.graphics.add('mainIdle', mainIdle);

        const runningIdle = new Animation({
            frames: [
                {graphic: this.graphics.getGraphic('idleRunning1'), duration: 200},
                {graphic: this.graphics.getGraphic('idleRunning2'), duration: 200},
                {graphic: this.graphics.getGraphic('idleRunning3'), duration: 200},
                {graphic: this.graphics.getGraphic('idleRunning4'), duration: 200},
                {graphic: this.graphics.getGraphic('idleRunning5'), duration: 200},
                {graphic: this.graphics.getGraphic('idleRunning6'), duration: 200},
                {graphic: this.graphics.getGraphic('idleRunning7'), duration: 200},
                {graphic: this.graphics.getGraphic('idleRunning8'), duration: 200},
              ]
        })

        this.graphics.add('runningIdle', runningIdle);

        const mainIdleLeft = new Animation({
            frames: [
                {graphic: this.graphics.getGraphic('idle1'), duration: 200},
                {graphic: this.graphics.getGraphic('idle2'), duration: 200},
                {graphic: this.graphics.getGraphic('idle3'), duration: 200},
                {graphic: this.graphics.getGraphic('idle4'), duration: 200},
                {graphic: this.graphics.getGraphic('idle5'), duration: 200},
                {graphic: this.graphics.getGraphic('idle6'), duration: 200},
                {graphic: this.graphics.getGraphic('idle7'), duration: 200},
              ]
        })

        mainIdleLeft.flipHorizontal = true
        this.graphics.add('mainIdleLeft', mainIdleLeft);

        const runningIdleLeft = new Animation({
            frames: [
                {graphic: this.graphics.getGraphic('idleRunning1'), duration: 200},
                {graphic: this.graphics.getGraphic('idleRunning2'), duration: 200},
                {graphic: this.graphics.getGraphic('idleRunning3'), duration: 200},
                {graphic: this.graphics.getGraphic('idleRunning4'), duration: 200},
                {graphic: this.graphics.getGraphic('idleRunning5'), duration: 200},
                {graphic: this.graphics.getGraphic('idleRunning6'), duration: 200},
                {graphic: this.graphics.getGraphic('idleRunning7'), duration: 200},
                {graphic: this.graphics.getGraphic('idleRunning8'), duration: 200},
              ]
        })
        runningIdleLeft.flipHorizontal = true

        this.graphics.add('runningIdleLeft', runningIdleLeft);
        
        const deathIdle = new Animation({
            frames: [
                {graphic: this.graphics.getGraphic('idleDeath1'), duration: 200},
                {graphic: this.graphics.getGraphic('idleDeath2'), duration: 200},
                {graphic: this.graphics.getGraphic('idleDeath3'), duration: 200},
                {graphic: this.graphics.getGraphic('idleDeath4'), duration: 200},
                {graphic: this.graphics.getGraphic('idleDeath5'), duration: 200},
                {graphic: this.graphics.getGraphic('idleDeath6'), duration: 200},
                {graphic: this.graphics.getGraphic('idleDeath7'), duration: 200},
                {graphic: this.graphics.getGraphic('idleDeath8'), duration: 200},
                {graphic: this.graphics.getGraphic('idleDeath9'), duration: 200},
                {graphic: this.graphics.getGraphic('idleDeath10'), duration: 200},
              ]
        })
        
        this.graphics.add('deathIdle', deathIdle);

        const deathIdleLeft = new Animation({
            frames: [
                {graphic: this.graphics.getGraphic('idleDeath1'), duration: 200},
                {graphic: this.graphics.getGraphic('idleDeath2'), duration: 200},
                {graphic: this.graphics.getGraphic('idleDeath3'), duration: 200},
                {graphic: this.graphics.getGraphic('idleDeath4'), duration: 200},
                {graphic: this.graphics.getGraphic('idleDeath5'), duration: 200},
                {graphic: this.graphics.getGraphic('idleDeath6'), duration: 200},
                {graphic: this.graphics.getGraphic('idleDeath7'), duration: 200},
                {graphic: this.graphics.getGraphic('idleDeath8'), duration: 200},
                {graphic: this.graphics.getGraphic('idleDeath9'), duration: 200},
                {graphic: this.graphics.getGraphic('idleDeath10'), duration: 200},
              ]
        })

        deathIdleLeft.flipHorizontal = true

        this.graphics.add('deathIdleLeft', deathIdleLeft);
    }

    onInitialize(_engine: Engine): void {
        this.addTag('goblin')
        this.graphics.use('mainIdle')
    }

    onPreUpdate(engine: Engine, delta: number): void {
        const warrior = this.scene?.world.queryManager.createTagQuery(['warrior']).getEntities()[0]

        if(warrior){
            //@ts-expect-error
            const ad = warrior?.pos.sub(this.pos)
    
            this.vel = ad?.normalize().scale(vec(150, 150))
            console.log("🚀 ~ Goblin ~ onPreUpdate ~ this.vel:", this.vel)

            if(this.vel.x < 0) {
                this.graphics.use('runningIdleLeft')
            }else{
                this.graphics.use('runningIdle')
            }
        }
    }

    onCollisionStart(self: Collider, other: Collider, side: Side, contact: CollisionContact): void {
        if(other.owner.hasTag('warrior')){
            this.graphics.use('idle2')
        }

        if(other.owner.hasTag('ball')){
           this.hp -= 1
        }
    }

    onCollisionEnd(self: Collider, other: Collider, side: Side, lastContact: CollisionContact): void {
        if(this.hp <= 0){
            this.kill()
        }
    }

    onPreKill(scene: Scene<unknown>): void {
        this.graphics.use('deathIdle')
    }
}