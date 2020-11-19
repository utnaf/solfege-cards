class Note {
  constructor(noteName, octave) {
    this.noteName = noteName.toUpperCase();
    this.octave = octave;
  }

  get image() {
    return `${this.octave}_${this.noteName}.png`;
  }

  get name() {
    return this.noteName;
  }

  get id() {
    return this.noteName + this.octave;
  }
}

export default Note;
