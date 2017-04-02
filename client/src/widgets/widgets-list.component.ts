import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Widget} from './../common/models/widget.model';

@Component({
    selector: 'widgets-list',
    template: `
    <div *ngFor="let widget of widgets"
      (click)="selected.emit(widget)"
      class="fem-card mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">{{widget.name}}</h2>
      </div>
      <div class="mdl-card__supporting-text">
        {{widget.price}}
      </div>
    </div>
    `
})
export class WidgetsList {
  @Input()widgets: Widget[];
  @Output()selected = new EventEmitter();
}
