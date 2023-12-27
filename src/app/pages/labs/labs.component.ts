import {Component, signal} from '@angular/core';
import {immediateProvider} from "rxjs/internal/scheduler/immediateProvider";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  nombre: string = 'Leonardo';
  signalName = signal('Leonardo');
  taskList = signal(['']);

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.signalName.set(newValue);
    this.taskList().push(newValue);
  }
}
