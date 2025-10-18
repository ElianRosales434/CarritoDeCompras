import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Agregar } from '../agregar/agregar';
import { Cart } from '../cart/cart';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Agregar, Cart],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  products: string[] = [];
  showCart = false;
  showToast = false;
  toastMessage = '';
  private toastTimer?: any;

  onAdd(name: string): void {
    const value = name?.trim();
    if (!value) return;
    this.products.push(value);
    this.toastMessage = 'Producto agregado';
    this.showToast = true;
    if (this.toastTimer) clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => (this.showToast = false), 1800);
  }

  closeToast(): void {
    this.showToast = false;
    if (this.toastTimer) {
      clearTimeout(this.toastTimer);
      this.toastTimer = undefined;
    }
  }

  toggleCart(): void {
    this.showCart = !this.showCart;
  }
}
