import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';


@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {

  itemdelete: any;

  saque: any = {};
  mensagem;

  constructor(private modal: NgbModal) { }

  ngOnInit() {
  }


  openModal(modal){
    this.modal.open(modal);
  }

  OpenModalDel(modal, item){
    this.itemdelete = item;
    this.modal.open(modal);
  }

}
