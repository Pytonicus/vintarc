import { Injectable } from '@angular/core';
import { Sistema } from '../interfaces/interface';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DispositivoService {
  sistemas: Sistema[] = [];

  constructor(private storage: Storage, public toastController: ToastController) { 
    this.cargarSistema();
  }

  async presentToast(message: string){
    const toast = await this.toastController.create({
      message,
      duration: 1500
    });

    toast.present();
  }

  guardarSistema(sistema: Sistema){
    const existe = this.sistemas.find(sis => sis.modelo === sistema.modelo);

    if(!existe){
      this.sistemas.unshift(sistema);
      this.storage.set('dispositivo', this.sistemas);
    }

    this.presentToast('Se ha añadido el nuevo sistema');
  }

  async cargarSistema(){
    const sistema = await this.storage.get('dispositivo');

    if(sistema){
      this.sistemas = sistema;
    }

  }


}
