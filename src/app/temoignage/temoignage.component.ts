import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Temoignage} from './Temoignage';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-temoignages',
  templateUrl: './temoignage.component.html',
  styleUrls: ['./temoignage.component.css']
})
export class TemoignageComponent implements OnInit {

  static GET_TESTI = 'http://localhost:8080/api/temoignage/';

  tabObj: Array<any>;
  tabTem: Temoignage[];

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {

    this.tabObj = [];
    this.tabTem = [];

    this.http.get(TemoignageComponent.GET_TESTI + this.route.snapshot.params.id).subscribe((data: any) => {
     this.tabTem = data;
    });
  }

}
