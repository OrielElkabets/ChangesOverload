import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeTriggerComponent } from "./components/change-trigger/change-trigger.component";
import { GenerateArrayPipe } from "./pipes/generate-array.pipe";
import { DummyDefaultComponent } from "./components/dummy-default/dummy-default.component";
import { DummyOnPushComponent } from "./components/dummy-on-push/dummy-on-push.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, ChangeTriggerComponent, GenerateArrayPipe, DummyDefaultComponent, DummyOnPushComponent]
})
export class AppComponent {
  title = 'ChangesOverload';
}
