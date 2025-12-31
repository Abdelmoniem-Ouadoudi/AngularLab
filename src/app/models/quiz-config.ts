export class QuizConfig {
  allowBack: boolean;
  allowReview: boolean;
  autoMove: boolean;
  duration: number;
  pageSize: number;
  requiredAll: boolean;
  richText: boolean;
  shuffleQuestions: boolean;
  shuffleOptions: boolean;
  showClock: boolean;
  showPager: boolean;

  constructor(data: Partial<QuizConfig> = {}) {
    this.allowBack = data.allowBack ?? true;
    this.allowReview = data.allowReview ?? true;
    this.autoMove = data.autoMove ?? false;
    this.duration = data.duration || 10;
    this.pageSize = data.pageSize || 1;
    this.requiredAll = data.requiredAll ?? false;
    this.richText = data.richText ?? false;
    this.shuffleQuestions = data.shuffleQuestions ?? false;
    this.shuffleOptions = data.shuffleOptions ?? false;
    this.showClock = data.showClock ?? true;
    this.showPager = data.showPager ?? true;
  }

  static fromJson(json: any): QuizConfig {
    return new QuizConfig(json);
  }

  toJson(): object {
    return {
      allowBack: this.allowBack,
      allowReview: this.allowReview,
      autoMove: this.autoMove,
      duration: this.duration,
      pageSize: this.pageSize,
      requiredAll: this.requiredAll,
      richText: this.richText,
      shuffleQuestions: this.shuffleQuestions,
      shuffleOptions: this.shuffleOptions,
      showClock: this.showClock,
      showPager: this.showPager
    };
  }
}
