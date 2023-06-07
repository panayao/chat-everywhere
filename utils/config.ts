import { PluginID } from '@/types/plugin';

// Amount of credit will be added to all user's account on the 1st day of every month
export const DefaultMonthlyCredits = {
  [PluginID.LANGCHAIN_CHAT]: 0,
  [PluginID.GPT4]: 1000000000,
  [PluginID.IMAGE_GEN]: 1000000000,
}