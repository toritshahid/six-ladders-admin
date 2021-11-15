import { Component, ViewChild,OnInit } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { IndustryService } from './services/industry.service';
import { EducationService } from './services/education.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RefresherService } from './services/refresher.service';
import { StateService } from './services/state.service'
import {CityService } from './services/city.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'six-ladders-admin';

  constructor(private indservice: IndustryService, private edu: EducationService,
  private modalService: NgbModal, private sts: StateService, private ct: CityService ) {
    // this.refreshCountries();

  }










}
