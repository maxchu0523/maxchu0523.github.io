export interface Project {
  /** Zero-padded index shown in the list, e.g. "001". */
  num: string;
  name: string;
  description: string;
  /** Tech stack label, e.g. "ANGULAR · JAVA". */
  tech: string;
  href: string;
  /** Optional preview image shown on hover. */
  preview?: string;
}
