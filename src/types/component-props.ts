// Shared types for component props to ensure consistency across the design system

// Color variants used across components
export type ColorVariant = 'default' | 'white' | 'muted';

// Background colors for sections and components
export type BackgroundColor = 'white' | 'gray' | 'blue' | 'dark';

// Size variants (commonly used for spacing, buttons, etc.)
export type SizeVariant = 'sm' | 'md' | 'lg' | 'xl';

// Extended size variants (includes xs and 2xl for more granular control)
export type ExtendedSizeVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// Spacing variants (for margins, padding, gaps, etc.)
export type SpacingVariant = 'none' | 'sm' | 'md' | 'lg' | 'xl';

// Text/content width variants (for max-width classes)
export type WidthVariant = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';

// Heading levels
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

// Heading/text variants for different contexts
export type TextVariant = 'hero' | 'section' | 'subsection' | 'card' | 'body' | 'lead';

// Button variants
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'white' | 'white-outline';

// Alignment options
export type AlignmentVariant = 'left' | 'center' | 'right' | 'start' | 'end';

// Position variants (for images, content, etc.)
export type PositionVariant = 'left' | 'right' | 'top' | 'bottom' | 'center';

// Image aspect ratios
export type AspectRatioVariant = 'square' | 'video' | 'portrait' | 'custom';

// Overlay variants for section separators and hero sections
export type OverlayVariant = 'none' | 'light' | 'dark' | 'blue';

// Overlay opacity levels
export type OverlayOpacity = '20' | '40' | '60' | '80';

// Container/content size variants
export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

// Grid column variants
export type GridColumns = '1' | '2' | '3' | '4' | '5' | '6';

// Responsive breakpoint object type
export type ResponsiveBreakpoints = {
  sm?: GridColumns;
  md?: GridColumns;
  lg?: GridColumns;
  xl?: GridColumns;
};

// Common props that many components share
export interface BaseComponentProps {
  class?: string;
}

export interface BackgroundProps {
  background?: BackgroundColor;
}

export interface PaddingProps {
  padding?: SpacingVariant;
}

export interface SizingProps {
  size?: SizeVariant;
}

export interface AlignmentProps {
  alignment?: AlignmentVariant;
}

// Button-related types
export interface ButtonConfig {
  text: string;
  href: string;
  variant?: ButtonVariant;
}

// Common heading/text props
export interface HeadingProps {
  titleLevel?: HeadingLevel;
  titleVariant?: TextVariant;
  titleColor?: ColorVariant;
}

export interface TextContentProps {
  title: string;
  description?: string;
  maxWidth?: WidthVariant;
}

// Image-related props
export interface ImageProps {
  imageSrc: string;
  imageAlt: string;
  imagePosition?: PositionVariant;
  imageClass?: string;
  imageAspect?: AspectRatioVariant;
}

// Section separator specific types
export interface SectionSeparatorProps extends BaseComponentProps, BackgroundProps {
  backgroundImage?: string;
  height?: ExtendedSizeVariant;
  overlay?: OverlayVariant;
  overlayOpacity?: OverlayOpacity;
  position?: PositionVariant;
  attachment?: 'scroll' | 'fixed';
  withContent?: boolean;
  containerSize?: ContainerSize;
  contentPadding?: SpacingVariant;
}

// Grid-related props
export interface GridProps {
  columns?: GridColumns;
  breakpoints?: ResponsiveBreakpoints;
}
