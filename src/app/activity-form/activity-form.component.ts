import { Component, EventEmitter } from '@angular/core';

import { Activity } from '../types';

import * as moment from 'moment';
import * as generateUrl from 'generate-google-calendar-url'

moment.locale('zh-tw');

@Component({
  selector: 'activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.css']
})

export class ActivityFormComponent {

  submitted = false;
  resultCopied = false;
  resultCopiedMessage = '';
  model = new Activity('', '', '', '', '', '', '');
  momentFormat = 'YYYY MMM DD, dddd, H:mm:ss';

  onStartChange($event: any): void {
    const value = $event.value;
    const humanvalue = moment(value).format(this.momentFormat);
    this.model.start = value;
    this.model.start_human = humanvalue;
  }

  onEndChange($event: any): void {
    const value = $event.value;
    const humanvalue = moment(value).format(this.momentFormat);
    this.model.end = value;
    this.model.end_human = humanvalue;
  }

  onSubmit(): void|boolean {
    if ( this.submitted ) {
      return false;
    }
    this.submitted = true;

    const body = document.body;
    const html = document.documentElement;
    const { start, end, title, location, details } = this.model;

    this.model.resultUrl = generateUrl({
      start: start,
      end: end,
      title: title,
      location: location,
      details: details
    });

    this.submitted = false;
    this.resultCopied = false;
    this.resultCopiedMessage = '';

    setTimeout(() => {
      window.scrollTo(0, Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight ));
    }, 50);
  }

  onCopied(): void {
    this.resultCopied = true;
    this.resultCopiedMessage = '複製成功！';
  }

  onCopiedError(): void {
    this.resultCopied = false;
    this.resultCopiedMessage = '複製失敗，請選取文字後手動複製';
  }

  resetInputs(): void {
    this.model = new Activity('', '', '', '', '', '', '');
  }
}
