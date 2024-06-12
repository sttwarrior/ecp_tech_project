import { Datum } from '@adobe/react-spectrum-charts';

export interface InsightDatapoint {
  event: string;
  segment: string,
  spend: number,
  clicks: number
  [k: string]: any
}

export interface ScatterChartDatum extends Datum {
  event: string;
  segment: string,
  spend: number,
  clicks: number
}