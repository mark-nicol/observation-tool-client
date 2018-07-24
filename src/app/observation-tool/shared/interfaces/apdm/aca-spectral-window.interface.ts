// Generated using typescript-generator version 2.5.423 on 2018-07-19 14:12:38.

import {IAbstractSpectralWindow} from './abstract-spectral-window.interface';
import {IChannelAverageRegion} from './channel-average-region.interface';

export interface IACASpectralWindow extends IAbstractSpectralWindow {
  frqChProfReproduction: boolean;
  ChannelAverageRegion: IChannelAverageRegion[];
  synthProf: string;
}
