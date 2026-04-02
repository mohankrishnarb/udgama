export type PriorityType = 'low' | 'medium' | 'high';
export type RoleType = 'user' | 'manager' | 'admin';
export type StatusType = 'opened' | 'inprogress' | 'closed';

export interface UserModel {
  _id: string;
  fullname: string;
  email: string;
  priority: PriorityType;
  role: RoleType;
  status: StatusType;
}

export const COLOR_MAP: Record<string, string> = {

    // PriorityType
    'low'    : '#ffad1f40',
    'medium' :  '#13deb940',
    'high'   :  '#f7445626',

    // RoleType
    'user'    : '#ffad1f40',
    'manager' : '#13deb940',
    'admin'  : '#f7445626',

    // StatusType
    'new'       : '#ffad1f40',
    'inprogress': '#13deb940',
    'closed'    : '#f7445626'

}
