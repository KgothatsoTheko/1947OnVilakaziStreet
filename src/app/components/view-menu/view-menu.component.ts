import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-view-menu',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
   template: `
    <div class="dialog-container">
      <img [src]="data.imageSrc" alt="Full Image" class="full-image" />
    </div>
  `,
  styles: [`
    .dialog-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      overflow: auto;
      background-color: rgba(0, 0, 0, 0.9);
    }

    .full-image {
      max-width: 100%;
      max-height: 100%;
      transition: transform 0.3s ease;
    }

    // .full-image:hover {
    //   transform: scale(1.1);
    // }
  `]
})
export class ViewMenuComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { imageSrc: string }) {}
}
