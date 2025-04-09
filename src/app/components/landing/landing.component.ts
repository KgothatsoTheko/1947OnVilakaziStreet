import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../slider/slider.component';

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
    { src: "../../../assets/1947-VILAKAZI-STREET-23.JPG" },
    { src: "../../../assets/1947-VILAKAZI-STREET-24.JPG" },
    { src: "../../../assets/1947-VILAKAZI-STREET-37.JPG" },
    { src: "../../../assets/1947-VILAKAZI-STREET-53.JPG" },
    { src: "../../../assets/1947-VILAKAZI-STREET-55.JPG" },
    { src: "../../../assets/1947-VILAKAZI-STREET-58.JPG" },
    { src: "../../../assets/1947-VILAKAZI-STREET-66.JPG" },
  ];

  constructor(public router: Router) {
    document.addEventListener("DOMContentLoaded", () => {
      const video = document.querySelector("video");
      if (video) {
          video.muted = true; // Force mute
      }
  });
  }

  ngOnInit(): void {
    const target = document.getElementById("typewriter-text");

    if (target) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.animationRunning) {
            this.animationRunning = true;
            this.typeWriterEffect("1947 on Vilakazi Street", "typewriter-text", 100, () => {
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

}
