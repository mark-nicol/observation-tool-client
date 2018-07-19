export interface IObsProposalRefT extends IEntityRefT {
}

export interface IObsReviewRefT extends IEntityRefT {
}

export interface IProjectStatusRefT extends IEntityRefT {
}

export interface IObsAttachmentRefT extends IEntityRefT {
}

export interface IObsProjectRefT extends IEntityRefT {
}

export interface IEntityRefT {
  entityId: string;
  partId: string;
  entityTypeName: string;
  documentVersion: string;
}

export interface ISchedBlockRefT extends IEntityRefT {
}

export interface IOUSStatusRefT extends IEntityRefT {
}

export interface ISBStatusRefT extends IEntityRefT {
}
