import { Injectable } from '@angular/core';
import { VideoService } from './video.service';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class ModalService {
  state = false;
  embedUrl: object;

  showModal(youtubeId: string): void {
    this.state = true;
    this.embedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoService.getEmbedUrl(youtubeId, { noInfo: true, autoplay: true }));
    document.querySelector('body').classList.add('modal-open');
  }

  hideModal(): void {
    this.state = false;
    this.embedUrl = {};
    document.querySelector('body').classList.remove('modal-open');
  }

  constructor(
    private videoService: VideoService,
    private sanitizer: DomSanitizer
  ) { }

}
