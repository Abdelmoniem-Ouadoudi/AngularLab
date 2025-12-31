import { Option } from './option';
import { QuestionType } from './question-type';

export class Question {
  id: number;
  name: string;
  questionTypeId: number;
  options: Option[];
  questionType: QuestionType;

  constructor(data: Partial<Question> = {}) {
    this.id = data.id || 0;
    this.name = data.name || '';
    this.questionTypeId = data.questionTypeId || 0;
    this.options = data.options || [];
    this.questionType = data.questionType || new QuestionType();
  }

  static fromJson(json: any): Question {
    return new Question({
      id: json.id,
      name: json.name,
      questionTypeId: json.questionTypeId,
      options: json.options?.map((o: any) => Option.fromJson(o)) || [],
      questionType: json.questionType ? QuestionType.fromJson(json.questionType) : new QuestionType()
    });
  }

  toJson(): object {
    return {
      id: this.id,
      name: this.name,
      questionTypeId: this.questionTypeId,
      options: this.options.map(o => o.toJson()),
      questionType: this.questionType.toJson()
    };
  }

  getCorrectOption(): Option | undefined {
    return this.options.find(o => o.isAnswer);
  }
}
