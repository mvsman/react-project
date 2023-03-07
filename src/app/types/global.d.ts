declare const __IS_DEV__: boolean

declare module '*.module.scss'

declare module '*.png'
declare module '*.jpg'
declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}
