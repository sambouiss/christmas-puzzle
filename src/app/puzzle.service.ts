import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PuzzleService {
  private static cookieAnswer : String;
  constructor() { }

  checkAnswer(answer:String, solution: String){
    return answer.toLocaleLowerCase() === solution.toLocaleLowerCase()
  }

  getCookieAnswer(){
    return PuzzleService.cookieAnswer;
  }

  static setCookieAnswer(cookieAnswer: String){
    this.cookieAnswer = cookieAnswer;
  }
  
}
