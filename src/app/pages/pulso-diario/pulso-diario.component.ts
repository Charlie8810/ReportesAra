import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pulso-diario',
  templateUrl: './pulso-diario.component.html',
  styleUrls: ['./pulso-diario.component.css']
})
export class PulsoDiarioComponent implements OnInit {

  options: Object;

  constructor() {}

  setDualChartOptions(titulo: string, categorias: string[], data: any){
     this.options = {
            colors: ['#42a5f5', '#FF0000'],
            title: {
                  style: {
                      color: '#758697',
                      fontFamily: 'Open Sans',
                      fontSize: '15px'
                  },
                  text: '<b>' + titulo + '</b>',
                  x: 10, //center
                  y: 5
              },
              xAxis: {
                            categories: categorias
              },
              yAxis: [{ // Primary yAxis
                  labels: {
                      style: {
                          color: '#50B432'
                      }
                  },
                  title: {
                      text: '',
                      style: {
                          color: '#ED561B'
                      }
                  }
              }],
              credits: { enabled: false },
              exporting: { enabled: false },
              legend: {
                            layout: 'horizontal',
                            align: 'left',
                            verticalAlign: 'top',
                            borderWidth: 0
              },
              series: [{
                  name: 'Real',
                  data: data.real,
                  tooltip: {
                      valueSuffix: ' M$'
                  }
              },
              {
                  name: 'Presupuesto',
                  data: data.presupuesto,
                  tooltip: {
                    valueSuffix: 'M$'
                  }
              }]
        };
  }


  ngOnInit() {
      this.setDualChartOptions('Colocaciones Brutas M$', 
                            ['Jue01','Vie02','Lun05','Mar06','Mie07'], 
                            {
                              real:[979457, 948337, 1066584, 1025445, 1234093],
                              presupuesto:[900000, 821429, 945857, 945857, 945857]
                            }
      );

  }


}
