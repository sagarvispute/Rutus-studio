import React from 'react'
import { Feature } from '@models/feature.model'

export default function FeatureItem(props: { feature: Feature }) {
    return (
        <div className="pt-10 pb-5">
            <span className="text-9xl font-black text-[#E7C69C] leading-3">
                {props.feature.id}
            </span>
            <h2 className="font-bold uppercase -mt-7 ml-10 text-xl">
                {props.feature.title}
            </h2>
            <p className="mt-3">{props.feature.description}</p>
        </div>
    )
}
