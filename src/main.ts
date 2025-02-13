import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import  Lenis   from 'lenis';
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  // Initialize Lenis
const lenis = new Lenis({
  overscroll:false
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time:any) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
