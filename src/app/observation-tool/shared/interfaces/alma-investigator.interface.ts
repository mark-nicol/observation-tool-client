/**
 * Interface for primary investigators retrieved from ALMA user lookup
 */

export interface IAlmaInvestigator {
  associatedExec: string;
  fullName: string;
  verfiedUser: boolean;
  index: number;
  organisation: string;
  mobile: string;
  eMail: string;
  organisationId: number;
  userId: string;
  telephone: string;
  allowedExec: string;
}
