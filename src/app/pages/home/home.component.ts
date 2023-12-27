import {Component, signal} from '@angular/core';
import {CommonModule} from "@angular/common";
import { Task } from '../../models/tasks.interface'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  tasks = signal<Task[]>([
    {
      id: 1,
      title: 'tarea 1',
      completed: false,
    },
    {
      id: 2,
      title: 'tarea 2',
      completed: false,
    },
  ]);

  changeHandler (event: Event){
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    this.addTask(newTask);
    input.value = '';
  }

  addTask (title: string){
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    }
    this.tasks.update((tasks) => [...tasks, newTask]);
  }

  deleteTask(index: number) {
    this.tasks.update( (tasks) =>
      tasks.filter((task, position) => position !== index));
  }

}
