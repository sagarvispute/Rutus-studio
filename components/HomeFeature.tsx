import React from 'react'
import FeatureItem from './FeatureItem'
import { Feature } from '../models/feature.model';

const features: Feature[] = [
    {
        id: '01',
        title: 'residential designing',
        description: 'Lorem ipsum dolor sit amet consectetur. Vel malesuada egestas eget egestas. Facilisi cursus proin odio dolor id. Leo eu amet velit bibendum adipiscing facilisi aenean.'
    },
    {
        id: '02',
        title: 'commercial interior design',
        description: 'Lorem ipsum dolor sit amet consectetur. Venenatis blandit morbi bibendum rhoncus eu arcu. Egestas enim nisl nunc urna lacus blandit eget.'
    },
    {
        id: '03',
        title: 'container home designs',
        description: 'Lorem ipsum dolor sit amet consectetur. Pellentesque posuere cursus ut volutpat morbi pretium accumsan. Pulvinar turpis etiam scelerisque tortor massa netus volutpat aliquet.'
    },
    {
        id: '04',
        title: 'Restaurant / cafe designs',
        description: 'Lorem ipsum dolor sit amet consectetur. Vel malesuada egestas eget egestas. Facilisi cursus proin odio dolor id. Leo eu amet velit bibendum adipiscing facilisi aenean.'
    },
    {
        id: '05',
        title: 'Others',
        description: 'Lorem ipsum dolor sit amet consectetur. Venenatis blandit morbi bibendum rhoncus eu arcu. Egestas enim nisl nunc urna lacus blandit eget.'
    }
];

export default function HomeFeature() {

  return (
    <div className='container grid sm:grid-cols-2 lg:grid-cols-3 gap-4 py-16'>
        {
            features.map(feature => (
                <FeatureItem feature={feature} />
            ))
        }
    </div>
  )
}
