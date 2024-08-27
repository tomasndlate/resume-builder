export interface Resume extends ResumeDraft {
  id: number,
}

export interface ResumeDraft {
  tag: string,
  personalDetails: {
    title: string,
    element: PersonalDetails
  },
  summary: {
    title: string,
    element: string
  },
  employment: {
    title: string,
    elements: Employment[]
  },
  education: {
    title: string,
    elements: Education[]
  },
  skills: {
    title: string,
    elements: Skill[]
  },
  websites: {
    title: string,
    elements: Website[]
  },
  certifications: {
    title: string,
    elements:Certfication[]
  },
  volunteering: {
    title: string,
    elements: Volunteering[]
  },
  customSection: {
    title: string,
    elements: CustomSection[]
  }
}

export interface PersonalDetails {
  jobTitle: string,
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  country: string,
  city: string,
}

export interface Employment {
  jobTitle: string,
  employer: string,
  country: string,
  city: string,
  description: string,
}

export interface Education {
  school: string,
  degree: string,
  country: string,
  city: string,
  description: string,
}

export interface Skill {
  name: string,
}

export interface Website {
  name: string,
  link: string,
}

export interface Certfication {
  name: string,
  institution: string,
}

export interface Volunteering {
  name: string,
  institution: string,
}

export interface CustomSection {
  name: string,
  country: string,
  city: string,
  description: string,
}
