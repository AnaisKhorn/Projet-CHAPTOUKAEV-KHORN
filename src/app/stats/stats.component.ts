import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  data = [];
  cas: CasLight;
  // tslint:disable-next-line:max-line-length
  tabRegion = ['Ain', 'Alpes-Maritimes', 'Aube', 'Bouches-du-Rhone', 'Cotes-d\'Armor', 'Gard', 'Ile-de-France', 'Oise', 'Pas-de-Calais', 'Rhone' ];
  selectedRegion = '';

  // horizontal bar chart
  public chartType = 'horizontalBar';
  public chartDatasets: Array<any> = [
    { data: [0, 0, 0, 0, 0, 0], label: 'Nombre de cas' }
  ];
  public chartLabels: Array<any> = ['A', 'B', 'C', 'D', 'D1', 'D2'];
  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }


  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.chartDatasets = [{data: [], label: 'Nombre de cas'}];
  }

  ngOnInit() {
    this.getCas();
  }

  public getCas() {
    this.http.get('http://localhost:8080/api/cas').subscribe((res: any) => {
     this.data = res.data;

     // filtre sur la région
      if (this.selectedRegion !== '') {
        this.data = this.data.filter(item => item.cas_zone_nom === this.selectedRegion);
      }

      // nombre de cas par type
      this.chartDatasets = [{data: [0, 0, 0, 0, 0, 0], label: 'Nombre de cas'}];
      this.data.forEach(item => {
          if (item.cas_classification === 'A') {
            this.chartDatasets[0].data[0]++;
          }
        if (item.cas_classification === 'B') {
          this.chartDatasets[0].data[1]++;
        }
          if (item.cas_classification === 'C') {
            this.chartDatasets[0].data[2]++;
        }
        if (item.cas_classification === 'D') {
          this.chartDatasets[0].data[3]++;
        }
        if (item.cas_classification === 'D1') {
          this.chartDatasets[0].data[4]++;
        }
        if (item.cas_classification === 'D2') {
          this.chartDatasets[0].data[5]++;
        }
      });
    });
  }


}
