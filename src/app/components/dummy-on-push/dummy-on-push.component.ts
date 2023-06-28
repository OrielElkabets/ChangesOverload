import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dummy-on-push',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dummy-on-push.component.html',
  styleUrls: ['./dummy-on-push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DummyOnPushComponent {
  counter = 0
  
  getCounter(){
    this.counter++
    return this.counter
  }
}
