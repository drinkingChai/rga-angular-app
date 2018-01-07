import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

import { Video } from './video';

@Injectable()
export class VideoService {
  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.videosUrl).pipe(
      catchError(this.handleError<Video[]>('getVideos'))
    )
  }

  getFeature(): Observable<Video> {
    return this.http.get<Video>(this.featureUrl).pipe(
      catchError(this.handleError<Video>('getFeature'))
    )
  }

  getThumbnailUrl(youtubeId: string): string {
    // returns the first thumbnail url
    return `https://img.youtube.com/vi/${youtubeId}/0.jpg`
  }

  getEmbedUrl(youtubeId: string, options = {}): string {
    // returns youtube embed URL with options
    let opts = {
      noControls: 'controls=0&amp',
      noInfo: 'showinfo=0',
      autoplay: 'autoplay=1'
    }

    let optStr = Object.keys(options).map(opt => opts[opt]).join(';')
    return `https://www.youtube.com/embed/${youtubeId}?${optStr}` 
  }

  private videosUrl = 'api/videos';
  private featureUrl = 'api/feature';

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of (result as T);
    }
  }

  constructor(private http: HttpClient) { }

}
