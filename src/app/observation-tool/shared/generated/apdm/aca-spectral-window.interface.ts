import {IAbstractSpectralWindowT} from './abstract-spectral-window.interface';
import {IChannelAverageRegionT} from './channel-average-region.interface';

export interface IACASpectralWindowT extends IAbstractSpectralWindowT {
  frqChProfReproduction: boolean;
  ChannelAverageRegion: IChannelAverageRegionT[];
  synthProf: string;
}
