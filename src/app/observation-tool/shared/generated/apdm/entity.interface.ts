export interface IEntityT {
  entityId: string;
  entityIdEncrypted: string;
  entityTypeName: string;
  schemaVersion: string;
  documentVersion: string;
  timestamp: string;
  datamodelVersion: string;
}

export interface IObsReviewEntityT extends IEntityT {
}

export interface ISchedBlockEntityT extends IEntityT {
}

export interface IObsProjectEntityT extends IEntityT {
}

export interface IObsProposalEntityT extends IEntityT {
}
