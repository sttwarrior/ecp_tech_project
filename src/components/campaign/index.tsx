import React, { memo } from "react";
import { 
  TableView, 
  TableHeader, 
  TableBody, 
  Column, 
  Row, 
  Cell,
  Selection
} from "@adobe/react-spectrum";
import { Campaign, CampaignKeys } from "./types";
import { 
  headerRenderer,
  languageRenderer,
  campaignStatusRenderer, 
  dateRenderer,
  channelsRenderer
} from "./helpers";

const columns = [
  { 
    name: CampaignKeys.TITLE, 
    key: CampaignKeys.TITLE,
  },
  {
    name: CampaignKeys.LANGUAGES.slice(0, 4),
    key: CampaignKeys.LANGUAGES,
    minWidth: 80,
    maxWidth: 100,
    renderer: languageRenderer
  },
  {
    name: CampaignKeys.CHANNELS,
    key: CampaignKeys.CHANNELS,
    renderer: channelsRenderer
  },
  {
    name: CampaignKeys.START_DATE,
    key: CampaignKeys.START_DATE,
    maxWidth: 120,
    renderer: dateRenderer
  },
  { 
    name: CampaignKeys.CAMPAIGN_STATUS.replace(/^[a-z]+([A-Z].*)$/, "$1"),
    key: CampaignKeys.CAMPAIGN_STATUS,
    minWidth: 180,
    maxWidth: 240,
    renderer: campaignStatusRenderer
  }
]

export default memo(function Campaigns({ campaigns, selectedKeys, setSelectedKeys } :
   { campaigns: Campaign[], selectedKeys: Selection , setSelectedKeys: (keys: Selection) => void}) {

  return (
    <TableView
      aria-label="Campaign tables"
      selectionMode="multiple"
      alignSelf="center"
      width="100%"
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <Column 
            key={column.key}       
            minWidth={column.minWidth}
            maxWidth={column.maxWidth}
          >
            {headerRenderer(column.name)}
          </Column>
        )}
      </TableHeader>
      <TableBody items={campaigns}>
        {(campaign) => (
          <Row key={campaign.id}>
            {columns.map((column) => (
              <Cell key={campaign.id + column.key}>
                <>
                  {column.renderer
                    ? column.renderer(campaign[column.key as CampaignKeys] as any) 
                    : campaign[column.key as CampaignKeys]}
                </> 
              </Cell>
            ))}
          </Row>
        )}
      </TableBody>
    </TableView>
  );
})
