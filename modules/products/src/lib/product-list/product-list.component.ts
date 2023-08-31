import { Observable, debounceTime, filter, switchMap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ProductSearchService } from '../product-search.service';
import { FormControl } from '@angular/forms';
import { Product } from '../models/product-search.model';

@Component({
  selector: 'lib-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit{

  control = new FormControl('', {nonNullable: true})
  products$!: Observable<Product[]>

  constructor( private productSearchService: ProductSearchService){}

  ngOnInit(): void {
    this.products$ = this.control.valueChanges.pipe(
      debounceTime(300),
      filter(text => text.length > 1),
      switchMap(text => this.productSearchService.searchByTerm(text))
    );
  }

  


}
