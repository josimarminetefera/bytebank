import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', //existe enquanto a aplicação estiver ativa
})
export class TransferenciaService {
  private listaTransferencia: any[];

  constructor() {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  adicionar(transferencia: any) {
    console.log(transferencia);
    this.tratar(transferencia);
    this.transferencias.push(transferencia);
  }

  //posso colocar as regras de negocio aqui
  private tratar(transferencia: any) {
    //... ESTA DESCONSTRUINDO PEGANDO APENAS AS PROPRIEDADES E PASSANDO PARA DENTROS DE TRANSFERENCIA
    //const dados = { ...$event, data: new Date() };
    transferencia.data = new Date();
  }
}
