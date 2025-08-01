import type { ImgHTMLAttributes } from "react";

export type AgenteType = {
  uuid: string;
  displayName: string;
  displayIcon: string;
  isPlayableCharacter: boolean;
  description: string;
  role: Array<RoleType>;
  abilities: Array<Ability>;
  displayIconSmall: string;
  fullPortrait: string;
}
type RoleType = { 
  displayName: string;
  displayIcon: string;
}
type Ability = {
  slot: string;
  displayName: string;
  description: string;
  displayIcon: string;
}