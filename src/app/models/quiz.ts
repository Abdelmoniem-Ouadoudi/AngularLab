import { Question } from './question';
import { QuizConfig } from './quiz-config';

export class Quiz {
  id: number;
  name: string;
  description: string;
  questions: Question[];
  config: QuizConfig;

  constructor(data: Partial<Quiz> = {}) {
    this.id = data.id || 0;
    this.name = data.name || '';
    this.description = data.description || '';
    this.questions = data.questions || [];
    this.config = data.config || new QuizConfig();
  }

  static fromJson(json: any): Quiz {
    return new Quiz({
      id: json.id,
      name: json.name,
      description: json.description,
      questions: json.questions?.map((q: any) => Question.fromJson(q)) || [],
      config: json.config ? QuizConfig.fromJson(json.config) : new QuizConfig()
    });
  }

  toJson(): object {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      questions: this.questions.map(q => q.toJson()),
      config: this.config.toJson()
    };
  }

  getTotalQuestions(): number {
    return this.questions.length;
  }
}
