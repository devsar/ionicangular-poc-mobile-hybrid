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
    this.bajarData(infiniteScroll);
    if (this.articulosDescargados >= 400) {
      infiniteScroll.target.disable = true;
    }

  }

  constructor(private faService: FetchApiService) {}

  bajarData(infiniteScroll): void {
    this.faService.fetchData(this.crearEndpoint()).subscribe(
        posts => {
          this.posts.push(...posts);
          if (infiniteScroll != null) {
            infiniteScroll.target.complete();
          }
        }
      );
    this.articulosDescargados += this.articulosPorPagina;
  }

  crearEndpoint() {
    this.paginaActual = this.paginaActual + 1;
    this.articulosDescargados = this.paginaActual * this.articulosPorPagina;
    return 'https://api.punkapi.com/v2/beers?page=' + this.paginaActual + '&per_page=' + this.articulosPorPagina;
  }

  doRefresh() {
    this.paginaActual = 0;
    this.articulosDescargados = 0;
    this.articulosPorPagina = 10;
    this.posts = [];
    this.bajarData(null);
  }

  ngOnInit() {
    this.bajarData(null);
  }
}
