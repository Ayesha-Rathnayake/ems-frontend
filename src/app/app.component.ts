import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule], // <-- add these here
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {}
