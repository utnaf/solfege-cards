export interface IClef {
  toString(): string;
}

export const BASS = "bass";
export const TREBLE = "treble";

export class BassClef implements IClef {
  toString(): string {
    return BASS
  }
}

export class TrebleClef implements IClef {
  toString(): string {
    return TREBLE
  }
}