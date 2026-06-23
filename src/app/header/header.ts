import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @Input() title: string = '';

  private router = inject(Router);
  onHomeClick(){
    console.log('Home clicked!');
    this.router.navigate(['/']);
  }
  onAboutClick(){
    console.log('About clicked!');
    this.router.navigate(['/about']);
  }
  onContactClick(){
    console.log('Contact clicked!');
    this.router.navigate(['/contact']);
  }
  onMoviesClick(){
    console.log('Movies clicked!');
    this.router.navigate(['/movies']);
  }
}
