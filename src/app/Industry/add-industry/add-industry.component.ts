import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EducationService } from 'src/app/services/education.service';
import { IndustryService } from 'src/app/services/industry.service';

@Component({
  selector: 'app-add-industry',
  templateUrl: './add-industry.component.html',
  styleUrls: ['./add-industry.component.css']
})
export class AddIndustryComponent implements OnInit {
  message: any={};

  ngOnInit(): void {
  }
  closeResult = '';

  constructor(private modalService: NgbModal, private ins: IndustryService) {}
  form = new FormGroup({
    sTitle: new FormControl('', [Validators.required]),
    BActive: new FormControl('', [Validators.required]),
    NCreatedBy: new FormControl('', [Validators.required]),
    });
  save(){
      this.ins.addInsdustry(this.form.value).subscribe((data: {}) => {
        console.log(this.form.value)
        this.message=data;
        alert(this.message);
        alert("success")
      })
      this.close();
  }
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
  close(){
    this.modalService.dismissAll();
  }

}
