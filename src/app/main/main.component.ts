import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  
  personas:number;
  public propina:number;
  public cuenta:number;

  constructor(){
    this.personas=0;
    this.propina=0;
    this.cuenta=0;
  }


  public recalcular(cuenta: string, propina: string, personas: string ){
    this.personas=+personas;
    this.propina=+propina;
    this.cuenta=+cuenta;
    let total=this.cuenta+(this.cuenta*(this.propina/100));
    let totalRedondeado=total.toFixed(2);
    let persona=total/this.personas;
    let personaRedondeada=persona.toFixed(2);
    let labelTotal= document.getElementById("a_pagar");
    if(labelTotal) (labelTotal as HTMLFormElement).innerHTML="Total a pagar "+totalRedondeado+"€"; 
    let labelPersona=document.getElementById("por_persona");
    if(labelPersona) (labelPersona as HTMLFormElement).innerHTML="Total por persona:  "+personaRedondeada+"€"; 

  }

  public cambioRange(cuenta: string, propina: string, personas: string ){
    let form = document.getElementById('propina')
    if(form) (form as HTMLFormElement).innerHTML="Propina "+propina+"%"; 
    this.recalcular(cuenta, propina, personas);
  }
}
