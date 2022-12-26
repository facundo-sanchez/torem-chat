export abstract class Message {
  private timestamp: Date;
  private isReceived: Boolean;

  constructor(timestamp: Date, isReceived: Boolean) {
    this.timestamp = timestamp;
    this.isReceived = isReceived;
  }

  setTimestamp(timestamp: Date): void {
    this.timestamp = timestamp;
  }
  setIsReceived(isReceived: Boolean): void {
    this.isReceived = isReceived;
  }

  getTimestamp(timestamp: Date): Date {
    return this.timestamp;
  }

  IsReceived(isReceived: Boolean): Boolean {
    return this.isReceived;
  }
}
