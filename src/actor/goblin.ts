import { Actor, CollisionType, Color, SpriteSheet, Animation, Engine, vec } from "excalibur";
import { images } from "../resources";

export class Goblin extends Actor{
    constructor(x: number, y: number){
        super({
            x,
            y,
            collisionType: CollisionType.Passive,
            width: 50,
            height: 50,
            color: Color.Green
        })

        const player1SpriteSheet = SpriteSheet.fromImageSource({
            image: images.goblin,
            grid: {
            columns: 7,
            rows: 5,
            spriteWidth: 160,
            spriteHeight: 160,
            },
        })

        const idle1 = Animation.fromSpriteSheet(player1SpriteSheet, [0], 200);
        const idle2 = Animation.fromSpriteSheet(player1SpriteSheet, [1], 200);
        // const idle3 = Animation.fromSpriteSheet(player1SpriteSheet, [2], 200);
        // const idle4 = Animation.fromSpriteSheet(player1SpriteSheet, [3], 200);
        // const idle5 = Animation.fromSpriteSheet(player1SpriteSheet, [4], 200);
        // const idle6 = Animation.fromSpriteSheet(player1SpriteSheet, [5], 200);
        this.graphics.add('idle1', idle1);
        this.graphics.add('idle2', idle2);
        // this.graphics.add('idle3', idle3);
        // this.graphics.add('idle4', idle4);
        // this.graphics.add('idle5', idle5);
        // this.graphics.add('idle6', idle6);
    }

    onInitialize(_engine: Engine): void {
        this.addTag('goblin')
        this.graphics.use('idle1')
    }

    onPreUpdate(engine: Engine, delta: number): void {
        const warrior = this.scene?.world.queryManager.createTagQuery(['warrior']).getEntities()[0]

        if(warrior){
            //@ts-expect-error
            const ad = warrior?.pos.sub(this.pos)
    
            this.vel = ad?.normalize().scale(vec(150, 150))
        }
    }
}