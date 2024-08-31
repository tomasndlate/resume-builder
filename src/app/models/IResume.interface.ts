export interface IResume extends IResumeDraft {
  id: number,
}

export interface IResumeDraft {
  tag: string,
  personalDetails: IPersonalDetails,
  summary: ISummary,
  employment: IResumeSection,
  education: IResumeSection,
  skills: ISkills,
  websites: IWebsites,
  certifications: ICertfications,
  volunteering: IVolunteerings,
  customSection: ICustomSections
}

export interface IPersonalDetails {
  title: { value: string, default: string },
  element: IPersonalDetailsElement
}
export interface IPersonalDetailsElement {
  jobTitle: { value: string, label: string },
  firstName: { value: string, label: string },
  lastName: { value: string, label: string },
  email: { value: string, label: string },
  phone: { value: string, label: string },
  country: { value: string, label: string },
  city: { value: string, label: string },
}

export interface ISummary {
  title: { value: string, default: string },
  element: { value: string, label: string },
}

export interface IEmployments {
  title: { value: string, default: string },
  elements: IEmploymentsElement[]
}
export interface IEmploymentsElement {
  jobTitle: { value: string, label: string },
  employer: { value: string, label: string },
  country: { value: string, label: string },
  city: { value: string, label: string },
  description: { value: string, label: string },
}

export interface IEducations {
  title: { value: string, default: string },
  elements: IEducationsElement[]
}
export interface IEducationsElement {
  school: { value: string, label: string },
  degree: { value: string, label: string },
  country: { value: string, label: string },
  city: { value: string, label: string },
  description: { value: string, label: string },
}

export interface ISkills {
    title: { value: string, default: string },
    elements: ISkillsElement[]
  }
export interface ISkillsElement {
  name: { value: string, label: string },
}

export interface IWebsites {
  title: { value: string, default: string },
  elements: IWebsitesElement[]
}
export interface IWebsitesElement {
  name: { value: string, label: string },
  link: { value: string, label: string },
}

export interface ICertfications {
  title: { value: string, default: string },
  elements: ICertficationsElement[]
}
export interface ICertficationsElement {
  name: { value: string, label: string },
  institution: { value: string, label: string },
}

export interface IVolunteerings {
  title: { value: string, default: string },
  elements: IVolunteeringsElement[]
}
export interface IVolunteeringsElement {
  name: { value: string, label: string },
  institution: { value: string, label: string },
}

export interface ICustomSections {
  title: { value: string, default: string },
  elements: ICustomSectionsElement[]
}
export interface ICustomSectionsElement {
  name: { value: string, label: string },
  country: { value: string, label: string },
  city: { value: string, label: string },
  description: { value: string, label: string },
}

// GENERIC SOLUTION
export interface IResumeSection {
  sectionType: keyof IResume,
  title: { value: string, default: string },
  elements: IResumeSectionElement[]
}
export interface IResumeSectionElement {
  elementTitleKeys: Array<keyof IResumeSectionElementFields>,
  elementTitleConnector: string,
  elementSubTitleKeys: Array<keyof IResumeSectionElementFields>,
  elementSubTitleConnector: string,
  elementFields: IResumeSectionElementFields
}
export interface IResumeSectionElementFields {
  [key: string]: { type: 'text' | 'textarea' | 'date', value: string, label: string },
}
