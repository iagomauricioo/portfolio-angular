import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CvbuttonComponent } from "./cvbutton/cvbutton.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CvbuttonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Iago Mauricio';
}
