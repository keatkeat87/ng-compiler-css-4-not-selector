import { Component } from '@angular/core';
import { CheckboxComponent } from "./checkbox/checkbox.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CheckboxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'css-selector-not';
}
