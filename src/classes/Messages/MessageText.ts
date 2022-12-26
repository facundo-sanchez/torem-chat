import { Message } from "./Message";

export class MessageText extends Message {
  private text: String;

  constructor(timestamp: Date, isReceived: Boolean, text: String) {
    super(timestamp, isReceived);
    this.text = text;
  }

  setText(text: String): void {
    this.text = text;
  }

  getText(): String {
    return this.text;
  }
}
