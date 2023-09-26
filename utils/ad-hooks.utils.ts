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
    return Object.entries(errors).reduce(
        (acc: any, [field, fieldError]: any) => {
            acc[field] = {
                ...fieldError,
                dirty: true,
            }

            return acc
        },
        {}
    )
}

export const ResetErrors = (errors: any) => {
    return Object.entries(errors).reduce(
        (acc: any, [field, fieldError]: any) => {
            acc[field] = {
                ...fieldError,
                dirty: false,
                error: false,
                message: '',
            }

            return acc
        },
        {}
    )
}
