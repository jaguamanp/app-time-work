import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "../nav/nav.component";
//import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';
//import { AuthService } from "../../services/auth/auth.service";
import { MenuLateralService } from '../../services/core/menuLateral.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    NavComponent,
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  
})
export class LayoutComponent implements OnInit{

  isLoggedIn = false;

  menuVisible: boolean = true;

  constructor(
    //private auth: Auth,
    //private authService: AuthService,
    private menuLateralService: MenuLateralService
  ) {}

  onMenuToggle() {
    this.menuLateralService.menuVisible$.subscribe(visible => {
       this.menuVisible = visible; 
    });
   
  }

  ngOnInit() {

    this.isLoggedIn= true;
    /*
    onAuthStateChanged(this.auth, (user) => {
      console.log(user);
      this.isLoggedIn = !!user;
    });
    */
  }
}
