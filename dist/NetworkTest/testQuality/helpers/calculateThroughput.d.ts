import { AverageStats, HasAudioVideo } from '../types/stats';
import MOSState from './MOSState';
export default function calculateThroughput(state: MOSState, duration: number): HasAudioVideo<AverageStats>;
