import {
  IResume,
  IResumeDraft,
  IPersonalDetails,
  ISummary,
  IEmployments,
  ICertfications,
  ICustomSections,
  IEducations,
  ISkills,
  IVolunteerings,
  IWebsites,
  IEmploymentsElement,
  IResumeSection,
  IResumeSectionElement} from "./IResume.interface"

export const createIResume = (id: number, resumeDraft: IResumeDraft): IResume => {
  const resume: IResume = {
    ...resumeDraft,
    id: id
  }
  return resume;
}

export const createIResumeDraft = (tag: string): IResumeDraft => {
  const resumeDraft: IResumeDraft = {
    tag: tag,
    personalDetails: createIPersonalDetails(),
    summary: createISummary(),
    employment: createSection_Employments(),
    education: createSection_Education(),
    skills: createISkills(),
    websites: createIWebsites(),
    certifications: createICertfications(),
    volunteering: createIVolunteerings(),
    customSection: createICustomSections()
  }
  return resumeDraft;
}

export const createIPersonalDetails = (): IPersonalDetails  => {
  const personalDetails: IPersonalDetails = {
    title: { value: "", default: "Personal Details" },
    element: {
      jobTitle: { value: "", label: "" },
      firstName: { value: "", label: "" },
      lastName: { value: "", label: "" },
      email: { value: "", label: "" },
      phone: { value: "", label: "" },
      country: { value: "", label: "" },
      city: { value: "", label: "" }
    }
  }
  return personalDetails;
}

export const createISummary = (): ISummary => {
  const summary: ISummary = {
    title: { value: "", default: "" },
    element: { value: "", label: "" }
  }
  return summary;
}

// GENERIC IMPLEMENTATION
export const createSection_Employments = (): IResumeSection => {
  const section: IResumeSection = {
    sectionType: "employment",
    title: { value: "", default: "Employment History" },
    elements: [],
  }
  return section
}
export const createSectionElement_Employments = (): IResumeSectionElement => {
  const sectionElement: IResumeSectionElement = {
    elementTitleKeys: ["jobTitle", "employer"],
    elementTitleConnector: "at",
    elementSubTitleKeys: [],
    elementSubTitleConnector: "",
    elementFields: {
      jobTitle: {type: 'text', value: "", label: "Job title" },
      employer: {type: 'text', value: "", label: "Employer" },
      country: {type: 'text', value: "", label: "Country" },
      city: {type: 'text', value: "", label: "City" },
      description: {type: 'textarea', value: "", label: "Description" }
    }

  }
  return sectionElement;
}

export const createSection_Education = (): IResumeSection => {
  const section: IResumeSection = {
    sectionType: "education",
    title: { value: "", default: "Education" },
    elements: [],
  }
  return section
}
export const createSectionElement_Education = (): IResumeSectionElement => {
  const sectionElement: IResumeSectionElement = {
    elementTitleKeys: ["school"],
    elementTitleConnector: "",
    elementSubTitleKeys: ["degree"],
    elementSubTitleConnector: "",
    elementFields: {
      school: {type: 'text', value: "", label: "School" },
      degree: {type: 'text', value: "", label: "Degree" },
      country: {type: 'text', value: "", label: "Country" },
      city: {type: 'text', value: "", label: "City" },
      description: {type: 'textarea', value: "", label: "Description" }
    }

  }
  return sectionElement;
}


export const createIEducations = (): IEducations => {
  const educations: IEducations = {
    title: { value: "", default: "" },
    elements: []
  }
  return educations;
}

export const createISkills = (): ISkills => {
  const skills: ISkills = {
    title: { value: "", default: "" },
    elements: []
  }
  return skills;
}

export const createIWebsites = (): IWebsites => {
  const websites: IWebsites = {
    title: { value: "", default: "" },
    elements: []
  }
  return websites;
}

export const createICertfications = (): ICertfications => {
  const certifications: ICertfications = {
    title: { value: "", default: "" },
    elements: []
  }
  return certifications;
}

export const createIVolunteerings = (): IVolunteerings => {
  const volunteerings: IVolunteerings = {
    title: { value: "", default: "" },
    elements: []
  }
  return volunteerings;
}

export const createICustomSections = (): ICustomSections => {
  const customSections: ICustomSections = {
    title: { value: "", default: "" },
    elements: []
  }
  return customSections;
}



