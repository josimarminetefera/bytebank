import { TransferenciaService } from './../services/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  //@Input()  SEM @Input() POIS NÃO PRECISO MAIS TRAZER ESTES DADOS PARA CA
  transferencias: any[];

  constructor(private service:TransferenciaService) {}

  //AO INICIAR ESTE COMPONENTE
  ngOnInit(): void {
    //A LISTA DO SERVICE VAI SER TRANSFERIDA PARA O ARRAY LOCAL
    this.transferencias = this.service.transferencias;
  }
}
