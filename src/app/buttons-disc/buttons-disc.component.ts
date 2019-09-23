import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-buttons-disc',
  templateUrl: './buttons-disc.component.html',
  styleUrls: ['./buttons-disc.component.css']
})
export class ButtonsDiscComponent implements OnInit {
  @Input() activeCell: number = 0;
  @Input() enabled: boolean;
  @Output() colorClicked = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onColorClick(color: number) {
    this.colorClicked.emit(color);
  }

}
