const getAge = (birthDate: string): number =>
    Math.floor(
        (new Date().getTime() - new Date(birthDate).getTime()) / 3.15576e10
    )

export const requiredValidator = (val: string): string => {
    if (!val.length) {
        return `Input required`
    }
    return ''
}

export const requiredFileValidator = (val: any): string => {
    if (!val) {
        return `File required`
    }
    return ''
}

export const numbersValidator = (val: any): string => {
    if (isNaN(val)) {
        return `Only numbers are allowed`
    }
    return ''
}

export const minValidator = (val: string, count: number): string => {
    if (val.length < count) {
        return `Minimum ${count} chars are required`
    }
    return ''
}

export const maxValidator = (val: string, count: number): string => {
    if (val && val.length > count) {
        return `Maximum ${count} chars are required, you entered ${val.length} chars`
    }
    return ''
}

export const ageValidator = (val): string => {
    const age = getAge(val)

    if (val && age < 15) {
        return `Age under 15 is not allowed`
    } else if (age >= 60) {
        return `Age over 80 is not allowed`
    }

    return ''
}

export const dobValidator = (val: string, count: number): string => {
    if (val && val.length >= count) {
        return `Maximum ${count} chars are required`
    }
    return ''
}

export const emailValidator = (email: string): string => {
    if (!email) {
        return 'Email is required'
    } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
        return 'Incorrect email format'
    }
    return ''
}

export const urlValidator = (url: string): string => {
    if (
        url &&
        url.match(
            /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
        ) === null
    ) {
        return 'Incorrect URL format'
    }
    return ''
}

export const passwordValidator = (password: string): string => {
    if (!password) {
        return 'Password is required'
    } else if (password.length < 8) {
        return 'Password must have a minimum 8 chars'
    }
    return ''
}

export const confirmPasswordValidator = (
    confirmPassword: string,
    form: any
): string => {
    if (!confirmPassword) {
        return 'Confirm password is required'
    } else if (confirmPassword.length < 8) {
        return 'Confirm password must have a minimum 8 chars'
    } else if (confirmPassword !== form.password) {
        return 'Passwords do not match'
    }
    return ''
}
