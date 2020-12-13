
import { Component, OnInit } from '@angular/core';
import { PuzzleService } from '../puzzle.service';


@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.scss']
})
export class CookieComponent  {
  private answer = "temp"
  public title = "Cryptic Cookies"
  public description  = "When Santa entered the house, he noticed the cookies where meticulously arranged. \n Almost as if someone was trying to send him a message or two."
  public cookies : String[];
  public guess : String;
  public flag = false;
  constructor(private puzzleService: PuzzleService){
    this.guess = ''
    this.cookies = []
    for (var i =1;i<18;i++){
      var cookie = "assets/cookie/cookie_"+String(i)+".png"
      this.cookies.push(cookie)
    }
  }
  checkAnswer(){
    if(this.puzzleService.checkAnswer(this.guess,this.answer)){
      this.flag = true;
    }
  }

}
