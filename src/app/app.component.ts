import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';

  transferencias: any[] = [];

  transferirAppComponent($event) {
    console.log($event);
    //... ESTA DESCONSTRUINDO PEGANDO APENAS AS PROPRIEDADES E PASSANDO PARA DENTROS DE TRANSFERENCIA
    const dados = {...$event, data: new Date()};
    this.transferencias.push(dados);
  }
}
