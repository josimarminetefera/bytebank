import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTranferir = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 0;

  transferir() {
    console.log('NovaTransferenciaComponent');
    console.log(this.valor);
    console.log(this.destino);
    const valorEmitir = {
      valor: this.valor,
      destino: this.destino,
    }
    this.aoTranferir.emit(valorEmitir);
  }
}
