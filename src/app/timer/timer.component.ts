import { Component, OnInit, Output, Input } from '@angular/core';
import { Observable } from "rxjs";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})

export class TimerComponent implements OnInit {

today = 24 * 60 * 60;
source = Observable.timer(1000, 1000)
.map(i => this.today - i)
.take(this.today + 1);

constructor() {

}

  ngOnInit() {
  // promo start

  var subscription = this.source.subscribe(
    function (x) {
        console.log(x);
    },
    function (err) {
        console.log('Error: ' + err);
    },
    function () {
        console.log('Completed');
    });
  }

}
