import { Component } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

  constructor(public router: Router) {
    document.addEventListener("DOMContentLoaded", () => {
      const video = document.querySelector("video");
      if (video) {
          video.muted = true; // Force mute
      }
  });
  }

  scrollTo(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
