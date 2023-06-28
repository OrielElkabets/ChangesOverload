import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-trigger',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './change-trigger.component.html',
  styleUrls: ['./change-trigger.component.scss']
})
export class ChangeTriggerComponent {
  time = new Date()
  constructor(){
    setInterval(() => {
      this.time = new Date()
    }, 1000)
  }
}
