import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const primaryInvestigators = [
      {
        "uid": "abridger",
        "firstName": "Alan",
        "lastName": "Bridger",
        "fullName": "Alan Bridger",
        "email": "alan.bridger@stfc.ac.uk",
        "affiliation": "Royal Observatory, Edinburgh, Science and Technology Facilities Council",
        "affiliationId": "21314",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "afitzsimmons",
        "firstName": "Alan",
        "lastName": "Fitzsimmons",
        "fullName": "Alan Fitzsimmons",
        "email": "a.fitzsimmons@qub.ac.uk",
        "affiliation": "Astrophysics Research Centre, Queen's University Belfast",
        "affiliationId": "21313",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "aheays",
        "firstName": "Alan",
        "lastName": "Heays",
        "fullName": "Alan Heays",
        "email": "aheays@yahoo.com",
        "affiliation": "Faculty of Sciences, VU University Amsterdam",
        "affiliationId": "21218",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "alanjackson",
        "firstName": "Alan",
        "lastName": "Jackson",
        "fullName": "Alan Jackson",
        "email": "alan.jackson@asu.edu",
        "affiliation": "College of Liberal Arts and Sciences, Arizona State University ",
        "affiliationId": "226",
        "telephone": "",
        "executive": "other"
      }, {
        "uid": "alanmcloughlin",
        "firstName": "Alan",
        "lastName": "McLoughlin",
        "fullName": "Alan McLoughlin",
        "email": "amcloughlin929@qub.ac.uk",
        "affiliation": "Astrophysics Research Centre, Queen's University Belfast",
        "affiliationId": "21313",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "alanroy",
        "firstName": "Alan",
        "lastName": "Roy",
        "fullName": "Alan Roy",
        "email": "aroy@mpifr-bonn.mpg.de",
        "affiliation": "Max-Planck-Institute for Radio Astronomy",
        "affiliationId": "21134",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "amarscher",
        "firstName": "Alan",
        "lastName": "Marscher",
        "fullName": "Alan Marscher",
        "email": "marscher@bu.edu",
        "affiliation": "Institute for Astrophysical Research, Boston University",
        "affiliationId": "21612",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "anstockton",
        "firstName": "Alan",
        "lastName": "Stockton",
        "fullName": "Alan Stockton",
        "email": "stockton@ifa.hawaii.edu",
        "affiliation": "Institute for Astronomy, Hawaii at Manoa, University of",
        "affiliationId": "21881",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "arsalan",
        "firstName": "Arsalan",
        "lastName": "Jawaid",
        "fullName": "Arsalan Jawaid",
        "email": "arsalan.jawaidstu@gmail.com",
        "affiliation": "Astronomy, Student",
        "affiliationId": "36884",
        "telephone": "",
        "executive": "other"
      }, {
        "uid": "astern",
        "firstName": "Alan",
        "lastName": "Stern",
        "fullName": "Alan Stern",
        "email": "astern@swri.edu",
        "affiliation": "Department of Space Studies, Southwest Research Institute",
        "affiliationId": "22317",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "douglasgalante",
        "firstName": "Douglas",
        "lastName": "Galante",
        "fullName": "Douglas Galante",
        "email": "douglas@astro.iag.usp.br",
        "affiliation": "Institute of Astronomy, Geophysics and Atmospheric Sciences, Sao Paolo, University of",
        "affiliationId": "21050",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "harris",
        "firstName": "Alan",
        "lastName": "Harris",
        "fullName": "Alan Harris",
        "email": "alan.harris@dlr.de",
        "affiliation": "DLR Berlin, German Aerospace Center",
        "affiliationId": "21115",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "jacalanog",
        "firstName": "Jae",
        "lastName": "Calanog",
        "fullName": "Jae Calanog",
        "email": "jcalanog@uci.edu",
        "affiliation": "Dept of Physics & Astronomy, California at Irvine, Univ of",
        "affiliationId": "21644",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "tokunagaa001",
        "firstName": "Alan",
        "lastName": "Tokunaga",
        "fullName": "Alan Tokunaga",
        "email": "tokunaga@ifa.hawaii.edu",
        "affiliation": "Institute for Astronomy, Hawaii at Manoa, University of",
        "affiliationId": "21881",
        "telephone": "",
        "executive": "na"
      },
      {
        "uid": "ardila",
        "firstName": "David",
        "lastName": "Ardila",
        "fullName": "David Ardila",
        "email": "ardila@ipac.caltech.edu",
        "affiliation": "Infrared Processing and Analysis Center (IPAC), California Institute of Technology",
        "affiliationId": "21667",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "axon",
        "firstName": "David",
        "lastName": "Axon",
        "fullName": "David Axon",
        "email": "djasps@rit.edu",
        "affiliation": "Department of Physics, Rochester Institute of Technology",
        "affiliationId": "22251",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "barrado",
        "firstName": "David",
        "lastName": "Barrado Navascués",
        "fullName": "David Barrado Navascués",
        "email": "barrado@cab.inta-csic.es",
        "affiliation": "Centro de astrobiología (INTA-CSIC)",
        "affiliationId": "23940",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "bdavidsson",
        "firstName": "Björn",
        "lastName": "Davidsson",
        "fullName": "Björn Davidsson",
        "email": "bjorn.davidsson@physics.uu.se",
        "affiliation": "Department of Physics and Astronomy, Uppsala University",
        "affiliationId": "21273",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "buote",
        "firstName": "David",
        "lastName": "Buote",
        "fullName": "David Buote",
        "email": "buote@uci.edu",
        "affiliation": "Dept of Physics & Astronomy, California at Irvine, Univ of",
        "affiliationId": "21644",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "chernoff",
        "firstName": "David",
        "lastName": "Chernoff",
        "fullName": "David Chernoff",
        "email": "chernoff@astro.cornell.edu",
        "affiliation": "Department of Astronomy, Cornell University",
        "affiliationId": "21761",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "cyhui",
        "firstName": "David C.Y.",
        "lastName": "Hui",
        "fullName": "David C.Y. Hui",
        "email": "huichungyue@gmail.com",
        "affiliation": "Department of Astronomy and Space Science, Chungnam National University",
        "affiliationId": "268",
        "telephone": "",
        "executive": "ea"
      }, {
        "uid": "dafisher2",
        "firstName": "David",
        "lastName": "Fisher",
        "fullName": "David Fisher",
        "email": "dafisher2@sympatico.ca",
        "affiliation": "Ottawa, University of",
        "affiliationId": "22193",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "dakann",
        "firstName": "David Alexander",
        "lastName": "Kann",
        "fullName": "David Alexander Kann",
        "email": "kann@iaa.es",
        "affiliation": "Astrophysical Institute of Andalucia",
        "affiliationId": "21230",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "danaylor",
        "firstName": "David",
        "lastName": "Naylor",
        "fullName": "David Naylor",
        "email": "naylor@uleth.ca",
        "affiliation": "Department of Physics and Astronomy, Lethbridge, University of",
        "affiliationId": "275",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "datlee",
        "firstName": "David",
        "lastName": "Atlee",
        "fullName": "David Atlee",
        "email": "atlee@noao.edu",
        "affiliation": "National Optical Astronomy Observatory",
        "affiliationId": "22082",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "davepooley",
        "firstName": "David",
        "lastName": "Pooley",
        "fullName": "David Pooley",
        "email": "dave@shsu.edu",
        "affiliation": "Department of Physics, Sam Houston State University",
        "affiliationId": "22271",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "daverussell",
        "firstName": "David",
        "lastName": "Russell",
        "fullName": "David Russell",
        "email": "dave.russell@nyu.edu",
        "affiliation": "New York University Abu Dhabi",
        "affiliationId": "38650",
        "telephone": "",
        "executive": "other"
      }, {
        "uid": "david",
        "firstName": "David",
        "lastName": "Kuridze",
        "fullName": "David Kuridze",
        "email": "d.kuridze@qub.ac.uk",
        "affiliation": "Astrophysics Research Centre, Queen's University Belfast",
        "affiliationId": "21313",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "davidb",
        "firstName": "David",
        "lastName": "Blank",
        "fullName": "David Blank",
        "email": "rlagn@yahoo.com",
        "affiliation": "James Cook University",
        "affiliationId": "188",
        "telephone": "",
        "executive": "other"
      }, {
        "uid": "davidcarton",
        "firstName": "David",
        "lastName": "Carton",
        "fullName": "David Carton",
        "email": "david.carton@univ-lyon1.fr",
        "affiliation": "Lyon Astronomical Research Center",
        "affiliationId": "21095",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "davidckoo",
        "firstName": "David",
        "lastName": "Koo",
        "fullName": "David Koo",
        "email": "koo@ucolick.org",
        "affiliation": "University of California Observatories/Lick Observatory, California at Santa Cruz, University of",
        "affiliationId": "21660",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "davidgobrecht",
        "firstName": "David",
        "lastName": "Gobrecht",
        "fullName": "David Gobrecht",
        "email": "gobrecht@oa-teramo.inaf.it",
        "affiliation": "Astronomical Observatory of Collurania, INAF",
        "affiliationId": "21168",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "davidharvey1986",
        "firstName": "David",
        "lastName": "Harvey",
        "fullName": "David Harvey",
        "email": "david.harvey@epfl.ch",
        "affiliation": "School of basic sciences (FSB), Lausanne, Technical Federal School (EPFL)",
        "affiliationId": "21281",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "davidjosepheden",
        "firstName": "David",
        "lastName": "Eden",
        "fullName": "David Eden",
        "email": "d.j.eden@ljmu.ac.uk",
        "affiliation": "Astrophysics Research Institute, Liverpool John Moores University",
        "affiliationId": "21301",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "davidlau",
        "firstName": "Chun Wai, David",
        "lastName": "Lau",
        "fullName": "Chun Wai, David Lau",
        "email": "cwlau@mpifr-bonn.mpg.de",
        "affiliation": "Max-Planck-Institute for Radio Astronomy",
        "affiliationId": "21134",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "davidmouillet",
        "firstName": "David",
        "lastName": "Mouillet",
        "fullName": "David Mouillet",
        "email": "david.mouillet@obs.ujf-grenoble.fr",
        "affiliation": "IPAG, Institut de Planetologie et d'Astrophysique de Grenoble",
        "affiliationId": "37924",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "davidnisbet",
        "firstName": "David",
        "lastName": "Nisbet",
        "fullName": "David Nisbet",
        "email": "dmn@roe.ac.uk",
        "affiliation": "School of Physics and Astronomy, Edinburgh , University of ",
        "affiliationId": "734",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "davidquenard",
        "firstName": "David",
        "lastName": "Quénard",
        "fullName": "David Quénard",
        "email": "d.quenard@qmul.ac.uk",
        "affiliation": "School of Physics and Astronomy, Queen Mary, University of London",
        "affiliationId": "21312",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "davidspergel",
        "firstName": "David",
        "lastName": "Spergel",
        "fullName": "David Spergel",
        "email": "dns@astro.princeton.edu",
        "affiliation": "Astrophysical Sciences Department and Observatory, Princeton University",
        "affiliationId": "22224",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "davo",
        "firstName": "David",
        "lastName": "Alexander",
        "fullName": "David Alexander",
        "email": "d.m.alexander@durham.ac.uk",
        "affiliation": "Department of Physics, Durham University",
        "affiliationId": "21289",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "daw",
        "firstName": "David",
        "lastName": "Williams",
        "fullName": "David Williams",
        "email": "daw@star.ucl.ac.uk",
        "affiliation": "University College London, London, University of",
        "affiliationId": "21305",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "dawucsc",
        "firstName": "David",
        "lastName": "Williams",
        "fullName": "David Williams",
        "email": "daw@ucsc.edu",
        "affiliation": "Department of Physics, California at Santa Cruz, University of; ",
        "affiliationId": "33645",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "dbersier",
        "firstName": "David",
        "lastName": "Bersier",
        "fullName": "David Bersier",
        "email": "d.f.bersier@ljmu.ac.uk",
        "affiliation": "Astrophysics Research Institute, Liverpool John Moores University",
        "affiliationId": "21301",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "dbfisher",
        "firstName": "David",
        "lastName": "Fisher",
        "fullName": "David Fisher",
        "email": "dbfisher@astro.umd.edu",
        "affiliation": "Laboratory for Millimeter-Wave Astronomy, Maryland, University of",
        "affiliationId": "21991",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "dbgoldstein",
        "firstName": "David",
        "lastName": "Goldstein",
        "fullName": "David Goldstein",
        "email": "david@ices.utexas.edu",
        "affiliation": "Dept. of Aerospace Engineering, University of Texas at Austin",
        "affiliationId": "34963",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "dbina",
        "firstName": "David",
        "lastName": "Bina",
        "fullName": "David Bina",
        "email": "david.bina@irap.omp.eu",
        "affiliation": "Institut de Recherche en Astrophysique et Planétologie",
        "affiliationId": "23944",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "dboboltz",
        "firstName": "David",
        "lastName": "Boboltz",
        "fullName": "David Boboltz",
        "email": "dboboltz@usno.navy.mil",
        "affiliation": "US Naval Observatory",
        "affiliationId": "22396",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "dbresnahan",
        "firstName": "David",
        "lastName": "Bresnahan",
        "fullName": "David Bresnahan",
        "email": "dwbresnahan@uclan.ac.uk",
        "affiliation": "Jeremiah Horrocks Institute, Central Lancashire, University of",
        "affiliationId": "21288",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "dclarke",
        "firstName": "David",
        "lastName": "Clarke",
        "fullName": "David Clarke",
        "email": "dclarke@nrao.edu",
        "affiliation": "National Radio Astronomy Observatory, Socorro",
        "affiliationId": "23929",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "dcollins",
        "firstName": "David",
        "lastName": "Collins",
        "fullName": "David Collins",
        "email": "dccollins@fsu.edu",
        "affiliation": "Physics Department, Florida State University",
        "affiliationId": "21815",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "dcseh",
        "firstName": "David",
        "lastName": "Cseh",
        "fullName": "David Cseh",
        "email": "d.cseh@astro.ru.nl",
        "affiliation": "Research Institute for Mathematics, Astrophysics and Particle Physics (IMAPP), Radboud University Nijmegen",
        "affiliationId": "21210",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "ddeboer",
        "firstName": "David",
        "lastName": "DeBoer",
        "fullName": "David DeBoer",
        "email": "ddeboer@berkeley.edu",
        "affiliation": "Department of Astronomy, California, Berkeley, University of",
        "affiliationId": "21635",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "dewelch",
        "firstName": "David",
        "lastName": "Welch",
        "fullName": "David Welch",
        "email": "dewelch@astro.umass.edu",
        "affiliation": "Department of Astronomy, Massachusetts at Amherst, University of",
        "affiliationId": "21992",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "dfedele",
        "firstName": "Davide",
        "lastName": "Fedele",
        "fullName": "Davide Fedele",
        "email": "fedele@arcetri.astro.it",
        "affiliation": "Arcetri Astrophysical Observatory, INAF",
        "affiliationId": "21176",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "dfield",
        "firstName": "David",
        "lastName": "Field",
        "fullName": "David Field",
        "email": "dfield@phys.au.dk",
        "affiliation": "Faculty of Science, Aarhus University",
        "affiliationId": "21059",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "dfisher",
        "firstName": "David",
        "lastName": "Fisher",
        "fullName": "David Fisher",
        "email": "dfisher@swin.edu.au",
        "affiliation": "Centre of Astrophysics and Supercomputing, Swinburne University of Technology",
        "affiliationId": "233",
        "telephone": "",
        "executive": "other"
      }, {
        "uid": "dfong",
        "firstName": "David",
        "lastName": "Fong",
        "fullName": "David Fong",
        "email": "dfong@olympic.edu",
        "affiliation": "Olympic College",
        "affiliationId": "281",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "dfrayer",
        "firstName": "David",
        "lastName": "Frayer",
        "fullName": "David Frayer",
        "email": "dfrayer@nrao.edu",
        "affiliation": "Green Bank Observatory",
        "affiliationId": "39224",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "dgandolfi",
        "firstName": "Davide",
        "lastName": "Gandolfi",
        "fullName": "Davide Gandolfi",
        "email": "davide.gandolfi@unito.it",
        "affiliation": "Department of Physics, Turin, University of",
        "affiliationId": "21201",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "dgb",
        "firstName": "David",
        "lastName": "Bonfield",
        "fullName": "David Bonfield",
        "email": "david.bonfield@gmail.com",
        "affiliation": "School of Physics, Astronomy and Mathematics, Hertfordshire, University of",
        "affiliationId": "21294",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "dgilbank",
        "firstName": "David",
        "lastName": "Gilbank",
        "fullName": "David Gilbank",
        "email": "gilbank@saao.ac.za",
        "affiliation": "South African Astronomical Observatory",
        "affiliationId": "220",
        "telephone": "",
        "executive": "other"
      }, {
        "uid": "dgreen",
        "firstName": "David",
        "lastName": "Green",
        "fullName": "David Green",
        "email": "dgreen@astro.unam.mx",
        "affiliation": "Institute of Astronomy, Mexico, National Autonomous University of",
        "affiliationId": "33972",
        "telephone": "",
        "executive": "other"
      }, {
        "uid": "dguery",
        "firstName": "David",
        "lastName": "Guery",
        "fullName": "David Guery",
        "email": "david.guery@ias.u-psud.fr",
        "affiliation": "Spatial Astrophysical Institute",
        "affiliationId": "21101",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "dhalstea",
        "firstName": "David",
        "lastName": "Halstead",
        "fullName": "David Halstead",
        "email": "dhalstead@nrao.edu",
        "affiliation": "Headquarters, National Radio Astronomy Observatory",
        "affiliationId": "22085",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "dhbekkers",
        "firstName": "David",
        "lastName": "Bekkers",
        "fullName": "David Bekkers",
        "email": "david_bekkers@hotmail.com",
        "affiliation": "Leiden Observatory, Leiden University",
        "affiliationId": "21208",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "dhollenbach",
        "firstName": "David",
        "lastName": "Hollenbach",
        "fullName": "David Hollenbach",
        "email": "dhollenbach@seti.org",
        "affiliation": "SETI Institute",
        "affiliationId": "22288",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "dhughes",
        "firstName": "David",
        "lastName": "Hughes",
        "fullName": "David Hughes",
        "email": "dhughes@inaoep.mx",
        "affiliation": "Optica y Electrónica , Instituto Nacional de Astrofísica",
        "affiliationId": "184",
        "telephone": "",
        "executive": "other"
      }, {
        "uid": "djt45",
        "firstName": "David",
        "lastName": "Thompson",
        "fullName": "David Thompson",
        "email": "david.j.thompson@nasa.gov",
        "affiliation": "Goddard Space Flight Center, National Aeronautics and Space Administration",
        "affiliationId": "22066",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "dlafre",
        "firstName": "David",
        "lastName": "Lafrenière",
        "fullName": "David Lafrenière",
        "email": "david@astro.umontreal.ca",
        "affiliation": "Department of Physics, Montreal, University of",
        "affiliationId": "22051",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "dlagattuta",
        "firstName": "David",
        "lastName": "Lagattuta",
        "fullName": "David Lagattuta",
        "email": "dlagattuta@gmail.com",
        "affiliation": "Lyon Astronomical Research Center",
        "affiliationId": "21095",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "dlambert",
        "firstName": "David",
        "lastName": "Lambert",
        "fullName": "David Lambert",
        "email": "director@astro.as.utexas.edu",
        "affiliation": "McDonald Observatory, Texas at Austin, the University of",
        "affiliationId": "22356",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "dlaw",
        "firstName": "David",
        "lastName": "Law",
        "fullName": "David Law",
        "email": "dlaw@stsci.edu",
        "affiliation": "Space Telescope Science  Institute",
        "affiliationId": "22323",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "dlazzati",
        "firstName": "Davide",
        "lastName": "Lazzati",
        "fullName": "Davide Lazzati",
        "email": "lazzatid@science.oregonstate.edu",
        "affiliation": "Department of Physics, Oregon State University",
        "affiliationId": "22191",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "dlc",
        "firstName": "David",
        "lastName": "Clements",
        "fullName": "David Clements",
        "email": "d.clements@imperial.ac.uk",
        "affiliation": "Blackett Laboratory, Imperial College of Science, Technology and Medicine",
        "affiliationId": "21295",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "dmehring",
        "firstName": "David",
        "lastName": "Mehringer",
        "fullName": "David Mehringer",
        "email": "dmehring@nrao.edu",
        "affiliation": "North American ALMA Science Center, National Radio Astronomy Observatory",
        "affiliationId": "22086",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "dmeier",
        "firstName": "David",
        "lastName": "Meier",
        "fullName": "David Meier",
        "email": "david.meier@nmt.edu",
        "affiliation": "Department of Physics, New Mexico Tech",
        "affiliationId": "22117",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "dnamurphy",
        "firstName": "David",
        "lastName": "Murphy",
        "fullName": "David Murphy",
        "email": "dmurphy@astro.puc.cl",
        "affiliation": "Department of Astronomy and Astrophysics, Catolica of Chile, Pontifica University",
        "affiliationId": "21329",
        "telephone": "",
        "executive": "cl"
      }, {
        "uid": "dnburrows",
        "firstName": "David",
        "lastName": "Burrows",
        "fullName": "David Burrows",
        "email": "burrows@astro.psu.edu",
        "affiliation": "Dept of Astronomy & Astrophysics, Pennsylvania State University",
        "affiliationId": "22209",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "domars",
        "firstName": "David",
        "lastName": "Sanchez",
        "fullName": "David Sanchez",
        "email": "domars@inaoep.mx",
        "affiliation": "Optica y Electrónica , Instituto Nacional de Astrofísica",
        "affiliationId": "184",
        "telephone": "",
        "executive": "other"
      }, {
        "uid": "dphuen",
        "firstName": "David",
        "lastName": "Huenemoerder",
        "fullName": "David Huenemoerder",
        "email": "dph@space.mit.edu",
        "affiliation": "Kavli Institute for Astrophysics and Space Research, Massachusetts Institute of Technology",
        "affiliationId": "22001",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "dprincipe",
        "firstName": "David",
        "lastName": "Principe",
        "fullName": "David Principe",
        "email": "principe@mit.edu",
        "affiliation": "Massachusetts Institute of Technology",
        "affiliationId": "22000",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "drabanus",
        "firstName": "David",
        "lastName": "Rabanus",
        "fullName": "David Rabanus",
        "email": "drabanus@alma.cl",
        "affiliation": "Office Santiago, European Southern Observatory",
        "affiliationId": "21336",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "drapetti",
        "firstName": "David",
        "lastName": "Rapetti",
        "fullName": "David Rapetti",
        "email": "drapetti@usm.lmu.de",
        "affiliation": "Astronomical Observatory, Ludwig Maximilians University",
        "affiliationId": "38347",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "drebolle",
        "firstName": "David",
        "lastName": "Rebolledo",
        "fullName": "David Rebolledo",
        "email": "dreboll3@gmail.com",
        "affiliation": "Department of Astronomy, Chile, University of",
        "affiliationId": "21333",
        "telephone": "",
        "executive": "cl"
      }, {
        "uid": "driebel",
        "firstName": "David",
        "lastName": "Riebel",
        "fullName": "David Riebel",
        "email": "driebel@pha.jhu.edu",
        "affiliation": "Dept of Physics & Astronomy, Johns Hopkins University",
        "affiliationId": "21924",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "drodrigu",
        "firstName": "David",
        "lastName": "Rodriguez",
        "fullName": "David Rodriguez",
        "email": "drrodrigu@gmail.com",
        "affiliation": "Department of Astronomy, Chile, University of",
        "affiliationId": "21333",
        "telephone": "",
        "executive": "cl"
      }, {
        "uid": "drpatton",
        "firstName": "David",
        "lastName": "Patton",
        "fullName": "David Patton",
        "email": "dpatton@trentu.ca",
        "affiliation": "Trent University",
        "affiliationId": "22373",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "drupke",
        "firstName": "David",
        "lastName": "Rupke",
        "fullName": "David Rupke",
        "email": "drupke@gmail.com",
        "affiliation": "Department of Physics, Rhodes College",
        "affiliationId": "22246",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "dsanmartim",
        "firstName": "David",
        "lastName": "Sanmartim",
        "fullName": "David Sanmartim",
        "email": "davidsanm@gmail.com",
        "affiliation": "Departamento de Astronomia, Universidade Federal do Rio Grande do Sul",
        "affiliationId": "33949",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "dsobral",
        "firstName": "David",
        "lastName": "Sobral",
        "fullName": "David Sobral",
        "email": "d.sobral@lancaster.ac.uk",
        "affiliation": "Physics Department, Lancaster University",
        "affiliationId": "38344",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "dteyssier",
        "firstName": "David",
        "lastName": "Teyssier",
        "fullName": "David Teyssier",
        "email": "david.teyssier@esa.int",
        "affiliation": "European Space Astronomy Centre (ESAC), European Space Agency",
        "affiliationId": "21237",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "dthilker",
        "firstName": "David",
        "lastName": "Thilker",
        "fullName": "David Thilker",
        "email": "dthilker@pha.jhu.edu",
        "affiliation": "Dept of Physics & Astronomy, Johns Hopkins University",
        "affiliationId": "21925",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "dtmaltby",
        "firstName": "David",
        "lastName": "Maltby",
        "fullName": "David Maltby",
        "email": "david.maltby@nottingham.ac.uk",
        "affiliation": "University Park, Notthingham, University of",
        "affiliationId": "21307",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "dvbowen",
        "firstName": "David",
        "lastName": "Bowen",
        "fullName": "David Bowen",
        "email": "dvb@astro.princeton.edu",
        "affiliation": "Astrophysical Sciences Department and Observatory, Princeton University",
        "affiliationId": "22224",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "dvstark",
        "firstName": "David",
        "lastName": "Stark",
        "fullName": "David Stark",
        "email": "david.stark@ipmu.jp",
        "affiliation": "Kavli IPMU, Kavli Institute for the Physics and Mathematics of the Universe",
        "affiliationId": "37704",
        "telephone": "",
        "executive": "ea"
      }, {
        "uid": "dwebster",
        "firstName": "David",
        "lastName": "Webster",
        "fullName": "David Webster",
        "email": "d.webster@physics.usyd.edu.au",
        "affiliation": "School of Physics , Sydney, University of ",
        "affiliationId": "24002",
        "telephone": "",
        "executive": "other"
      }, {
        "uid": "dwestpfa",
        "firstName": "David",
        "lastName": "Westpfahl",
        "fullName": "David Westpfahl",
        "email": "dwespfa@nmt.edu",
        "affiliation": "Department of Physics, New Mexico Tech",
        "affiliationId": "22117",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "dwgerdes",
        "firstName": "David",
        "lastName": "Gerdes",
        "fullName": "David Gerdes",
        "email": "gerdes@umich.edu",
        "affiliation": "Department of Physics, Michigan at Ann Arbor, University of",
        "affiliationId": "22022",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "dwilman",
        "firstName": "David",
        "lastName": "Wilman",
        "fullName": "David Wilman",
        "email": "dwilman@mpe.mpg.de",
        "affiliation": "Max-Planck-Institute for Extraterrestrial Physics",
        "affiliationId": "21130",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "dwilner",
        "firstName": "David",
        "lastName": "Wilner",
        "fullName": "David Wilner",
        "email": "dwilner@cfa.harvard.edu",
        "affiliation": "Smithsonian Astrophysical Observatory, Harvard-Smithsonian Center for Astrophysics",
        "affiliationId": "21873",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "elbaz",
        "firstName": "David",
        "lastName": "Elbaz",
        "fullName": "David Elbaz",
        "email": "delbaz@cea.fr",
        "affiliation": "Service d'Astrophysique, CEA Saclay",
        "affiliationId": "21100",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "eliad",
        "firstName": "Davide",
        "lastName": "Elia",
        "fullName": "Davide Elia",
        "email": "davide.elia@iaps.inaf.it",
        "affiliation": "IAPS Rome, INAF",
        "affiliationId": "38190",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "hogg",
        "firstName": "David",
        "lastName": "Hogg",
        "fullName": "David Hogg",
        "email": "david.hogg@nyu.edu",
        "affiliation": "Department of Physics, New York University",
        "affiliationId": "22133",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "jdtsmith",
        "firstName": "John-David",
        "lastName": "Smith",
        "fullName": "John-David Smith",
        "email": "jd.smith@utoledo.edu",
        "affiliation": "Dept of Physics & Astronomy, Toledo, University of",
        "affiliationId": "22368",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "jewitt",
        "firstName": "David",
        "lastName": "Jewitt",
        "fullName": "David Jewitt",
        "email": "jewitt@ucla.edu",
        "affiliation": "Dept of Earth & Space Sciences, California at Los Angeles, University of",
        "affiliationId": "21646",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "jrcadet",
        "firstName": "David",
        "lastName": "Semore",
        "fullName": "David Semore",
        "email": "dvd_smr@yahoo.com",
        "affiliation": "Department of Physics, University of the Pacific",
        "affiliationId": "35054",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "kramolisdavid",
        "firstName": "David",
        "lastName": "Kramolis",
        "fullName": "David Kramolis",
        "email": "kramolisdavid@seznam.cz",
        "affiliation": "Department of Physics, Jana Evangelisty Purkyne University in Usti nad Labem ",
        "affiliationId": "33622",
        "telephone": "",
        "executive": "other"
      }, {
        "uid": "laurencepdavid",
        "firstName": "Laurence",
        "lastName": "David",
        "fullName": "Laurence David",
        "email": "ldavid@head.cfa.harvard.edu",
        "affiliation": "Smithsonian Astrophysical Observatory, Harvard-Smithsonian Center for Astrophysics",
        "affiliationId": "21873",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "madlener",
        "firstName": "David",
        "lastName": "Madlener",
        "fullName": "David Madlener",
        "email": "dmadlener@mpifr-bonn.mpg.de",
        "affiliation": "Max-Planck-Institute for Radio Astronomy",
        "affiliationId": "21134",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "malranch",
        "firstName": "David",
        "lastName": "Koerner",
        "fullName": "David Koerner",
        "email": "david.koerner@nau.edu",
        "affiliation": "Dept of Physics & Astronomy, Northern Arizona University",
        "affiliationId": "22158",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "melonidav",
        "firstName": "Davide",
        "lastName": "Meloni",
        "fullName": "Davide Meloni",
        "email": "davide.meloni@studenti.unimi.it",
        "affiliation": "Department of Mathematics and Physics, Milan, Catholic University of",
        "affiliationId": "21181",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "neufeld",
        "firstName": "David",
        "lastName": "Neufeld",
        "fullName": "David Neufeld",
        "email": "neufeld@pha.jhu.edu",
        "affiliation": "Dept of Physics & Astronomy, Johns Hopkins University",
        "affiliationId": "21924",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "polytropic",
        "firstName": "David",
        "lastName": "Blank",
        "fullName": "David Blank",
        "email": "davidl.blank@yahoo.com",
        "affiliation": "James Cook University",
        "affiliationId": "188",
        "telephone": "",
        "executive": "other"
      }, {
        "uid": "sandersdb",
        "firstName": "David",
        "lastName": "Sanders",
        "fullName": "David Sanders",
        "email": "sanders@ifa.hawaii.edu",
        "affiliation": "Institute for Astronomy, Hawaii at Manoa, University of",
        "affiliationId": "21881",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "trilling",
        "firstName": "David",
        "lastName": "Trilling",
        "fullName": "David Trilling",
        "email": "david.trilling@nau.edu",
        "affiliation": "Dept of Physics & Astronomy, Northern Arizona University",
        "affiliationId": "22158",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "vikalibrate",
        "firstName": "David",
        "lastName": "Rosario",
        "fullName": "David Rosario",
        "email": "david.rosario@durham.ac.uk",
        "affiliation": "Department of Physics, Durham University",
        "affiliationId": "21289",
        "telephone": "",
        "executive": "eu"
      }, {
        "uid": "w8mif",
        "firstName": "David",
        "lastName": "Shaffer",
        "fullName": "David Shaffer",
        "email": "shaffer@alumni.caltech.edu",
        "affiliation": "Lowell Observatory",
        "affiliationId": "21970",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "weintrda",
        "firstName": "David",
        "lastName": "Weintraub",
        "fullName": "David Weintraub",
        "email": "david.a.weintraub@vanderbilt.edu",
        "affiliation": "Department of Physics & Astronomy, Vanderbilt University",
        "affiliationId": "22402",
        "telephone": "",
        "executive": "na"
      }, {
        "uid": "whaledave",
        "firstName": "David",
        "lastName": "Dubois",
        "fullName": "David Dubois",
        "email": "david.dubois@latmos.ipsl.fr",
        "affiliation": "Institut Pierre-Simon Laplace, LATMOS Laboratory",
        "affiliationId": "141",
        "telephone": "",
        "executive": "eu"
      }
    ];
    return {primaryInvestigators};
  }
}
