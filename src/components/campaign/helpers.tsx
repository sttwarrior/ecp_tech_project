import { CampaignStatus } from "./types"
import { capitalize } from "../helpers"
import { StatusLight } from "@adobe/react-spectrum"

export const headerRenderer = (name: string) => {
    if (!name) {
      return name;
    }
    return capitalize(name.replace(/([A-Z])/g, ' $1').trim());
}

export const languageRenderer = (language: string[]): string => 
  Array.from(new Set(language.map(language => language.slice(0, 2).toLocaleUpperCase()))).join(", ")

export const channelsRenderer = (channels: string[] | null) => 
  channels ? channels.map(channel => capitalize(channel)).join(", ") : ""

export const dateRenderer = (date: string) => new Date(date).toLocaleDateString('en-US', {
  month: '2-digit',
  day: '2-digit',
  year: 'numeric'
})

export const campaignStatusRenderer = (status: CampaignStatus) => 
  (<StatusLight variant={campaignStatusMap[status]} >{status}</StatusLight>)

type CampaignStatusMap = {
  [key: string]: "neutral" | "positive" | "yellow"
}

const campaignStatusMap: CampaignStatusMap  = {
    [CampaignStatus.UNDER_DEVELOPMENT]: "neutral",
    [CampaignStatus.READY]: "positive",
    [CampaignStatus.COMPLETED]: "positive",
    [CampaignStatus.IN_MARKET]: "positive",
    [CampaignStatus.AD_SETUP]: "positive",
    [CampaignStatus.PENDING_ANALYSIS]: "yellow"
}