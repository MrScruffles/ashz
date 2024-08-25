import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
    {
        degree: 'Bachelor of Science in Computer Science',
        description: 'Senior | Graduating May 2025',
        location: 'Charlotte, NC, USA',
        logo: Assets.Unknown,
        name: 'Zahabiuon, Ash',
        organization: 'University of North Carolina at Charlotte',
        period: { from: new Date(2022, 7, 1), to: new Date(2025, 5, 1) },
        shortDescription: 'Major: Computer Science | Minor: Computer Engineering',
        slug: 'unc-charlotte-computer-science',
        subjects: ['C', 'Python', 'Java', 'Data Structures', 'Algorithms', 'Operating Systems', 'Computer Networks', 'Software Engineering']
    },
    {
        degree: 'High School Diploma',
        description: '',
        location: 'Charlotte, NC, USA',
        logo: Assets.Unknown,
        name: '',
        organization: 'Myers Park High School',
        period: { from: new Date(2018, 7, 1), to: new Date(2022, 5, 1) },
        shortDescription: 'Graduated with a GPA of 4.32',
        slug: 'myers-park-high-school',
        subjects: ['Mathematics', 'Physics', 'Computer Science', 'English', 'History']
    }
];

export const title = 'Education';
