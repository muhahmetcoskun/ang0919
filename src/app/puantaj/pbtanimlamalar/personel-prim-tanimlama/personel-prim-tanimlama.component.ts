import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

import { HelpMethod } from '../../help/help';
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as fileSaver from 'file-saver';
import { BasePBTanimlamalarService } from '../services/basepbtanimlamalar.service';
import { PrimTuru } from 'src/app/models/primTuru';
import { PersonelResponse } from 'src/app/models/personelresponse.model';
import { PersonelSearch } from 'src/app/models/personelsearch';
import { personelPrim } from '../models/personelPrim';
import { PrimTurleriList } from 'src/app/models/primTurleriList';

@Component({
  selector: 'app-personel-prim-tanimlama',
  templateUrl: './personel-prim-tanimlama.component.html',
  styleUrls: ['./personel-prim-tanimlama.component.scss'],
  providers: [MessageService]
})
export class PersonelPrimTanimlamaComponent {
  loading: boolean = true;
  constructor(private baseService: BasePBTanimlamalarService, private messageService: MessageService, private helpMethod: HelpMethod) {
  }

  async ngOnInit() {
    this.baseService.getAktif(this.apiname).subscribe(response => {
      //this.primTuruList = (response);
      
      console.log(this.primTuruList);
      for (let index = 0; index < response.length; index++) {

        this.primTurleri={
          id: null,
          adi: null,
          aktif: null,
          personelPrim:[
            {
            
                  id:null,
                  personelId:null,
                  primTuruId:null,  
                  aktif:null,
                  personels:null,
                  primTurus:null,
                  baslangicTarihi: null,
                  bitisTarihi: null
             

            }
          ]
        };
        this.primTurleri.id = response[index].id;
        this.primTurleri.aktif = response[index].aktif;
        this.primTurleri.adi = response[index].adi;
        this.primTuruList.push(this.primTurleri);
      }
      console.log(this.primTuruList);
      this.loading = false;
    });
  }
  apiname = "PrimTurus";
  exportColumns;
//primTurleri:PrimTurleriList;

primTurleri: PrimTurleriList = {
  id: null,
  adi: null,
  aktif: null,
  personelPrim:[],
}

  primTuruList: PrimTurleriList[] = [];
  primTuruList2: PrimTuru[] = [];
  personelPrim: personelPrim = {
    id: null,
    primTurus: [],
    personels: [],
    personelId: null,
    primTuruId: null,
    aktif: null
  }
  selectedpersonels: PersonelResponse[] = [];
  personels: PersonelResponse[] = [];
  personel: PersonelSearch = {
    TCKimlikNo: "",
    Adi: "",
    Soyadi: "",
  }
  personelEdit: PersonelResponse = {
    adi: "",
    personelKimlikId: null,
    soyadi: "",
    tcKimlikNo: "",
  }
  selectedprimTuruList: PrimTurleriList[] = [];
  submitted: boolean = false;
  cols: any[] = [];
  statuses: any[] = [];
  primTuruDialog: boolean = false;

  buttonS: boolean = true;

  personelSearch() {
    this.personelAra();
  }

  personelSearchAll() {
    this.personel = {
      Adi: "",
      Soyadi: "",
      TCKimlikNo: ""
    }
    this.personelAra();
  }
  personelAra() {
    this.loading = true;
    this.baseService.filtreliGetir("Personels/GetAllPersonelsAsync", this.personel).subscribe(response => {
      this.personels = (response);
      this.loading = false;
    });
  }

  editprimTuru(personel: PersonelResponse) {
    this.loading = true;
    this.personelEdit = personel
    this.selectedprimTuruList = null;
    this.baseService.birFiltreliGetir("PersonelPrims", "PersonelId", personel.personelKimlikId).subscribe(response => {
      // if (response.length > 0) {
      //   this.personelPrimDuzenle = (response);
      //   this.selectedprimTuruList = this.primTuruList;
      //   this.primTuruListEdit2 = this.primTuruList;
      //   for (let index = 0; index < this.personelPrimDuzenle.length; index++) {
      //     this.primTuruListEdit2 = this.primTuruListEdit2.filter(val => val.id !== this.personelPrimDuzenle[index].primTuruId);
      //   }
      //   for (let i = 0; i < this.primTuruListEdit2.length; i++) {
      //     this.selectedprimTuruList = this.selectedprimTuruList.filter(val => val !== this.primTuruListEdit2[i]);
      //   }
      // }
      //debugger;
      //this.primTuruList = (response);
     
    });
    this.loading = false;
    this.primTuruDialog = true;
  }


  editprimTuruToplu() {
    // this.loading = true;
    // this.toplu=true;
    // if (this.selectedpersonels.length == 0) {
    //   this.messageService.add({ severity: 'error', summary: 'Hata', detail: 'Personel Seçiniz.', life: 3000 });
    // }
    // else {
    //   //this.selectedpersonels//todoAC: yunus yapınca.
    //   if (true) {
    //     this.selectedprimTuruList = null;
    //     this.primTuruDialog = true;
    //   } else {
    //     this.messageService.add({ severity: 'error', summary: 'Hata', detail: 'Seçmiş Olduğunuz Personele Ait Kayıtlı Prim Bulunmaktadır.', life: 3000 });
    //   }
    // }
    // this.loading = false;
  }

  hideDialog() {
    //this.primTuruDialog = false;
    this.submitted = false;
    this.selectedprimTuruList = null;
    this.selectedprimTuruList = null;
    this.personelPrim = {
      id: null,
      primTurus: [],
      personels: [],
      personelId: null,
      primTuruId: null,
      aktif: null
    }
   // this.toplu=true;
    this.selectedpersonels=null;
  }

  primEkle() {
    console.log(this.selectedprimTuruList);
  }

  saveprimTuru() {

    // var primTurList = this.selectedprimTuruList;
    // this.personelPrim.personelId = 0;

    // if(this.toplu){
      
    //   for (let index = 0; index < this.selectedpersonels.length; index++) {
    //     this.personelPrim.personels.push(this.selectedpersonels[index].personelKimlikId);
    //   }
    // }
    // else{
    //   this.personelPrim.personels.push(this.personelEdit.personelKimlikId)

    // }

    
    // this.personelPrim.primTuruId = 0;
    // this.personelPrim.id = 0;
    // this.personelPrim.aktif = true;
    // this.personelPrim.baslangicTarihi = new Date("10/10/1900");
    // this.personelPrim.bitisTarihi = new Date("10/10/2900");
    // for (let index = 0; index < primTurList.length; index++) {
    //   this.personelPrim.primTuruList[index].id= 0;
    //   this.personelPrim.primTuruList[index].aktif= true;
    //   this.personelPrim.primTuruList[index].personelId= 0;
    //   this.personelPrim.primTuruList[index].id= 0;

    // }

    // this.baseService.kaydet("PersonelPrims", this.personelPrim).subscribe(
    //   (success) => {

    //     this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'Kayıt Başarılı', life: 3000 });
    //   },
    //   (error) => {

    //     this.messageService.add({ severity: 'success', summary: 'Hata', detail: 'Hata Oluştu', life: 3000 });
    //   }
    // );
    // primTurList = null;
    // this.hideDialog();
  }

  exportPdf() {
    const doc = new jsPDF('p', 'pt');
    doc['autoTable'](this.exportColumns, this.primTuruList);
    // doc.autoTable(this.exportColumns, this.products);
    doc.save("Çıktı.pdf");
  }

  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.primTuruList);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "Çıktı");
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    fileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}
