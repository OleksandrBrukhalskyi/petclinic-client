import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-widget-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  Highcharts = Highcharts;

  chartOptions: {}
  dataVal = [];
  dataKey = [];

  constructor(private ownerService: OwnerService) {
    this.ownerService.groupOwnersByPetsCount().subscribe((data) => {
      this.dataKey = Object.keys(data);
      this.dataVal = Object.values(data);

      this.chartOptions = {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Згруповані власники по кількості тварин'
        },

        xAxis: {
          categories: [
            this.dataKey[0],
            this.dataKey[1],
            this.dataKey[2],
            this.dataKey[3],
            this.dataKey[4],
            this.dataKey[5],
            this.dataKey[6]
          ],
          crosshair: true
        },

        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        series: [{
          data: [{
            name: this.dataKey[0],
            y: this.dataVal[0]
          },
          {
            name: this.dataKey[1],
            y: this.dataVal[1]
          },
          {
            name: this.dataKey[2],
            y:this.dataVal[2]
          },
          {
            name: this.dataKey[3],
            y:this.dataVal[3]
          },
          {
            name: this.dataKey[4],
            y:this.dataVal[4]
          },
          {
            name: this.dataKey[5],
            y:this.dataVal[5]
          },
          {
            name: this.dataKey[6],
            y:this.dataVal[6]
          },
          {
            name: this.dataKey[7],
            y:this.dataVal[7]
          },
          {
            name: this.dataKey[8],
            y:this.dataVal[8]
          },
          ]
        }]
      };


    }
    );

  }





  ngOnInit() {
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );

    }, 100)
  }

}
