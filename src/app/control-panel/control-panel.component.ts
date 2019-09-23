import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  @Output() toggled = new EventEmitter<boolean>();
  @Output() started = new EventEmitter();
  enabled: boolean;
  strictMode: boolean;
  count: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onToggleChange(checked: boolean) {

    this.enabled = checked;
    if (!checked) {
      this.count = 0;
      this.strictMode = false;
    }

    this.toggled.emit(checked);
  }

  onStart() {
    this.count = 0;
    this.started.emit();
  }

}
