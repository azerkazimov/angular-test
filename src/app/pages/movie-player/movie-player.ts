import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeResourceUrl } from '@angular/platform-browser';
import { VidSrcService } from '../../services/movie-service';

@Component({
  selector: 'app-movie-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-player.html',
  styleUrl: './movie-player.css',
})
export class MoviePlayer implements OnChanges {
  @Input({ required: true }) imdbId!: string;

  playerUrl: SafeResourceUrl | null = null;

  constructor(private vidsrcService: VidSrcService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['imdbId'] && this.imdbId) {
      this.playerUrl = this.vidsrcService.getMoviePlayerUrl(this.imdbId);
    }
  }
}
