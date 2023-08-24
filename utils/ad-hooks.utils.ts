import { CommonUtils } from './common.utils'

export const TimingsErrorState = [
    {
        dirty: false,
        error: false,
        message: '',
    },
    {
        dirty: false,
        error: false,
        message: '',
    },
    {
        dirty: false,
        error: false,
        message: '',
    },
    {
        dirty: false,
        error: false,
        message: '',
    },
    {
        dirty: false,
        error: false,
        message: '',
    },
    {
        dirty: false,
        error: false,
        message: '',
    },
    {
        dirty: false,
        error: false,
        message: '',
    },
]

export const LocationErrorStates = {
    country: {
        dirty: false,
        error: false,
        message: '',
    },
    state: {
        dirty: false,
        error: false,
        message: '',
    },
    city: {
        dirty: false,
        error: false,
        message: '',
    },
    area: {
        dirty: false,
        error: false,
        message: '',
    },
    location: {
        dirty: false,
        error: false,
        message: '',
    },
}

export const SharedErrorStates = {
    file: {
        dirty: false,
        error: false,
        message: '',
    },
    title: {
        dirty: false,
        error: false,
        message: '',
    },
    description: {
        dirty: false,
        error: false,
        message: '',
    },
    contact: {
        dirty: false,
        error: false,
        message: '',
    },
    ...LocationErrorStates,
}

export const TouchErrors = (errors: any) => {
    return Object.entries(errors).reduce((acc, [field, fieldError]: any) => {
        acc[field] = {
            ...fieldError,
            dirty: true,
        }

        if (acc['timings'] && acc.hasOwnProperty('timings')) {
            for (let i = 0; i < CommonUtils.timings.length; i++) {
                acc['timings'][i].dirty = true
            }
        }

        return acc
    }, {})
}

export const ResetErrors = (errors: any) => {
    return Object.entries(errors).reduce((acc, [field, fieldError]: any) => {
        acc[field] = {
            ...fieldError,
            dirty: false,
            error: false,
            message: '',
        }

        if (acc['timings'] && acc.hasOwnProperty('timings')) {
            for (let i = 0; i < CommonUtils.timings.length; i++) {
                acc['timings'][i].dirty = false
                acc['timings'][i].error = false
                acc['timings'][i].message = ''
            }
        }

        return acc
    }, {})
}
