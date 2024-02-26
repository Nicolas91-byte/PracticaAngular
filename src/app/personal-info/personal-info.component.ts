import { Component } from '@angular/core';


@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent{
  nombre="Jesucristo";
   edad=33;
  ubicacion="La Roda, España";
  descripciones = [
    "Casi tan famoso como los Beatles.",
    "No me gustan los gorilas."
  ];
  descripcionActual = this.descripciones[0];
  currentImage = "../assets/image.jpg";
  currentIndex = 0;
}
