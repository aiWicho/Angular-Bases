import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponent } from './Contador/Contador.component';

@NgModule({
    declarations:[
        ContadorComponent
    ],

    exports:[ContadorComponent]
})

export class ContadorModule{

}