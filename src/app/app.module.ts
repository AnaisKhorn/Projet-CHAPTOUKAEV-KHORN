import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CasComponent } from './cas/cas.component';
import { TemoignageComponent } from './temoignage/temoignage.component';
import { TableComponent } from './table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule, Routes} from '@angular/router';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { StatsComponent } from './stats/stats.component';

const appRoutes: Routes = [
  {path: 'cas', component: CasComponent},
  {path: 'cas/:id', component: CasComponent},
  {path: 'temoignage', component: TemoignageComponent},
  {path: 'temoignage/:id', component: TemoignageComponent},
  {path: 'stats', component: StatsComponent},
  {path: '', component: TableComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CasComponent,
    TemoignageComponent,
    TableComponent,
    NavbarComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    RouterModule.forRoot(appRoutes),
    MDBBootstrapModule.forRoot(),
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
