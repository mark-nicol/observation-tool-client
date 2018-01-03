"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var speed_1 = require("../../../../units/classes/speed");
var angular_velocity_1 = require("../../../../units/classes/angular-velocity");
var angle_1 = require("../../../../units/classes/angle");
var longitude_1 = require("../../../../units/classes/longitude");
var latitude_1 = require("../../../../units/classes/latitude");
exports.FIELD_SOURCE_DATA = {
    sourceName: '',
    solarSystemObject: false,
    chosenSolarObject: 'Mercury',
    targetType: 'individual',
    chosenSystem: 'ICRS',
    sexagesimalUnits: false,
    lat: new latitude_1.Latitude(),
    lon: new longitude_1.Longitude(),
    parallax: new angle_1.Angle(),
    properMotionCross: new angular_velocity_1.AngularVelocity(),
    properMotionDeclination: new angular_velocity_1.AngularVelocity(),
    radialVelocity: speed_1.Speed,
    radialVelocityReferenceFrame: 'bar',
    redshift: 0.00000,
    dopplerType: 'Radio'
};
