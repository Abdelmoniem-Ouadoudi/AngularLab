

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ques } from '../../data';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.html',
  styleUrls: ['./quiz.css']
})
export class QuizComponent {
  questions = ques.questions;
  currentIndex = 0;

  get currentQuestion() {
    return this.questions[this.currentIndex];
  }

  nextQuestion() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
    }
  }

  prevQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
