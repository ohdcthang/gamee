import { Actor, Animation, CollisionType, Color, Engine, Input, Side, SpriteSheet, Vector } from "excalibur";
import { DirectionQueue } from "../classes";
import { images } from "../resources";
import { Balls } from "./ball";

export class Warrior extends Actor{
    spriteDirection: string | undefined
    directionQueue: DirectionQueue
    runningAnimationFramesMs = 0

    idle: Animation | undefined
    idleLeft: Animation | undefined
    idleJump: Animation | undefined


    constructor(x: number, y: number){
        super({
            x,
            y,
            width: 100,
            height: 100,
            scale: new Vector(1.5,1.5),
            collisionType: CollisionType.Active,
            color: Color.Green
        })

        this.directionQueue = new DirectionQueue()
        this.on("postcollision", (evt) => this.onPostCollision(evt));
    }
    

    onInitialize(_engine: Engine): void {
        this.addTag('warrior')
        const player1SpriteSheet = SpriteSheet.fromImageSource({
            image: images.ide1,
            grid: {
            columns: 1,
            rows: 2,
            spriteWidth: 64,
            spriteHeight: 64,
            },
        })

        const idle1 = Animation.fromSpriteSheet(player1SpriteSheet, [0], 200);
        this.graphics.add('idle1', idle1);

        const idle1Left = Animation.fromSpriteSheet(player1SpriteSheet, [0], 200);
        idle1Left.flipHorizontal = true
        this.graphics.add('idle1Left', idle1Left)

        const player2SpriteSheet = SpriteSheet.fromImageSource({
            image: images.ide2,
            grid: {
            columns: 1,
            rows: 2,
            spriteWidth: 64,
            spriteHeight: 64,
            },
        })

        const idle2 = Animation.fromSpriteSheet(player2SpriteSheet, [0], 200);
        this.graphics.add('idle2', idle2);

        const idle2Left = Animation.fromSpriteSheet(player2SpriteSheet, [0], 200);
        idle2Left.flipHorizontal = true
        this.graphics.add('idle2Left', idle2Left)

        const player3SpriteSheet = SpriteSheet.fromImageSource({
            image: images.ide3,
            grid: {
            columns: 1,
            rows: 2,
            spriteWidth: 64,
            spriteHeight: 64,
            },
        })

        const idle3 = Animation.fromSpriteSheet(player3SpriteSheet, [0], 200);
        this.graphics.add('idle3', idle3);

        const idle3Left = Animation.fromSpriteSheet(player3SpriteSheet, [0], 200);
        idle3Left.flipHorizontal = true
        this.graphics.add('idle3Left', idle3Left)

        const player4SpriteSheet = SpriteSheet.fromImageSource({
            image: images.ide4,
            grid: {
            columns: 1,
            rows: 2,
            spriteWidth: 64,
            spriteHeight: 64,
            },
        })

        const idle4 = Animation.fromSpriteSheet(player4SpriteSheet, [0], 200);
        this.graphics.add('idle4', idle4);

        const idle4Left = Animation.fromSpriteSheet(player4SpriteSheet, [0], 200);
        idle4Left.flipHorizontal = true
        this.graphics.add('idle4Left', idle4Left)


        const player5SpriteSheet = SpriteSheet.fromImageSource({
            image: images.ide5,
            grid: {
            columns: 1,
            rows: 2,
            spriteWidth: 64,
            spriteHeight: 64,
            },
        })

        const idle5 = Animation.fromSpriteSheet(player5SpriteSheet, [0], 200);
        this.graphics.add('idle5', idle5);

        const idle5Left = Animation.fromSpriteSheet(player5SpriteSheet, [0], 200);
        idle5Left.flipHorizontal = true
        this.graphics.add('idle5Left', idle5Left)

        const player6SpriteSheet = SpriteSheet.fromImageSource({
            image: images.ide6,
            grid: {
            columns: 1,
            rows: 2,
            spriteWidth: 64,
            spriteHeight: 64,
            },
        })

        const idle6 = Animation.fromSpriteSheet(player6SpriteSheet, [0], 200);
        this.graphics.add('idle6', idle6);

        const idle6Left = Animation.fromSpriteSheet(player6SpriteSheet, [0], 200);
        idle6Left.flipHorizontal = true
        this.graphics.add('idle6Left', idle6Left)

        const player7SpriteSheet = SpriteSheet.fromImageSource({
            image: images.ide7,
            grid: {
            columns: 1,
            rows: 2,
            spriteWidth: 64,
            spriteHeight: 64,
            },
        })

        const idle7 = Animation.fromSpriteSheet(player7SpriteSheet, [0], 200);
        this.graphics.add('idle7', idle7);

        const idle7Left = Animation.fromSpriteSheet(player7SpriteSheet, [0], 200);
        idle7Left.flipHorizontal = true
        this.graphics.add('idle7Left', idle7Left)

        const player8SpriteSheet = SpriteSheet.fromImageSource({
            image: images.ide8,
            grid: {
            columns: 1,
            rows: 2,
            spriteWidth: 64,
            spriteHeight: 64,
            },
        })

        const idle8 = Animation.fromSpriteSheet(player8SpriteSheet, [0], 200);
        this.graphics.add('idle8', idle8);

        const idle8Left = Animation.fromSpriteSheet(player8SpriteSheet, [0], 200);
        idle8Left.flipHorizontal = true
        this.graphics.add('idle8Left', idle8Left)

        const player9SpriteSheet = SpriteSheet.fromImageSource({
            image: images.ide9,
            grid: {
            columns: 1,
            rows: 2,
            spriteWidth: 64,
            spriteHeight: 64,
            },
        })

        const idle9 = Animation.fromSpriteSheet(player9SpriteSheet, [0], 200);
        this.graphics.add('idle9', idle9);

        const idle9Left = Animation.fromSpriteSheet(player9SpriteSheet, [0], 200);
        idle9Left.flipHorizontal = true
        this.graphics.add('idle9Left', idle9Left)

        const playerMove1SpriteSheet = SpriteSheet.fromImageSource({
            image: images.move1,
            grid: {
            columns: 1,
            rows: 2,
            spriteWidth: 64,
            spriteHeight: 64,
            },
        })

        const idleMove1 = Animation.fromSpriteSheet(playerMove1SpriteSheet, [0], 200);
        this.graphics.add('idleMove1', idleMove1);

        const idleMove1Left = Animation.fromSpriteSheet(playerMove1SpriteSheet, [0], 200);
        idleMove1Left.flipHorizontal = true
        this.graphics.add('idleMove1Left', idleMove1Left)

        const playerMove2SpriteSheet = SpriteSheet.fromImageSource({
            image: images.move2,
            grid: {
            columns: 1,
            rows: 2,
            spriteWidth: 64,
            spriteHeight: 64,
            },
        })

        const idleMove2 = Animation.fromSpriteSheet(playerMove2SpriteSheet, [0], 200);
        this.graphics.add('idleMove2', idleMove2);

        const idleMove2Left = Animation.fromSpriteSheet(playerMove2SpriteSheet, [0], 200);
        idleMove2Left.flipHorizontal = true
        this.graphics.add('idleMove2Left', idleMove2Left)

        const playerMove3SpriteSheet = SpriteSheet.fromImageSource({
            image: images.move3,
            grid: {
            columns: 1,
            rows: 2,
            spriteWidth: 64,
            spriteHeight: 64,
            },
        })

        const idleMove3 = Animation.fromSpriteSheet(playerMove3SpriteSheet, [0], 200);
        this.graphics.add('idleMove3', idleMove3);

        const idleMove3Left = Animation.fromSpriteSheet(playerMove3SpriteSheet, [0], 200);
        idleMove3Left.flipHorizontal = true
        this.graphics.add('idleMove3Left', idleMove3Left)

        const playerMove4SpriteSheet = SpriteSheet.fromImageSource({
            image: images.move4,
            grid: {
            columns: 1,
            rows: 2,
            spriteWidth: 64,
            spriteHeight: 64,
            },
        })

        const idleMove4 = Animation.fromSpriteSheet(playerMove4SpriteSheet, [0], 200);
        this.graphics.add('idleMove4', idleMove4);

        const idleMove4Left = Animation.fromSpriteSheet(playerMove4SpriteSheet, [0], 200);
        idleMove4Left.flipHorizontal = true
        this.graphics.add('idleMove4Left', idleMove4Left)

        const playerMove5SpriteSheet = SpriteSheet.fromImageSource({
            image: images.move5,
            grid: {
            columns: 1,
            rows: 2,
            spriteWidth: 64,
            spriteHeight: 64,
            },
        })

        const idleMove5 = Animation.fromSpriteSheet(playerMove5SpriteSheet, [0], 200);
        this.graphics.add('idleMove5', idleMove5);

        const idleMove5Left = Animation.fromSpriteSheet(playerMove5SpriteSheet, [0], 200);
        idleMove5Left.flipHorizontal = true
        this.graphics.add('idleMove5Left', idleMove5Left)

        const playerMove6SpriteSheet = SpriteSheet.fromImageSource({
            image: images.move6,
            grid: {
            columns: 1,
            rows: 2,
            spriteWidth: 64,
            spriteHeight: 64,
            },
        })

        const idleMove6 = Animation.fromSpriteSheet(playerMove6SpriteSheet, [0], 200);
        this.graphics.add('idleMove6', idleMove6);

        const idleMove6Left = Animation.fromSpriteSheet(playerMove6SpriteSheet, [0], 200);
        idleMove6Left.flipHorizontal = true
        this.graphics.add('idleMove6Left', idleMove6Left)

        const playerMove7SpriteSheet = SpriteSheet.fromImageSource({
            image: images.move7,
            grid: {
            columns: 1,
            rows: 2,
            spriteWidth: 64,
            spriteHeight: 64,
            },
        })

        const idleMove7 = Animation.fromSpriteSheet(playerMove7SpriteSheet, [0], 200);
        this.graphics.add('idleMove7', idleMove7);

        const idleMove7Left = Animation.fromSpriteSheet(playerMove7SpriteSheet, [0], 200);
        idleMove7Left.flipHorizontal = true
        this.graphics.add('idleMove7Left', idleMove7Left)

        const playerMove8SpriteSheet = SpriteSheet.fromImageSource({
            image: images.move8,
            grid: {
            columns: 1,
            rows: 2,
            spriteWidth: 64,
            spriteHeight: 64,
            },
        })

        const idleMove8 = Animation.fromSpriteSheet(playerMove8SpriteSheet, [0], 200);
        this.graphics.add('idleMove8', idleMove8);

        const idleMove8Left = Animation.fromSpriteSheet(playerMove8SpriteSheet, [0], 200);
        idleMove8Left.flipHorizontal = true
        this.graphics.add('idleMove8Left', idleMove8Left)

        const moveRightIdle = new Animation({
            frames: [
                {graphic: this.graphics.getGraphic('idleMove1'), duration: 200},
                {graphic: this.graphics.getGraphic('idleMove2'), duration: 200},
                {graphic: this.graphics.getGraphic('idleMove3'), duration: 200},
                {graphic: this.graphics.getGraphic('idleMove4'), duration: 200},
                {graphic: this.graphics.getGraphic('idleMove5'), duration: 200},
                {graphic: this.graphics.getGraphic('idleMove6'), duration: 200},
                {graphic: this.graphics.getGraphic('idleMove7'), duration: 200},
                {graphic: this.graphics.getGraphic('idleMove8'), duration: 200},
              ]
        })

        this.graphics.add('moveRightIdle', moveRightIdle)

        const moveLefttIdle = new Animation({
            frames: [
                {graphic: this.graphics.getGraphic('idleMove1Left'), duration: 200},
                {graphic: this.graphics.getGraphic('idleMove2Left'), duration: 200},
                {graphic: this.graphics.getGraphic('idleMove3Left'), duration: 200},
                {graphic: this.graphics.getGraphic('idleMove4Left'), duration: 200},
                {graphic: this.graphics.getGraphic('idleMove5Left'), duration: 200},
                {graphic: this.graphics.getGraphic('idleMove6Left'), duration: 200},
                {graphic: this.graphics.getGraphic('idleMove7Left'), duration: 200},
                {graphic: this.graphics.getGraphic('idleMove8Left'), duration: 200},
              ]
        })

        this.graphics.add('moveLefttIdle', moveLefttIdle)

        const rightIdle = new Animation({
            frames: [
                {graphic: this.graphics.getGraphic('idle1'), duration: 200},
                {graphic: this.graphics.getGraphic('idle2'), duration: 200},
                {graphic: this.graphics.getGraphic('idle3'), duration: 200},
                {graphic: this.graphics.getGraphic('idle4'), duration: 200},
                {graphic: this.graphics.getGraphic('idle5'), duration: 200},
                {graphic: this.graphics.getGraphic('idle6'), duration: 200},
                {graphic: this.graphics.getGraphic('idle7'), duration: 200},
                {graphic: this.graphics.getGraphic('idle8'), duration: 200},
                {graphic: this.graphics.getGraphic('idle9'), duration: 200},
              ]
        })

        this.graphics.add('rightIdle', rightIdle)
        // this.graphics.use('rightIdle')


        const leftIdle = new Animation({
            frames: [
              {graphic: this.graphics.getGraphic('idle1Left'), duration: 200},
              {graphic: this.graphics.getGraphic('idle2Left'), duration: 200},
              {graphic: this.graphics.getGraphic('idle3Left'), duration: 200},
              {graphic: this.graphics.getGraphic('idle4Left'), duration: 200},
              {graphic: this.graphics.getGraphic('idle5Left'), duration: 200},
              {graphic: this.graphics.getGraphic('idle6Left'), duration: 200},
              {graphic: this.graphics.getGraphic('idle7Left'), duration: 200},
              {graphic: this.graphics.getGraphic('idle8Left'), duration: 200},
              {graphic: this.graphics.getGraphic('idle9Left'), duration: 200},
             
            ]
        })

        this.graphics.add('leftIdle', leftIdle)

        const playerJump1SpriteSheet = SpriteSheet.fromImageSource({
            image: images.jump1,
            grid: {
            columns: 1,
            rows: 2,
            spriteWidth: 64,
            spriteHeight: 64,
            },
        })

        const playerJump1LeftSpriteSheet = SpriteSheet.fromImageSource({
            image: images.jump1,
            grid: {
            columns: 1,
            rows: 2,
            spriteWidth: 64,
            spriteHeight: 64,
            },
        })

        const jump1Left = Animation.fromSpriteSheet(playerJump1LeftSpriteSheet, [0], 200);
        jump1Left.flipHorizontal = true

        this.graphics.add('jump1Left', jump1Left)

        const playerJump2LeftSpriteSheet = SpriteSheet.fromImageSource({
            image: images.jump2,
            grid: {
            columns: 1,
            rows: 2,
            spriteWidth: 64,
            spriteHeight: 64,
            },
        })

        const jump2Left = Animation.fromSpriteSheet(playerJump2LeftSpriteSheet, [0], 200);
        jump2Left.flipHorizontal = true

        this.graphics.add('jump2Left', jump2Left)


        const playerJump3LeftSpriteSheet = SpriteSheet.fromImageSource({
            image: images.jump3,
            grid: {
            columns: 1,
            rows: 2,
            spriteWidth: 64,
            spriteHeight: 64,
            },
        })

        const jump3Left = Animation.fromSpriteSheet(playerJump3LeftSpriteSheet, [0], 200);
        jump3Left.flipHorizontal = true

        this.graphics.add('jump3Left', jump3Left)


        const playerJump2SpriteSheet = SpriteSheet.fromImageSource({
            image: images.jump2,
            grid: {
            columns: 1,
            rows: 2,
            spriteWidth: 64,
            spriteHeight: 64,
            },
        }) 
        
        const playerJump3SpriteSheet = SpriteSheet.fromImageSource({
            image: images.jump3,
            grid: {
            columns: 1,
            rows: 2,
            spriteWidth: 64,
            spriteHeight: 64,
            },
        })

        const jump = new Animation({
            frames: [
              {graphic: playerJump1SpriteSheet.getSprite(0, 0) as ex.Sprite, duration: 200},
              {graphic: playerJump2SpriteSheet.getSprite(0, 0) as ex.Sprite, duration: 200},
              {graphic: playerJump3SpriteSheet.getSprite(0, 0) as ex.Sprite, duration: 200},
            ]
        })

        this.graphics.add('jump', jump)

        const jumpLeft = new Animation({
            frames: [
                {graphic: this.graphics.getGraphic('jump1Left'), duration: 200},
                {graphic: this.graphics.getGraphic('jump2Left'), duration: 200},
                {graphic: this.graphics.getGraphic('jump3Left'), duration: 200},
            ]
        })

        this.graphics.add('jumpLeft', jumpLeft)
    }   

