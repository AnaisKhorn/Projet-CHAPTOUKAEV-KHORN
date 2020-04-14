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

  // tslint:disable-next-line:max-line-length
  displayedColumns = ['id', 'nom', 'type de cas', 'résumé du cas', 'région', 'année du cas', 'nb de témoignages', 'date de la dernière maj'];
  datasource = new MatTableDataSource<CasLight>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private http: HttpClient, private router: Router) {
  }


  ngOnInit() {
    this.getCases();
  }

  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
  }

  public getCases = () => {
    this.http.get('http://localhost:8080/api/cas').subscribe((res: any) => this.datasource.data = res.data);
  }

  public getCasesByDate() {

  }

  public getCasesByType() {

  }

  public getCasesByKeywords() {

  }

  public toCase(id: string) {
    this.router.navigate(['/cas/' + id.replace(/\s/g, '')]);
  }

  public toTesti(id: string) {
    this.router.navigate(['/temoignage/' + id.replace(/\s/g, '')]);
  }
}
