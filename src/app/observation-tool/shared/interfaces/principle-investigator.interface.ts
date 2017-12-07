/**
 * Interface for primary investigators retrieved from ALMA user lookup
 */

export interface PrincipleInvestigatorInterface {
  uid: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  affiliation: string;
  affiliationId: number;
  telephone: string;
  executive: string;
}
