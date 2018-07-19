import {IAbstractSpectralWindowT} from './abstract-spectral-window.interface';
import {IChannelAverageRegionT} from './channel-average-region.interface';

export interface IBLSpectralWindowT extends IAbstractSpectralWindowT {
  correlationNyquistOversampling: boolean;
  quantizationCorrection: boolean;
  ChannelAverageRegion: IChannelAverageRegionT[];
  correlationBits: string;
}
