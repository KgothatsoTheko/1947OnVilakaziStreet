import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../slider/slider.component';
import { MatDialog } from '@angular/material/dialog';
import { MenuComponent } from '../menu/menu.component';
import { ViewMenuComponent } from '../view-menu/view-menu.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [MaterialModule, SliderComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {

  private animationRunning = false;

  public slides = [
    { src: "../../../assets/tumis-table-3.jpeg" },
    { src: "../../../assets/DSC06145.jpeg" },
    { src: "../../../assets/tables.jpeg" },
    { src: "../../../assets/food.jpg" },
    { src: "../../../assets/DSC05997-2.jpeg" },
    { src: "../../../assets/food3.jpg" },
    { src: "../../../assets/DSC06124.jpeg" },
    { src: "../../../assets/DSC06085-2.jpeg" },
    { src: "../../../assets/food1.jpg" },
    { src: "../../../assets/DSC06060.jpeg" },
    { src: "../../../assets/DSC06142-Enhanced-NR.jpeg"},
    { src: "../../../assets/food4.jpg" },
    { src: "../../../assets/DSC06181.jpeg" },
    { src: "../../../assets/food2.jpg" },
    { src: "../../../assets/DSC06010-2.jpeg" },
    { src: "../../../assets/1947-VILAKAZI-STREET-66.JPG" },
    { src: "../../../assets/tumis-table.jpeg" },
    { src: "../../../assets/food5.jpg" },
  ];

  constructor(public router: Router, private dialog: MatDialog) {
    document.addEventListener("DOMContentLoaded", () => {
      const video = document.querySelector("video");
      if (video) {
          video.muted = true; // Force mute
      }
  });
  }

  openImageDialog(imageSrc: string): void {
    this.dialog.open(ViewMenuComponent, {
      data: { imageSrc },
      panelClass: 'full-screen-dialog',
    });
  }

  ngOnInit(): void {
    const target = document.getElementById("typewriter-text");

    if (target) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.animationRunning) {
            this.animationRunning = true;
            this.typeWriterEffect("1947onvilakazistreet.", "typewriter-text", 100, () => {
              this.animationRunning = false;
            });
          }
        });
      }, {
        threshold: 0.5 // Trigger when at least 50% visible
      });

      observer.observe(target);
    }
  }

  typeWriterEffect(text: string, elementId: string, speed: number, callback: () => void) {
    const element = document.getElementById(elementId);
    if (!element) return;

    element.textContent = ''; // Reset text
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
      } else {
        clearInterval(interval);
        callback(); // Let observer know animation is done
      }
    }, speed);
  }

  scrollTo(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  goToBooking(){
    window.location.href = 'https://www.dineplan.com/restaurants/1947-on-vilakazi-street'
  }

  openMenu() {
    this.dialog.open(MenuComponent, {
      disableClose: true,
    })
  }

}
