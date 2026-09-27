import type {User} from '@supabase/supabase-js';

export const ADMIN_EMAIL = 'jvansh995@gmail.com';

export function isAdminEmail(email: string | undefined | null) {
 return email?.trim().toLowerCase() === ADMIN_EMAIL;
}

export function isAdminUser(user: User) {
 return isAdminEmail(user.email) && Boolean(user.email_confirmed_at);
}
