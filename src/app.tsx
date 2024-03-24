import { Carrusel } from "./components/carrusel";

export const App = () => {
  const Images = [
    {
      src: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Prado en dia nublado",
    },
    {
      src: "https://images.unsplash.com/photo-1608592077365-c6399182e63c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "lago con iglesia de fondo",
    },
    {
      src: "https://images.unsplash.com/photo-1536415674649-19c6de404a9a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Cabañas en la playa, Noruega",
    },
    {
      src: "https://images.unsplash.com/photo-1614450770504-8fe221e74881?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Monte nevado",
    },
  ];
  return (
    <>
      <Carrusel images={Images} />
    </>
  );
};
