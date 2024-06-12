import { InsightDatapoint } from './types';
import { Flex, Text } from '@adobe/react-spectrum';
import { Campaign, CreativeKeys } from '../campaign/types';
import { ScatterChartDatum } from './types';

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

export const toolTipRenderer = ({ event, segment, spend, clicks }: ScatterChartDatum) => (
	<Flex direction="column">
			<Text UNSAFE_className="tooltipHeader">{event}</Text>
			<Text>Channel: {segment}</Text>
			<Text>Clicks: {clicks}</Text>
			<Text>Spend: {spend}</Text>
	</Flex>
);
