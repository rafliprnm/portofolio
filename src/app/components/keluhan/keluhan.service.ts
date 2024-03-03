import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { keluhKesahModel } from './keluhKesahModel';

@Injectable({
  providedIn: 'root'
})
export class KeluhanService {

  constructor(
    private httpClient: HttpClient
  ) { }

  httpOptions: any
  url = 'https://6330e05d591935f3c89654b6.mockapi.io/api/v1/keluhKesah'

  getDataKeluhan() {
    return this.httpClient.get(this.url, this.httpOptions)
  }

  addData(data: keluhKesahModel) {
    return this.httpClient.post(this.url, data)
  }

  deleteData(id: keluhKesahModel) {
    return this.httpClient.delete(this.url+'/'+id)
  }

}
