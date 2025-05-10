import { Component } from '@angular/core';
import { LayoutComponent } from "./core/layout/layout.component";
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [
    LayoutComponent,
    ButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'time-work';

  ngAfterViewInit() {
    
  }
}
