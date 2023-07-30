import { Component } from '@angular/core';
import { ShapesService } from '../shapes.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent {
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
