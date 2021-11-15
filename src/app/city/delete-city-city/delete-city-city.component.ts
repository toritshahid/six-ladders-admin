import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-delete-city-city',
  templateUrl: './delete-city-city.component.html',
  styleUrls: ['./delete-city-city.component.css']
})
export class DeleteCityCityComponent implements OnInit {

  message: any={};
  constructor(private service: CityService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  delete(){
    return this.service.DeleteCityId().subscribe((data:{})=>{
      this.message =data;
      this.close();
    })

  }
  close(): any{
    this.modalService.dismissAll();
  }

}
