import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgSrc = '../assets/Facepalm.jpg';
  COLORS_AMAUNT = 5;
  toggleChecked: boolean;
  // started: boolean;
  // strictMode = false;
  colorSequence: number[] = [];
  repeatedColorSequence: number[] = [];
  currentColorNumber = 0;
  clickNumber: number;
  prevClickNumber: number;
  timerId: any;

  onToggled(checked: boolean) {
    this.toggleChecked = checked;
  }

  onStarted() {
    // this.started = true;
    this.currentColorNumber = 0;
    this.colorSequence = [];
    this.createNewCicle();
  }

  createNewCicle() {
    this.colorSequence.push(this.getRandomColor());
    this.showColorSequence();
    this.clickNumber = 0;
    this.waitForSequence();
  }

  getRandomColor(): number {
    return  Math.floor(Math.random() * Math.floor(this.COLORS_AMAUNT));
  }

  showColorSequence() {
    this.toggleChecked = false;
    for (const iterator of this.colorSequence) {
      this.currentColorNumber = iterator;
      setTimeout(() => { this.currentColorNumber = 0; }, 2000);
    }
    this.toggleChecked = true;
  }

  waitForSequence() {
    this.timerId = setTimeout(() => { this.checkSequence(); }, 2000);
  }

  checkSequence() {
    if (this.clickNumber !== 0 && this.clickNumber !== this.prevClickNumber) {
      console.log("Game over");
    }
  }

  onColorClicked(color: number) {
    this.prevClickNumber = this.clickNumber;
    if (this.colorSequence[this.clickNumber] === color) {
      this.clickNumber ++;
    } else {
      this.clickNumber = 0;
      clearTimeout(this.timerId);
      console.log("Game over");
    }

    if (this.colorSequence.length === this.clickNumber) {
      this.createNewCicle();
      console.log(this.clickNumber);
    }
  }

}
