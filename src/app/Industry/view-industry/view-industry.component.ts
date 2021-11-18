import { AfterContentInit, AfterViewInit, Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IndustryService } from 'src/app/services/industry.service';
import { Industry } from 'src/app/shared/industry';

@Component({
  selector: 'app-view-industry',
  templateUrl: './view-industry.component.html',
  styleUrls: ['./view-industry.component.css']
})
export class ViewIndustryComponent implements OnInit, AfterViewInit {
  industries: any=[]
  industriesList: any=[]
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  public displayedColumns: string[] = ['nIndustryId', 'sTitle' ];
  public columnsToDisplay: string[] = [...this.displayedColumns, 'actions'];
  public columnsFilters = {};
  public dataSource: MatTableDataSource<Industry>;
  private serviceSubscribe!: Subscription;
  closeResult = '';
  constructor(private indservice: IndustryService,  private modalService: NgbModal,private router: Router,) {
    this.dataSource = new MatTableDataSource<any>();
    this.getIndustries();
   }

  ngOnInit(): void {
    this.getIndustries();
    this. serviceSubscribe = timer(0, 1000).pipe(
      switchMap(() => this.indservice.getAllIndustry())
    ).subscribe((result: {}) => {
      this.industriesList= result;
      this.dataSource.data=this.industriesList.data;
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
  getIndustries(){
    return this.indservice.getAllIndustry().subscribe((result: {}) => {
      this.industriesList= result;
      this.dataSource.data=this.industriesList.data;


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
