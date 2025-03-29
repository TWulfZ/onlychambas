// src/components/posts/PostActionButtons.tsx
import React from "react";
import { BarChart2, Gift, Calendar, MapPin, Smile, FileImage } from "lucide-react";
import type { DropzoneInputProps } from "react-dropzone";

interface PostActionButtonsProps {
  // Pasamos la función getInputProps para asociarla al input oculto
  getInputProps: (props?: DropzoneInputProps | undefined) => DropzoneInputProps;
  // Podrías pasar 'open' si quieres que el botón FileImage abra el diálogo
  // openFileDialog?: () => void;
}

// Componente auxiliar para botones de icono reutilizables
const ActionButton: React.FC<{ children: React.ReactNode; onClick?: () => void; label: string; disabled?: boolean }> = ({ children, onClick, label, disabled }) => (
  <button
    type="button"
    onClick={onClick}
    className="p-2 rounded-full text-primary hover:bg-primary/10 disabled:opacity-50 disabled:cursor-not-allowed"
    aria-label={label}
    disabled={disabled}
  >
    {children}
  </button>
);

export function PostActionButtons({ getInputProps }: PostActionButtonsProps) {
  return (
    <div className="flex space-x-1">
      {/* Botón para añadir imagen/video */}
      <label
        className="p-2 rounded-full text-primary hover:bg-primary/10 cursor-pointer"
        aria-label="Add image or video"
        // onClick={openFileDialog} // Opcional: si quieres que el label también abra el diálogo
      >
        <FileImage size={20} />
        {/* Input oculto que recibe las props de dropzone */}
        <input {...getInputProps()} />
      </label>

      {/* Otros botones de acción (funcionalidad pendiente) */}
      <ActionButton label="Add GIF" disabled>
        <Gift size={20} />
      </ActionButton>
      <ActionButton label="Add poll" disabled>
        <BarChart2 size={20} />
      </ActionButton>
      <ActionButton label="Add emoji" disabled>
        <Smile size={20} />
      </ActionButton>
      <ActionButton label="Schedule post" disabled>
        <Calendar size={20} />
      </ActionButton>
      <ActionButton label="Add location" disabled>
        <MapPin size={20} />
      </ActionButton>
    </div>
  );
}