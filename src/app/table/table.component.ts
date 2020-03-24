import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {HttpClient} from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  cas: CasLight[] = [];
  page = 1;
  pagesize = 10;

  // tslint:disable-next-line:max-line-length
  displayedColumns = ['id', 'nom', 'type de cas', 'résumé du cas', 'région', 'année du cas', 'nb de témoignages', 'date de la dernière maj'];
  dataSource = new MatTableDataSource<CasLight>();

  searchText = '';

  constructor(private http: HttpClient) {}


  ngOnInit() {
    this.getAllCases();
  }

  public getAllCases = () => {
    this.http.get('localhost:8080/api/cas').subscribe((data: any) => this.cas = data.cas);
  }
}