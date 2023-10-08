export class CommonUtils {
    static emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    static ContactSubject: any[] = [
        {
            title: 'Consultation',
            value: 1,
        },
        {
            title: 'Residential project',
            value: 2,
        },
        {
            title: 'Commercial project',
            value: 3,
        },
        {
            title: 'Other',
            value: 4,
        },
    ]
}

export const isBrowser = (): boolean => {
    return typeof window !== 'undefined'
}

export const plainText = (text: string) => {
    if (!text || !text.length) return text

    const _text = text.replace(/<\/?[^>]+(>|$)/g, ' ')
    return _text.trim()
}
