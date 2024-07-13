import { TiledResource } from "@excaliburjs/plugin-tiled"
import { ImageSource, Loader } from "excalibur"
import { Warrior } from "./actor"

export const tiles = {
    main: new TiledResource('/map.tmx',{
        useTilemapCameraStrategy: true, 
        entityClassNameFactories: {
            warrior: props => {
              const warrior = new Warrior(props.worldPos.x,props.worldPos.y)
                warrior.z = 100

              return warrior
            }
          }
    })
}


export const images = {
    ide1: new ImageSource('/Sprites/Idle/Idle1.png'),
    ide2: new ImageSource('/Sprites/Idle/Idle2.png'),
    ide3: new ImageSource('/Sprites/Idle/Idle3.png'),
    ide4: new ImageSource('/Sprites/Idle/Idle4.png'),
    ide5: new ImageSource('/Sprites/Idle/Idle5.png'),
    ide6: new ImageSource('/Sprites/Idle/Idle6.png'),
    ide7: new ImageSource('/Sprites/Idle/Idle7.png'),
    ide8: new ImageSource('/Sprites/Idle/Idle8.png'),
    ide9: new ImageSource('/Sprites/Idle/Idle9.png'),
    jump1: new ImageSource('/Sprites/JumpAndFall/Jump/Jump1.png'),
    jump2: new ImageSource('/Sprites/JumpAndFall/Jump/Jump2.png'),
    jump3: new ImageSource('/Sprites/JumpAndFall/Jump/Jump3.png'),
    move1: new ImageSource('/Sprites/Move/Moving/Moving1.png'),
    move2: new ImageSource('/Sprites/Move/Moving/Moving2.png'),
    move3: new ImageSource('/Sprites/Move/Moving/Moving3.png'),
    move4: new ImageSource('/Sprites/Move/Moving/Moving4.png'),
    move5: new ImageSource('/Sprites/Move/Moving/Moving5.png'),
    move6: new ImageSource('/Sprites/Move/Moving/Moving6.png'),
    move7: new ImageSource('/Sprites/Move/Moving/Moving7.png'),
    move8: new ImageSource('/Sprites/Move/Moving/Moving8.png'),
    ball1: new ImageSource('/Sprites/Spells/Fire/Fireball/Sprites/Loop/FireballLoop1.png'),
    ball2: new ImageSource('/Sprites/Spells/Fire/Fireball/Sprites/Loop/FireballLoop2.png'),
    ball3: new ImageSource('/Sprites/Spells/Fire/Fireball/Sprites/Loop/FireballLoop3.png'),
    ball4: new ImageSource('/Sprites/Spells/Fire/Fireball/Sprites/Loop/FireballLoop4.png'),
    hit1: new ImageSource('/Sprites/Spells/Fire/Fireball/Sprites/Hit/FirebalHit1.png'),
    hit2: new ImageSource('/Sprites/Spells/Fire/Fireball/Sprites/Hit/FirebalHit2.png'),
    hit3: new ImageSource('/Sprites/Spells/Fire/Fireball/Sprites/Hit/FirebalHit3.png'),
    hit4: new ImageSource('/Sprites/Spells/Fire/Fireball/Sprites/Hit/FirebalHit4.png'),
    hit5: new ImageSource('/Sprites/Spells/Fire/Fireball/Sprites/Hit/FirebalHit5.png'),
    hit6: new ImageSource('/Sprites/Spells/Fire/Fireball/Sprites/Hit/FirebalHit6.png'),
    hit7: new ImageSource('/Sprites/Spells/Fire/Fireball/Sprites/Hit/FirebalHit7.png'),
    goblin1: new ImageSource('/FighterGoblin/Idle/Idle1.png'),
    goblin2: new ImageSource('/FighterGoblin/Idle/Idle2.png'),
    goblin3: new ImageSource('/FighterGoblin/Idle/Idle3.png'),
    goblin4: new ImageSource('/FighterGoblin/Idle/Idle4.png'),
    goblin5: new ImageSource('/FighterGoblin/Idle/Idle5.png'),
    goblin6: new ImageSource('/FighterGoblin/Idle/Idle6.png'),
    goblin7: new ImageSource('/FighterGoblin/Idle/Idle7.png'),

    goblinRunnung1: new ImageSource('/FighterGoblin/Run/Running/Running1.png'),
    goblinRunnung2: new ImageSource('/FighterGoblin/Run/Running/Running2.png'),
    goblinRunnung3: new ImageSource('/FighterGoblin/Run/Running/Running3.png'),
    goblinRunnung4: new ImageSource('/FighterGoblin/Run/Running/Running4.png'),
    goblinRunnung5: new ImageSource('/FighterGoblin/Run/Running/Running5.png'),
    goblinRunnung6: new ImageSource('/FighterGoblin/Run/Running/Running6.png'),
    goblinRunnung7: new ImageSource('/FighterGoblin/Run/Running/Running7.png'),
    goblinRunnung8: new ImageSource('/FighterGoblin/Run/Running/Running8.png'),

    goblinDeath1: new ImageSource('/FighterGoblin/Death/Death10.png'),
    goblinDeath2: new ImageSource('/FighterGoblin/Death/Death11.png'),
    goblinDeath3: new ImageSource('/FighterGoblin/Death/Death12.png'),
    goblinDeath4: new ImageSource('/FighterGoblin/Death/Death13.png'),
    goblinDeath5: new ImageSource('/FighterGoblin/Death/Death14.png'),
    goblinDeath6: new ImageSource('/FighterGoblin/Death/Death15.png'),
    goblinDeath7: new ImageSource('/FighterGoblin/Death/Death16.png'),
    goblinDeath8: new ImageSource('/FighterGoblin/Death/Death17.png'),
    goblinDeath9: new ImageSource('/FighterGoblin/Death/Death18.png'),
    goblinDeath10: new ImageSource('/FighterGoblin/Death/Death19.png'),
    goblinDeath11: new ImageSource('/FighterGoblin/Death/Death20.png'),
    
    comboAtk1: new ImageSource('/Sprites/Attacks/ComboAtk/Full(FX)/ComboAtk(FX)1.png'),
    comboAtk2: new ImageSource('/Sprites/Attacks/ComboAtk/Full(FX)/ComboAtk(FX)2.png'),
    comboAtk3: new ImageSource('/Sprites/Attacks/ComboAtk/Full(FX)/ComboAtk(FX)3.png'),
    comboAtk4: new ImageSource('/Sprites/Attacks/ComboAtk/Full(FX)/ComboAtk(FX)4.png'),
    comboAtk5: new ImageSource('/Sprites/Attacks/ComboAtk/Full(FX)/ComboAtk(FX)5.png'),
    comboAtk6: new ImageSource('/Sprites/Attacks/ComboAtk/Full(FX)/ComboAtk(FX)6.png'),
    comboAtk7: new ImageSource('/Sprites/Attacks/ComboAtk/Full(FX)/ComboAtk(FX)7.png'),
    comboAtk8: new ImageSource('/Sprites/Attacks/ComboAtk/Full(FX)/ComboAtk(FX)8.png'),
    comboAtk9: new ImageSource('/Sprites/Attacks/ComboAtk/Full(FX)/ComboAtk(FX)9.png'),
    comboAtk10: new ImageSource('/Sprites/Attacks/ComboAtk/Full(FX)/ComboAtk(FX)10.png'),
    comboAtk11: new ImageSource('/Sprites/Attacks/ComboAtk/Full(FX)/ComboAtk(FX)11.png'),
    comboAtk12: new ImageSource('/Sprites/Attacks/ComboAtk/Full(FX)/ComboAtk(FX)12.png'),
    comboAtk13: new ImageSource('/Sprites/Attacks/ComboAtk/Full(FX)/ComboAtk(FX)13.png'),
    comboAtk14: new ImageSource('/Sprites/Attacks/ComboAtk/Full(FX)/ComboAtk(FX)14.png'),
    comboAtk15: new ImageSource('/Sprites/Attacks/ComboAtk/Full(FX)/ComboAtk(FX)15.png'),
    comboAtk16: new ImageSource('/Sprites/Attacks/ComboAtk/Full(FX)/ComboAtk(FX)16.png'),
    comboAtk17: new ImageSource('/Sprites/Attacks/ComboAtk/Full(FX)/ComboAtk(FX)17.png'),
    comboAtk18: new ImageSource('/Sprites/Attacks/ComboAtk/Full(FX)/ComboAtk(FX)18.png'),
    comboAtk19: new ImageSource('/Sprites/Attacks/ComboAtk/Full(FX)/ComboAtk(FX)19.png'),
    comboAtk20: new ImageSource('/Sprites/Attacks/ComboAtk/Full(FX)/ComboAtk(FX)20.png'),
    comboAtk21: new ImageSource('/Sprites/Attacks/ComboAtk/Full(FX)/ComboAtk(FX)21.png'),
    comboAtk22: new ImageSource('/Sprites/Attacks/ComboAtk/Full(FX)/ComboAtk(FX)22.png'),
    comboAtk23: new ImageSource('/Sprites/Attacks/ComboAtk/Full(FX)/ComboAtk(FX)23.png'),
    comboAtk24: new ImageSource('/Sprites/Attacks/ComboAtk/Full(FX)/ComboAtk(FX)24.png'),
    comboAtk25: new ImageSource('/Sprites/Attacks/ComboAtk/Full(FX)/ComboAtk(FX)25.png'),
    comboAtk26: new ImageSource('/Sprites/Attacks/ComboAtk/Full(FX)/ComboAtk(FX)26.png'),
    comboAtk27: new ImageSource('/Sprites/Attacks/ComboAtk/Full(FX)/ComboAtk(FX)27.png'),
    comboAtk28: new ImageSource('/Sprites/Attacks/ComboAtk/Full(FX)/ComboAtk(FX)28.png'),

    comboDive1: new ImageSource('/Sprites/Attacks/CometDive/Full/Glow/CometDive1.png'),
    comboDive2: new ImageSource('/Sprites/Attacks/CometDive/Full/Glow/CometDive2.png'),
    comboDive3: new ImageSource('/Sprites/Attacks/CometDive/Full/Glow/CometDive3.png'),
    comboDive4: new ImageSource('/Sprites/Attacks/CometDive/Full/Glow/CometDive4.png'),
    comboDive5: new ImageSource('/Sprites/Attacks/CometDive/Full/Glow/CometDive5.png'),
    comboDive6: new ImageSource('/Sprites/Attacks/CometDive/Full/Glow/CometDive6.png'),
    comboDive7: new ImageSource('/Sprites/Attacks/CometDive/Full/Glow/CometDive7.png'),
    comboDive8: new ImageSource('/Sprites/Attacks/CometDive/Full/Glow/CometDive8.png'),
    comboDive9: new ImageSource('/Sprites/Attacks/CometDive/Full/Glow/CometDive9.png'),
    comboDive10: new ImageSource('/Sprites/Attacks/CometDive/Full/Glow/CometDive10.png'),
    comboDive11: new ImageSource('/Sprites/Attacks/CometDive/Full/Glow/CometDive11.png'),
    comboDive12: new ImageSource('/Sprites/Attacks/CometDive/Full/Glow/CometDive12.png'),
    comboDive13: new ImageSource('/Sprites/Attacks/CometDive/Full/Glow/CometDive13.png'),
    comboDive14: new ImageSource('/Sprites/Attacks/CometDive/Full/Glow/CometDive14.png'),
    comboDive15: new ImageSource('/Sprites/Attacks/CometDive/Full/Glow/CometDive15.png'),
    comboDive16: new ImageSource('/Sprites/Attacks/CometDive/Full/Glow/CometDive16.png'),
    comboDive17: new ImageSource('/Sprites/Attacks/CometDive/Full/Glow/CometDive17.png'),
    comboDive18: new ImageSource('/Sprites/Attacks/CometDive/Full/Glow/CometDive18.png'),
    comboDive19: new ImageSource('/Sprites/Attacks/CometDive/Full/Glow/CometDive19.png'),
    comboDive20: new ImageSource('/Sprites/Attacks/CometDive/Full/Glow/CometDive20.png'),

    susano1: new ImageSource('/Joa/Sprites/Attacks/AirAtk/FX/AirAtk4.png'),
    susano2: new ImageSource('/Joa/Sprites/Attacks/AirAtk/FX/AirAtk5.png'),
    susano3: new ImageSource('/Joa/Sprites/Attacks/AirAtk/FX/AirAtk6.png'),
    susano4: new ImageSource('/Joa/Sprites/Attacks/AirAtk/FX/AirAtk7.png'),
    susano5: new ImageSource('/Joa/Sprites/Attacks/AirAtk/FX/AirAtk8.png'),
    susano6: new ImageSource('/Joa/Sprites/Attacks/AirAtk/FX/AirAtk9.png'),
    susano7: new ImageSource('/Joa/Sprites/Attacks/AirAtk/FX/AirAtk10.png'),
    susano8: new ImageSource('/Joa/Sprites/Attacks/AirAtk/FX/AirAtk11.png'),
    susano9: new ImageSource('/Joa/Sprites/Attacks/AirAtk/FX/AirAtk12.png'),
    susano10: new ImageSource('/Joa/Sprites/Attacks/AirAtk/FX/AirAtk13.png'),
    susano11: new ImageSource('/Joa/Sprites/Attacks/AirAtk/FX/AirAtk14.png'),
    susano12: new ImageSource('/Joa/Sprites/Attacks/AirAtk/FX/AirAtk15.png'),
    susano13: new ImageSource('/Joa/Sprites/Attacks/AirAtk/FX/AirAtk16.png'),
    susano14: new ImageSource('/Joa/Sprites/Attacks/AirAtk/FX/AirAtk17.png'),
}

const allResource = {...tiles,...images}

export const loader = new Loader()

for (const res in allResource) {
    //@ts-expect-error
    loader.addResource(allResource[res])
}
