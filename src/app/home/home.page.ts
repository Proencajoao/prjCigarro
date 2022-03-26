import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

quantidadeCigarro = 0;
quantidadeAnos = 0;
totalMinutosP = 0;

totalHorasP = 0;
totalDiasP = 0;
totalMesesP = 0;
totalAnoP = 0;

resto = 0;



  constructor() {}

  calculo(){
    
      /*let anos = 4; 
      let anosInteiro = Math.floor(anos);
      let resto = anos - anosInteiro;
      
      console.log(resto);
      */




      this.totalMinutosP = this.quantidadeCigarro * 360 * this.quantidadeAnos * 10;
    
      this.totalHorasP = this.totalMinutosP / 60;

      this.totalDiasP = this.totalHorasP /24;

      this.totalMesesP = this.totalDiasP / 30;

      this.totalAnoP = this.totalMesesP / 12;

  }
}
  