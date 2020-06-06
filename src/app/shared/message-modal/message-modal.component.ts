import { Component, OnInit, Input } from '@angular/core';
import { ConfigModal } from 'src/app/interfaces/config-modal.interface';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.scss']
})
export class MessageModalComponent implements OnInit {

  @Input() config: ConfigModal;

  constructor() { }

  ngOnInit(): void {
  }

}
