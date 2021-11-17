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
  page: any;
  count = 0;
  tableSize = 8;
  tableSizes = [3, 6, 9, 12];
  displayedColumns: string[] = ['id', 'name', 'action'];
  industries: any=[]
  industriesList: any=[]
  educationInstitutes: any=[]
  educationList: any=[]
  states: any=[];
  statesList: any=[];
  cities: any=[];
  cityList: any=[];
  @ViewChild(MatTable, { static: true })
  table!: MatTable<any>
  closeResult = '';

  constructor(private indservice: IndustryService, private edu: EducationService,
  private modalService: NgbModal, private sts: StateService, private ct: CityService ) {
    // this.refreshCountries();


  }
  onTableDataChange(event: any){
    this.page = event;
    this.getIndustries();
    this.getCity();
    this.getEducation();
    this.getStates();
  }

  open(content: any,id: any) {
    this.edu.id=id;
    this.indservice.id=id;
    this.sts.id=id;
    this.ct.id=id;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;

    });
  }
  ngOnInit(): void {
    this.getIndustries();
    this.getCity();
    this.getEducation();
    this.getStates();

  }

  close(): any{
    this.modalService.dismissAll();
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  getIndustries(){
    return this.indservice.getAllIndustry().subscribe((result: {}) => {
      this.industriesList= result;
      this.industries=this.industriesList.data;
    })
  }
  getEducation(){
    return this.edu.getAllEducation().subscribe((data: {}) => {
      this.educationList= data;
      this.educationInstitutes=this.educationList.data;
    })

  }
    getStates(){
    return this.sts.getAllStates().subscribe((result: {}) => {
      this.statesList= result;
      this.states=this.statesList.data;
    })
  }
   getCity(){
    return this.ct.getAllCity().subscribe((result: {}) => {
      this.cityList= result;
      this.cities=this.cityList.data;
    })
  }




}
