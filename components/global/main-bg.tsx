import { useEffect, useState } from 'react'
import Image from 'next/image'
import bgImage from '../../public/assets/images/main_bg.png'
import styled from 'styled-components'

const Box = styled.div`
    position: absolute: 
    z-index: 0; 
    top: 0; 
`; 

function getWindowDimensions () {
    const { innerWidth: width, innerHeight: height} = window;
    return {
        width, 
        height
    };
}

export default function mainBg() {
    const [width, setWidth] = useState<number>();
    const [height, setHeight] = useState<number>();

    useEffect(() => {
        const { width, height } = getWindowDimensions();
        setWidth(width);
        setHeight(height)
    }, [])

    useEffect(() => {
        function handleResize() {
            const { width, height } = getWindowDimensions(); 
            setWidth(width);
            setHeight(height)
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize); 
    }, [])

    if(width && height) {
        return ( 
            <Box>   
                <Image 
                    src={bgImage}
                    alt='background image'
                    height={height}
                    width={width}
                    quality={100}
                />
            </Box> 
        );
    }

    return null
}

