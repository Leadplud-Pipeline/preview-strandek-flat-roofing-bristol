export interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  width: number;
  height: number;
  loading: "eager" | "lazy";
  fetchPriority?: "high";
}

export const galleryImages: GalleryImage[] = [
  {
    src: 'https://www.strandekflatroofingbristol.co.uk/wp-content/uploads/2021/09/Built-GRP-Fibreglass-Roofing-System-with-skylight.jpg',
    alt: 'Work completed by Strandek Flat Roofing Bristol in Bristol',
    title: 'Roofers Project 1',
    width: 800,
    height: 600,
    loading: "eager",
  },
  {
    src: 'https://www.strandekflatroofingbristol.co.uk/wp-content/uploads/2022/01/flat-roof-repairs-in-bristol.jpg',
    alt: 'Work completed by Strandek Flat Roofing Bristol in Bristol',
    title: 'Roofers Project 2',
    width: 800,
    height: 600,
    loading: "lazy",
  },
  {
    src: 'https://www.strandekflatroofingbristol.co.uk/wp-content/uploads/2021/09/Built-GRP-Fibreglass-Roofing-Bristol-e1651574773666.jpg',
    alt: 'Work completed by Strandek Flat Roofing Bristol in Bristol',
    title: 'Roofers Project 3',
    width: 800,
    height: 600,
    loading: "lazy",
  }
];

export const homepageGalleryImages = galleryImages;
