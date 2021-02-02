export interface EnvInterface {
  BASE_URL: string
  DEV: boolean
  MODE: string
  PROD: boolean
  VITE_LANG_ENV?: string
}
// @ts-ignore
export default (): EnvInterface => import.meta.env
