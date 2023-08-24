import { useState } from 'react'

import {
    emailValidator,
    maxValidator,
    minValidator,
    numbersValidator,
    requiredValidator,
} from '@utils/validators'
import { TouchErrors } from '@utils/ad-hooks.utils'

export const useContactFormValidator = (form: any) => {
    const [errors, setErrors] = useState({
        name: {
            dirty: false,
            error: false,
            message: '',
        },
        phone: {
            dirty: false,
            error: false,
            message: '',
        },
        email: {
            dirty: false,
            error: false,
            message: '',
        },
        subject: {
            dirty: false,
            error: false,
            message: '',
        },
        message: {
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

        const { name, phone, email, subject, message } = form

        if (nextErrors.name.dirty && (field ? field === 'name' : true)) {
            const minMessage = minValidator(name.trim(), 3)
            const maxMessage = maxValidator(name.trim(), 10)

            if (minMessage) nextErrors.name.message = minMessage
            else if (maxMessage) nextErrors.name.message = maxMessage

            nextErrors.name.error = (minMessage || maxMessage).length > 0
            if (!!(minMessage || maxMessage)) isValid = false
        }

        if (nextErrors.phone.dirty && (field ? field === 'phone' : true)) {
            const requiredMessage = requiredValidator(
                phone ? phone.toString().trim() : ''
            )
            const minMessage = minValidator(
                phone ? phone.toString().trim() : '',
                10
            )
            const maxMessage = maxValidator(
                phone ? phone.toString().trim() : '',
                16
            )
            const numberMessage = numbersValidator(
                phone ? phone.toString().trim() : '' ?? ''
            )

            if (requiredMessage) nextErrors.phone.message = requiredMessage
            else if (minMessage) nextErrors.phone.message = minMessage
            else if (maxMessage) nextErrors.phone.message = maxMessage
            else if (numberMessage) nextErrors.phone.message = numberMessage

            nextErrors.phone.error =
                (requiredMessage || minMessage || maxMessage || numberMessage)
                    .length > 0
            if (
                !!(requiredMessage || minMessage || maxMessage || numberMessage)
            )
                isValid = false
        }

        if (nextErrors.email.dirty && (field ? field === 'email' : true)) {
            const emailMessage = emailValidator(email.trim())
            nextErrors.email.error = !!emailMessage
            nextErrors.email.message = emailMessage
            if (!!emailMessage) isValid = false
        }

        if (nextErrors.subject.dirty && (field ? field === 'subject' : true)) {
            const requiredMessage = requiredValidator(
                subject ? subject.toString().trim() : ''
            )
            const maxMessage = maxValidator(
                subject ? subject.toString().trim() : '',
                1000
            )

            if (requiredMessage) nextErrors.subject.message = requiredMessage
            else if (maxMessage) nextErrors.phone.message = maxMessage

            nextErrors.subject.error =
                (requiredMessage || maxMessage).length > 0
            if (!!(requiredMessage || maxMessage)) isValid = false
        }

        if (nextErrors.message.dirty && (field ? field === 'message' : true)) {
            const requiredMessage = requiredValidator(message.trim())
            const minMessage = minValidator(message.trim(), 10)
            const maxMessage = maxValidator(message.trim(), 1000)

            if (requiredMessage) nextErrors.message.message = requiredMessage
            else if (minMessage) nextErrors.message.message = minMessage
            else if (maxMessage) nextErrors.message.message = maxMessage

            nextErrors.message.error =
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