    onPreUpdate(engine: Engine, delta: number): void {
        this.onPreUpdatePhysics(engine, delta)
        this.onPreUpdateAnimation()
    }

    onPreUpdatePhysics(engine: Engine, delta: number){
        const keyboards = engine.input.keyboard
        const keys = Input.Keys

        // const jumpKey = keys.W

        this.vel.x = 0
        // this.vel.y = 0

        // if(this.vel.y !== 0 ){
        //     this.onGround = false
        // }

        // if(isJump && keyboards.wasPressed(jumpKey)){
        //     this.vel.y = -700
        // }

        // if(keyboards.wasReleased(jumpKey) && this.vel.y < 0){
        //     this.vel.y = 0
        // }

        if(keyboards.wasPressed(keys.W)){
            this.vel.y = -300
        }

        if(keyboards.wasReleased(keys.W)){
            this.vel.y = 0
        }

        if(keyboards.wasPressed(keys.S)){
            this.vel.y = 300
        }

        if(keyboards.wasReleased(keys.S)){
            this.vel.y = 0
        }

      

        // if(keyboards.wasPressed(keys.Space)){
            let x = this.pos.x - 30

            if( this.spriteDirection !== 'LEFT'){
                x = this.pos.x + 30
            }

            const ball = new Balls(x, this.pos.y -20, this.spriteDirection || 'INIT')
            engine.add(ball)
        // }

        const keyDirection =[
            {
                key: keys.D,
                dir: 'RIGHT'
            },
            {
                key: keys.A,
                dir: 'LEFT'
            },
        ]

        keyDirection.forEach((dir) => {
            if(keyboards.wasPressed(dir.key)){
                this.directionQueue.add(dir.dir)
            }

            if(keyboards.wasReleased(dir.key)){
                this.directionQueue.remove(dir.dir)
            }
        })

        const dir = this.directionQueue.direction

        this.spriteDirection = dir ?? this.spriteDirection;

        if(dir){
            this.vel.x = dir === 'LEFT' ? -300 : 300
        }

        if (this.vel.x !== 0) {
            // this.runningAnimationFramesMs -= delta;
            // if (this.runningAnimationFramesMs <= 0) {
            //   this.runningAnimationFramesMs = 560;
            // }
        }

      
    
    }

    onPreUpdateAnimation(){
        //true -> right
        let direction = this.spriteDirection === 'LEFT' ? false : true;
        // if(!this.onGround){
        //     this.graphics.use( direction ?  "jump" : "jumpLeft")
        //     return;
        // }


        if (this.vel.x !== 0) {
            this.graphics.use(this.graphics.getGraphic(direction ?  "moveRightIdle" : "moveLefttIdle")!);
            return;
          }

        this.graphics.use(direction ? 'rightIdle' : 'leftIdle')
    }

    onPostCollision(_evt: any) {
       
    }
}