
export class ForumQuestions {

  questions: any[] = [];
  constructor(array: any[]){
    this.questions = array;
  }

  public getQuestions(): Array<any>{
    return this.questions;
  }

  setQuestions(newQuestionArray){
    this.questions = newQuestionArray;
  }



}
