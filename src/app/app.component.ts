import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  COLORS_AMAUNT = 5;
  toggleChecked = false;
  // strictMode = false;
  activeCell: number;
  colorSequence: number[] = [];

  onToggled(checked: boolean) {
    this.toggleChecked = checked;
  }

  onStart() {
    // TO DO setInterval

  }

  // TODO - create enum for colors
  onColorClicked(color: number) {
    if (this.isChosenColorCorrect(color)) {
      this.addColorToSequence(color);
      this.showColorSequence();
    } else {
      this.clearColorSequence();

    }
    this.showNewColor();
  }

  isChosenColorCorrect(color: number): boolean {
    // TO DO CHECK
    return;
  }

  showColorSequence() {
    if (!this.colorSequence) {
      this.getRandomColor();
    }
    return;
  }

  showNewColor(): number {
    const newColor = this.getRandomColor();
    return newColor;
  }

  getRandomColor() {
    return Math.floor(Math.random() * Math.floor(this.COLORS_AMAUNT));
  }

  addColorToSequence(color: number) {
    this.colorSequence.push(color);
  }

  clearColorSequence() {
    this.colorSequence = [];
  }



}
