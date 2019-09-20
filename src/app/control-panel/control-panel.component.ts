import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {
  @Input() enabled: boolean;
  @Output() toggled = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onToggleChange(checked: boolean) {
    this.toggled.emit(checked);
  }

}
