import { Component, ViewChild, OnInit } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { FetchApiService } from '../services/fetch-api.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  items = [];

  paginaActual = 0;
  articulosDescargados = 0;
  articulosPorPagina = 10;
  posts: any[] = [];

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push( this.items.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.target.complete();
    }, 500);
  }

  constructor(private faService: FetchApiService) {for (let i = 0; i < 30; i++) {
    this.items.push( this.items.length );
  }}

  bajarData(): void {
    this.faService.fetchData(this.crearEndpoint()).subscribe(posts => this.posts.push(...posts));
  }

  printearPosts() {
    console.log(this.posts.length);
    console.log(typeof(this.posts));
    console.log(this.posts);
  }
  printearPost() {
    console.log(this.posts[0].length);
    console.log(typeof(this.posts[0]));
    console.log(this.posts[0]);
  }

  crearEndpoint() {
    this.paginaActual = this.paginaActual + 1;
    this.articulosDescargados = this.paginaActual * this.articulosPorPagina;
    return 'https://api.punkapi.com/v2/beers?page=' + this.paginaActual + '&per_page=' + this.articulosPorPagina;
  }
  doRefresh() {
    this.paginaActual = 0;
    this.articulosDescargados = 0;
    this.articulosPorPagina = 15;
    this.posts = [];
    this.bajarData();
  }

  loadData(event) {
    setTimeout(() => {
      this.doRefresh();

      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.posts.length === this.articulosDescargados) {
        event.target.disabled = true;
      }
    }, 500);
  }

  /*toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }*/

  ngOnInit() {
    console.log('onInit');
    this.bajarData();
  }
}
