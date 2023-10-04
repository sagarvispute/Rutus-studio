import React from 'react'
import { Feature } from '@models/feature.model'
import FeatureItem from './FeatureItem'

const features: Feature[] = [
    {
        id: '01',
        title: 'Residential designing',
        description: `Rutus Décor Studio crafts luxe interiors, tailored to your style and lifestyle, with collaborative design bringing your vision to life.`,
    },
    {
        id: '02',
        title: 'commercial interior design',
        description: `Rutus Décor Studio transforms spaces for enhanced productivity. Our commercial interior design spans offices, retail, and restaurants.`,
    },
    {
        id: '03',
        title: 'container home designs',
        description: `Repurposing materials, like shipping containers, fuels sustainable design with cost-effective, innovative housing."`,
    },
    {
        id: '04',
        title: 'Restaurant / cafe designs',
        description: `At Rutus Décor Studio, we craft unforgettable restaurant atmospheres that embody your brand's theme and sustainability.`,
    },
    /* {
        id: '05',
        title: 'Others',
        description:
            'Lorem ipsum dolor sit amet consectetur. Venenatis blandit morbi bibendum rhoncus eu arcu. Egestas enim nisl nunc urna lacus blandit eget.',
    }, */
]

export default function HomeFeature() {
    return (
        <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-4 py-28">
            {features.map((feature) => (
                <FeatureItem feature={feature} key={feature.id} />
            ))}
        </div>
    )
}
