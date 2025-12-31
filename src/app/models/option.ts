export class Option {
  id: number;
  questionId: number;
  name: string;
  isAnswer: boolean;

  constructor(data: Partial<Option> = {}) {
    this.id = data.id || 0;
    this.questionId = data.questionId || 0;
    this.name = data.name || '';
    this.isAnswer = data.isAnswer || false;
  }

  static fromJson(json: any): Option {
    return new Option({
      id: json.id,
      questionId: json.questionId,
      name: json.name,
      isAnswer: json.isAnswer
    });
  }

  toJson(): object {
    return {
      id: this.id,
      questionId: this.questionId,
      name: this.name,
      isAnswer: this.isAnswer
    };
  }
}
