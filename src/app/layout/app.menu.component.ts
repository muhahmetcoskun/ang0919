import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'ANASAYFA',
                items: [
                    { label: 'Anasayfa', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'PERSONEL BİLGİLERİ TANIMLAMALAR',
                items: [
                    { label: 'Personel Prim Tanımla', icon: 'pi pi-money-bill', routerLink: ['/pbtanimlamalar/personelprimtanimla'] },
              
  
                    
                ]
            },
            {
                label: 'TANIMLAMALAR',
                items: [
                    { label: 'Tatil Günü Tanımla', icon: 'pi pi-fw pi-id-card', routerLink: ['/tanimlamalar/tatilgunutanimla'] },
                    { label: 'Prim Türleri Tanımla', icon: 'pi pi-money-bill', routerLink: ['/tanimlamalar/primturleritanimla'] },
                    { label: 'Çalışma Süresi Tanımla', icon: 'pi pi-clock', routerLink: ['/tanimlamalar/calismasuresitanimla'] }
                   
                    
                ]
            }
          
            
        ];
    }
}
