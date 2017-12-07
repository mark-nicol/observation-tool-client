import {FovParametersInterface} from './field-setup-interfaces/fov-parameters.interface';
import {ImageQueryInterface} from './field-setup-interfaces/image-query.interface';
import {SourceInterface} from './field-setup-interfaces/source.interface';
import {SpatialImageInterface} from './field-setup-interfaces/spatial-image.interface';

export interface FieldSetupInterface {
  spatialImage: SpatialImageInterface,
  fovParameters: FovParametersInterface,
  imageQuery: ImageQueryInterface,
  sources: [SourceInterface]
}
