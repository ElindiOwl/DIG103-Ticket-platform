import type { ReactNode } from 'react';

export type Affiliation = 'platform' | 'theme'
export type Direction = 'up' | 'down' | 'left' | 'right'
export type TextType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
export type ComponentChildren = { children: ReactNode }
export type ParsedDate = { day: number, month: number, year: number, namedMonth: string, date: Date }