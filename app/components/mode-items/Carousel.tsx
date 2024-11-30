import React from 'react'
import TongueTwisterIcon from '@/assets/tongue-twister-icon.svg'
import StoryTellingIcon from '@/assets/book-icon.svg'
import ZebraIcon from '@/assets/zebra-icon.svg'
import YappingIcon from '@/assets/yapping-icon.svg'
import RappingIcon from '@/assets/rapping-icon.svg'
import ModeBox from '../ModeBox'

const modeData = [
    {
        id: 1,
        imageSrc: TongueTwisterIcon,
        name: "Tongue Twister",
        description: "Verbal Agility and Percision"

    },
    {
        id: 2,
        imageSrc: StoryTellingIcon,
        name: "Storytelling",
        description: "Sequential Thinking"
    },
    {
        id: 3,
        imageSrc: ZebraIcon,
        name: "Analogy",
        description: "Logical Creativity"
    },
    {
        id: 4,
        imageSrc: YappingIcon,
        name: "Yapping",
        description: "Improvisation"
    },
    {
        id: 5,
        imageSrc: RappingIcon,
        name: "Rapping",
        description: "Rhythmic Improvisation"
    }
]

function Carousel() {
    return (
        <ul className='flex flex-wrap gap-2 items-center justify-center max-w-2xl'>
            {modeData.map((mode) =>(
                <li key={mode.id}>
                    <ModeBox src={mode.imageSrc} name={mode.name} description={mode.description} />
                </li>
            ))}
        </ul>
    )
}

export default Carousel