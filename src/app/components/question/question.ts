import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from '../../models/question';
import { OptionComponent } from '../option/option';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule, OptionComponent],
  templateUrl: './question.html',
  styleUrls: ['./question.css']
})
export class QuestionComponent {
  @Input() question!: Question;
  @Input() mode: 'quiz' | 'review' = 'quiz';
  @Input() selectedOptionId?: number;

  @Output() selectOption = new EventEmitter<number>();

  onSelect(optionId: number): void {
    this.selectOption.emit(optionId);
  }
}
