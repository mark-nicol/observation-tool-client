// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IField} from './field.interface';
import {ISkyCoordinates} from './sky-coordinates.interface';

export interface IPolygon extends IField {
  '@type': 'PolygonT';
  points: ISkyCoordinates[];
}
