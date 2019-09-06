import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DispositivoService } from '../services/dispositivo.service';


@Component({
  selector: 'app-new-system-modal',
  templateUrl: './new-system-modal.page.html',
  styleUrls: ['./new-system-modal.page.scss'],
})
export class NewSystemModalPage implements OnInit {
  sistema = {
    modelo: '',
    marca: '',
    tipoSistema: '',
    lanzamiento: '',
    cese: '',
    generacion: '',
    ventas: 0,
    titulosOficiales: 0,
    soporte: '',
    procesador: '',
    graficos: '',
    sonido: '',
    ram: '',
    imagen: ''
  };

  marcas = [
    'Atari',
    'Sears',
    'Coleco',
    'Magnavox',
    'Nintendo',
    'Phillips',
    'Mattel',
    'Milton bradley Company',
    'Fairchild Semiconductor',
    'Commodore',
    'Sega',
    'Amstrad',
    'NEC',
    'SNK',
    'Sony',
    'Panasonic',
    'Microsoft'
  ];

  tipoSistema = [
    'Arcade',
    'Consumo',
    'Portatil',
    'PC'
  ];

  generacion = [
    '1ª Generación (1972-1976)',
    '2ª Generación (1976-1983)',
    '3ª Generación (1983-1987)',
    '4ª Generación (1987-1993)',
    '5ª Generación (1993-1998)',
    '6ª Generación (1998-2005)',
    '7ª Generación (2005-2012)',
    '8ª Generación (2012-Actualidad)'
  ];

  soportes = [
    'Cartucho',
    'Tarjeta',
    'Disco',
    'Rom',
    'Disquete'
  ];

  galeria = '/assets/sistemas/';

  constructor(private modalController: ModalController, private dispositivoService: DispositivoService) { }

  ngOnInit() {
  }

  agregarConsola(){
    this.dispositivoService.guardarSistema(this.sistema);
    this.modalController.dismiss();
  }

  cancelar(){
    this.modalController.dismiss();
  }

}
