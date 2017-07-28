export class Affiliation {
  organisationName: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
}

export class PrimaryInvestigator {
  affiliation: Affiliation;
  email: string;
  title: string;
  name: string;
  telephone: number;
  url: string;
  almaId: string;
}
