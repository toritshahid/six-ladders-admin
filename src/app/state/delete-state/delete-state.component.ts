import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-delete-state',
  templateUrl: './delete-state.component.html',
  styleUrls: ['./delete-state.component.css']
})
export class DeleteStateComponent implements OnInit {

  message: any={};
  constructor(private service: StateService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  delete(){
    return this.service.DeleteStateId().subscribe((data:{})=>{
      this.message =data;
      this.close();
    })

  }
  close(): any{
    this.modalService.dismissAll();
  }

}
