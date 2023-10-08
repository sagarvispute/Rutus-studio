import React, { Fragment, useRef, useState } from 'react'
import { useContactFormValidator } from '@hooks/ContactFormValidator'
import { CommonUtils } from '@utils/common.utils'
import { IoArrowForward } from 'react-icons/io5'
import axios from 'axios'
import { HttpResponse } from '@models/http-response.model'
import { WebConstants } from '@constants/web-constants'
import { Dialog, Transition } from '@headlessui/react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Pageheader = dynamic(() => import('@components/Pageheader'))
const RequestQuoteBlock = dynamic(() => import('@components/RequestQuoteBlock'))

export default function Contact() {
    const breadcrumbData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.rutustudio.com/',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Contact Us',
                item: 'https://www.rutustudio.com/contact',
            },
        ],
    }

    const [form, setForm] = useState({
        name: '',
        email: '',
        contact: '',
        subject: '',
        message: '',
    })
    const [successMessage, setSuccessMessage] = useState<string>('')
    const [showMessage, setShowMessage] = useState<boolean>(false)

    const contactFormRef = useRef(null)

    const { errors, validateForm, onBlurField, reset } =
        useContactFormValidator(form)

    const onUpdateField = (e: any) => {
        const field = e.target.name
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

        axios({
            url: `${WebConstants.baseUrl}/${WebConstants.contactUser}`,
            method: 'POST',
            data: form,
        })
            // Handle the response from backend here
            .then((res: any) => {
                if (res) {
                    const response: HttpResponse<boolean> = res
                    if (response.status === 'success') {
                        setForm({
                            name: '',
                            contact: '',
                            email: '',
                            message: '',
                            subject: '',
                        })
                        e.target.reset()
                        setSuccessMessage(response?.message)
                        setShowMessage(true)
                    }
                }
            })
            // Catch errors if any
            .catch((err) => {})
    }

    return (
        <div className="container py-16">
            <Head>
                <title>
                    Contact Rutus Decor Studio | Get in Touch with Our Design
                    Team
                </title>
                <meta
                    name="description"
                    content="Have questions or ready to start your interior design project? Contact Rutus Decor Studio today. We're here to turn your ideas into reality."
                />
                <meta
                    property="og:title"
                    content="Contact Rutus Decor Studio | Get in Touch with Our Design Team"
                />
                <meta
                    property="og:description"
                    content="Have questions or ready to start your interior design project? Contact Rutus Decor Studio today. We're here to turn your ideas into reality."
                />
                <meta
                    property="twitter:title"
                    content="Contact Rutus Decor Studio | Get in Touch with Our Design Team"
                />
                <meta
                    property="twitter:description"
                    content="Have questions or ready to start your interior design project? Contact Rutus Decor Studio today. We're here to turn your ideas into reality."
                />
                <script
                    key="breadcrumb-data"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(breadcrumbData),
                    }}
                />
            </Head>

            <Pageheader title="Contact Us" />

            <div className="grid xl:grid-cols-3 gap-4 mb-24">
                <form
                    onSubmit={onSubmitForm}
                    ref={contactFormRef}
                    className="col-span-2 grid md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-2"
                >
                    <div className="mb-2">
                        <label
                            htmlFor="name"
                            className="text-sm text-gray-800 font-medium"
                        >
                            Your Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="block border-[1px] border-gray-300 rounded-md p-2 px-3 w-full text-sm text-gray-600"
                            placeholder="Your Name"
                            defaultValue={form.name}
                            onChange={onUpdateField}
                            onBlur={onBlurField}
                        />
                        {errors.name.dirty && errors.name.error && (
                            <div className="text-red-700 text-xs">
                                {errors.name.message}
                            </div>
                        )}
                    </div>

                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="text-sm text-gray-800 font-medium"
                        >
                            Email
                        </label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            value={form.email}
                            className="block border-[1px] border-gray-300 rounded-md p-2 px-3 w-full text-sm text-gray-600"
                            placeholder="Email"
                            onChange={onUpdateField}
                            onBlur={onBlurField}
                        />
                        {errors.email.dirty && errors.email.error && (
                            <div className="text-red-700 text-xs">
                                {errors.email.message}
                            </div>
                        )}
                    </div>

                    <div className="mb-2">
                        <label
                            htmlFor="contact"
                            className="text-sm text-gray-800 font-medium"
                        >
                            Contact
                        </label>
                        <input
                            type="text"
                            name="contact"
                            id="contact"
                            defaultValue={form.contact}
                            className="block border-[1px] border-gray-300 rounded-md p-2 px-3 w-full text-sm text-gray-600"
                            placeholder="Contact"
                            onChange={onUpdateField}
                            onBlur={onBlurField}
                        />
                        {/* <span className="text-xs text-gray-400">
                            Provide contact with country code
                        </span> */}
                        {errors.contact.dirty && errors.contact.error && (
                            <div className="text-red-700 text-xs">
                                {errors.contact.message}
                            </div>
                        )}
                    </div>

                    <div className="lg:col-span-2 mb-2">
                        <label
                            htmlFor="subject"
                            className="text-sm text-gray-800 font-medium"
                        >
                            Contact regarding?
                        </label>
                        <select
                            name="subject"
                            id="subject"
                            defaultValue={form.subject}
                            className="block border-[1px] border-gray-300 rounded-md p-2 px-3 w-full text-sm text-gray-600"
                            onChange={onUpdateField}
                            onBlur={onBlurField}
                        >
                            <option value="">Select subject</option>
                            {CommonUtils.ContactSubject.map((x) => (
                                <option value={x.value} key={x.value}>
                                    {x.title}
                                </option>
                            ))}
                        </select>
                        {/* <span className="text-xs text-gray-400">
                            Select contacting reason
                        </span> */}
                        {errors.subject.dirty && errors.subject.error && (
                            <div className="text-red-700 text-xs">
                                {errors.subject.message}
                            </div>
                        )}
                    </div>

                    <div className="hidden">&nbsp;</div>

                    <div className="md:col-span-2 lg:col-span-3 mb-2">
                        <label
                            htmlFor="message"
                            className="text-sm text-gray-800 font-medium"
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            cols={30}
                            rows={10}
                            value={form.message}
                            className="block border-[1px] border-gray-300 rounded-md p-2 px-3 w-full text-sm text-gray-600"
                            onChange={onUpdateField}
                            onBlur={onBlurField}
                            placeholder="Message"
                        ></textarea>
                        {errors.message.dirty && errors.message.error && (
                            <div className="text-red-700 text-xs">
                                {errors.message.message}
                            </div>
                        )}
                    </div>

                    <div className="mt-2">
                        <button
                            type="submit"
                            className="rounded-full border-2 border-black inline-flex gap-3 py-2 px-7 items-center group"
                        >
                            SUBMIT
                            <span className="text-xl -rotate-[50deg] group-hover:-rotate-0 ease-in-out duration-100">
                                <IoArrowForward />
                            </span>
                        </button>
                    </div>
                </form>
            </div>

            <RequestQuoteBlock />

            <Transition show={showMessage} as={Fragment}>
                <Dialog
                    onClose={() => setShowMessage(false)}
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
        </div>
    )
}
