import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { PuzzleService } from '../puzzle.service';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.scss']
})
export class BandComponent {
  private answer = "i heard";
  public title = "6 Days of Chirstmas";
  public description  = ""
  public guess : String;
  public flag = false;
  bands = [
    ['D', 'O', 'I', 'O', 'A', 'D'],
    ['E', 'S', 'S', 'A', 'C', 'G'],
    ['R', 'E', 'D', 'D', 'R', 'I'],
    ['O', 'V', 'E', 'S', 'E', 'S'],
    ['I', 'D', 'B', 'L', 'D', 'R'],
    ['A', 'H', 'R', 'R', 'N', 'N']
  ];
  constructor(private puzzleService: PuzzleService) { 
    this.guess = '';
  }

  checkAnswer(){
    if(this.puzzleService.checkAnswer(this.guess,this.answer)){
      PuzzleService.setBandAnswer(this.answer)
      this.flag = true;
    }
  }

  
  drop(event: CdkDragDrop<string[][]>) {
    let oldTarget = this.bands[event.previousIndex]
    this.bands[event.previousIndex] = this.bands[event.currentIndex]
    this.bands[event.currentIndex] = oldTarget
  }
  
  
}
