import { Component } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'web-cam';
  private trigger: Subject<any> = new Subject();
  public webCamImage!: WebcamImage;
  private nextWebCam: Subject<any> = new Subject();
  sysImage = '';
  ngOnInit() {}

  public getSnapshot(): void {
    this.trigger.next(void 0);
  }

  public captureImg(webCamImage: WebcamImage): void {
    this.webCamImage = webCamImage;
    this.sysImage = webCamImage.imageAsDataUrl;
    console.info('got webcam  image',this.sysImage);
    
  }

  public get invokeobserverable(): Observable<any>{
   return this.trigger.asObservable();
  }

  public get nextwebcamobservable():Observable<any>{
    return this.nextWebCam.asObservable();
  }
}
