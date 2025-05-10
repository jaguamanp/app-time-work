import { Component, Output, EventEmitter } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { MenuLateralService } from '../../services/core/menuLateral.service';
import { environmets } from '../../../environments/environments';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ToolbarModule,
    MenuModule,
    ButtonModule,
    InputTextModule,
    AvatarModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Output() menuToggle = new EventEmitter<void>();

  nameAplication: any = environmets.nameProject;

  userName: string | null = null;

  userMenu = [
    { label: 'Perfil', icon: 'pi pi-user' },
    { label: 'Configuración', icon: 'pi pi-cog' },
    { separator: true },
    { label: 'Cerrar sesión', icon: 'pi pi-sign-out', command: () => this.onSignOutClick()  }
  ];

  constructor(
    private menuLateralService: MenuLateralService,
  ){
  }

  onSignOutClick()
  {
    this.logout();

  }

  onMenuToggle() {
    this.menuLateralService.toggleMenu();
  }


  logout(){
  }

}
