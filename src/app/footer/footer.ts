import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  
  @Output() footerClicked = new EventEmitter<void>();

  username = "";

  emitClick() {
    this.footerClicked.emit();
  }
}