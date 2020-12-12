import { Component } from '@angular/core';
import { PuzzleService } from '../puzzle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private answer = "temp"
  public title = "Madison's Christmas Puzzle Hunt"
  public description  = "Merry Christmas"
  public guess = "";
  public flag = false;
  constructor(private puzzleService:PuzzleService) { }

  checkAnswer(){
    if(this.puzzleService.checkAnswer(this.guess,this.answer)){
      this.flag = true;
    }
  }

}
