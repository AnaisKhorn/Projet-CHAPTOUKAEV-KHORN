class CasLight {
  _id: string;
  id_cas: string;
  cas_nom_dossier: string;
  cas_zone_nom: string;
  cas_zone_type: string;
  cas_AAAA: string;
  cas_temoignages_nb: string;
  cas_resume_web: string;
  cas_date_maj: string;


  // tslint:disable-next-line:max-line-length
  constructor(_id: string,  id_cas: string,  cas_nom_dossier: string,  cas_zone_nom: string, cas_zone_type: string, cas_AAAA: string, cas_temoignages_nb: string, cas_resume_web: string, cas_date_maj: string) {
    this._id = _id;
    this.id_cas = id_cas;
    this.cas_nom_dossier = cas_nom_dossier;
    this.cas_zone_nom = cas_zone_nom;
    this.cas_zone_type = cas_zone_type;
    this.cas_AAAA = cas_AAAA;
    this.cas_temoignages_nb = cas_temoignages_nb;
    this.cas_resume_web = cas_resume_web;
    this.cas_date_maj = cas_date_maj;
  }
}
