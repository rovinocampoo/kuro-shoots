export type PortfolioCategorySlug =
  | "photography"
  | "retouching"
  | "color-grading";

export type PortfolioImageTone = "forest" | "smoke" | "noir";

export type PlaceholderPortfolioMedia = {
  kind: "placeholder";
  alt: string;
  label: string;
  tone: PortfolioImageTone;
  caption?: string;
};

export type ImagePortfolioMedia = {
  kind: "image";
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type PortfolioMedia =
  | PlaceholderPortfolioMedia
  | ImagePortfolioMedia;

export type PortfolioComparison = {
  original: PortfolioMedia;
  edited: PortfolioMedia;
  caption?: string;
};

export type PortfolioCategory = {
  slug: PortfolioCategorySlug;
  index: string;
  title: string;
  summary: string;
  description: string;
};

export type PortfolioMetadataItem = {
  label: string;
  value: string;
};

export type PortfolioTechnique = {
  title: string;
  description: string;
};

export type PortfolioProject = {
  slug: string;
  category: PortfolioCategorySlug;
  title: string;
  subtitle: string;
  shortDescription: string;
  description: string[];
  coverImage: PortfolioMedia;
  galleryImages: PortfolioMedia[];
  metadata: PortfolioMetadataItem[];
  techniques: PortfolioTechnique[];
  featured: boolean;
  isPlaceholder: boolean;
  comparison?: PortfolioComparison;
};

export const portfolioCategories: PortfolioCategory[] = [
  {
    slug: "photography",
    index: "01",
    title: "Photography",
    summary: "Editorial, portrait, and atmospheric image-making.",
    description:
      "Frames built around light, composition, and a quiet sense of drama. This category gathers portrait, editorial, and atmospheric studies.",
  },
  {
    slug: "retouching",
    index: "02",
    title: "Editing & Retouching",
    summary: "Texture-aware finishing with a clean editorial hand.",
    description:
      "Retouching studies that keep skin, fabric, and material honest while elevating the frame with a considered editorial finish.",
  },
  {
    slug: "color-grading",
    index: "03",
    title: "Color Grading",
    summary: "Cinematic color, controlled contrast, and muted palettes.",
    description:
      "Color studies shaped through controlled contrast, restrained palettes, and a filmic sense of depth.",
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "low-light-study",
    category: "photography",
    title: "Low Light Study",
    subtitle: "Portrait study / available light",
    shortDescription:
      "A portrait-led placeholder study reserved for a low-light photography and retouching sequence.",
    description: [
      "This sample project demonstrates how a photography-led case study will be presented. The final photographs, captions, and project notes will replace this placeholder content.",
      "The layout is built for a cover frame, a small image sequence, production metadata, and a concise account of the finishing process.",
    ],
    coverImage: {
      kind: "placeholder",
      label: "Placeholder — low-light portrait cover",
      alt: "Placeholder graphic representing a low-light portrait photograph.",
      tone: "forest",
    },
    galleryImages: [
      {
        kind: "placeholder",
        label: "Placeholder — low-light frame 02",
        alt: "Placeholder graphic for a second low-light portrait frame.",
        tone: "noir",
      },
      {
        kind: "placeholder",
        label: "Placeholder — low-light frame 03",
        alt: "Placeholder graphic for a third low-light portrait frame.",
        tone: "smoke",
      },
    ],
    metadata: [
      { label: "Category", value: "Photography" },
      { label: "Status", value: "Placeholder project" },
      { label: "Assets", value: "Final photography pending" },
      { label: "Comparison", value: "Reserved" },
    ],
    techniques: [
      {
        title: "Natural-light treatment",
        description:
          "Sample process note — final capture and lighting notes will be documented with the real images.",
      },
      {
        title: "Tone shaping",
        description:
          "Sample process note — actual grading decisions will replace this note.",
      },
    ],
    featured: true,
    isPlaceholder: true,
  },
  {
    slug: "forest-light-study",
    category: "photography",
    title: "Forest Light Study",
    subtitle: "Editorial study / natural light",
    shortDescription:
      "An atmospheric placeholder study exploring forest light, negative space, and a restrained grade.",
    description: [
      "This placeholder editorial study is structured around atmosphere and negative space. Final photographs and captions will replace the current sample content.",
      "The finished project will document the location, lighting approach, and the way the frame was shaped in post-production.",
    ],
    coverImage: {
      kind: "placeholder",
      label: "Placeholder — forest light cover",
      alt: "Placeholder graphic representing a forest-light editorial photograph.",
      tone: "smoke",
    },
    galleryImages: [
      {
        kind: "placeholder",
        label: "Placeholder — forest detail frame",
        alt: "Placeholder graphic for a forest detail photograph.",
        tone: "forest",
      },
    ],
    metadata: [
      { label: "Category", value: "Photography" },
      { label: "Status", value: "Placeholder project" },
      { label: "Assets", value: "Final photography pending" },
      { label: "Comparison", value: "Reserved" },
    ],
    techniques: [
      {
        title: "Atmospheric composition",
        description:
          "Sample process note — the final project will document how the available light was read and shaped.",
      },
    ],
    featured: false,
    isPlaceholder: true,
  },
  {
    slug: "portrait-retouch-study",
    category: "retouching",
    title: "Portrait Retouch Study",
    subtitle: "Retouching study / skin and texture",
    shortDescription:
      "A placeholder retouching case study focused on skin, texture, and a clean editorial finish.",
    description: [
      "This sample retouching project is reserved for a portrait sequence. The final case study will show the original frame, the finished frame, and the decisions made between them.",
      "The page is prepared to document the retouching approach, the treatment of texture, and the handoff into color grading.",
    ],
    coverImage: {
      kind: "placeholder",
      label: "Placeholder — portrait retouch cover",
      alt: "Placeholder graphic representing a retouched portrait photograph.",
      tone: "noir",
    },
    galleryImages: [
      {
        kind: "placeholder",
        label: "Placeholder — retouch detail frame",
        alt: "Placeholder graphic for a retouching detail frame.",
        tone: "forest",
      },
      {
        kind: "placeholder",
        label: "Placeholder — retouch texture frame",
        alt: "Placeholder graphic for a skin and texture detail frame.",
        tone: "smoke",
      },
    ],
    metadata: [
      { label: "Category", value: "Editing & Retouching" },
      { label: "Status", value: "Placeholder project" },
      { label: "Assets", value: "Final photography pending" },
      { label: "Comparison", value: "Prepared for before & after" },
    ],
    techniques: [
      {
        title: "Skin and texture",
        description:
          "Sample process note — the final case study will document the balance between cleanup and retained texture.",
      },
      {
        title: "Editorial cleanup",
        description:
          "Sample process note — final cleanup decisions and retouching stages will be added with the real project.",
      },
      {
        title: "Finishing handoff",
        description:
          "Sample process note — the finished frame will be documented through its final grade.",
      },
    ],
    featured: true,
    isPlaceholder: true,
    comparison: {
      original: {
        kind: "placeholder",
        label: "Placeholder — unretouched original",
        alt: "Placeholder graphic representing the unretouched original portrait.",
        tone: "noir",
      },
      edited: {
        kind: "placeholder",
        label: "Placeholder — retouched result",
        alt: "Placeholder graphic representing the retouched portrait.",
        tone: "forest",
      },
      caption:
        "Placeholder comparison data reserved for the interactive before-and-after slider.",
    },
  },
  {
    slug: "texture-study",
    category: "retouching",
    title: "Texture Study",
    subtitle: "Retouching study / material detail",
    shortDescription:
      "A detail-led placeholder study reserved for retouching work around fabric and surface texture.",
    description: [
      "This placeholder study is focused on material detail and the restraint required to preserve texture during retouching.",
      "Final photographs, close-up frames, and process notes will replace this sample content.",
    ],
    coverImage: {
      kind: "placeholder",
      label: "Placeholder — texture study cover",
      alt: "Placeholder graphic representing a material texture photograph.",
      tone: "smoke",
    },
    galleryImages: [
      {
        kind: "placeholder",
        label: "Placeholder — fabric detail frame",
        alt: "Placeholder graphic for a fabric detail photograph.",
        tone: "noir",
      },
    ],
    metadata: [
      { label: "Category", value: "Editing & Retouching" },
      { label: "Status", value: "Placeholder project" },
      { label: "Assets", value: "Final photography pending" },
      { label: "Comparison", value: "Reserved" },
    ],
    techniques: [
      {
        title: "Texture preservation",
        description:
          "Sample process note — the final project will document how surface detail was protected during cleanup.",
      },
    ],
    featured: false,
    isPlaceholder: true,
  },
  {
    slug: "muted-forest-grade",
    category: "color-grading",
    title: "Muted Forest Grade",
    subtitle: "Color study / cinematic grade",
    shortDescription:
      "A color-led placeholder study built around muted greens, deep shadow, and a cinematic finish.",
    description: [
      "This sample color study demonstrates the structure for a grade-led case study. Final images and project notes will replace the placeholder content.",
      "The finished page will document the palette, contrast shape, and the decisions that gave the sequence its mood.",
    ],
    coverImage: {
      kind: "placeholder",
      label: "Placeholder — muted forest grade cover",
      alt: "Placeholder graphic representing a forest-toned color grade.",
      tone: "forest",
    },
    galleryImages: [
      {
        kind: "placeholder",
        label: "Placeholder — graded frame 02",
        alt: "Placeholder graphic for a graded forest frame.",
        tone: "noir",
      },
      {
        kind: "placeholder",
        label: "Placeholder — graded frame 03",
        alt: "Placeholder graphic for a second graded forest frame.",
        tone: "smoke",
      },
    ],
    metadata: [
      { label: "Category", value: "Color Grading" },
      { label: "Status", value: "Placeholder project" },
      { label: "Assets", value: "Final photography pending" },
      { label: "Comparison", value: "Prepared for before & after" },
    ],
    techniques: [
      {
        title: "Palette control",
        description:
          "Sample process note — the final case study will document the palette and its role in the sequence.",
      },
      {
        title: "Contrast shaping",
        description:
          "Sample process note — actual contrast and shadow decisions will replace this note.",
      },
      {
        title: "Filmic finish",
        description:
          "Sample process note — final grain, texture, and finishing choices will be documented with the real images.",
      },
    ],
    featured: true,
    isPlaceholder: true,
    comparison: {
      original: {
        kind: "placeholder",
        label: "Placeholder — ungraded original",
        alt: "Placeholder graphic representing the ungraded original photograph.",
        tone: "noir",
      },
      edited: {
        kind: "placeholder",
        label: "Placeholder — graded result",
        alt: "Placeholder graphic representing the graded photograph.",
        tone: "forest",
      },
      caption:
        "Placeholder comparison data reserved for the interactive before-and-after slider.",
    },
  },
  {
    slug: "warm-neutral-grade",
    category: "color-grading",
    title: "Warm Neutral Grade",
    subtitle: "Color study / editorial grade",
    shortDescription:
      "A placeholder color study exploring warm neutrals, soft contrast, and an understated editorial finish.",
    description: [
      "This placeholder color study is reserved for a warm-neutral editorial sequence.",
      "The final page will carry the finished images, grade notes, and a clear view of the palette in context.",
    ],
    coverImage: {
      kind: "placeholder",
      label: "Placeholder — warm neutral grade cover",
      alt: "Placeholder graphic representing a warm neutral color grade.",
      tone: "smoke",
    },
    galleryImages: [
      {
        kind: "placeholder",
        label: "Placeholder — neutral graded frame",
        alt: "Placeholder graphic for a warm neutral graded frame.",
        tone: "forest",
      },
    ],
    metadata: [
      { label: "Category", value: "Color Grading" },
      { label: "Status", value: "Placeholder project" },
      { label: "Assets", value: "Final photography pending" },
      { label: "Comparison", value: "Reserved" },
    ],
    techniques: [
      {
        title: "Neutral balance",
        description:
          "Sample process note — the final project will document how the warm neutral palette was built.",
      },
    ],
    featured: false,
    isPlaceholder: true,
  },
];

export function getCategoryBySlug(
  slug: string,
): PortfolioCategory | undefined {
  return portfolioCategories.find((category) => category.slug === slug);
}

export function getCategoryHref(slug: PortfolioCategorySlug): string {
  return `/portfolio/${slug}`;
}

export function getProjectHref(project: PortfolioProject): string {
  return `/portfolio/${project.category}/${project.slug}`;
}

export function getProjectsByCategory(
  category: PortfolioCategorySlug,
): PortfolioProject[] {
  return portfolioProjects.filter((project) => project.category === category);
}

export function getProjectBySlug(
  category: string,
  slug: string,
): PortfolioProject | undefined {
  return portfolioProjects.find(
    (project) => project.category === category && project.slug === slug,
  );
}

export function getFeaturedProjects(): PortfolioProject[] {
  return portfolioProjects.filter((project) => project.featured);
}

export function getProjectCountByCategory(
  category: PortfolioCategorySlug,
): number {
  return getProjectsByCategory(category).length;
}

export function getAdjacentProjects(project: PortfolioProject): {
  previous?: PortfolioProject;
  next?: PortfolioProject;
} {
  const categoryProjects = getProjectsByCategory(project.category);
  const index = categoryProjects.findIndex(
    (categoryProject) => categoryProject.slug === project.slug,
  );

  if (index === -1) return {};

  return {
    previous: index > 0 ? categoryProjects[index - 1] : undefined,
    next:
      index < categoryProjects.length - 1
        ? categoryProjects[index + 1]
        : undefined,
  };
}
