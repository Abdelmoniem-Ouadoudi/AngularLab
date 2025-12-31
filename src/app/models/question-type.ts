export class QuestionType {
  id: number;
  name: string;
  isActive: boolean;

  constructor(data: Partial<QuestionType> = {}) {
    this.id = data.id || 0;
    this.name = data.name || '';
    this.isActive = data.isActive || false;
  }

  static fromJson(json: any): QuestionType {
    return new QuestionType({
      id: json.id,
      name: json.name,
      isActive: json.isActive
    });
  }

  toJson(): object {
    return {
      id: this.id,
      name: this.name,
      isActive: this.isActive
    };
  }
}
