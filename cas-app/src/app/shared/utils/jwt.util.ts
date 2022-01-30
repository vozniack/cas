import jwt_decode from 'jwt-decode';

export function hasRole(token: string, role: string): boolean {
  return token ? ((jwt_decode(token) as any).roles as string[]).includes(role) : false
}
