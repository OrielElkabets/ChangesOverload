import { Component, AfterViewInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dummy-detach',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dummy-detach.component.html',
  styleUrls: ['./dummy-detach.component.scss'],
})
export class DummyDetachComponent implements AfterViewInit {
  cdr = inject(ChangeDetectorRef)
  counter = 0
  
  ngAfterViewInit(): void {
    this.cdr.detach()
  }

  getCounter() {
    return ++this.counter
  }

  detectChanges(){
    this.cdr.detectChanges()
  }
}
