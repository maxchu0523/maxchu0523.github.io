export interface Project {
  name: string;
  description: string;
  /** Tech stack label, e.g. "ANGULAR · JAVA". */
  tech: string;
  href: string;
  /** Optional preview image shown on hover. */
  preview?: string;
}
