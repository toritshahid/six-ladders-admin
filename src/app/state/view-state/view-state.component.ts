import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { StateService } from 'src/app/services/state.service';
import { State } from 'src/app/shared/state';

@Component({
  selector: 'app-view-state',
  templateUrl: './view-state.component.html',
  styleUrls: ['./view-state.component.css']
})
export class ViewStateComponent implements OnInit {

  dataList: any=[]
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  public displayedColumns: string[] = ['nStateId', 'sTitle' ];
  public columnsToDisplay: string[] = [...this.displayedColumns, 'actions'];
  public columnsFilters = {};
  public dataSource: MatTableDataSource<State>;
  private serviceSubscribe!: Subscription;
  closeResult = '';
  constructor(private indservice: StateService,  private modalService: NgbModal,private router: Router,) {
    this.dataSource = new MatTableDataSource<any>();
   }

  ngOnInit(): void {
    this.getStates();
    this. serviceSubscribe = timer(0, 1000).pipe(
      switchMap(() => this.indservice.getAllStates())
    ).subscribe((result: {}) => {
      this.dataList= result;
      this.dataSource.data=this.dataList.data;
  })
}
  open(content: any,id: any) {

    this.indservice.id=id;

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;

    });
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
  getStates(){
    return this.indservice.getAllStates().subscribe((result: {}) => {
      this.dataList= result;
      this.dataSource.data=this.dataList.data;

    })
  }
  applyFilter(name: string): void {
   this.dataSource.filter = name;
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  logout(): void{
    this.router.navigate(['/login']);

  }

}
