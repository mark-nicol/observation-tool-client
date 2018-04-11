/**
 * Interface for primary investigators retrieved from ALMA user lookup
 */

export interface IAlmaInvestigator {
  associatedExec: string;
  prp_fullName: string;
  prp_verfiedUser: boolean;
  prp_index: number;
  prp_organisation: string;
  prp_mobile: string;
  prp_eMail: string;
  prp_organisationId: number;
  prp_userId: string;
  prp_telephone: string;
  allowedExec: string;
}
