type ImgProps = {
  src: string,
  id: string,
  alt: string
}


const Img = ({ src, id, alt }: ImgProps) => {
    return (
        <img id={id} src={src} alt={alt} />
    )
}

export default Img;