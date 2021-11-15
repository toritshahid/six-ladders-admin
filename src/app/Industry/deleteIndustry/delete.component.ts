import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IndustryService } from 'src/app/services/industry.service';

@Component({
  selector: 'app-delete-industry',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteIndustryComponent implements OnInit {

  message: any={};
  constructor(private service: IndustryService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  delete(){
    return this.service.DeleteIndustryById().subscribe((data:{})=>{
      this.message =data;
      alert(this.message.sMessage)
      this.close();

    })

  }
  close(): any{
    this.modalService.dismissAll();
  }

}
