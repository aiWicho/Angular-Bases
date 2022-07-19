import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Ironman','Hulk','Thor','Capitan America'];
  resultado: string = '';

  BorraHeroe():void{    
    /*this.resultado='';

    if (this.heroes.length>0){
      //this.heroes.splice(0,1);
      this.resultado = this.heroes.shift() || '';
    }
    else{
      this.resultado='No Hay Heroe';
    }*/
    
    this.resultado = this.heroes.shift() || '';
  }
}
