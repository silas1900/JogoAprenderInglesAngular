import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public progressPlay: boolean = true;

  public typeFinish: string = ''

  public finishPlay(tipo: string):void{
   
    this.progressPlay = false;
    this.typeFinish = tipo;
  }

  public restartPlay(): void{
    this.progressPlay = true;
    this.typeFinish = ''
  }
}
