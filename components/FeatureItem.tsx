import React from 'react'
import { Feature } from '../models/feature.model'

export default function FeatureItem(props: { feature: Feature }) {
    return (
        <div>
            <span className="text-9xl font-black text-[#E7C69C]">
                {props.feature.id}
            </span>
            <h4 className="font-bold uppercase -mt-7 ml-10 text-xl">
                {props.feature.title}
            </h4>
            <p className="mt-3">{props.feature.description}</p>
        </div>
    )
}
