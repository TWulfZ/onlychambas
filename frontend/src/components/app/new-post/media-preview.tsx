import { cn } from "@/lib/utils";
import { MediaType } from "@/types";
import { Play, X } from "lucide-react";
import type { MediaPreview } from "@/hooks/app/use-media-upload"; // Importa el tipo

interface MediaPreviewGridProps {
  mediaFiles: MediaPreview[];
  onRemoveMedia: (index: number) => void;
}

export function MediaPreviewGrid({ mediaFiles, onRemoveMedia }: MediaPreviewGridProps) {
  if (mediaFiles.length === 0) {
    return null;
  }

  // Determina las clases de la cuadrícula dinámicamente
  const gridColsClass =
    mediaFiles.length === 1
      ? "grid-cols-1"
      : mediaFiles.length >= 2 // Simplificado para 2 o más columnas
      ? "grid-cols-2"
      : "grid-cols-1"; // Fallback por si acaso

  return (
    <div className={cn("grid gap-2 mb-3", gridColsClass)}>
      {mediaFiles.map((media, index) => (
        <div
          key={media.url} // Usar URL como key (suficientemente único para la sesión)
          className="relative group aspect-video rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800"
        >
          {media.type === MediaType.Image ? (
            <img
              src={media.url}
              alt={`Preview ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy" // Buena práctica para imágenes
            />
          ) : (
            <div className="relative w-full h-full bg-black">
              <video
                src={media.url}
                className="w-full h-full object-contain"
                controls // Mostrar controles nativos
              />
              
            </div>
          )}
          <button
            type="button"
            aria-label={`Remove media ${index + 1}`}
            className="absolute top-1.5 right-1.5 bg-black/60 text-white p-1 rounded-full opacity-75 group-hover:opacity-100 focus:opacity-100 transition-opacity z-10"
            onClick={(e) => {
              e.stopPropagation(); // Prevenir clicks accidentales en dropzone
              onRemoveMedia(index);
            }}
          >
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  );
}