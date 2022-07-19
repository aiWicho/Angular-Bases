import { Component } from "@angular/core";

@Component({
    selector: 'app-Contador',
    template:`
        <h1>Hola Mundo</h1>
        <h1>{{title}}</h1>
        <h1>{{400+(100/2)}}</h1>

        <!--<button (click)="Suma()">+1</button>-->
        <button (click)="Operacion(1)">+1</button>
        <span>{{xNumero}}</span>
        <!--<button (click)="Resta()">-1</button>-->
        <button (click)="Operacion(-1)">-1</button>

        <h1>TAREA DE ACUMULADOR</h1>
        <h2>La base es: {{xBase}}</h2>

        <button (click)="Operacion(xBase)">+ {{xBase}}</button>
        <span>{{xNumero}}</span>
        <!--<button (click)="Operacion(xBase*(-1))">- {{xBase}}</button>-->
        <button (click)="Operacion(-xBase)">- {{xBase}}</button>
    `
})

export class ContadorComponent {
    title:string = 'App Contador';
    xNumero:number = 100;
    xBase:number = 5;
  
    Suma(){
      this.xNumero+=1;
    }
  
    Resta(){
      this.xNumero-=1;
    }
  
    Operacion(xValor:number){
      this.xNumero+=xValor;
    }
}