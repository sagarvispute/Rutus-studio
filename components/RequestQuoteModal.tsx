import { WebConstants } from '@constants/web-constants'
import { Dialog, Transition } from '@headlessui/react'
import { useRequestQuoteFormValidator } from '@hooks/RequestQuoteValidator'
import { convertToFormData } from '@utils/files.utils'
import axios from 'axios'
import React, { Fragment, useRef, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { IoCloudUploadOutline } from 'react-icons/io5'

interface Props {
    isOpen: boolean
    setIsOpen: (state: boolean) => void
}

export default function RequestQuoteModal(props: Props) {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        maxFiles: 5,
        maxSize: 3145728,
    })
    const files = acceptedFiles.map((file: File) => (
        <li key={file?.name}>{file?.name}</li>
    ))
    const [successMessage, setSuccessMessage] = useState<string>('')
    const [showMessage, setShowMessage] = useState<boolean>(false)

    const [form, setForm] = useState({
        name: '',
        email: '',
        contact: '',
        company: '',
        details: '',
        location: '',
    })

    const requestQuoteFormRef = useRef(null)

    const { errors, validateForm, onBlurField, reset } =
        useRequestQuoteFormValidator(form)

    const onUpdateField = (e: any) => {
        const field: string = e.target.name
        const nextFormState = {
            ...form,
            [field]: e.target.value,
        }

        setForm(nextFormState)
        if (errors[field].dirty)
            validateForm({
                form: nextFormState,
                errors,
                field,
            })
    }

    const onSubmitForm = (e: any) => {
        e.preventDefault()
        const { isValid } = validateForm({
            form,
            errors,
            forceTouchErrors: true,
        })
        if (!isValid) return

        let formData: FormData = new FormData()
        formData = convertToFormData({
            ...form,
            files: acceptedFiles,
        })

        axios
            .post(
                `${WebConstants.baseUrl}/${WebConstants.requestQuote}`,
                formData
            )
            .then((resp: any) => {
                if (resp) {
                    props.setIsOpen(false)
                    setSuccessMessage(resp?.message)
                    setShowMessage(true)
                }
            })
    }

    return (
        <>
            <Transition show={props.isOpen} as={Fragment}>
                <Dialog
                    onClose={() => props.setIsOpen(false)}
                    className="relative z-50"
                >
                    <div className="fixed inset-0 bg-black/30" />

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <Dialog.Panel className="w-full max-w-xl rounded bg-white px-4 py-6">
                                <Dialog.Title className="font-bold text-xl">
                                    Request a quote
                                </Dialog.Title>
                                <Dialog.Description className="text-xs mb-5">
                                    Share your requirement we will get back to
                                    you soon
                                </Dialog.Description>

                                <form
                                    onSubmit={onSubmitForm}
                                    ref={requestQuoteFormRef}
                                    className="mt-5"
                                >
                                    <div className="grid sm:grid-cols-2 gap-y-3 gap-x-4 mb-4">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="text-sm text-gray-800 font-medium"
                                            >
                                                Your Name{' '}
                                                <span className="text-red-800">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                className="block border-[1px] border-gray-300 rounded-md p-2 px-3 w-full text-sm text-gray-600"
                                                onChange={onUpdateField}
                                                onBlur={onBlurField}
                                            />
                                            {errors.name.dirty &&
                                                errors.name.error && (
                                                    <div className="text-red-700 text-xs">
                                                        {errors.name.message}
                                                    </div>
                                                )}
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="text-sm text-gray-800 font-medium"
                                            >
                                                Email{' '}
                                                <span className="text-red-800">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="block border-[1px] border-gray-300 rounded-md p-2 px-3 w-full text-sm text-gray-600"
                                                onChange={onUpdateField}
                                                onBlur={onBlurField}
                                            />
                                            {errors.email.dirty &&
                                                errors.email.error && (
                                                    <div className="text-red-700 text-xs">
                                                        {errors.email.message}
                                                    </div>
                                                )}
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="contact"
                                                className="text-sm text-gray-800 font-medium"
                                            >
                                                Contact{' '}
                                                <span className="text-red-800">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="text"
                                                name="contact"
                                                id="contact"
                                                className="block border-[1px] border-gray-300 rounded-md p-2 px-3 w-full text-sm text-gray-600"
                                                onChange={onUpdateField}
                                                onBlur={onBlurField}
                                            />
                                            {errors.contact.dirty &&
                                                errors.contact.error && (
                                                    <div className="text-red-700 text-xs">
                                                        {errors.contact.message}
                                                    </div>
                                                )}
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="company"
                                                className="text-sm text-gray-800 font-medium"
                                            >
                                                Company
                                            </label>
                                            <input
                                                type="text"
                                                name="company"
                                                id="company"
                                                className="block border-[1px] border-gray-300 rounded-md p-2 px-3 w-full text-sm text-gray-600"
                                                onChange={onUpdateField}
                                                onBlur={onBlurField}
                                            />
                                            {errors.company.dirty &&
                                                errors.company.error && (
                                                    <div className="text-red-700 text-xs">
                                                        {errors.company.message}
                                                    </div>
                                                )}
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="location"
                                                className="text-sm text-gray-800 font-medium"
                                            >
                                                Location{' '}
                                                <span className="text-red-800">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                type="text"
                                                name="location"
                                                id="location"
                                                className="block border-[1px] border-gray-300 rounded-md p-2 px-3 w-full text-sm text-gray-600"
                                                onChange={onUpdateField}
                                                onBlur={onBlurField}
                                            />
                                            {errors.location.dirty &&
                                                errors.location.error && (
                                                    <div className="text-red-700 text-xs">
                                                        {
                                                            errors.location
                                                                .message
                                                        }
                                                    </div>
                                                )}
                                        </div>
                                    </div>

                                    <div className="mb-5">
                                        <label
                                            htmlFor="details"
                                            className="text-sm text-gray-800 font-medium"
                                        >
                                            Details{' '}
                                            <span className="text-red-800">
                                                *
                                            </span>
                                        </label>
                                        <textarea
                                            name="details"
                                            id="details"
                                            cols={30}
                                            rows={4}
                                            className="block border-[1px] border-gray-300 rounded-md p-2 px-3 w-full text-sm text-gray-600"
                                            onChange={onUpdateField}
                                            onBlur={onBlurField}
                                        ></textarea>
                                        {errors.details.dirty &&
                                            errors.details.error && (
                                                <div className="text-red-700 text-xs">
                                                    {errors.details.message}
                                                </div>
                                            )}
                                    </div>

                                    <div
                                        {...getRootProps({
                                            className: 'dropzone',
                                        })}
                                        className="rounded-lg py-5 px-3 w-full text-center flex flex-col items-center bg-slate-100 cursor-pointer"
                                    >
                                        <input {...getInputProps()} />
                                        <span className="text-3xl">
                                            <IoCloudUploadOutline />
                                        </span>
                                        <p className="text-sm mt-2 text-slate-300 leading-4">
                                            Click to upload documents or drag
                                            and drop
                                            <br />
                                            SVG, PNG, JPG or GIF (max.
                                            800x400px)
                                        </p>
                                    </div>
                                    {acceptedFiles.length ? (
                                        <aside className="mt-5">
                                            <h4 className="font-bold">Files</h4>
                                            <ul>{files}</ul>
                                        </aside>
                                    ) : null}

                                    <div className="mt-5">
                                        <button
                                            type="submit"
                                            className="rounded-full border-2 border-black inline-flex gap-3 py-2 px-7 mr-5"
                                        >
                                            Submit
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                props.setIsOpen(false)
                                            }
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </Dialog.Panel>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            <Transition show={showMessage} as={Fragment}>
                <Dialog
                    onClose={() => props.setIsOpen(false)}
                    className="relative z-50"
                >
                    <div className="fixed inset-0 bg-black/60" />

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <Dialog.Panel className="w-full max-w-md rounded bg-white px-4 py-4">
                                <Dialog.Title className="font-bold text-xl">
                                    {successMessage}
                                </Dialog.Title>

                                <button
                                    onClick={() => setShowMessage(false)}
                                    className="mt-3 bg-black text-white py-2 px-4 rounded-sm"
                                >
                                    Close
                                </button>
                            </Dialog.Panel>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
