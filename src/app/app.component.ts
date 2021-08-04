import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, OnInit, Renderer2, ViewChild, AfterViewInit, ViewChildren, HostListener  } from '@angular/core';
import { Updater } from 'tsparticles/Core/Particle/Updater';
import { drawConnectLine } from 'tsparticles/Utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {


  // its important myCanvas matches the variable name in the template
  //@ViewChild('myCanvas', {static: true}) myCanvas: ElementRef;
  //private ctx: CanvasRenderingContext2D;
  
  @HostListener('window:resize', ['$event'])
  onResize(event) {

    this.w = event.target.innerWidth;
    this.h = event.target.innerHeight;
    console.log(this.h);
    console.log(this.w);
  }

  private w: number = window.innerWidth;
  private h: number = window.innerHeight;

  ngAfterViewInit(): void {
    //this.drawBackground();
   // window.requestAnimationFrame(this.random(2,4));
  }
/*
  drawBackground() {
    this.ctx = this.myCanvas.nativeElement.getContext('2d');
    this.ctx.fillStyle = "#000000";
    this.ctx.fillRect(0, 0, this.myCanvas.nativeElement.width, this.myCanvas.nativeElement.height);
  }
*/
/*
  random(min, max) {
    console.log('test');
    return Math.random() * (max - min) + min;
  }
*/
}