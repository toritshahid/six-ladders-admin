import { Component, ViewChild,OnInit } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { IndustryService } from '../services/industry.service';
import { EducationService } from '../services/education.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StateService } from '../services/state.service'
import {CityService } from '../services/city.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'six-ladders-admin';
  active = 'Industry';




  constructor() {
    // this.refreshCountries();
  }
  ngOnInit(){

  }





}
