import { type SchemaTypeDefinition } from "sanity";
import { experienceType } from "./experience";
import { journalType } from "./journal";
import { travelType } from "./travel";
import { skillType } from "./skill";
import { siteSettingsType } from "./siteSettings";

export const schemaTypes: SchemaTypeDefinition[] = [siteSettingsType, experienceType, journalType, travelType, skillType];
