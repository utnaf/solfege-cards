import { INote } from "@/entities/Note";
import Vex from "vexflow";

export default (id: string, note: INote) => {
  const VF = Vex.Flow;

  const div = document.getElementById(id);

  if (div == null) {
    throw `#${id} doesn't exists`;
  }

  const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

  console.log("Rendering", note.notation);
  var notes = [
    // A quarter-note C.
    new VF.StaveNote({ clef: "treble", keys: ["c/4"], duration: "q" }),

    // A quarter-note D.
    new VF.StaveNote({ clef: "treble", keys: ["d/4"], duration: "q" }),

    // A quarter-note rest. Note that the key (b/4) specifies the vertical
    // position of the rest.
    new VF.StaveNote({ clef: "treble", keys: ["b/4"], duration: "qr" }),

    // A C-Major chord.
    new VF.StaveNote({
      clef: "treble",
      keys: ["d/4", "e/4", "g/4"],
      duration: "q"
    })
  ];

  renderer.resize(110, 180);
  const context = renderer.getContext();
  context.setFont("Arial", 10).setBackgroundFillStyle("#eed");

  const stave = new VF.Stave(10, 30, 100);
  stave.addClef("treble");
  stave.setContext(context).draw();

  var notes = [
    new VF.StaveNote({ clef: "treble", keys: [note.notation], duration: "q" })
  ];

  var voice = new VF.Voice({ num_beats: 1, beat_value: 4 });
  voice.addTickables(notes);

  var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 110);
  voice.draw(context, stave);
};
