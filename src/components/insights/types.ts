export interface InsightDatapoint {
  event: string;
  segment: string,
  spend: number,
  clicks: number
  [k: string]: any
}