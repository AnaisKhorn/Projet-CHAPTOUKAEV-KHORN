import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cas} from './Cas';

@Component({
  selector: 'app-cas',
  templateUrl: './cas.component.html',
  styleUrls: ['./cas.component.css']
})
export class CasComponent implements OnInit {

  static GET_CASES = 'http://localhost:8080/api/cas/';

  tabObj: Array<any>;
  tabCas: Cas[];

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.tabObj = [];
    this.tabCas = [];

    this.http.get(CasComponent.GET_CASES).subscribe((data: any) => {
      // tslint:disable-next-line:one-line
      for (let i = 0; i < data.data.length; i++){
        this.tabObj.push(data.data[i]);
      }
      console.log(this.tabObj);
      this.populateTabCas();
    });
  }

  // tslint:disable-next-line:one-line
  private populateTabCas(){
    // tslint:disable-next-line:one-line
    for (let i = 0; i < this.tabObj.length; i++ ){
      // tslint:disable-next-line:max-line-length
      this.tabCas.push(new Cas(this.tabObj[i]._id, this.tabObj[i].id_cas, this.tabObj[i].cas_nom_dossier, this.tabObj[i].cas_zone_nom, this.tabObj[i].cas_zone_code, this.tabObj[i].cas_zone_type, this.tabObj[i].cas_AAAA, this.tabObj[i].cas_MM, this.tabObj[i].cas_JJ, this.tabObj[i].cas_resume, this.tabObj[i].cas_resume_web, this.tabObj[i].cas_public, this.tabObj[i].cas_temoignages_nb, this.tabObj[i].cas_temoins_nb, this.tabObj[i].cas_nb_PAN, this.tabObj[i].cas_nb_PAN_approx, this.tabObj[i].cas_date_maj, this.tabObj[i].cas_etrangete, this.tabObj[i].cas_etrangete_err, this.tabObj[i].cas_etrangete_calc, this.tabObj[i].cas_etrangete_calc_err, this.tabObj[i].cas_fiabilite, this.tabObj[i].cas_fiabilite_err, this.tabObj[i].cas_fiabilite_calc, this.tabObj[i].cas_qte_information, this.tabObj[i].cas_qte_information_calc, this.tabObj[i].cas_consistance, this.tabObj[i].cas_consistance_calc, this.tabObj[i].cas_consistance_calc_err, this.tabObj[i].cas_classification, this.tabObj[i].cas_classification_calc, this.tabObj[i].cas_numEtude));
    }
  }

}
