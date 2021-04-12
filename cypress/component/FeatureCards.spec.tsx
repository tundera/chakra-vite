import { mount } from '@cypress/react'

import FeatureCards from 'components/FeatureCards'

describe('FeatureCards', () => {
  it('works', () => {
    mount(<FeatureCards />)
  })

  it('Has all card headings', () => {
    cy.findByText('Vite')
    cy.findByText('TypeScript')
    cy.findByText('Cypress')
  })
})
