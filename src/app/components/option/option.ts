import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Option } from '../../models/option';

@Component({
  selector: 'app-option',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './option.html',
  styleUrls: ['./option.css']
})
export class OptionComponent {
  @Input() option!: Option;
  @Input() selected = false;
  @Input() correct = false; // used in review mode for styling
  @Input() disabled = false;
  @Input() nameGroup = '';

  @Output() select = new EventEmitter<number>();

  onChange(): void {
    if (!this.disabled) {
      this.select.emit(this.option.id);
    }
  }
}
