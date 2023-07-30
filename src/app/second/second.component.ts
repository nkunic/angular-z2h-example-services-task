import { Component } from '@angular/core';
import { ShapesService } from '../shapes.service';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
})
export class SecondComponent {
  shape = '';
  color = '';
  shapeColorClass = '';

  constructor(private shapesService: ShapesService) {}

  drawShape() {
    this.shapeColorClass = this.shapesService.getClassName(
      this.shape,
      this.color
    );
  }
}
