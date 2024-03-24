import { useEffect, useState } from "react";
import styled from "styled-components";

type Image = {
  src: string;
  alt: string;
};

export function Carrusel(props: { images: Image[] }) {
  const cuantas = props.images.length - 1;
  const [puntero, setPuntero] = useState(1);
  const [src, setSrc] = useState(props.images[0].src);
  const [alt, setAlt] = useState(props.images[0].alt);
  const [loaded, setLoaded] = useState(false);
  const Carrusel = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  `;
  console.log(cuantas);
  console.log(props.images[puntero]);
  const SliderImg = styled.img`
    width: 75%;
    aspect-ratio: 16/9;
    object-fit: cover;
    margin: auto;
    opacity: 0;
    transition: 3s;
    &.loaded {
      opacity: 1;
    }
  `;

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setLoaded(false);
        setPuntero(puntero >= cuantas ? 0 : puntero + 1);
        setSrc(props.images[puntero].src);
        setAlt(props.images[puntero].alt);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <Carrusel>
        <SliderImg
          src={src}
          alt={alt}
          className={loaded ? "loaded" : "unloaded"}
          onLoad={() => {
            setLoaded(true);
          }}
        />
      </Carrusel>
    </>
  );
}
