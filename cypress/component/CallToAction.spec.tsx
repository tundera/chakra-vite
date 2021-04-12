import { mount } from '@cypress/react'

import CallToAction from 'components/CallToAction'

describe('CallToAction', () => {
  it('works', () => {
    mount(<CallToAction title="Title" subtitle="Subtitle" description="Description" />)
  })

  it('findByText', () => {
    cy.findByText('Learn more')
  })
})
