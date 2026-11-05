export type NavItem = {
  label: string;
  href: string;
};

export type Capability = {
  index: string;
  label: string;
};

export type Service = {
  title: string;
  description: string;
  tags: string[];
};

export const site = {
  name: "KURO SHOOTS",
  supportingName: "Rovin Ocampo Photography",
  tagline: "Through my lens. Beyond the ordinary.",
  description:
    "KURO SHOOTS is the photography, retouching, and color grading practice of Rovin Ocampo. A cinematic, editorial portfolio built around light, texture, and restraint.",
} as const;

export const navItems: NavItem[] = [
  { label: "Photography", href: "/portfolio" },
  { label: "Before & After", href: "/before-after" },
  { label: "Carousels", href: "/carousels" },
];

export const capabilities: Capability[] = [
  { index: "01", label: "Photography" },
  { index: "02", label: "Editing & Retouching" },
  { index: "03", label: "Color Grading" },
  { index: "04", label: "Creative Direction" },
];

export const services: Service[] = [
  {
    title: "Photography",
    description:
      "Editorial, portrait, and atmospheric image-making built around natural light, considered composition, and a quiet sense of drama.",
    tags: ["Editorial", "Portrait", "Lifestyle"],
  },
  {
    title: "Editing & Retouching",
    description:
      "Texture-aware retouching that keeps skin, fabric, and material honest while elevating the frame with a clean, editorial finish.",
    tags: ["Skin", "Cleanup", "Composite"],
  },
  {
    title: "Color Grading",
    description:
      "Cinematic color treatment with controlled contrast, muted palettes, and filmic depth — shaped to give each series a distinct mood.",
    tags: ["Grade", "LUT", "Finishing"],
  },
];
