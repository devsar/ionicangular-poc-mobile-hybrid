import { Component, ViewChild, OnInit } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  paginaActual = 0;
  articulosDescargados = 0;
  articulosPorPagina = 10;
  posts: [];

  constructor() {}

  bajarData() {
    // make a GET Request to the questions list endpoint and populate the questions array
    let endpoint = this.crearEndpoint();
    if (this.next) {
        endpoint = this.next;
    }
    // this.loadingQuestions = true;
    apiService(endpoint).then(data => {
        this.posts.push(...data);
    });
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

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  doOnScroll(event) {
    this.bajarData();
    console.log('Hay: ' + this.posts.length);
    console.log('Deberian haber: ' + this.articulosDescargados);
    console.log('Pagina actual: ' + this.paginaActual);
    console.log('Cant por pagina: ' + this.articulosPorPagina);
    // event.target.complete();

    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    if (this.posts.length === this.articulosDescargados) {
        event.target.disabled = true;
    }
  }

  ngOnInit() {
    this.bajarData();
  }
}
