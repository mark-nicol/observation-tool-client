"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var latitude_1 = require("../../../../units/classes/latitude");
var longitude_1 = require("../../../../units/classes/longitude");
var angle_1 = require("../../../../units/classes/angle");
exports.FIELD_CENTRE_COORDINATES_DATA = {
    coordType: 'relative',
    /** Data for if individual component is being used */
    individual: {
        offsetUnit: 'mas',
        rows: [
            {
                lat: new latitude_1.Latitude(),
                lon: new longitude_1.Longitude()
            }
        ]
    },
    /** Data for if rectangular component is being used */
    rectangular: {
        chosenSystem: 'ICRS',
        sexagesimalUnits: false,
        lonOffset: new angle_1.Angle(),
        latOffset: new angle_1.Angle(),
        pLength: new angle_1.Angle(),
        qLength: new angle_1.Angle(),
        positionAngle: new angle_1.Angle(),
        spacing: 0.51093,
        spacingUnits: 'Fraction of antenna beamsize'
    }
};
