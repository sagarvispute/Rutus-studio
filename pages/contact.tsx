import React, { useRef, useState } from 'react'
import { useContactFormValidator } from '@hooks/ContactFormValidator'
import Pageheader from '@components/Pageheader'
import { CommonUtils } from '@utils/common.utils'
import { IoArrowForward } from 'react-icons/io5'
import RequestQuoteBlock from '@components/RequestQuoteBlock'

export default function contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    })

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

        alert('form submitted')
    }

    return (
        <div className="container py-16">
            <Pageheader title="Contact Us" />

            <div className="grid xl:grid-cols-3 gap-4 mb-14">
                <form
                    onSubmit={onSubmitForm}
                    ref={contactFormRef}
                    className="col-span-2 grid md:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-2"
                >
                    <div>
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="block border-2 border-gray-300 rounded-lg p-2 px-3 w-full mt-1"
                            placeholder="Lorem Ipsum"
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

                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            value={form.email}
                            className="block border-2 border-gray-300 rounded-lg p-2 px-3 w-full mt-1"
                            placeholder="user@email.com"
                            onChange={onUpdateField}
                            onBlur={onBlurField}
                        />
                        <span className="text-xs text-gray-400">
                            Provide your company or personal email
                        </span>
                        {errors.email.dirty && errors.email.error && (
                            <div className="text-red-700 text-xs">
                                {errors.email.message}
                            </div>
                        )}
                    </div>

                    <div>
                        <label htmlFor="phone">Contact</label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            defaultValue={form.phone}
                            className="block border-2 border-gray-300 rounded-lg p-2 px-3 w-full mt-1"
                            placeholder="000-000-0000"
                            onChange={onUpdateField}
                            onBlur={onBlurField}
                        />
                        <span className="text-xs text-gray-400">
                            Provide your contact number with country code
                        </span>
                        {errors.phone.dirty && errors.phone.error && (
                            <div className="text-red-700 text-xs">
                                {errors.phone.message}
                            </div>
                        )}
                    </div>

                    <div className="lg:col-span-2">
                        <label htmlFor="subject">Contact regarding?</label>
                        <select
                            name="subject"
                            id="subject"
                            defaultValue={form.subject}
                            className="block border-2 border-gray-300 rounded-lg p-2 px-3 w-full mt-1"
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
                        <span className="text-xs text-gray-400">
                            Select contacting reason
                        </span>
                        {errors.subject.dirty && errors.subject.error && (
                            <div className="text-red-700 text-xs">
                                {errors.subject.message}
                            </div>
                        )}
                    </div>

                    <div className="hidden">&nbsp;</div>

                    <div className="md:col-span-2 lg:col-span-3">
                        <label htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            cols={30}
                            rows={10}
                            value={form.message}
                            className="block border-2 border-gray-300 rounded-lg p-2 px-3 w-full mt-1"
                            onChange={onUpdateField}
                            onBlur={onBlurField}
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
        </div>
    )
}
