import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  @Input({required:true}) name!: string;
}
