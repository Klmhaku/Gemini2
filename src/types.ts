/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Inquiry {
  id: string;
  name: string;
  organization: string;
  email: string;
  phone: string;
  robotType: string;
  message: string;
  createdAt: string;
  status: 'pending' | 'reviewed' | 'approved';
}

export interface CurriculumStep {
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  tags: string[];
}

export interface RobotSpec {
  category: string;
  name: string;
  value: string;
  description: string;
}

export interface Accomplishment {
  year: string;
  title: string;
  category: 'Competition' | 'Education' | 'R&D' | 'MOU';
  highlight: string;
  description: string;
}
