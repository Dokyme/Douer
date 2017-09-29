import { Message } from 'primeng/components/common/api';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private messages: Message[];

  public constructor() {
    this.messages = [];
  }

  public onClickDouDouBtn(): void {
    this.messages.push({
      severity: "info",
      summary: "summary",
      detail: "豆豆最棒"
    });
  }

  public onClickKaiKaiBtn(): void {
    this.messages.push({
      severity: "info",
      summary: "summary",
      detail: "凯凯最棒"
    });
  }

  public onClickXiXiBtn(): void {
    this.messages = [];
  }
}