import { INote } from "@/entities/Note";
import Vex from "vexflow";

export default (id: string, note: INote) => {
  const VF = Vex.Flow;

  const div = document.getElementById(id);

  if (div == null) {
    throw `#${id} doesn't exists`;
  }

  const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

  renderer.resize(110, 180);
  const context = renderer.getContext();
  context.setFont("Arial", 10).setBackgroundFillStyle("#eed");

  const stave = new VF.Stave(10, 30, 100);
  stave.addClef(note.clef);
  stave.setContext(context).draw();

  var notes = [
    new VF.StaveNote({ clef: note.clef, keys: [note.notation], duration: "q" })
  ];

  var voice = new VF.Voice({ num_beats: 1, beat_value: 4 });
  voice.addTickables(notes);

  var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 110);
  voice.draw(context, stave);
};
