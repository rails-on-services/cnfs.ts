export interface GroupDto extends GroupAttributesDto {
  created: string;
  updated: string;
}

export interface GroupAttributesDto {
  name: string;
}

export const TYPE: string = 'group';
