import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  elements: any = [];
  headElements = ['id', 'nom', 'type de cas', 'résumé du cas', 'année du cas', 'nb de témoignages', 'date de la dernière maj'];

  searchText = '';

  maxVisibleItems = 10;


  ngOnInit() {

  }
}
