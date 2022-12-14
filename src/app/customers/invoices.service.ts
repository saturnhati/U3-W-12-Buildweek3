import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InterfaceInvoice } from './interface-invoice.interface';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  constructor(private http: HttpClient) { }
  
  invoicesArr :InterfaceInvoice[] = []

  addInvoice(obj: InterfaceInvoice) {
    return this.http.post<InterfaceInvoice>('http://localhost:3000/invoices', obj)
  }

  getInvoices() {
    return this.http.get<InterfaceInvoice[]>('http://localhost:3000/invoices')
  }

  deleteInvoice(obj: InterfaceInvoice) {
    return this.http.delete<InterfaceInvoice>('http://localhost:3000/invoices/' + obj.id)
  }

  updateInvoice(data: Partial<InterfaceInvoice>, id: number | undefined) {
    return this.http.patch<InterfaceInvoice>('http://localhost:3000/invoices/' + id, data)
  }

  pushInvoice(obj: InterfaceInvoice) {
    return this.http.put<InterfaceInvoice>('http://localhost:3000/invoices/' + obj.id, obj)
  }
}
