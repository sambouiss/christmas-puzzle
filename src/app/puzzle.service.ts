import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PuzzleService {

  constructor() { }

  checkAnswer(answer:String, solution: String){
    return answer.toLocaleLowerCase() === solution.toLocaleLowerCase()
  }
}
