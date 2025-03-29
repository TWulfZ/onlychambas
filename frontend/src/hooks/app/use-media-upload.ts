import { useState, useCallback, useEffect } from "react";
import { useDropzone, DropzoneOptions, FileRejection } from "react-dropzone";
import { MediaType } from "@/types"; // Asegúrate que esta ruta es correcta

export type MediaPreview = {
  file: File; // Guardamos el archivo original para la subida real
  url: string; // URL de previsualización (Object URL)
  type: MediaType;
};

const defaultDropzoneOptions: DropzoneOptions = {
  accept: {
    "image/*": [],
    "video/*": [],
  },
  maxSize: 25 * 1024 * 1024, // 25MB max size
  noClick: true, // Mantenemos el comportamiento original
  noKeyboard: true, // Mantenemos el comportamiento original
};

export function useMediaUpload(options: DropzoneOptions = {}) {
  const [mediaFiles, setMediaFiles] = useState<MediaPreview[]>([]);
  const [rejectedFiles, setRejectedFiles] = useState<FileRejection[]>([]);

  // Limpia los Object URLs cuando el componente se desmonta o los archivos cambian
  useEffect(() => {
    // Función de limpieza que se ejecuta cuando el hook se desmonta o mediaFiles cambia
    return () => {
      mediaFiles.forEach((media) => URL.revokeObjectURL(media.url));
    };
  }, [mediaFiles]); // Ejecutar solo si mediaFiles cambia (para limpiar URLs antiguas si se reemplazan)

  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      const newMediaFiles = acceptedFiles.map((file) => {
        const isVideo = file.type.startsWith("video/");
        return {
          file, // Guardar el archivo
          url: URL.createObjectURL(file),
          type: isVideo ? MediaType.Video : MediaType.Image,
        };
      });

      // Limpiamos las URLs antiguas *antes* de añadir las nuevas si es necesario,
      // pero es más seguro limpiar al eliminar/desmontar.
      // Aquí simplemente añadimos las nuevas.
      setMediaFiles((prev) => [...prev, ...newMediaFiles]);
      setRejectedFiles(fileRejections); // Guardar archivos rechazados por si quieres mostrarlos
    },
    [] // No dependencies needed if state setters are used correctly
  );

  const removeMedia = useCallback((index: number) => {
    setMediaFiles((prev) => {
      const fileToRemove = prev[index];
      if (fileToRemove) {
        URL.revokeObjectURL(fileToRemove.url); // ¡Importante! Limpiar Object URL
      }
      return prev.filter((_, i) => i !== index);
    });
  }, []);

  const clearMedia = useCallback(() => {
    // Limpiar todas las URLs antes de vaciar el array
    mediaFiles.forEach((media) => URL.revokeObjectURL(media.url));
    setMediaFiles([]);
    setRejectedFiles([]);
  }, [mediaFiles]); // Depende de mediaFiles para asegurar que limpia las correctas

  const dropzone = useDropzone({
    ...defaultDropzoneOptions,
    ...options, // Permite sobreescribir opciones por defecto
    onDrop,
  });

  return {
    mediaFiles,
    rejectedFiles, // Exponer por si se necesita feedback de errores
    removeMedia,
    clearMedia, // Función para resetear los medios
    getRootProps: dropzone.getRootProps,
    getInputProps: dropzone.getInputProps,
    isDragActive: dropzone.isDragActive,
    open: dropzone.open, // Exponer 'open' por si se necesita abrir el diálogo programáticamente
  };
}