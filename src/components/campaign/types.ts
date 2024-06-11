export enum CampaignStatus {
  UNDER_DEVELOPMENT = "under development",
  READY = "ready",
  COMPLETED = "completed",
  IN_MARKET = "in market",
  AD_SETUP = "ad setup",
  PENDING_ANALYSIS = "pending analysis"
}

export enum Persona {
  MOTIVATION = "Motivation (MCI Segmentation)",
  COMMUNICATOR = "Communicator",
  ASPIRING_HOBBYIST = "Aspiring Hobbyist",
  BEGINNER_PRODUCT_SKILL = "Beginner Product Skill",
  INTERMEDIATE_PRODUCT_SKILL = "Intermediate Product Skill",
  CREATIVE_CLIMBER = "Creative Climber",
  WORKDAY_CREATIVE = "Workday Creative",
  EXPERT_PRODUCT_SKILL = "Expert Product Skill",
  PRODUCT_KNOWLEDGE = "Product Knowledge",
  MICRO_ENTREPRENEUR = "MicroEntrepreneur"
}


export enum Group {
  DOCUMENT_CLOUD_CAMPAIGNS = "Document Cloud Campaigns",
  BRAND_CAMPAIGNS = "Brand Campaigns",
  CREATOR_SERIES = "Creator Series",
  CUSTOMER_STORIES = "Customer Stories",
  EMAIL_PROGRAMS = "Email Programs",
  MEMBERSHIP_VALUE = "Membership Value",
  RELEASE_MARKETING = "Release Marketing",
  OTHER = "Other"
}

export enum CampaignType {
  DOCUMENT_CLOUD_CAMPAIGNS = "Document Cloud Campaigns",
  BRAND_CAMPAIGNS = "Brand Campaigns",
  DREAM_IT_DESIGN_IT = "Dream It. Design It.",
  CUSTOMER_STORIES = "Customer Stories",
  FREE_ASSETS_INTENT_ANCHOR = "Free Assets Intent Anchor",
  MEMBERSHIP_VALUE = "Membership Value",
  RELEASE_MARKETING = "Release Marketing",
  STUDENT_CAMPAIGNS = "Student Campaigns",
  TEMPLATES_AND_ASSETS = "Templates & Assets",
  COMMUNITY_ACTIVATION = "Community Activation",
  CREATOR_SERIES = "Creator Series",
  YOUR_PASSION_YOUR_PROJECT = "Your Passion. Your Project.",
  SEASONAL = "Seasonal",
  INSPIRE_INTENT_ANCHOR = "Inspire Intent Anchor",
  PRODUCTIVITY_THE_UNLOCK = "Productivity: the Unlock",
  DREAM_JOBS = "Dream Jobs",
  RESURRECTION = "Resurrection",
  CREATIVE_CHALLENGE = "Creative Challenge",
  YOUR_SHOT_YOUR_STORY = "Your Shot. Your Story.",
  TOOL_AWARENESS = "Tool Awareness",
  LEARN_INTENT_ANCHOR = "Learn Intent Anchor",
  CROSS_APP_CAMPAIGN = "Cross-App Campaign"
}

export enum CampaignKeys {
  TITLE = "title",
  ID = "id",
  OVERVIEW = "overview",
  LANGUAGES = "languages",
  START_DATE = "startDate",
  CATEGORIES = "categories",
  CHANNELS = "channels",
  CAMPAIGN_STATUS = "campaignStatus",
  CREATIVES = "creatives"
}

export enum CreativeKeys {
  ID = "id",
  HEADLINE = "headline",
  CHANNEL = "channel",
  PERFORMANCE = "performance"
}

export interface Creative {
  [CreativeKeys.CHANNEL]: string,
  [CreativeKeys.ID]: string,
  [CreativeKeys.HEADLINE]: string,
  [CreativeKeys.PERFORMANCE]: {
    clicks: number,
    spend: number
  }
}

export interface Campaign {
  [CampaignKeys.TITLE]: string,
  [CampaignKeys.ID]: string,
  [CampaignKeys.OVERVIEW]: string,
  [CampaignKeys.LANGUAGES]: string[],
  [CampaignKeys.START_DATE]: string,
  [CampaignKeys.CATEGORIES]: string[],
  [CampaignKeys.CHANNELS]: string[],
  [CampaignKeys.CAMPAIGN_STATUS]: CampaignStatus[keyof CampaignStatus],
  [CampaignKeys.CREATIVES]: Creative[]
}
