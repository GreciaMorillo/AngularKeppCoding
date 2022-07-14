import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

heroes:string[]=["spiderman","Ironman","Thor","Hulk","Capitan America"];
heroeborrado:string | undefined;
heroesborrados:string[]=[];

borrar():void{
  //this.heroes.pop borra el último elemento y .shift() borra el primero
  this.heroeborrado= this.heroes.pop();
  this.heroesborrados.push( String(this.heroeborrado));
}
}


