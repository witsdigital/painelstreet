import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {
  saque: any = {};

  itemdelete: any;
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