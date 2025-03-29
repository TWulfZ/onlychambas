// src/components/posts/NewPost.tsx (o donde lo tengas)
"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { user } from "@/dummy-data";
import { useMediaUpload } from "@/hooks/app/use-media-upload";
import { MediaPreviewGrid } from "./new-post/media-preview";
import { PostActionButtons } from "./new-post/action-buttons";

type FormData = {
  content: string;
};

// Define una función de ejemplo para manejar la subida (reemplaza con tu lógica real)
async function submitPost(content: string, files: File[]): Promise<void> {
  console.log("Submitting Post...");
  console.log("Content:", content);
  console.log("Files to upload:", files);

  // Simulación de llamada a API
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Lógica real de subida (ejemplo con FormData)
  // const formData = new FormData();
  // formData.append('content', content);
  // files.forEach((file, index) => {
  //   formData.append(`media_${index}`, file, file.name);
  // });
  // try {
  //   const response = await fetch('/api/posts', { method: 'POST', body: formData });
  //   if (!response.ok) throw new Error('Failed to post');
  //   console.log('Post successful!');
  // } catch (error) {
  //   console.error('Error posting:', error);
  //   throw error; // Re-lanzar para manejar en el componente
  // }

  console.log("Post submitted (simulated).");
}


export default function NewPost() {
  // Usar el hook para manejar la lógica de medios
  const {
    mediaFiles,
    removeMedia,
    clearMedia, // Usar para resetear
    getRootProps,
    getInputProps,
    isDragActive,
    // rejectedFiles // Descomentar si quieres mostrar errores de archivos rechazados
  } = useMediaUpload(); // Opciones por defecto son suficientes aquí

  // Lógica del formulario (sin cambios significativos)
  const { register, handleSubmit, watch, reset, formState: { isSubmitting } } = useForm<FormData>({
    defaultValues: {
      content: "",
    },
  });
  const content = watch("content");

  // Función onSubmit actualizada
  const onSubmit = async (data: FormData) => {
    // Obtener los archivos reales desde el estado del hook
    const filesToUpload = mediaFiles.map(mf => mf.file);
    try {
      await submitPost(data.content, filesToUpload); // Llamar a la función de subida
      reset(); // Resetear campos del formulario
      clearMedia(); // Limpiar previsualizaciones y estado de medios
    } catch (error) {
      console.error("Failed to submit post:", error);
      // Aquí podrías mostrar una notificación de error al usuario
    }
  };

  // Determinar si el botón de post debe estar habilitado
  const canSubmit = (content.trim().length > 0 || mediaFiles.length > 0) && !isSubmitting;

  return (
    // Aplicar getRootProps al contenedor principal para el drag & drop
    <div
      className={cn(
        "px-4 py-3 border-b border-gray-200 dark:border-gray-800 transition-colors duration-200",
        isDragActive && "bg-primary/10" // Feedback visual al arrastrar
      )}
      {...getRootProps()}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex space-x-4">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <Avatar className="w-10 h-10">
              <AvatarImage src={user.profile_pic} alt={`Profile Picture ${user.name}`} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
          </div>

          {/* Área principal del post */}
          <div className="flex-grow min-w-0"> {/* min-w-0 previene overflow */}
            {/* Textarea */}
            <textarea
              className="w-full bg-transparent border-b border-gray-200 dark:border-gray-800 p-2 outline-none resize-none text-lg mb-3 placeholder-gray-500 dark:placeholder-gray-400"
              placeholder="What's happening?"
              rows={2}
              {...register("content")}
              disabled={isSubmitting} // Deshabilitar mientras se envía
            />

            {/* Grid de Previsualización de Medios */}
            <MediaPreviewGrid mediaFiles={mediaFiles} onRemoveMedia={removeMedia} />

            {/* Barra de Acciones y Botón de Post */}
            <div className="flex justify-between items-center mt-2">
              {/* Botones de Acción */}
              <PostActionButtons getInputProps={getInputProps} />

              {/* Botón de Submit */}
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-5 py-1.5 font-bold text-sm"
                disabled={!canSubmit}
              >
                {isSubmitting ? "Posting..." : "Post"}
              </Button>
            </div>

            {/* Opcional: Mostrar errores de archivos rechazados */}
            {/* {rejectedFiles.length > 0 && (
              <div className="text-red-500 text-sm mt-2">
                {rejectedFiles.length} file(s) were rejected (e.g., too large or wrong type).
              </div>
            )} */}
          </div>
        </div>
      </form>
    </div>
  );
}