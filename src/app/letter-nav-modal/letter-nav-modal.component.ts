import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-letter-nav-modal',
  templateUrl: './letter-nav-modal.component.html',
  styleUrls: ['./letter-nav-modal.component.css']
})
export class LetterNavModalComponent implements OnInit {

  @Input() public buttoncolor: string;

  modalRef: BsModalRef;

  constructor(private modalService: BsModalService, private router: Router) {
  }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-sm' }));
  }

  goToLetter(letterNav: string) {
    this.router.navigate([letterNav]).then().catch();
    this.modalRef.hide();
  }

}
