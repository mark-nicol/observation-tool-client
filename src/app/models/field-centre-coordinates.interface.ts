export interface FieldCentreCoordinatesInterface {
  coordType: string,
  individual: {
    offsetUnit: string,
    rows: [
      {
        lat: string,
        lon: string
      }
      ]
  },
  rectangular: {
    chosenSystem: string,
    sexagesimalUnits: boolean,
    lonOffset: number,
    lonOffsetUnits: string,
    latOffset: number,
    latOffsetUnits: string,
    pLength: number,
    pLengthUnits: string,
    qLength: number,
    qLengthUnits: string,
    positionAngle: number,
    positionAngleUnits: string,
    spacing: number,
    spacingUnits: string
  }
}
