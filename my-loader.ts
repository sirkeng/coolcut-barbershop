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
  return `${src}?w=${width}&q=${quality}`;
}
