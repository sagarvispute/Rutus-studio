export const convertToFormData = (formData: any) => {
    const _formData: FormData = new FormData()

    if (formData?.files) {
        const fileNames: string[] = []
        formData?.files.forEach((file: any) => {
            if (file?.name && !fileNames.includes(file.name)) {
                fileNames.push(file.name)
                _formData.append('files[]', file, file.name)
            }
        })
    }

    for (const key in formData) {
        if (key !== 'files') _formData.append(key, formData[key])
    }
    return _formData
}
