export interface IClef {
  toString(): string;
}

export class BassClef implements IClef {
  toString(): string {
    return "bass"
  }
}

export class TrebleClef implements IClef {
  toString(): string {
    return "treble"
  }
}