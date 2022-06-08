interface ChartItemProps {
  timestamp: string;
  price: number;
}

export class ChartItem {
  _timestamp;
  _price;

  constructor({ timestamp, price }: ChartItemProps) {
    this._timestamp = timestamp;
    this._price = price;
  }

  get timestamp() {
    return this._timestamp;
  }

  get price() {
    return this._price / 100;
  }
}
