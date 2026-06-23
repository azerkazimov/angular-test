import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class VidSrcService {
  private embedBaseUrl: string = 'https://embed.smashystream.com/playere.php';

  constructor(private sanitizer: DomSanitizer) {}

  /**
   * Генерирует безопасный URL для плеера фильма
   * @param imdbId Идентификатор фильма (например, tt33612209)
   */
  getMoviePlayerUrl(imdbId: string): SafeResourceUrl {
  const rawUrl = `${this.embedBaseUrl}?imdb=${imdbId}`;
  return this.sanitizer.bypassSecurityTrustResourceUrl(rawUrl);
}

  /**
   * Генерирует безопасный URL для плеера сериала
   * @param imdbId Идентификатор сериала
   * @param season Номер сезона (по умолчанию 1)
   * @param episode Номер серии (по умолчанию 1)
   */
  getTvPlayerUrl(imdbId: string, season: number = 1, episode: number = 1): SafeResourceUrl {
    const rawUrl = `${this.embedBaseUrl}/tv/${imdbId}/${season}/${episode}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(rawUrl);
  }
}