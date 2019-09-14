import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {


  messages: Array<string> = [];

  constructor() { }

  _add(message: string) {
    this.messages.push(message);
  }
  clear() {
    this.messages = [];
  }
}
