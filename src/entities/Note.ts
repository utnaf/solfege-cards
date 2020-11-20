export interface INote {
  image: String;
  name: String;
  id: String;
}

class Note implements INote {
  private noteName: String;
  private octave: Number;

  constructor(noteName: String, octave: Number) {
    this.noteName = noteName.toUpperCase();
    this.octave = octave;
  }

  get image(): String {
    return `${this.octave}_${this.noteName}.png`;
  }

  get name(): String {
    return this.noteName;
  }

  get id(): String {
    return this.noteName + this.octave.toString();
  }
}

export default Note;
