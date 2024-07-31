import Image from 'next/image'

const ImageContainer = ({ className = '', img }) => {
  return (
    <div className={`${className}`}>
        <Image
            src={img}
            alt='logo'
            fill
            sizes="(min-width: 320px) 100%"
            className='object-contain'
        />
    </div>
  )
}

export default ImageContainer