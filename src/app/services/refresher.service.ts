import { Injectable } from '@angular/core';
import { EducationService } from './education.service';
import { IndustryService } from './industry.service';

@Injectable({
  providedIn: 'root'
})
export class RefresherService {
  industries: any=[]
  industriesList: any=[]
  educationInstitutes: any=[]
  educationList: any=[]
  constructor(private indservice: IndustryService, private edu: EducationService) { }
  getIndustries(){
    return this.indservice.getAllIndustry().subscribe((result: {}) => {
      this.industriesList= result;
      this.industries=this.industriesList.data;
      console.log(this.industries)
    })
  }
  getEducation(){
    return this.edu.getAllEducation().subscribe((data: {}) => {
      this.educationList= data;
      this.educationInstitutes=this.educationList.data;
    })
  }
}
