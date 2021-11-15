import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EducationService } from '../../services/education.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  message: any={};
  id: any='';
  ngOnInit(): void {
  }
  closeResult = '';

  constructor(private modalService: NgbModal, private edu: EducationService) {}
  form = new FormGroup({
    // nEducationId: new FormControl('', [Validators.required]),
    sTitle: new FormControl('', [Validators.required]),
    bActive: new FormControl('', [Validators.required]),
    nEditedBy: new FormControl('', [Validators.required]),
    });
  save(){
    console.log(this.form.value)
      this.edu.editEducation(this.form.value).subscribe((data: {}) => {
        console.log("values"+(this.form.value))
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
