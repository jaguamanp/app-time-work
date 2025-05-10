import { Component } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-time',
  imports: [
    TableModule,
    CommonModule,
    SelectModule,
    MultiSelectModule,
    InputTextModule,
    InputIconModule,
    IconFieldModule,
    TagModule,
    FormsModule
  ],
  templateUrl: './my-time.component.html',
  styleUrl: './my-time.component.scss'
})
export class MyTimeComponent {
  customers: any[] = [];

  representatives: any[] = [];

  statuses: any[] = [];

  loading: boolean = false;

  activityValues: number[] = [0, 100];

  value: any;

  started: boolean= false;

  tiempo: string = "00:00:00";
  countSeg: number = 0; 
  dataTimer: any;


  constructor(){
  }


  onSearch(event: Event)
  {

  }


  btnAccion(accion: string)
  {
    switch(accion){

      case "INICIAR":
        this.started = true;
        this.dataTimer = setInterval(() => {
          this.incrementTime();
        }, 1000);
      break;

      case "PAUSAR":
        
      break;

      case "STOP":
        this.stop();
      break;
    }

  }

  incrementTime() {
    this.countSeg++;
    let hours = Math.floor(this.countSeg / 3600); 
    let minutes = Math.floor((this.countSeg % 3600) / 60);
    let remainingSeconds = this.countSeg % 60;
    this.tiempo = this.formatTime(hours, minutes, remainingSeconds);
  }

  formatTime(hours: number, minutes: number, seconds: number): string {
    return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
  }

  pad(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }

  stop() {
    this.started = false;
    clearInterval(this.dataTimer); 
  }

}
