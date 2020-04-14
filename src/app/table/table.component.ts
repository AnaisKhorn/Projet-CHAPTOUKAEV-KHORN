import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {HttpClient} from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {
  cas: CasLight[] = [];
  page = 1;
  pagesize = 10;

  // search
  typeCas = ['A', 'B', 'C', 'D', 'D1', 'D2'];
  selectedType = '';
  selectedYears = '';
  years = [];


  // tslint:disable-next-line:max-line-length
  displayedColumns = ['id', 'nom', 'type de cas', 'résumé du cas', 'région', 'année du cas', 'nb de témoignages', 'date de la dernière maj'];
  datasource = new MatTableDataSource<CasLight>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private http: HttpClient, private router: Router) {
  }


  ngOnInit() {
    this.getCases();
    this.generateYears();
  }

  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
  }

  public getCases = () => {
    this.http.get('http://localhost:8080/api/cas').subscribe((res: any) => {
      this.datasource.data = res.data;
      if (this.selectedType !== '') {
        this.datasource.data = this.datasource.data.filter(item => item.cas_classification === this.selectedType);
      }
      if (this.selectedYears !== '') {
        this.datasource.data = this.datasource.data.filter(item => item.cas_AAAA === this.selectedYears.toString());
      }
    });
  }

  public toCase(id: string) {
    this.router.navigate(['/cas/' + id.replace(/\s/g, '')]);
  }

  public toTesti(id: string) {
    this.router.navigate(['/temoignage/' + id.replace(/\s/g, '')]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();
  }

  generateYears() {
    for (let i = 1947; i <= 2020; i++) {
      this.years.push(i);
    }
  }
}
