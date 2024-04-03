import { useEffect, useState } from "react";
import "../components/carrusel.css";
interface CarruselProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export function Carrusel(props: CarruselProps) {
  const cuantas = props.images.length - 1;
  const [puntero, setPuntero] = useState(1);
  const [src, setSrc] = useState(props.images[0].src);
  const [alt, setAlt] = useState(props.images[0].alt);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setLoaded(false);
        setPuntero(puntero >= cuantas ? 0 : puntero + 1);
        setSrc(props.images[puntero].src);
        setAlt(props.images[puntero].alt);
      }, 1000);
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <section>
        <img
          src={src}
          alt={alt}
          className={loaded ? "loaded" : "unloaded"}
          onLoad={() => {
            setLoaded(true);
          }}
        />
        <h1>{alt}</h1>
      </section>
    </>
  );
}
