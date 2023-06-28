import { Component, AfterContentChecked, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dummy-default',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dummy-default.component.html',
  styleUrls: ['./dummy-default.component.scss'],
})
export class DummyDefaultComponent implements AfterContentChecked {
  counter = 0

  ngAfterContentChecked(): void {
    // this.counter++
    this.counter = Math.round(Math.random() * (10 - 1) + 1);
  }

  getCounter() {
    return this.counter
  }
}
