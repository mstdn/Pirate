import { MacBook } from './MacBook'
import { 
    Environment,
    Float,
    PresentationControls,
    ContactShadows,
    Html,
    Text,
    useProgress,
    Image
} from '@react-three/drei'
import { Suspense } from'react'


export default function Experience()
{
    const pirateClick = () =>
    {
        window.open("https://piratenpartij.nl/", "_blank")
    }

    return <>
    <Suspense fallback={null}>
        <color args={ [ '#241a1a' ] } attach="background" />
        <Environment preset="city" />
    
        <PresentationControls
            global
            rotation={ [ 0.13, 0.1, 0 ] }
            polar={ [ - 0.4, 0.2 ] }
            azimuth={ [ -1, 0.75 ] }
            config={ { mass: 2, tension: 400 } }
            snap={ { mass: 4, tension: 400 } }
        >
            <Float
                rotationIntensity={ 0.4 }
            >
                <rectAreaLight
                    width={ 2.5 }
                    height={ 1.65 }
                    intensity={ 65 }
                    color={ '#572B85' }
                    rotation={ [ - 0.1, Math.PI, 0 ] }
                    position={ [ 0, 0.55, - 1.15 ] }
                />
                <MacBook 
                    position-y={ - 1.2 }
                    position-x={ - 0.3 }
                >
                    <Html
                        transform
                        wrapperClass='htmlScreen'
                        distanceFactor={ 1.17 }
                        position={ [ 0, 1.56, - 1.4 ] }
                        rotation-x={ - 0.256 }
                    >
                        <iframe src='https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'></iframe>
                    </Html>
                </MacBook>
                <Text
                    font="./assets/fonts/bangers-v20-latin-regular.woff"
                    fontSize={ 0.6 }
                    position={ [ 1.5, 0.75, 0 ] }
                    rotation-y={ - 1.25 }
                    maxWidth={ 2 }
                    textAlign='right'
                    onClick={ pirateClick }
                >
                    Vote Pirate!
                </Text>
                <Image 
                    url="./assets/images/yar.png"
                    onClick={ pirateClick }
                    transparent opacity={ 1 }
                    position={ [ 1.4, 1.1, - 0.3 ] }
                    rotation-y={ - 1.25 }
                    scale={ 0.5 }
                />

            
            </Float>
        </PresentationControls>

        <ContactShadows 
            position-y={ - 1.4 }
            opacity={ 0.4 }
            scale={ 5 }
            blur={ 2.4 }
        />
    </Suspense>
    </>
}