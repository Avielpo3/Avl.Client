import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avl-datetime-picker',
  templateUrl: './avl-datetime-picker.component.html',
  styleUrls: ['./avl-datetime-picker.component.scss']
})
export class AvlDatetimePickerComponent implements OnInit {

  hours: Time[] = [];
  minutes: Time[] = [];

  constructor() {
    this.setHourArray();
    this.setMinuteArray();
  }

  ngOnInit() {
  }

  /**
   *Create the hour array 00 - 24
   * @private
   * @memberof AvlDatetimePickerComponent
   */
  private setHourArray(): void {
    for (let index = 0; index < 24; index++) {
      const time = index < 10 ? `0${index}` : index;

      const hour: Time = {
        timeDisplay: time.toString(),
        timeValue: index
      };

      this.hours.push(hour);
    }
  }

  /**
   * Create's the minuts array. jumps of five
   * 00 - 55
   * @private
   * @memberof AvlDatetimePickerComponent
   */
  private setMinuteArray(): void {
    for (let index = 0; index < 60; index += 5) {
      const time = index < 10 ? `0${index}` : index;

      const hour: Time = {
        timeDisplay: time.toString(),
        timeValue: index
      };

      this.minutes.push(hour);
    }
  }


}

interface Time {
  timeDisplay: string;
  timeValue: number;
}
