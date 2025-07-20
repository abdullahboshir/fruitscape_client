 
import { USER_ROLE } from "@/constant/role";
import type { IconType } from "react-icons";


export type TMeta = {
  page: number;
  limit: number;
  total: number;
};

export type TUserRole = keyof typeof USER_ROLE;


export interface DrawerItem {
  title: string;
  path?: string;
  icon?: IconType;
  children?: DrawerItem[];
}


export type TResponseSuccess<T = unknown> = {
  data: T;
  meta?: TMeta;
};

export type TGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: TGenericErrorMessage[];
};

export type TGenericErrorMessage = {
  path: string | number;
  message: string;
};
