import React, { memo } from 'react';
import { Campaign, CampaignKeys } from '../campaign/types';
import { ListView, Item } from '@react-spectrum/list';
import { renderEmptyState } from '../helpers';
import { ActionButton, Text } from '@adobe/react-spectrum';
import RemoveCircle from '@spectrum-icons/workflow/RemoveCircle';

export default memo(
  function StagingList({ campaigns, isLoading, onRemoveCampaign }: 
    { campaigns: Campaign[], isLoading: boolean, onRemoveCampaign: Function}) {

  return (
    <ListView
      selectionMode="single"
      selectionStyle="highlight"
      density="compact"
      aria-label="Static ListView items example"
      height="100%"
      width="100%"
      loadingState={isLoading ? 'loading' : undefined}
      renderEmptyState={() => renderEmptyState("No results", "Add campaigns")}
    >
      {
        campaigns.map((item: Campaign) => (
          <Item aria-label={`campaign-${item[CampaignKeys.ID]}`} key={item[CampaignKeys.ID]}>
            <Text>{item[CampaignKeys.TITLE]}</Text>
            <ActionButton onPress={() => onRemoveCampaign(item[CampaignKeys.ID])}>
              <RemoveCircle />
            </ActionButton>
          </Item>
        ))
      }
    </ListView>
  );
})