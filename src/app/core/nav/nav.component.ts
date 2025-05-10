import { CommonModule } from '@angular/common';
import { Component, OnInit, Input} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router'; // Asegúrate de importar esto
import { MenuItem } from 'primeng/api';
import { MenubarModule } from "primeng/menubar";
import { MenuModule } from "primeng/menu";
import { PanelMenuModule } from 'primeng/panelmenu';
import { RippleModule } from 'primeng/ripple';
import { MenuLateralService } from '../../services/core/menuLateral.service';
//import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
    RouterModule,
    RippleModule,
    MenubarModule,
    MenuModule,
    PanelMenuModule
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent implements OnInit {

  model: MenuItem[] = [];

  menuVisible: boolean = true; 
  userRole: string | null = null;

  constructor(
    private menuLateralService: MenuLateralService,
    //private authService: AuthService
  ){

  }

  ngOnInit() {


    /*
    this.authService.getUserRole().subscribe(role => {
      this.userRole = role;
      this.setMenuItems(); // Llamar a la función para establecer el menú según el rol
    });
    */
  }


  setMenuItems(){
    this.menuLateralService.menuVisible$.subscribe(visible => {
      this.menuVisible = visible;
    });
    this.model = [
        {
            label: 'Home',
            items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }]
        },
        ...(this.userRole === 'SUPER-ADMIN' ? [
          {
            label: 'Administración',
            items: [
                { label: 'Empresa', icon: 'pi pi-fw pi-check-square', routerLink: ['/admin/company'] },
                { label: 'Usuario', icon: 'pi pi-fw pi-id-card', routerLink: ['/admin/user'] },
                { label: 'Suscripción', icon: 'pi pi-fw pi-check-square', routerLink: ['/admin/subscription'] },
                { label: 'Roles', icon: 'pi pi-fw pi-check-square', routerLink: ['/admin/rol'] },
                
            ]
        },
        ]: []),
        ...(((this.userRole === 'SUPER-ADMIN') || (this.userRole === 'GYM-ADMIN')) ? [
        {
          label: 'admin - GYM',
          items: [
              { label: 'Usuarios', icon: 'pi pi-fw pi-id-card', routerLink: ['/mamagement/user'] },
              { label: 'Clientes', icon: 'pi pi-fw pi-id-card', routerLink: ['/mamagement/client'] },
              { label: 'Tarifas', icon: 'pi pi-fw pi-check-square', routerLink: ['/mamagement/tarifas'] },
              { label: 'Pagos', icon: 'pi pi-fw pi-check-square', routerLink: ['/mamagement/rpayment'] },
          ]
        }
      ]: []),
    ];
  }


  toggleMenu() {
    this.menuVisible = !this.menuVisible; // Alterna entre visible/invisible
  }

}
