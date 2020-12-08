import Note from "@/entities/Note";
import BaseNotes from "@/entities/base";
// import PianoKeyboard from "vue-piano-keyboard";
import { TrebleClef, BassClef } from "@/entities/Clef";

const trebleClef = new TrebleClef();
const bassClef = new BassClef();

export default [
  // Treble Clef
  new Note(BaseNotes.Si, 3, trebleClef),
  new Note(BaseNotes.Do, 4, trebleClef),
  new Note(BaseNotes.Re, 4, trebleClef),
  new Note(BaseNotes.Mi, 4, trebleClef),
  new Note(BaseNotes.Fa, 4, trebleClef),
  new Note(BaseNotes.Sol, 4, trebleClef),
  new Note(BaseNotes.La, 4, trebleClef),
  new Note(BaseNotes.Si, 4, trebleClef),
  new Note(BaseNotes.Do, 5, trebleClef),
  new Note(BaseNotes.Re, 5, trebleClef),
  new Note(BaseNotes.Mi, 5, trebleClef),
  new Note(BaseNotes.Fa, 5, trebleClef),
  new Note(BaseNotes.Sol, 5, trebleClef),
  new Note(BaseNotes.La, 5, trebleClef),
  new Note(BaseNotes.Si, 5, trebleClef),
  new Note(BaseNotes.Do, 6, trebleClef),

  // Treble Clef
  new Note(BaseNotes.Si, 1, bassClef),
  new Note(BaseNotes.Do, 2, bassClef),
  new Note(BaseNotes.Re, 2, bassClef),
  new Note(BaseNotes.Mi, 2, bassClef),
  new Note(BaseNotes.Fa, 2, bassClef),
  new Note(BaseNotes.Sol, 2, bassClef),
  new Note(BaseNotes.La, 2, bassClef),
  new Note(BaseNotes.Si, 2, bassClef),
  new Note(BaseNotes.Do, 3, bassClef),
  new Note(BaseNotes.Re, 3, bassClef),
  new Note(BaseNotes.Mi, 3, bassClef),
  new Note(BaseNotes.Fa, 3, bassClef),
  new Note(BaseNotes.Sol, 3, bassClef),
  new Note(BaseNotes.La, 3, bassClef),
]