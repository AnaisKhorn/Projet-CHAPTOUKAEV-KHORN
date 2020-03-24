class Cas {
  _id: string;
  id_cas: string;
  cas_nom_dossier: string;
  cas_zone_nom: string;
  cas_zone_code: string;
  cas_zone_type: string;
  cas_AAAA: string;
  cas_MM: string;
  cas_JJ: string;
  cas_resume: string;
  cas_resume_web: string;
  cas_public: string;
  cas_temoignages_nb: string;
  cas_temoins_nb: string;
  cas_nb_PAN: string;
  cas_nb_PAN_approx: string;
  cas_date_maj: string;
  cas_etrangete: string;
  cas_etrangete_err: string;
  cas_etrangete_calc: string;
  cas_etrangete_calc_err: string;
  cas_fiabilite: string;
  cas_fiabilite_err: string;
  cas_fiabilite_calc: string;
  cas_qte_information: string;
  cas_qte_information_calc: string;
  cas_consistance: string;
  cas_consistance_calc: string;
  cas_consistance_calc_err: string;
  cas_classification: string;
  cas_classification_calc: string;
  cas_numEtude: string;


  // tslint:disable-next-line:max-line-length
  constructor( _id: string,  id_cas: string,  cas_nom_dossier: string,  cas_zone_nom: string,  cas_zone_code: string,  cas_zone_type: string,  cas_AAAA: string,  cas_MM: string,  cas_JJ: string,  cas_resume: string,  cas_resume_web: string,  cas_public: string,  cas_temoignages_nb: string,  cas_temoins_nb: string,  cas_nb_PAN: string,  cas_nb_PAN_approx: string,  cas_date_maj: string,  cas_etrangete: string,  cas_etrangete_err: string,  cas_etrangete_calc: string,  cas_etrangete_calc_err: string,  cas_fiabilite: string,  cas_fiabilite_err: string,  cas_fiabilite_calc: string,  cas_qte_information: string,  cas_qte_information_calc: string,  cas_consistance: string,  cas_consistance_calc: string,  cas_consistance_calc_err: string,  cas_classification: string,  cas_classification_calc: string,  cas_numEtude: string) {
    this._id = _id;
    this.id_cas = id_cas;
    this.cas_nom_dossier = cas_nom_dossier;
    this.cas_zone_nom = cas_zone_nom;
    this.cas_zone_code = cas_zone_code;
    this.cas_zone_type = cas_zone_type;
    this.cas_AAAA = cas_AAAA;
    this.cas_MM = cas_MM;
    this.cas_JJ = cas_JJ;
    this.cas_resume = cas_resume;
    this.cas_resume_web = cas_resume_web;
    this.cas_public = cas_public;
    this.cas_temoignages_nb = cas_temoignages_nb;
    this.cas_temoins_nb = cas_temoins_nb;
    this.cas_nb_PAN = cas_nb_PAN;
    this.cas_nb_PAN_approx = cas_nb_PAN_approx;
    this.cas_date_maj = cas_date_maj;
    this.cas_etrangete = cas_etrangete;
    this.cas_etrangete_err = cas_etrangete_err;
    this.cas_etrangete_calc = cas_etrangete_calc;
    this.cas_etrangete_calc_err = cas_etrangete_calc_err;
    this.cas_fiabilite = cas_fiabilite;
    this.cas_fiabilite_err = cas_fiabilite_err;
    this.cas_fiabilite_calc = cas_fiabilite_calc;
    this.cas_qte_information = cas_qte_information;
    this.cas_qte_information_calc = cas_qte_information_calc;
    this.cas_consistance = cas_consistance;
    this.cas_consistance_calc = cas_consistance_calc;
    this.cas_consistance_calc_err = cas_consistance_calc_err;
    this.cas_classification = cas_classification;
    this.cas_classification_calc = cas_classification_calc;
    this.cas_numEtude = cas_numEtude;
  }
}
