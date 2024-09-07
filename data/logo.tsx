import Image from 'next/image'

const Logo = () => {
const imagePath = "/static/images/pmk-squared-mark.png"
    
    return (
        <>
            <Image
                src={imagePath}
                width={150}
                height={150}
                alt="PMK Squared Logo"
            />
        </>  
    )
}

export default Logo