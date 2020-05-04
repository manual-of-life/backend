export enum ETypeRainbow {
  God = "trinity",
  Father = "father",
  Son = "son",
  Wisdom = "wisdom",
  Truth = "truth",
  Law = "law",
  Prophecy = "prophecy",
  Salvation = "salvation",
  Armament = "armament",
  Instruction = "instruction",
}

export enum ETypeScripture {
  Law = "law",
  Prophets = "prophets",
  Culture = "culture",
  Wisdom = "wisdom",
  Gospel = "gospel",
  Acts = "acts",
  Paul = "paul",
  Peter = "peter",
  John = "john",
  Jude = "jude",
  Revelation = "revelation",
}

export type TScripture = ETypeScripture;

export enum EConnection {
  DB = "DATABASE_CONNECTION",
}

export enum EModel {
  SCRIPTURE = "SCRIPTURE_MODEL",
}

export abstract class CInjectable {
  public static Connection = EConnection;
}

export abstract class CProvider {
  public static Model = EModel;
}

