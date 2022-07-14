import { Component } from "@angular/core";

@Component({
  selector: "app-acumulador",
  templateUrl: "./acumulador.component.html"
})

export class AcumuladorComponent{
  titulo:string="contador";
  numero:number=0;
  base:number=2;
  base1:number=5;


acumulador(valor:number){
  this.numero +=valor;
}

}
