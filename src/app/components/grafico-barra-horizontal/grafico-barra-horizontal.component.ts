import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy {

  @Input() results: any[] = [];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Votos';
  showYAxisLabel = true;
  yAxisLabel = 'Juegos';

  colorScheme = 'nightLights';

  // interval;

  constructor() {

    // this.interval = setInterval( () => {

    //   const newResults = [...this.results];

    //   newResults.forEach(element => {
    //     element.value = Math.round(Math.random() * 500); 
    //   })

    //   this.results = [...newResults];

    // }, 1500);

  }

  ngOnDestroy() {
    // clearInterval(this.interval);
  }

  onSelect(event: any) {
    console.log(event);
  }
}
