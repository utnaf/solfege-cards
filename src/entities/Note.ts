import { IBase } from "@/entities/base/Base";
import { IClef } from "@/entities/Clef";
import { NOTATION_SOLFEGE } from "@/entities/base";

export interface INote {
  name(notation: string): string;
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

  name(notation: string): string {
    return notation === NOTATION_SOLFEGE ? this.baseNote.solfege : this.baseNote.latin;
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
