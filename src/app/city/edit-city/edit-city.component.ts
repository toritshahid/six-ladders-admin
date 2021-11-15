import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-edit-city',
  templateUrl: './edit-city.component.html',
  styleUrls: ['./edit-city.component.css']
})
export class EditCityComponent implements OnInit {


  message: any={};
  id: any='';
  ngOnInit(): void {
  }
  closeResult = '';

  constructor(private modalService: NgbModal, private st: CityService) {}
  form = new FormGroup({
    nStateId: new FormControl('', [Validators.required]),
    STitle: new FormControl('', [Validators.required]),
    BActive: new FormControl('', [Validators.required]),
    NEditedBy: new FormControl('', [Validators.required]),
    });
  save(){
    console.log(this.form.value)
      this.st.editCity(this.form.value).subscribe((data: {}) => {
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
