export interface IBase {
  solfege: string; // DO - RE - MI - FA - SOL - LA - SI
  latin: string; // A - B - C - D - E - F - G
}

export default class BaseNote implements IBase {
  solfege: string;
  latin: string;

  constructor(solfege: string, latin: string) {
    this.solfege = solfege;
    this.latin = latin;
  }
}
