import { InsightDatapoint } from './types';
import { Campaign, CreativeKeys } from '../campaign/types';

export const dataPrep = (campaigns: Campaign[]): InsightDatapoint[] => {
	const creatives = campaigns.flatMap(campaign => campaign.creatives);
	const data = creatives.map(creative => {
		return {
			event: creative[CreativeKeys.ID],
			segment: creative[CreativeKeys.CHANNEL],
			spend: creative[CreativeKeys.PERFORMANCE]?.spend,
			clicks: creative[CreativeKeys.PERFORMANCE]?.clicks
		}
	});

	return data.filter(d => d.spend && d.clicks);
}
