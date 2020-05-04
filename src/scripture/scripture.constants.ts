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

