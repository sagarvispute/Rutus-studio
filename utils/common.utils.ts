export class CommonUtils {
    static emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    static ContactSubject: any[] = [
        {
            title: 'Provide Suggestion',
            value: 4,
        },
        {
            title: 'Report A Bug',
            value: 2,
        },
        {
            title: 'Need Help',
            value: 3,
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
