import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTranferir = new EventEmitter<any>();

  @Output() valoresComErro = new EventEmitter<string>();

  valor: number = 0;
  destino: number = 0;

  transferir() {
    console.log('NovaTransferenciaComponent');
    console.log(this.valor);
    console.log(this.destino);
    if (this.ehValido()) {
      const valorEmitir = {
        valor: this.valor,
        destino: this.destino,
      };
      this.aoTranferir.emit(valorEmitir);
      this.limparCampos();
    }
  }

  private ehValido() {
    const valido = this.valor > 0;
    if (!valido) {
      this.valoresComErro.emit('Informe um valor válido');
    }
    return valido;
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
