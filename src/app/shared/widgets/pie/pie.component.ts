import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { VisitService } from 'src/app/services/visit.service';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  Highcharts = Highcharts;

  chartOptions: {}
  dataVal = [];
  dataKey = [];


  constructor(private visitService: VisitService) {
    this.visitService.incomePerVisits().subscribe((data) => {
      this.dataKey = Object.keys(data);
      this.dataVal = Object.values(data);


      this.chartOptions = {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'Загальний прибуток згрупований по меті візиту'
        },
        credits: {
          enabled: false
        },
        exporting: {
          enabled: true
        },
        series: [{
          name: 'Income',
          colorByPoint: true,
          data: [{
            name: this.dataKey[0],
            y: this.dataVal[0],
            sliced: true,
            selected: true
          }, {
            name: this.dataKey[1],
            y: this.dataVal[1]
          }, {
            name: this.dataKey[2],
            y: this.dataVal[2]
          }, {
            name: this.dataKey[3],
            y: this.dataVal[3]
          }, {
            name: this.dataKey[4],
            y: this.dataVal[4]
          }, {
            name: this.dataKey[5],
            y: this.dataVal[5]
          }, {
            name: this.dataKey[6],
            y: this.dataVal[6]
          }, {
            name: this.dataKey[7],
            y: this.dataVal[7]
          }, {
            name: this.dataKey[8],
            y: this.dataVal[8]
          },
          {
            name: this.dataKey[9],
            y: this.dataVal[9]
          },
          {
            name: this.dataKey[10],
            y: this.dataVal[10]
          },
          {
            name: this.dataKey[10],
            y: this.dataVal[10]
          },
          {
            name: this.dataKey[11],
            y: this.dataVal[11]
          },
          {
            name: this.dataKey[12],
            y: this.dataVal[12]
          },
          {
            name: this.dataKey[13],
            y: this.dataVal[13]
          },
          {
            name: this.dataKey[14],
            y: this.dataVal[14]
          },

        ]
        }]
      }
    })
  }

  ngOnInit() {
  }

}
