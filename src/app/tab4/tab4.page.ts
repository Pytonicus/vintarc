import { Component, OnInit } from '@angular/core';
import { DispositivoService } from '../services/dispositivo.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(public dispositivoService: DispositivoService) { }

  ngOnInit() {
  }

}
