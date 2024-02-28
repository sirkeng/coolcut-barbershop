type CloudinaryLoaderProps = {
  src: string;
  width: number;
  quality?: number | string;
};

export default function cloudinaryLoader({
  src,
  width,
  quality = "auto", // Set 'auto' as the default value for quality
}: CloudinaryLoaderProps) {
  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;
  return `${baseUrl}${src}?w=${width}&q=${quality}`;
}
