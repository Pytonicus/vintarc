import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { JuegosService } from '../services/juegos.service';

@Component({
  selector: 'app-new-videojuego-modal',
  templateUrl: './new-videojuego-modal.page.html',
  styleUrls: ['./new-videojuego-modal.page.scss'],
})
export class NewVideojuegoModalPage implements OnInit {
  videojuego = {
    titulo: '',
    genero: '',
    desarrollador: '',
    lanzamiento: '',
    jugadores: '',
    idiomas: '',
    sipnosis: '',
    portada: '',
    captura: '',
    video: ''
  };

  constructor(private modalController: ModalController, private juegosService: JuegosService) { }

  ngOnInit() {
  }

  agregarVideojuego(){
    this.juegosService.guardarVideojuego(this.videojuego);
    this.modalController.dismiss();
  }

  cancelar(){
    this.modalController.dismiss();
  }

}
