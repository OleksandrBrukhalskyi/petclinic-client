import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { VisitService } from 'src/app/services/visit.service';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  chart: any;



  constructor(private visitService: VisitService) {
    this.visitService.incomeByDate().subscribe((data) => {
      this.dataKey = Object.keys(data);
      this.dataVal = Object.values(data);



      this.chartOptions = {

        chart: {
          type: 'area',

        },
        title: {
          text: 'Income by Date and Time of visit'
        },
        xAxis: {

          categories: [

            this.dataKey[0],
            this.dataKey[1],
            this.dataKey[2],
            this.dataKey[3],
            this.dataKey[4],
            this.dataKey[5],
            this.dataKey[6],
            this.dataKey[7],
            this.dataKey[8],
            this.dataKey[9],
            this.dataKey[10],
            this.dataKey[11],
            this.dataKey[12],
            this.dataKey[13],
            this.dataKey[14],
            this.dataKey[15],
            this.dataKey[16],
            this.dataKey[17],
            this.dataKey[18],
            this.dataKey[19],
            this.dataKey[20],
            this.dataKey[21],
            this.dataKey[22],
            this.dataKey[23],
            this.dataKey[24],
            this.dataKey[25],
            this.dataKey[26],
            this.dataKey[27],
            this.dataKey[28],
            this.dataKey[29],
            this.dataKey[30]

          ],
          tickmarkPlacement: 'on',
          title: {
            enabled: true
          },

        },
        tooltip: {
          split: true,
          valueSuffix: ' grn'
        },
        credits: {
          enabled: false
        },
        exporting: {
          enabled: true
        },
        plotOptions: {
          area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
              lineWidth: 1,
              lineColor: '#666666'
            }
          }
        },
        series: [{
          name: 'Income By Visit Date',
          data: this.dataVal


        }
        ]
      }


    })
  }

  chartOptions: {};
  dataVal = [];
  dataKey = [];




  ngOnInit() {



    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );

    }, 100)
  }

}
