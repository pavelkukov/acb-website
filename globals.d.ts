declare module '*.md' {
    const value: string
    export default value
}

declare global {
    interface IframeHTMLAttributes<T> extends HTMLAttributes<T> {
        allow?: string
        allowFullScreen?: boolean
        webkitallowfullscreen?: boolean
        allowTransparency?: boolean
        frameBorder?: number | string
        height?: number | string
        marginHeight?: number
        marginWidth?: number
        name?: string
        sandbox?: string
        scrolling?: string
        seamless?: boolean
        src?: string
        srcDoc?: string
        width?: number | string
    }
}
