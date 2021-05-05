import { mount } from '@cypress/react'

import FeatureCards from 'blocks/FeatureCards'

describe('FeatureCards', () => {
  it('works', () => {
    mount(<FeatureCards />)
  })

  it('Has all card headings', () => {
    mount(<FeatureCards />)

    cy.findByText('Vite')
    cy.findByText('TypeScript')
    cy.findByText('Cypress')
  })
})
