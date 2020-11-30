export interface RoleDto extends RoleAttributesDto {
  created: string;
  updated: string;
}

export interface RoleAttributesDto {
  name: string;
}

export const TYPE: string = 'role';
