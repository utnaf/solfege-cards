import { IBase } from "@/entities/base/Base";
import { IClef } from "@/entities/Clef";

export interface INote {
  name: string;
  id: string;
  notation: string;
  clef: string
}

class Note implements INote {
  private baseNote: IBase;
  private octave: Number;
  public _clef: IClef;

  constructor(baseNote: IBase, octave: Number, clef: IClef) {
    this.baseNote = baseNote;
    this.octave = octave;
    this._clef = clef;
  }

  get name(): string {
    return this.baseNote.solfege;
  }

  get notation(): string {
    return `${this.baseNote.latin}/${this.octave}`;
  }

  get id(): string {
    return this.baseNote.solfege + this.octave;
  }

  get clef(): string {
    return this._clef.toString()
  }
}

export default Note;
