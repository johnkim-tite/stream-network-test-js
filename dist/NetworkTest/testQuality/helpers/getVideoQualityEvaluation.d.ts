import { AverageStatsBase } from '../types/stats';
export interface QualityEvaluationResults {
    supported: boolean;
    recommendedFrameRate?: number;
    recommendedResolution?: string;
    reason?: string;
}
export default function getVideoQualityEvaluation(stats: AverageStatsBase): QualityEvaluationResults;
