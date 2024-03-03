import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { KeluhanService } from './keluhan.service';
import { keluhKesahModel } from './keluhKesahModel';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import {NgxPaginationModule} from 'ngx-pagination';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-keluhan',
  templateUrl: './keluhan.component.html',
  styleUrls: ['./keluhan.component.css']
})
export class KeluhanComponent implements OnInit {
  totalLength:any;
  page:number=1;
  dataKeluhan: any;
  columnTable = ['NAMA', 'SARAN', 'AKSI'];
  form = new keluhKesahModel();
  returnedArray?: string[];



  constructor(
    private keluhService: KeluhanService,
    private router: Router


  ) { }

  ngOnInit(): void {
    this.getDataKeluhan()
    this.returnedArray = this.dataKeluhan.slice(0, 5);
  }
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.dataKeluhan.slice(startItem, endItem);
  }

  getDataKeluhan() {
    this.keluhService.getDataKeluhan().subscribe(res => {
      this.dataKeluhan = res


    })
  }

  addData() {
    this.keluhService.addData(this.form).subscribe(res => {
      Swal.fire("Data Berhasil Disimpan");
      window.location.reload()
    })
  }

  deleteData(id:keluhKesahModel){
    Swal.fire({
      title: "Apakah kamu yakin?",
      text: "kamu akan menghapus data ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Tidak",
      confirmButtonText: "Ya, hapus data!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.keluhService.deleteData(id).subscribe(res=>{
          this.getDataKeluhan()
        })
        Swal.fire({
          title: "Terhapus!",
          text: "Berhasil menghapus data",
          icon: "success"
        });
      }
    });

  }

}
