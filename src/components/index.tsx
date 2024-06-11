import React, { useState, useCallback } from 'react';
import { useGetCampaigns } from '../services/query';
import { ProgressCircle, Flex, View, Selection } from '@adobe/react-spectrum';
import { Campaign, CampaignKeys } from './campaign/types';
import Insights from './insights';
import Campaigns from './campaign';
import { renderErrorState } from './helpers';

export default function Root() {
  const { data, error, isLoading } = useGetCampaigns();
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set());

  const onRemoveCampaign = useCallback((selectedKey: string) => {
    if(selectedKeys === "all") {
      const updated = data!.map((campaign: Campaign) => campaign[CampaignKeys.ID]).filter((id: string) => id !== selectedKey);
      setSelectedKeys(new Set(updated));
    } else {
      const updated = new Set([...selectedKeys]);
      updated.delete(selectedKey);
      setSelectedKeys(updated);
    }
  }, [data, selectedKeys])

  const mapKeysToCampaigns = useCallback((selectedKeys: Selection) => {
    if(data && selectedKeys === "all") {
      return data;
    }
    if(selectedKeys instanceof Set) {
      return data!.filter((campaign: Campaign) => selectedKeys.has(campaign.id));
    }
    return [];
  }, [data])

  if(isLoading) {
    return (
      <div className="absoluteCenter">
        <ProgressCircle aria-label="Loading…" isIndeterminate />
      </div>
    );
  }

  if(error) {
    return renderErrorState("Error fetching campaigns", "Please try again later")
  }

  return (
    <View padding="size-200">
      <Flex width="100%" direction="column" gap="size-100">
        <Flex width="100%" height={500} direction="row" gap="size-100" marginY="size-300">
            <Insights
              campaigns={mapKeysToCampaigns(selectedKeys)}
              isLoading={isLoading} 
              onRemoveCampaign={onRemoveCampaign}
            />
        </Flex>
        <Flex width="100%" direction="row" gap="size-100">
          <Campaigns
            campaigns={data! as Campaign[]} 
            selectedKeys={selectedKeys}
            setSelectedKeys={setSelectedKeys}
          />
        </Flex>
      </Flex>
    </View>
  )
}
