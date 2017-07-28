import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const primaryInvestigators = [
      {
        affiliation: {
          organisationName: "Science and Technology Facilities Council",
          streetAddress: "Royal Observatory, Blackford Hill",
          addressLocality: "Edinburgh",
          addressRegion: "Scotland",
          postalCode: "EH11 1LL"
        },
        email: "joe.barrett@stfc.ac.uk",
        title: "Mr",
        name: "Joe Barrett",
        telephone: "01316688220",
        url: "http://something.something.com",
        almaId: "jbarrett"
      },
      {
        affiliation: {
          organisationName: "UK Astronomy Technology Centre",
          streetAddress: "Royal Observatory, Blackford Hill",
          addressLocality: "Edinburgh",
          addressRegion: "Scotland",
          postalCode: "EH11 1LL"
        },
        email: "mark.nicol@stfc.ac.uk",
        title: "Mr",
        name: "Mark Nicol",
        telephone: "01316688000",
        url: "http://something.something.com",
        almaId: "mnicol"
      },
      {
        affiliation: {
          organisationName: "Test",
          streetAddress: "Test",
          addressLocality: "Test",
          addressRegion: "Test",
          postalCode: "Test"
        },
        email: "Test",
        title: "Test",
        name: "Test",
        telephone: "Test",
        url: "Test",
        almaId: "Test"
      }
    ];
    return {primaryInvestigators};
  }
}
