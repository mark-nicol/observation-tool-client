# ALMA Design Study Prototype Web Application
The ALMA Observing Tool (OT) is an application for the used for the preparation and submission of ALMA Phase 1 (observing proposal) and Phase 2 (telescope runfiles for accepted proposals) materials. The present ALMA-OT is a desktop Java application, running (almost) wholly on the users own machine.The exceptions are when submitting/retrieving proposals and when querying external databases and archives (such as name resolvers and image servers).

This application is a prototype of the proposed upgraded OT. Built using [Angular](https://angular.io/), it moves heavy weight processes to a backend built using microservice architecture (see the [microservices](https://bitbucket.org/almaobservationtoolstudy/microservices/src/master/) repository) in an effort to reduce the requirements of the client system and increase mobility.

## Usage (Development)
### Prerequisites
This web app requires:

- [Nodejs](https://nodejs.org/en/download/)
- [Angular-CLI](https://cli.angular.io/)

It's recommended you clone and run the backend services before the web application.

### Process
Clone the repository

Navigate into the repo
```
cd app
```
Install required modules
```npm
npm install
```
Run the development server
```npm
ng serve
```
Open you browser of choice and navigate to
```
http://localhost:4200
```

## Documentation
For documentation, visit [almaobservationtoolstudy.bitbucket.io](https://almaobservationtoolstudy.bitbucket.io)

### Generating Documentation
To generate documentation ensure this repository and the [documentation repository](https://bitbucket.org/almaobservationtoolstudy/almaobservationtoolstudy.bitbucket.io/) are cloned and in the same parent folder, i.e.:
```
  parent/
  ├──── app-repo/
  |     └── <app-files>
  └──── docs-repo/
        └── <docs-files>
```
In the app repository, run the compodoc script from ``package.json``
```
npm run compodoc
```
This will create documentation in the docs repository

Then commit and push the new docs
```
cd ../almaobservationtoolstudy.bitbucket.io
git add .
git commit -m "<message>"
git push origin master
```
### Writing Documentation
Compodoc provides support for some JSDoc tags, more info [here](https://compodoc.github.io/website/guides/jsdoc-tags.html).

TEST
