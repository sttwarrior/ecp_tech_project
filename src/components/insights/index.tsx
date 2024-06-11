import React from 'react';
import { Campaign } from '../campaign/types';
import { Flex } from '@adobe/react-spectrum';
import StagingList from './StagingList';
import Charts from './Charts';

export default function Insights({ campaigns, isLoading, onRemoveCampaign }: 
		{ campaigns: Campaign[], isLoading: boolean, onRemoveCampaign: Function}) {

	return (
		<Flex width="100%" height={500} direction="row" gap="size-100" marginY="size-300">
			<Flex width="20%" height="90%" direction="column">
				<StagingList campaigns={campaigns} isLoading={isLoading} onRemoveCampaign={onRemoveCampaign} />
			</Flex>
			<Flex width="80%" direction="column">
				<Charts campaigns={campaigns} isLoading={isLoading} />
			</Flex>
		</Flex>
	);
}