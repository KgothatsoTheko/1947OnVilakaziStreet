import { Component } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

   constructor(
    public dialogRef: MatDialogRef<MenuComponent>
  ) {}

  scrollTo(targetId: string): void {
    this.dialogRef.close(); // close the menu first
    setTimeout(() => {
      const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    }, 100); // small delay to ensure DOM is ready
  }

  goToBooking(){
    window.location.href = 'https://www.dineplan.com/restaurants/1947-on-vilakazi-street'
  }

}
