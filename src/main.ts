import { DisplayMode, Engine } from "excalibur";
import { Goblin } from "./actor/goblin";
import { loader, tiles } from "./resources";

const GOBLIN_NUMBER = 10

const game = new Engine({
    width: 2200, 
    height: 800,
    displayMode: DisplayMode.FitScreenAndFill
}) 


game.on("initialize", () => {
  for(let i = 0 ; i< GOBLIN_NUMBER; i++){
    const x = Math.floor(Math.random() * (1000 - 0 + 1) + 1000);
    const y = Math.floor(Math.random() * (500 - 0 + 1) + 500);
    const goblin = new Goblin(x,y)
    goblin.z = 10000
    game.add(goblin)
  }
  tiles['main'].addToScene(game.currentScene)
});

game.start(loader)