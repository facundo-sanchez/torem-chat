import { Message } from "./Message";

export class MessageLocation extends Message {
  private latitude: String;
  private longitude: String;

  constructor(
    timestamp: Date,
    isReceived: Boolean,
    latitude: String,
    longitude: String
  ) {
    super(timestamp, isReceived);
    this.latitude = latitude;
    this.longitude = longitude;
  }

  setLatitude(latitude: String): void {
    this.latitude = latitude;
  }

  getLatitude(): String {
    return this.latitude;
  }

  setLongitude(longitude: String): void {
    this.longitude = longitude;
  }

  getLongitude(): String {
    return this.longitude;
  }
}
