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
  shapeClass = '';

  constructor(private shapesService: ShapesService) { }

  drawShape() {
    this.shapeClass = this.shapesService.getClassName(this.shape, this.color);
  }
}
