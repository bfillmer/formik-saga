
import React from 'react'

import {Section} from 'view/Shared/Structural'
import {H2, P} from 'view/Shared/Typography'
import {Link} from 'view/Shared/Link'

export const Dashboard = () => (
  <Section>
    <H2>Dashboard</H2>
    <P><Link href='/'>Logout</Link></P>
  </Section>
)
