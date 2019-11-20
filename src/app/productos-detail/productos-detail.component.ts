import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-productos-detail',
  templateUrl: './productos-detail.component.html',
  styleUrls: ['./productos-detail.component.css']
})
export class ProductosDetailComponent implements OnInit {

  constructor(
    public route: ActivatedRoute
  ) {
}
  ngOnInit() {

  }

}
