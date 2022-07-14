import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo:string="contador";
  numero:number=0;
  base:number=2;
  base1:number=5;



/*sumar():void{
  this.numero = this.numero+1;
}
restar():void{
  this.numero=this.numero-1;
}*/

acumulador(valor:number){
  this.numero +=valor;
}

}
