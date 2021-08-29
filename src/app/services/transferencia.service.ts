import { Transferencia } from './../models/transferencia.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root', //existe enquanto a aplicação estiver ativa
})
export class TransferenciaService {
  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  //METODOS QUE TEM GET PUT HttpClient
  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  //Observable É UM METODO QUE VAI RECEVER A RESOPOSTA DE ALGO
  todas(): Observable<Transferencia[]>{
    //VAI RETORNAR DESTE GET UMA LISTA DE Transferencia
    //.get É UM METODO FUTURO
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: any) {
    console.log(transferencia);
    this.tratar(transferencia);
    this.transferencias.push(transferencia);
  }

  //POSSO COLOCAR AS REGRAS DE NEGOCIO AQUI
  private tratar(transferencia: any) {
    //... ESTA DESCONSTRUINDO PEGANDO APENAS AS PROPRIEDADES E PASSANDO PARA DENTROS DE TRANSFERENCIA
    //const dados = { ...$event, data: new Date() };
    transferencia.data = new Date();
  }
}
