import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cas} from './Cas';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cas',
  templateUrl: './cas.component.html',
  styleUrls: ['./cas.component.css']
})
export class CasComponent implements OnInit {

  static GET_CASES = 'http://localhost:8080/api/cas/';

  tabObj: Array<any>;
  tabCas: Cas[];
  cas: Cas;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {

    this.tabObj = [];
    this.tabCas = [];

    this.http.get(CasComponent.GET_CASES + this.route.snapshot.params.id).subscribe((data: any) => {
     this.cas = data.cas;
    });
  }

}
