import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from '../shared/frases.model';
import { frases } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public FRASES: Frase[] = frases
  public  instrucao: string = 'Traduza a Frase'
  public resposta: string =''

  public rodada: number = 0
  public rodadaFrase: Frase 

  public progresso: number = 0

  public tentativas: number = 3

  @Output() public finishPlay: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.rodadaFrase = this.FRASES[this.rodada]
    this.AtualizaRodada()
    
    }

  ngOnInit(): void {
  }

  ngOnDestroy(){
   
  }

  public atualizaResposta(resposta: Event): void{
    this.resposta = (<HTMLInputElement>resposta.target).value
    
  }

  public verificaResposta(): void{
    // atualiza o objeto rodada frase
    if(this.rodadaFrase.frasePtBr == this.resposta){
      //alert('A traduação está correta')
      this.rodada++
      //atualiza barra de progressoComponent
      this.progresso  = this.progresso + (100/this.FRASES.length)
      console.log(this.progresso)

      if(this.rodada === 4){
       this.finishPlay.emit('Vitoria')
      }
     // atualiza objeto 
     this.AtualizaRodada()
     

     
    }else{
     this.tentativas --;
     this.resposta = ''
     if(this.tentativas === -1){
      this.finishPlay.emit('Derrota')
     }
    }

  }

  public AtualizaRodada(): void{
    this.rodadaFrase = this.FRASES[this.rodada]
    this.resposta = ''
     
  }
}
