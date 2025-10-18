import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar.html',
  styleUrls: ['./agregar.css']
})
export class Agregar {
  productName = '';
  @Output() add = new EventEmitter<string>();

  submit(): void {
    const value = this.productName.trim();
    if (!value) return;
    this.add.emit(value);
    this.productName = '';
  }
}
