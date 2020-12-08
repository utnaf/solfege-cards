import Base from "./Base";

export const NOTATION_SOLFEGE = "solfege"
export const NOTATION_LATIN = "latin"

export default {
  Do: new Base("DO", "C"),
  Re: new Base("RE", "D"),
  Mi: new Base("MI", "E"),
  Fa: new Base("FA", "F"),
  Sol: new Base("SOL", "G"),
  La: new Base("LA", "A"),
  Si: new Base("SI", "B")
};
