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
  public title = "Jumbled Wish List";
  public description  = "People are getting more and more creative with their wish lists. This year someone sent sent an interective wish list, only its all jumbled. Can you help Santa figure out what they want? (the answers aren't really presents)"
  public guess : String;
  public flag = false;
  bands = [
    ['A', 'H', 'X', 'C', 'Z', 'A'],
    ['D', 'P', 'I', 'I', 'A', 'D'],
    ['O', 'O', 'E', 'Y', 'L', 'K'],
    ['R', 'X', 'U', 'K', 'R', 'H'],
    ['E', 'Y', 'P', 'A', 'E', 'C'],
    ['I', 'E', 'M', 'P', 'H', 'W']
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
  dropCols(event: CdkDragDrop<string[]>){
    var col1 = this.bands.map(d => d[event.previousIndex])
    var col2 = this.bands.map(d => d[event.currentIndex])
    console.log(event.previousIndex)
    console.log(event.currentIndex)
    
    console.log(col1)
    console.log(col2)
    for (let i=0; i<6;i++){
      this.bands[i][event.previousIndex] = col2[i]
      this.bands[i][event.currentIndex] = col1[i]
    }
  }
}
