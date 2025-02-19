import React from 'react'

import { ContractsSection, ContractsSectionProps } from './ContractsSection'
import {
  DescriptionSection,
  DescriptionSectionProps,
} from './DescriptionSection'
import { LinkSection, LinkSectionProps } from './links/LinkSection'
import { NewsSection, NewsSectionProps } from './NewsSection'
import { ReferencesSection, ReferencesSectionProps } from './ReferencesSection'
import { RiskSection, RiskSectionProps } from './RiskSection'
import {
  TechnologyIncomplete,
  TechnologyIncompleteProps,
} from './TechnologyIncomplete'
import { TechnologySection, TechnologySectionProps } from './TechnologySection'

export interface ProjectDetailsProps {
  linkSection: LinkSectionProps
  newsSection: NewsSectionProps
  descriptionSection: DescriptionSectionProps
  riskSection: RiskSectionProps
  incomplete?: TechnologyIncompleteProps
  sections: TechnologySectionProps[]
  contractsSection: ContractsSectionProps
  referencesSection: ReferencesSectionProps
}

export function ProjectDetails(props: ProjectDetailsProps) {
  return (
    <main className="ProjectDetails">
      <LinkSection {...props.linkSection} />
      <NewsSection {...props.newsSection} />
      <div className="ProjectDetails-Content">
        <DescriptionSection {...props.descriptionSection} />
        <RiskSection {...props.riskSection} />
        {props.incomplete && <TechnologyIncomplete {...props.incomplete} />}
        {props.sections.map((section) => (
          <TechnologySection key={section.id} {...section} />
        ))}
        <ContractsSection {...props.contractsSection} />
      </div>
      <ReferencesSection {...props.referencesSection} />
    </main>
  )
}
