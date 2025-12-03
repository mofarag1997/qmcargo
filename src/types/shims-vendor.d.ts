// Auto-generated shims to silence TS errors for non-standard imports

// Modules with explicit version suffixes (e.g. "lucide-react@0.487.0")
declare module '*@*' {
  const whatever: any;
  export default whatever;
}

// Figma asset imports used by the figma plugin
declare module 'figma:asset/*' {
  const src: string;
  export default src;
}

declare module 'figma:*' {
  const whatever: any;
  export default whatever;
}

// Image imports
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module '*.svg' {
  const content: any;
  export default content;
}
