import { IBase } from "@/entities/base/Base";

export interface INote {
  name: string;
  id: string;
  notation: string;
}

class Note implements INote {
  private baseNote: IBase;
  private octave: Number;

  constructor(baseNote: IBase, octave: Number) {
    this.baseNote = baseNote;
    this.octave = octave;
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
}

export default Note;
