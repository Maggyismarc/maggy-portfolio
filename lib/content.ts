import { createClient } from "next-sanity";
import {
  experiences as fallbackExperiences,
  journalEntries as fallbackJournal,
  siteProfile as fallbackProfile,
  skills as fallbackSkills,
  travelEntries as fallbackTravel,
  type Experience,
  type JournalEntry,
  type SiteProfile,
  type SkillGroup,
  type TravelEntry,
} from "@/data/content";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const client = projectId ? createClient({ projectId, dataset, apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-07-01", useCdn: true }) : null;

async function query<T>(groq: string, fallback: T): Promise<T> {
  if (!client) return fallback;
  try { const result = await client.fetch<T>(groq); return result ?? fallback; } catch { return fallback; }
}

export const getExperiences = () => query<Experience[]>(`*[_type == "experience" && published != false] | order(order asc){year,period,place,title,role,summary,tags,"accent":coalesce(accent,"var(--purple)")}`, fallbackExperiences);
export const getJournalEntries = () => query<JournalEntry[]>(`*[_type == "journal" && published != false] | order(date desc){"slug":slug.current,"index":coalesce(index,"NOTE"),title,"date":coalesce(string(date),"待更新"),"location":coalesce(location,"日常片段"),excerpt,"color":coalesce(color,"pink")}`, fallbackJournal);
export const getTravelEntries = () => query<TravelEntry[]>(`*[_type == "travel" && published != false] | order(startDate desc){"slug":slug.current,"index":coalesce(index,"TRIP"),title,"place":coalesce(city,country,"DESTINATION"),"date":coalesce(string(startDate),"等待你的旅行照片"),excerpt,"color":coalesce(color,"orange")}`, fallbackTravel);
export const getSkills = () => query<SkillGroup[]>(`*[_type == "skill" && published != false] | order(order asc){category,title,level,"color":coalesce(accent,"var(--lime)"),items}`, fallbackSkills);
export const getSiteProfile = () => query<SiteProfile>(`*[_type == "siteSettings"][0]{displayName,chineseName,intro,email,phone,"formattedPhone":phone,showPhone,showWechat,"portraitUrl":portrait.asset->url}`, fallbackProfile);
