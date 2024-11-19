import { Component } from '@angular/core';
import { EmpleadoComponent } from "../empleado/empleado.component";

@Component({
  selector: 'app-plantilla',
  standalone: true,
  imports: [EmpleadoComponent],
  templateUrl: './plantilla.component.html',
  styleUrl: './plantilla.component.css'
})
export class PlantillaComponent {

}
