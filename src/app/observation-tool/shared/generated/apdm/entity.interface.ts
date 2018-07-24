// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

export interface IEntity {
  entityId: string;
  entityIdEncrypted: string;
  entityTypeName: string;
  schemaVersion: string;
  documentVersion: string;
  timestamp: string;
  datamodelVersion: string;
}

export interface IObsReviewEntity extends IEntity {
}

export interface ISchedBlockEntity extends IEntity {
}

export interface IObsProjectEntity extends IEntity {
}

export interface IObsProposalEntity extends IEntity {
}
