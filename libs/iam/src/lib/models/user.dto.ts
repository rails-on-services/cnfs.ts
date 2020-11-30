export interface UserDto extends UserAttributesDto {
  created: string;
  updated: string;
}

export interface UserAttributesDto {
  firstName: string;
}

export const TYPE: string = 'user';
