
import { Injectable } from '@angular/core';
// import { Headers, Http } from '@angular/http';



@Injectable()
export class QuestionsService {

  display: boolean = false;
  questionInputDisplay: boolean = false;

  questions = [
    {questionID: 1, name: "Jen", userID: "2", question: "How is life at Sirius?", responses: ["It's fine.", "Alright"]},
    {questionID: 2, name: "Chris", userID: "1", question: "What does Sirius do?", responses: ["We are a consultant company"]},
    {questionID: 3, name: "Jen", userID: "2", question: "What are the benefits of working at Sirius?", responses: ["Health insurance"]},
    {questionID: 4, name: "Braden", userID: "3", question: "Is there anything fun to do around there?", responses: ["I had the same question"]},
    {questionID: 5, name: "Will", userID: "4", question: "Are the people there easy to get along with?", responses: []},
    {questionID: 6, name: "Will", userID: "4", question: "How is the commute to work?", responses: []}
  ];

  questionsArray: any[];
  getQuestions():any[]{
    return this.questions;
  }

  setQuestions(newQuestions){
    this.questions = newQuestions;
  }

  switchDisplay(){
    this.display = !this.display
  }

  getDisplay(){
    return this.display;
  }

  switchQuestionInputDisplay(){
    this.questionInputDisplay = !this.questionInputDisplay;
  }
  getQuestionInputDisplay(){
    return this.questionInputDisplay;
  }

  setDisplayFalse(){
    this.display = false;
  }



}
