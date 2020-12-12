import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuzzleComponentComponent } from '../puzzle-component/puzzle-component.component';
import { PuzzleComponent } from './puzzle.component';



@NgModule({
  declarations: [PuzzleComponentComponent, PuzzleComponent],
  imports: [
    CommonModule
  ]
})
export class PuzzleModule { }
