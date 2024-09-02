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
    skills: createSection_Skills(),
    websites: createSection_Websites(),
    certifications: createSection_Certifications(),
    volunteering: createSection_Volunteering(),
    // customSection: createICustomSections()
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
    title: { value: "", default: "Summary" },
    element: { value: "", label: "Professional summary" }
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
    elementTitleConnector: " at ",
    elementSubTitleKeys: ["city", "country"],
    elementSubTitleConnector: ", ",
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
    elementTitleKeys: ["degree", "school"],
    elementTitleConnector: " at ",
    elementSubTitleKeys: ["city", "country"],
    elementSubTitleConnector: ", ",
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


export const createSection_Skills = (): IResumeSection => {
  const section: IResumeSection = {
    sectionType: "skills",
    title: { value: "", default: "Skills" },
    elements: [],
  }
  return section
}
export const createSectionElement_Skills = (): IResumeSectionElement => {
  const sectionElement: IResumeSectionElement = {
    elementTitleKeys: ["skillName"],
    elementTitleConnector: "",
    elementSubTitleKeys: [],
    elementSubTitleConnector: "",
    elementFields: {
      skillName: {type: 'text', value: "", label: "Skill" },
    }

  }
  return sectionElement;
}


export const createSection_Websites = (): IResumeSection => {
  const section: IResumeSection = {
    sectionType: "websites",
    title: { value: "", default: "Websites" },
    elements: [],
  }
  return section
}
export const createSectionElement_Websites = (): IResumeSectionElement => {
  const sectionElement: IResumeSectionElement = {
    elementTitleKeys: ["linkLabel"],
    elementTitleConnector: "",
    elementSubTitleKeys: [],
    elementSubTitleConnector: "",
    elementFields: {
      linkLabel: {type: 'text', value: "", label: "Label" },
      link: {type: 'text', value: "", label: "Link" },
    }

  }
  return sectionElement;
}

export const createSection_Certifications = (): IResumeSection => {
  const section: IResumeSection = {
    sectionType: "certifications",
    title: { value: "", default: "Certifications" },
    elements: [],
  }
  return section
}
export const createSectionElement_Certifications = (): IResumeSectionElement => {
  const sectionElement: IResumeSectionElement = {
    elementTitleKeys: ["certification", "institution"],
    elementTitleConnector: ", ",
    elementSubTitleKeys: [],
    elementSubTitleConnector: "",
    elementFields: {
      certification: {type: 'text', value: "", label: "Certification" },
      institution: {type: 'text', value: "", label: "Institution" },
    }

  }
  return sectionElement;
}


export const createSection_Volunteering = (): IResumeSection => {
  const section: IResumeSection = {
    sectionType: "volunteering",
    title: { value: "", default: "Voluntering" },
    elements: [],
  }
  return section
}
export const createSectionElement_Volunteering = (): IResumeSectionElement => {
  const sectionElement: IResumeSectionElement = {
    elementTitleKeys: ["activity"],
    elementTitleConnector: "",
    elementSubTitleKeys: [],
    elementSubTitleConnector: "",
    elementFields: {
      activity: {type: 'text', value: "", label: "Activity name, job title, etc." },
      location: {type: 'text', value: "", label: "Location" },
    }

  }
  return sectionElement;
}

// export const createICustomSections = (): ICustomSections => {
//   const customSections: ICustomSections = {
//     title: { value: "", default: "" },
//     elements: []
//   }
//   return customSections;
// }



