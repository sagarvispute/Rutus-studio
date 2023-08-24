import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { useDropzone } from 'react-dropzone'
import { IoCloudUploadOutline } from 'react-icons/io5'

interface Props {
    isOpen: boolean
    setIsOpen: (state: boolean) => void
}

export default function RequestQuoteModal(props: Props) {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone()
    const files = acceptedFiles.map((file) => (
        <li key={file?.path}>{file?.path}</li>
    ))

    return (
        <Transition show={props.isOpen} as={Fragment}>
            <Dialog
                onClose={() => props.setIsOpen(false)}
                className="relative z-50"
            >
                <div className="fixed inset-0 bg-black/30" />

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <Dialog.Panel className="w-full max-w-sm rounded bg-white p-4">
                            <Dialog.Title className="font-bold text-xl">
                                Request a quote
                            </Dialog.Title>
                            <Dialog.Description className="text-xs mb-5">
                                Share your requirement we will get back to you
                                soon
                            </Dialog.Description>

                            <form>
                                <div className="mb-4">
                                    <label htmlFor="name">Your Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="block border-2 border-gray-300 rounded-lg p-2 px-3 w-full mt-1"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="name">Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="block border-2 border-gray-300 rounded-lg p-2 px-3 w-full mt-1"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="contact">Contact *</label>
                                    <input
                                        type="text"
                                        name="contact"
                                        id="contact"
                                        className="block border-2 border-gray-300 rounded-lg p-2 px-3 w-full mt-1"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="company">Company</label>
                                    <input
                                        type="text"
                                        name="company"
                                        id="company"
                                        className="block border-2 border-gray-300 rounded-lg p-2 px-3 w-full mt-1"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="details">Details *</label>
                                    <textarea
                                        name="details"
                                        id="details"
                                        cols={30}
                                        rows={5}
                                        className="block border-2 border-gray-300 rounded-lg p-2 px-3 w-full mt-1"
                                    ></textarea>
                                </div>

                                <div className="mb-5">
                                    <label htmlFor="location">Location *</label>
                                    <input
                                        type="text"
                                        name="location"
                                        id="location"
                                        className="block border-2 border-gray-300 rounded-lg p-2 px-3 w-full mt-1"
                                    />
                                </div>

                                <div
                                    {...getRootProps({ className: 'dropzone' })}
                                    className="border-2 border-gray-300 rounded-lg py-4 px-3 w-full text-center flex flex-col items-center bg-slate-100"
                                >
                                    <input {...getInputProps()} />
                                    <span className="text-3xl">
                                        <IoCloudUploadOutline />
                                    </span>
                                    <p className="text-sm mt-2 text-slate-400">
                                        Click to upload documents or drag and
                                        drop
                                        <br />
                                        SVG, PNG, JPG or GIF (max. 800x400px)
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
                                        className="rounded-full border-2 border-black inline-flex gap-3 py-2 px-7 mr-3"
                                    >
                                        Submit
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => props.setIsOpen(false)}
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
    )
}
