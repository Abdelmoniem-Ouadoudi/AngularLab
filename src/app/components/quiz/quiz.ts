import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ques } from '../../data';
import { Quiz, Question } from '../../models';
import { PLATFORM_ID } from '@angular/core';
import { QuestionComponent } from '../question/question';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, QuestionComponent],
  templateUrl: './quiz.html',
  styleUrls: ['./quiz.css']
})
export class QuizComponent implements OnInit {
  private readonly STORAGE_KEY = 'quiz_answers';
  private readonly MODE_KEY = 'quiz_mode';
  private readonly INDEX_KEY = 'quiz_index';

  quiz: Quiz;
  questions: Question[];
  currentIndex = 0;
  mode: 'quiz' | 'review' | 'submitted' = 'quiz';
  selectedAnswers: { [questionId: number]: number } = {};

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Initialize quiz from data using the Quiz model
    this.quiz = Quiz.fromJson(ques);
    this.questions = this.quiz.questions;
  }

  ngOnInit(): void {
    this.loadFromLocalStorage();
  }

  get currentQuestion(): Question {
    return this.questions[this.currentIndex];
  }

  nextQuestion(): void {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.saveToLocalStorage();
    }
  }

  prevQuestion(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.saveToLocalStorage();
    }
  }

  selectAnswer(questionId: number, optionId: number): void {
    this.selectedAnswers[questionId] = optionId;
    this.saveToLocalStorage();
  }

  goToQuiz(): void {
    this.mode = 'quiz';
    this.currentIndex = 0;
    this.saveToLocalStorage();
  }

  goToReview(): void {
    this.mode = 'review';
    this.currentIndex = 0;
    this.saveToLocalStorage();
  }

  submit(): void {
    this.mode = 'submitted';
    this.saveToLocalStorage();
  }

  resetQuiz(): void {
    this.selectedAnswers = {};
    this.currentIndex = 0;
    this.mode = 'quiz';
    this.clearLocalStorage();
  }

  isCorrect(questionId: number, optionId: number): boolean {
    const question = this.questions.find(q => q.id === questionId);
    if (question) {
      const correctOption = question.getCorrectOption();
      return correctOption?.id === optionId;
    }
    return false;
  }

  isSelected(questionId: number, optionId: number): boolean {
    return this.selectedAnswers[questionId] === optionId;
  }

  getScore(): number {
    let score = 0;
    for (const question of this.questions) {
      const selectedId = this.selectedAnswers[question.id];
      const correctOption = question.getCorrectOption();
      if (selectedId === correctOption?.id) {
        score++;
      }
    }
    return score;
  }

  // LocalStorage methods
  private saveToLocalStorage(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.selectedAnswers));
      localStorage.setItem(this.MODE_KEY, this.mode);
      localStorage.setItem(this.INDEX_KEY, this.currentIndex.toString());
    }
  }

  private loadFromLocalStorage(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const savedAnswers = localStorage.getItem(this.STORAGE_KEY);
    const savedMode = localStorage.getItem(this.MODE_KEY);
    const savedIndex = localStorage.getItem(this.INDEX_KEY);

    if (savedAnswers) {
      this.selectedAnswers = JSON.parse(savedAnswers);
    }
    if (savedMode) {
      this.mode = savedMode as 'quiz' | 'review' | 'submitted';
    }
    if (savedIndex) {
      this.currentIndex = parseInt(savedIndex, 10);
    }
  }

  private clearLocalStorage(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.STORAGE_KEY);
      localStorage.removeItem(this.MODE_KEY);
      localStorage.removeItem(this.INDEX_KEY);
    }
  }
}
