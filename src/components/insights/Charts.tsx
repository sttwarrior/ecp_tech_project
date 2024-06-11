import React, { memo } from 'react';
import {
	Axis, 
	Legend, 
	Chart, 
	Trendline, 
	Scatter, 
	TrendlineAnnotation, 
	TrendlineProps,
} from '@adobe/react-spectrum-charts';
import { Campaign } from '../campaign/types';
import { dataPrep } from './helpers';

const trendlineProps: TrendlineProps = {
	method: 'average',
	lineWidth: 'XS',
	lineType: 'solid',
	dimensionExtent: ['domain', 'domain'],
}

export default memo(
	function Insights({ campaigns, isLoading }: { campaigns: Campaign[], isLoading: boolean }) {

	return (
		<Chart 
			height="100%" 
			data={dataPrep(campaigns)} 
			loading={isLoading || undefined}
			emptyStateText="Add data from the table below"
		>
			<Axis position="bottom" ticks grid title="Spend" />
			<Axis position="left" ticks grid title="Clicks" />
			<Scatter dimension="spend" metric="clicks" color="segment">
				<Trendline {...trendlineProps} displayOnHover color="gray-900" orientation="horizontal">
					<TrendlineAnnotation prefix="Average Clicks" numberFormat=".2s" />
				</Trendline>
				<Trendline {...trendlineProps} displayOnHover color="gray-900" orientation="vertical">
					<TrendlineAnnotation prefix="Average spend" numberFormat=".2s" />
				</Trendline>
			</Scatter>
			<Legend position="bottom" highlight />
		</Chart>
	);
})