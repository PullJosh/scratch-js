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
      new Trigger(Trigger.KEY_PRESSED, {key: "space"}, this.hideMe)
    ];
  }

  *greenFlag() {
    this.say("It's raining cats and dogs!");

    //this.penDown = true;
    while (true) {
      this.direction += 1;
      this.move(0.5);
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