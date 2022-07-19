import { Component } from "@angular/core";

@Component ({
    selector: 'app-heroe',
    templateUrl: 'Heroe.component.html'
})


export class HeroeComponent{
nombre: string = 'Ironman'
edad: number = 45

get NombreCapitalizado():string {
    return this.nombre.toUpperCase();
}

GetNombre():string {
    return `${this.nombre} - ${this.edad}`;
}

UpdateNombre():void {
    this.nombre='Spiderman';
}

UpdateEdad():void{
    this.edad=39;
}
}