import { DisplayMode, Engine } from "excalibur";
import { Goblin } from "./actor/goblin";
import { loader, tiles } from "./resources";

const game = new Engine({
    width: 2200, 
    height: 800,
    displayMode: DisplayMode.FitScreenAndFill
}) 


game.on("initialize", () => {
  const goblin = new Goblin(600,500)
  goblin.z = 10000
  game.add(goblin)
  tiles['main'].addToScene(game.currentScene)
});

game.start(loader)