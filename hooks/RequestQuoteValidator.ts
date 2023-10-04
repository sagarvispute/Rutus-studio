import { useState } from 'react'

import {
    emailValidator,
    maxValidator,
    minValidator,
    numbersValidator,
    requiredValidator,
} from '@utils/validators'
import { TouchErrors } from '@utils/ad-hooks.utils'

export const useRequestQuoteFormValidator = (form: any) => {
    const [errors, setErrors] = useState<any>({
        name: {
            dirty: false,
            error: false,
            message: '',
        },
        contact: {
            dirty: false,
            error: false,
            message: '',
        },
        email: {
            dirty: false,
            error: false,
            message: '',
        },
        company: {
            dirty: false,
            error: false,
            message: '',
        },
        details: {
            dirty: false,
            error: false,
            message: '',
        },
        location: {
            dirty: false,
            error: false,
            message: '',
        },
    })

    const validateForm = ({
        form,
        field,
        errors,
        forceTouchErrors = false,
    }: any) => {
        let isValid = true

        // Create a deep copy of the errors
        let nextErrors = JSON.parse(JSON.stringify(errors))

        // Force validate all the fields
        if (forceTouchErrors && errors) {
            nextErrors = TouchErrors(errors)
        }

        const { name, contact, email, company, details, location } = form

        if (nextErrors.name.dirty && (field ? field === 'name' : true)) {
            const minMessage = minValidator(name.trim(), 3)
            const maxMessage = maxValidator(name.trim(), 30)

            if (minMessage) nextErrors.name.message = minMessage
            else if (maxMessage) nextErrors.name.message = maxMessage

            nextErrors.name.error = (minMessage || maxMessage).length > 0
            if (!!(minMessage || maxMessage)) isValid = false
        }

        if (nextErrors.contact.dirty && (field ? field === 'contact' : true)) {
            const requiredMessage = requiredValidator(
                contact ? contact.toString().trim() : ''
            )
            const minMessage = minValidator(
                contact ? contact.toString().trim() : '',
                10
            )
            const maxMessage = maxValidator(
                contact ? contact.toString().trim() : '',
                16
            )
            const numberMessage = numbersValidator(
                contact ? contact.toString().trim() : '' ?? ''
            )

            if (requiredMessage) nextErrors.contact.message = requiredMessage
            else if (minMessage) nextErrors.contact.message = minMessage
            else if (maxMessage) nextErrors.contact.message = maxMessage
            else if (numberMessage) nextErrors.contact.message = numberMessage

            nextErrors.contact.error =
                (requiredMessage || minMessage || maxMessage || numberMessage)
                    .length > 0
            if (
                !!(requiredMessage || minMessage || maxMessage || numberMessage)
            )
                isValid = false
        }

        if (nextErrors.email.dirty && (field ? field === 'email' : true)) {
            const emailMessage = emailValidator(email.trim())
            const minMessage = minValidator(email.trim(), 3)
            const maxMessage = maxValidator(email.trim(), 50)

            if (minMessage) nextErrors.email.message = minMessage
            else if (maxMessage) nextErrors.email.message = maxMessage
            else if (emailMessage) nextErrors.email.message = emailMessage

            nextErrors.email.error =
                (emailMessage || minMessage || maxMessage).length > 0
            if (!!(emailMessage || minMessage || maxMessage)) isValid = false
        }

        if (nextErrors.company.dirty && (field ? field === 'company' : true)) {
            const maxMessage = maxValidator(
                company ? company.toString().trim() : '',
                50
            )

            if (maxMessage) nextErrors.company.message = maxMessage

            nextErrors.company.error = maxMessage.length > 0
            if (!!maxMessage) isValid = false
        }

        if (nextErrors.details.dirty && (field ? field === 'details' : true)) {
            const requiredMessage = requiredValidator(details.trim())
            const minMessage = minValidator(details.trim(), 10)
            const maxMessage = maxValidator(details.trim(), 1500)

            if (requiredMessage) nextErrors.details.message = requiredMessage
            else if (minMessage) nextErrors.details.message = minMessage
            else if (maxMessage) nextErrors.details.message = maxMessage

            nextErrors.details.error =
                (requiredMessage || minMessage || maxMessage).length > 0
            if (!!(requiredMessage || minMessage || maxMessage)) isValid = false
        }

        if (
            nextErrors.location.dirty &&
            (field ? field === 'location' : true)
        ) {
            const requiredMessage = requiredValidator(location.trim())
            const minMessage = minValidator(location.trim(), 3)
            const maxMessage = maxValidator(location.trim(), 50)

            if (requiredMessage) nextErrors.location.message = requiredMessage
            else if (minMessage) nextErrors.location.message = minMessage
            else if (maxMessage) nextErrors.location.message = maxMessage

            nextErrors.location.error =
                (requiredMessage || minMessage || maxMessage).length > 0
            if (!!(requiredMessage || minMessage || maxMessage)) isValid = false
        }

        setErrors(nextErrors)

        return {
            isValid,
            errors: nextErrors,
        }
    }

    const onBlurField = (e: any) => {
        const field: string = e.target.name
        const fieldError = errors[field]
        if (fieldError.dirty) return

        const updatedErrors = {
            ...errors,
            [field]: {
                ...errors[field],
                dirty: true,
            },
        }

        validateForm({ form, field, errors: updatedErrors })
    }

    const reset = () => {
        const _formObj: any = {}

        for (var key in errors) {
            if (errors.hasOwnProperty(key)) {
                _formObj[key] = {
                    dirty: false,
                    error: false,
                    message: '',
                }
            }
        }
        setErrors(_formObj)
    }

    return {
        validateForm,
        onBlurField,
        reset,
        errors,
    }
}
