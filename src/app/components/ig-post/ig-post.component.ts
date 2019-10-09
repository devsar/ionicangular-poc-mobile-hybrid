import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ig-post',
  templateUrl: './ig-post.component.html',
  styleUrls: ['./ig-post.component.scss'],
})
export class IgPostComponent implements OnInit {
  // La propiedad en donde guardamos toda la data de la API
  @Input() datos;
  // La clase que le pasamos a cada tarjeta de post para poder identificar su MG
  clase: string = 'tar' + this.datos.id;

  // Variables para administrar el estado del post
  megusteado = false;
  guardado = true;

  // Contamos los taps para saber cuando activar un doble tap
  taps = 0;

  guardar() {
    this.guardado = !this.guardado;
  }
  megustear() {
    this.megusteado = true;
    if (this.megusteado) {
      const selector = '.tar' + this.datos.id + ' .mielemento';
      const element =  document.querySelector(selector);
      element.classList.remove('oculto');
      element.addEventListener('animationend', () => {
        element.classList.add('oculto');
       });
    } else {
      const element =  document.querySelector('.mielemento');
      element.classList.add('oculto');
    }
  }
  megustear2() {
    this.megusteado = !this.megusteado;
  }
  escalar(el, escala) {
      el.style.transform = 'scale(' + escala + ')';
  }
  onPinchMove(gestureStatus) {
     console.log(gestureStatus.scale);
     const selector = '.tar' + this.datos.id + ' .imagen';
     this.escalar(document.querySelector(selector), gestureStatus.scale);
  }
  onPinchEnd(gestureStatus) {
     console.log(gestureStatus.scale);
     const selector = '.tar' + this.datos.id + ' .imagen';
     this.escalar(document.querySelector(selector), 1);
  }
  onTouchEnd() {
      const selector = '.tar' + this.datos.id + ' .imagen';
      this.escalar(document.querySelector(selector), 1);
  }
  verDoubleTap() {
    this.taps++;
    if (this.taps === 2) {
      this.megustear();
      this.taps = 0;
    } else if (this.taps >= 2) {
      console.log('Tu codigo es una mierda y taps es mucho mayor a 2, da exactamente ' + String(this.taps));
    }
    const self = this;
    setTimeout(() => {
      self.taps = 0;
    }, 205);
  }


  constructor() { }

  ngOnInit() {}

}
