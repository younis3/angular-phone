import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',

  //template----------------------------------------------------
  template: `
    <div class="page">
      <div class="calcWrapper">
        <div
          class="calcDisplay"
          [ngStyle]="{ 'background-color': dsplyBgColor }"
        >
          <p>{{ screenText }}</p>
          <div class="delNum">
            <button (click)="delNum()" [disabled]="isCalling">
              <mat-icon>backspace</mat-icon>
            </button>
          </div>
        </div>

        <div class="calcNumbersWrapper">
          <div *ngFor="let btn of btns" class="calcNum">
            <button (click)="buttonClick(btn)" [disabled]="isCalling">
              {{ btn }}
            </button>
          </div>
        </div>
        <div class="calcLowerBtns">
          <div class="calcLowerButton" id="call">
            <button (click)="call()" [disabled]="isCalling">Call</button>
          </div>
          <div class="calcLowerButton" id="cancel">
            <button (click)="cancel()">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  `,

  //template-END----------------------------------------------------

  styleUrls: ['./calc.component.css'],
})
export class CalcComponent {
  screenText: string;
  dsplyBgColor: string;
  btns: string[] = [];
  isCalling: boolean;
  constructor() {
    this.screenText = '';
    this.dsplyBgColor = '#fdfdfd';
    this.btns = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];
    this.isCalling = false;
  }

  buttonClick(id: string): void {
    this.screenText += id;
  }

  delNum(): void {
    this.screenText = this.screenText.slice(0, this.screenText.length - 1);
  }

  call(): void {
    this.isCalling = true;
    this.screenText = `Calling ${this.screenText}..`;
    this.dsplyBgColor = `rgba(183, 240, 98, 0.822)`;
  }
  cancel(): void {
    this.screenText = 'Canceled.';
    this.dsplyBgColor = `rgb(201, 85, 104)`;

    setTimeout(() => {
      this.screenText = '';
      this.dsplyBgColor = '#fdfdfd';
      this.isCalling = false;
    }, 1800);
  }
}
