import { Injectable } from '@angular/core';
import { Videojuego } from '../interfaces/interface';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {
  videojuegos: Videojuego[] = []

  constructor(private storage: Storage, public toastController: ToastController) { 
    this.cargarVideojuego();
  }

  async presentToast(message: string){
    const toast = await this.toastController.create({
      message,
      duration: 1500
    });

    toast.present();
  }

  guardarVideojuego(videojuego: Videojuego){
    const existe = this.videojuegos.find(jue => jue.titulo === videojuego.titulo);

    if(!existe){
      this.videojuegos.unshift(videojuego);
      this.storage.set('videojuego', this.videojuegos);
    }

    this.presentToast('Se ha añadido el nuevo videojuego');
  }

  async cargarVideojuego(){
    const videojuego = await this.storage.get('videojuego');
    
    if(videojuego){
      this.videojuegos = videojuego;
    }
  }

}
