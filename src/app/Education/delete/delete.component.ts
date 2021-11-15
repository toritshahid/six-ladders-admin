import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EducationService } from '../../services/education.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
message: any={};
  constructor(private service: EducationService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  delete(){
    return this.service.DeleteEducationById().subscribe((data:{})=>{
      this.message =data;
      this.close();
    })

  }
  close(): any{
    this.modalService.dismissAll();

  }

}
