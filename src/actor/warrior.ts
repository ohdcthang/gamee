import { Actor, Animation, CollisionType, Color, Engine, Input, Side, SpriteSheet, vec, Vector } from "excalibur";
import { DirectionQueue } from "../classes";
import { images } from "../resources";
import { Balls } from "./ball";
import { Susano } from "./Susano";
import { SusanoGrand } from "./SusanoGrand";
import { WarriorComboaTk } from "./warriorComboAtk";

export class Warrior extends Actor{
    spriteDirection: string | undefined
    directionQueue: DirectionQueue
    runningAnimationFramesMs = 0

    idle: Animation | undefined
    idleLeft: Animation | undefined
    idleJump: Animation | undefined


    isCombo: boolean = false

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
                {graphic: this.graphics.getGraphic('idleMove1'), duration: 50},
                {graphic: this.graphics.getGraphic('idleMove2'), duration: 50},
                {graphic: this.graphics.getGraphic('idleMove3'), duration: 50},
                {graphic: this.graphics.getGraphic('idleMove4'), duration: 50},
                {graphic: this.graphics.getGraphic('idleMove5'), duration: 50},
                {graphic: this.graphics.getGraphic('idleMove6'), duration: 50},
                {graphic: this.graphics.getGraphic('idleMove7'), duration: 50},
                {graphic: this.graphics.getGraphic('idleMove8'), duration: 50},
              ]
        })

        this.graphics.add('moveRightIdle', moveRightIdle)

        const moveLefttIdle = new Animation({
            frames: [
                {graphic: this.graphics.getGraphic('idleMove1Left'), duration: 50},
                {graphic: this.graphics.getGraphic('idleMove2Left'), duration: 50},
                {graphic: this.graphics.getGraphic('idleMove3Left'), duration: 50},
                {graphic: this.graphics.getGraphic('idleMove4Left'), duration: 50},
                {graphic: this.graphics.getGraphic('idleMove5Left'), duration: 50},
                {graphic: this.graphics.getGraphic('idleMove6Left'), duration: 50},
                {graphic: this.graphics.getGraphic('idleMove7Left'), duration: 50},
                {graphic: this.graphics.getGraphic('idleMove8Left'), duration: 50},
              ]
        })

        this.graphics.add('moveLefttIdle', moveLefttIdle)

        const rightIdle = new Animation({
            frames: [
                {graphic: this.graphics.getGraphic('idle1'), duration: 50},
                {graphic: this.graphics.getGraphic('idle2'), duration: 50},
                {graphic: this.graphics.getGraphic('idle3'), duration: 50},
                {graphic: this.graphics.getGraphic('idle4'), duration: 50},
                {graphic: this.graphics.getGraphic('idle5'), duration: 50},
                {graphic: this.graphics.getGraphic('idle6'), duration: 50},
                {graphic: this.graphics.getGraphic('idle7'), duration: 50},
                {graphic: this.graphics.getGraphic('idle8'), duration: 50},
                {graphic: this.graphics.getGraphic('idle9'), duration: 50},
              ]
        })

        this.graphics.add('rightIdle', rightIdle)
        // this.graphics.use('rightIdle')


        const leftIdle = new Animation({
            frames: [
              {graphic: this.graphics.getGraphic('idle1Left'), duration: 50},
              {graphic: this.graphics.getGraphic('idle2Left'), duration: 50},
              {graphic: this.graphics.getGraphic('idle3Left'), duration: 50},
              {graphic: this.graphics.getGraphic('idle4Left'), duration: 50},
              {graphic: this.graphics.getGraphic('idle5Left'), duration: 50},
              {graphic: this.graphics.getGraphic('idle6Left'), duration: 50},
              {graphic: this.graphics.getGraphic('idle7Left'), duration: 50},
              {graphic: this.graphics.getGraphic('idle8Left'), duration: 50},
              {graphic: this.graphics.getGraphic('idle9Left'), duration: 50},
             
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
              {graphic: playerJump1SpriteSheet.getSprite(0, 0) as ex.Sprite, duration: 50},
              {graphic: playerJump2SpriteSheet.getSprite(0, 0) as ex.Sprite, duration: 50},
              {graphic: playerJump3SpriteSheet.getSprite(0, 0) as ex.Sprite, duration: 50},
            ]
        })

        this.graphics.add('jump', jump)

        const jumpLeft = new Animation({
            frames: [
                {graphic: this.graphics.getGraphic('jump1Left'), duration: 50},
                {graphic: this.graphics.getGraphic('jump2Left'), duration: 50},
                {graphic: this.graphics.getGraphic('jump3Left'), duration: 50},
            ]
        })

        this.graphics.add('jumpLeft', jumpLeft)

        const combo1SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboDive1,
            grid: {
            columns: 2,
            rows: 4,
            spriteWidth: 256,
            spriteHeight: 256,
            },
        })

        const combo1 = Animation.fromSpriteSheet(combo1SpriteSheet, [0], 200);
        this.graphics.add('combo1', combo1);

        const combo2SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboDive2,
            grid: {
             columns: 2,
            rows: 4,
            spriteWidth: 256,
            spriteHeight: 256,
            },
        })

        const combo2 = Animation.fromSpriteSheet(combo2SpriteSheet, [0], 200);
        this.graphics.add('combo2', combo2);

        const combo3SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboDive3,
            grid: {
             columns: 2,
            rows: 4,
            spriteWidth: 256,
            spriteHeight: 256,
            },
        })

        const combo3 = Animation.fromSpriteSheet(combo3SpriteSheet, [0], 200);
        this.graphics.add('combo3', combo3);

        const combo4SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboDive4,
            grid: {
             columns: 2,
            rows: 4,
            spriteWidth: 256,
            spriteHeight: 256,
            },
        })

        const combo4 = Animation.fromSpriteSheet(combo4SpriteSheet, [0], 200);
        this.graphics.add('combo4', combo4);

        const combo5SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboDive5,
            grid: {
             columns: 2,
            rows: 4,
            spriteWidth: 256,
            spriteHeight: 256,
            },
        })

        const combo5 = Animation.fromSpriteSheet(combo5SpriteSheet, [0], 200);
        this.graphics.add('combo5', combo5);

        const combo6SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboDive6,
            grid: {
             columns: 2,
            rows: 4,
            spriteWidth: 256,
            spriteHeight: 256,
            },
        })

        const combo6 = Animation.fromSpriteSheet(combo6SpriteSheet, [0], 200);
        this.graphics.add('combo6', combo6);

        const combo7SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboDive7,
            grid: {
             columns: 2,
            rows: 4,
            spriteWidth: 256,
            spriteHeight: 256,
            },
        })

        const combo7 = Animation.fromSpriteSheet(combo7SpriteSheet, [0], 200);
        this.graphics.add('combo7', combo7);

        const combo8SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboDive8,
            grid: {
             columns: 2,
            rows: 4,
            spriteWidth: 256,
            spriteHeight: 256,
            },
        })

        const combo8 = Animation.fromSpriteSheet(combo8SpriteSheet, [0], 200);
        this.graphics.add('combo8', combo8);

        const combo9SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboDive9,
            grid: {
             columns: 2,
            rows: 4,
            spriteWidth: 256,
            spriteHeight: 256,
            },
        })

        const combo9 = Animation.fromSpriteSheet(combo9SpriteSheet, [0], 200);
        this.graphics.add('combo9', combo9);

        const combo10SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboDive10,
            grid: {
             columns: 2,
            rows: 4,
            spriteWidth: 256,
            spriteHeight: 256,
            },
        })

        const combo10 = Animation.fromSpriteSheet(combo10SpriteSheet, [0], 200);
        this.graphics.add('combo10', combo10);

        const combo11SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboDive11,
            grid: {
             columns: 2,
            rows: 4,
            spriteWidth: 256,
            spriteHeight: 256,
            },
        })

        const combo11 = Animation.fromSpriteSheet(combo11SpriteSheet, [0], 200);
        this.graphics.add('combo11', combo11);

        const combo12SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboDive12,
            grid: {
             columns: 2,
            rows: 4,
            spriteWidth: 256,
            spriteHeight: 256,
            },
        })

        const combo12 = Animation.fromSpriteSheet(combo12SpriteSheet, [0], 200);
        this.graphics.add('combo12', combo12);

        const combo13SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboDive13,
            grid: {
             columns: 2,
            rows: 4,
            spriteWidth: 256,
            spriteHeight: 256,
            },
        })

        const combo13 = Animation.fromSpriteSheet(combo13SpriteSheet, [0], 200);
        this.graphics.add('combo13', combo13);

        const combo14SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboDive14,
            grid: {
             columns: 2,
            rows: 4,
            spriteWidth: 256,
            spriteHeight: 256,
            },
        })

        const combo14 = Animation.fromSpriteSheet(combo14SpriteSheet, [0], 200);
        this.graphics.add('combo14', combo14);

        const combo15SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboDive15,
            grid: {
             columns: 2,
            rows: 4,
            spriteWidth: 256,
            spriteHeight: 256,
            },
        })

        const combo15 = Animation.fromSpriteSheet(combo15SpriteSheet, [0], 200);
        this.graphics.add('combo15', combo15);

        const combo16SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboDive16,
            grid: {
             columns: 2,
            rows: 4,
            spriteWidth: 256,
            spriteHeight: 256,
            },
        })

        const combo16 = Animation.fromSpriteSheet(combo16SpriteSheet, [0], 200);
        this.graphics.add('combo16', combo16);

        const combo17SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboDive17,
            grid: {
             columns: 2,
            rows: 4,
            spriteWidth: 256,
            spriteHeight: 256,
            },
        })

        const combo17 = Animation.fromSpriteSheet(combo17SpriteSheet, [0], 200);
        this.graphics.add('combo17', combo17);

        const combo18SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboDive18,
            grid: {
             columns: 2,
            rows: 4,
            spriteWidth: 256,
            spriteHeight: 256,
            }
        })

        const combo18 = Animation.fromSpriteSheet(combo18SpriteSheet, [0], 200);
        this.graphics.add('combo18', combo18);

        const combo19SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboDive19,
            grid: {
             columns: 2,
            rows: 4,
            spriteWidth: 256,
            spriteHeight: 256,
            },
        })

        const combo19 = Animation.fromSpriteSheet(combo19SpriteSheet, [0], 200);
        this.graphics.add('combo19', combo19);

        const combo20SpriteSheet = SpriteSheet.fromImageSource({
            image: images.comboDive20,
            grid: {
             columns: 2,
            rows: 4,
            spriteWidth: 256,
            spriteHeight: 256,
            },
        })

        const combo20 = Animation.fromSpriteSheet(combo20SpriteSheet, [0], 200);
        this.graphics.add('combo20', combo20);


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
               
              ]
        })

        this.graphics.add('comboIdle', comboIdle)

        comboIdle.events.on('loop', a => {
            this.isCombo = false
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
              ]
        })

        comboIdleLeft.flipHorizontal = true
        this.graphics.add('comboIdleLeft', comboIdleLeft)

        comboIdleLeft.events.on('loop', a => {
            this.isCombo = false
        })


    }   

    onPreUpdate(engine: Engine, delta: number): void {
        if(this.z > 0){
            this.onPreUpdatePhysics(engine, delta)
            this.onPreUpdateAnimation()
        }
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

      

        if(keyboards.isHeld(keys.Space)){
            let x = this.pos.x - 30

            if( this.spriteDirection !== 'LEFT'){
                x = this.pos.x + 30
            }

            const ball = new Balls(x, this.pos.y -20, this.spriteDirection || 'INIT')
            engine.add(ball)
        }

        if(keyboards.wasPressed(keys.B)){
            this.z = -100
            if(this.spriteDirection === 'LEFT'){
                const comboAtk = new WarriorComboaTk(this.pos.x - 120, this.pos.y -10,  this.spriteDirection || 'INIT')
                engine.add(comboAtk)
            }else{
                const comboAtk = new WarriorComboaTk(this.pos.x + 120, this.pos.y -10,  this.spriteDirection || 'INIT')
                engine.add(comboAtk)
            }
        }

        // if(keyboards.wasPressed(keys.R)){
        //     this.z = -100
        //     if(this.spriteDirection === 'LEFT'){
        //         const comboAtk = new WarriorComboaDive(this.pos.x - 100, this.pos.y +110,  this.spriteDirection || 'INIT')
        //         engine.add(comboAtk)
        //     }else{
        //         const comboAtk = new WarriorComboaDive(this.pos.x + 100, this.pos.y +110,  this.spriteDirection || 'INIT')
        //         engine.add(comboAtk)
        //     }
        // }

        if(keyboards.wasPressed(keys.M)){
            // this.z = -100
            if(this.spriteDirection === 'LEFT'){
                const comboAtk = new Susano(this.pos.x - 100, this.pos.y,  this.spriteDirection || 'INIT')
                engine.add(comboAtk)
            }else{
                const comboAtk = new Susano(this.pos.x + 100, this.pos.y,  this.spriteDirection || 'INIT')
                engine.add(comboAtk)
            }
        }

        if(keyboards.wasPressed(keys.R)){
            // this.z = -100
            if(this.spriteDirection === 'LEFT'){
                this.isCombo = true
                const comboAtk = new SusanoGrand(this.pos.x, this.pos.y,  this.spriteDirection || 'INIT', new Vector(5, 5))
                engine.add(comboAtk)
            }else{
                this.isCombo = true
                const comboAtk = new SusanoGrand(this.pos.x , this.pos.y,  this.spriteDirection || 'INIT', new Vector(5, 5))
                engine.add(comboAtk)
            }
        }

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

        if(this.isCombo){
            this.graphics.use(this.graphics.getGraphic(direction ?  "comboIdle" : "comboIdleLeft")!);


            return
        }


        if (this.vel.x !== 0) {
            this.graphics.use(this.graphics.getGraphic(direction ?  "moveRightIdle" : "moveLefttIdle")!);
            return;
        }

        this.graphics.use(direction ? 'rightIdle' : 'leftIdle')
    }

    onPostCollision(_evt: any) {
       
    }
}