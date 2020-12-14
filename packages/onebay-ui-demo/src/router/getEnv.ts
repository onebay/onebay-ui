export interface EnvInterface {
  BASE_URL: string
  DEV: boolean
  MODE: string
  PROD: boolean
  VITE_TEMPLATE_ENV?: string
}
// @ts-ignore
export default (): EnvInterface => import.meta?.env || 'dev'
