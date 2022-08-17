import MOSState from './MOSState';
import { OT } from '../../types/opentok';
export declare type StatsListener = (error?: OT.OTError, stats?: OT.SubscriberStats) => void;
export default function subscriberMOS(mosState: MOSState, subscriber: OT.Subscriber, publisher: OT.Publisher, getStatsListener: StatsListener, callback: (state: MOSState) => void): MOSState;
