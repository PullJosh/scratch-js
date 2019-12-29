import { Sprite, Trigger, Costume } from "../../scratch-js/index.mjs";

export default class Cat extends Sprite {
  constructor(...args) {
    super(...args);

    this.name = "Cat";

    this.costumes = [
      new Costume("cat", "./Cat/costumes/cat.svg", { x: 47, y: 55 })
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.greenFlag),
      new Trigger(Trigger.KEY_PRESSED, {key: "up"}, this.increaseSize),
      new Trigger(Trigger.KEY_PRESSED, {key: "down"}, this.decreaseSize),
      new Trigger(Trigger.KEY_PRESSED, {key: "space"}, this.hideMe),
    ];
  }

  *greenFlag() {
    //this.say("It's raining cats and dogs!");

    this.goto(-25, 40);
    yield* this.wait(0.75);
    this.penDown = true;
    this.penSize = 10;
    this.penColor = 'blue';
    this.goto(75, -20);
    while (true) {
      //this.direction += 5;
      //this.move(10);
      this.goto(this.mouse.x - 10, this.mouse.y);
      if (this.mouse.down) {
        this.effects.color += 1;
        this.effects.pixelate = 50;
        this.effects.whirl += 1;
        this.effects.ghost += 1;
      } else {
        this.effects.clear();
      }
      //this.stamp();
      yield;
    }
  }

  *increaseSize() {
    this.size += 25;
  }

  *decreaseSize() {
    this.size -= 25;
  }

  *hideMe() {
    this.visible = !this.visible;
  }
}
