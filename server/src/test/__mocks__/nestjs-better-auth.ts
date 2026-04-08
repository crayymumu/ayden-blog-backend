export function AllowAnonymous() {
  return (_target: any, _key?: string, _desc?: PropertyDescriptor) => {}
}
export function OptionalAuth() {
  return (_target: any, _key?: string, _desc?: PropertyDescriptor) => {}
}
export const Session = () => (_target: any, _key: string, _index: number) => {}
export const AuthModule = {
  forRoot: (_opts: any) => ({
    module: class AuthModule {},
    providers: [],
    exports: [],
  }),
}

export interface UserSession {
  user: { id: string, name: string, email: string }
}
