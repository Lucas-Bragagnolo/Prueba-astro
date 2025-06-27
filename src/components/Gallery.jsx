import { useState } from 'react';

export default function Gallery({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const handleClick = (index) => {
    if (index === selectedIndex) return;
    setFade(true);
    setTimeout(() => {
      setSelectedIndex(index);
      setFade(false);
    }, 200); // tiempo de fade out antes de cambiar la imagen
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="border rounded-xl overflow-hidden relative aspect-square">
        <img
          key={selectedIndex} // fuerza el cambio
          src={images[selectedIndex]}
          alt="Imagen principal"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            fade ? 'opacity-0' : 'opacity-100'
          }`}
        />
      </div>

      <div className="flex gap-2 mt-4 justify-center">
        {images.map((img, index) => (
          <button
            type="button"
            key={index}
            onClick={() => handleClick(index)}
            className={`w-20 h-20 rounded-md overflow-hidden border-2 transition ${
              selectedIndex === index ? 'border-blue-500' : 'border-transparent'
            }`}
          >
            <img
              src={img}
              alt={`Miniatura ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
