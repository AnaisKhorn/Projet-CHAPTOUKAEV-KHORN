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
      // tslint:disable-next-line:one-line
     /* for (let i = 0; i < data.data.length; i++){
        this.tabObj.push(data.data[i]);
      }
      console.log(this.tabObj);
      this.populateTabTem();*/
     this.tabTem = data;
    });
  }

  // tslint:disable-next-line:one-line
  private populateTabTem(){
    // tslint:disable-next-line:one-line
    for (let i = 0; i < this.tabObj.length; i++ ){
      // tslint:disable-next-line:max-line-length
      this.tabTem.push(new Temoignage(this.tabObj[i]._id, this.tabObj[i].id_cas, this.tabObj[i].cas_numEtude, this.tabObj[i].id_temoignage, this.tabObj[i].tem_nom_dossier, this.tabObj[i].tem_title_nickname, this.tabObj[i].tem_title_type, this.tabObj[i].tem_resume, this.tabObj[i].tem_Ti_type, this.tabObj[i].tem_age, this.tabObj[i].tem_genre, this.tabObj[i].tem_adr_commune, this.tabObj[i].tem_adr_CP, this.tabObj[i].tem_adr_dpt, this.tabObj[i].tem_adr_pays, this.tabObj[i].tem_xp_formation_niveau_type, this.tabObj[i].tem_xp_activite_type, this.tabObj[i].tem_xp_aero, this.tabObj[i].tem_xp_aero_niveau, this.tabObj[i].tem_xp_astro, this.tabObj[i].tem_xp_astro_niveau, this.tabObj[i].tem_xp_topo, this.tabObj[i].tem_xp_topo_niveau, this.tabObj[i].tem_xp_UFO, this.tabObj[i].tem_xp_UFO_niveau, this.tabObj[i].tem_obs_moyen, this.tabObj[i].tem_emotions_lib, this.tabObj[i].tem_activite_lib, this.tabObj[i].tem_avis_interpretation_lib, this.tabObj[i].tem_avis_interet_lib, this.tabObj[i].tem_avis_change_lib, this.tabObj[i].tem_avis_science_lib, this.tabObj[i].tem_experience_change_lib));
    }
  }

}
