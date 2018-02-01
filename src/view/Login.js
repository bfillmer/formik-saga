
import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import {Formik, Form, Field as FormikField} from 'formik'
import yup from 'yup'

import {Section as DefaultSection} from 'view/Shared/Structural'
import {P} from 'view/Shared/Typography'
import {Spread} from 'view/Shared/Utils'

import {submitLogin} from 'actions'
import {getTheme} from 'view/theme'

// VISUAL COMPONENTS
// @NOTE In a larger application than this tutorial most of the following visual components
// would move into view/Shared and be reused.
const Section = DefaultSection.extend`
  width: 15rem;
`

const Label = styled.label`
  font-size: 0.75rem;
  text-transform: uppercase;
`

const Field = styled(FormikField)`
  display: block;
  width: 100%;
  font-size: 1rem;
  padding-top: ${getTheme('paddings', 'quarter')};
  padding-bottom: ${getTheme('paddings', 'quarter')};
  padding-left: ${getTheme('paddings', 'half')};
  padding-right: ${getTheme('paddings', 'half')};
  border: 1px solid ${getTheme('colors', 'accent')};
`

const Button = styled.button`
  display: block;
  width: 100%;
  font-size: 0.75rem;
  text-transform: uppercase;
  color: ${getTheme('colors', 'contrast')};
  background-color: ${getTheme('colors', 'primary')};
  padding-top: ${getTheme('paddings', 'half')};
  padding-bottom: ${getTheme('paddings', 'half')};
  padding-left: ${getTheme('paddings', 'half')};
  padding-right: ${getTheme('paddings', 'half')};
  border: none;
  border-radius: 0;
  &:hover {
    cursor: pointer;
    background-color: ${getTheme('colors', 'accent')};
  }
`

const Error = styled.span`
  display: block;
  font-size: 0.75rem;
  color: ${getTheme('colors', 'error')};
`

// LOGIN FORM
// @NOTE For forms that can be reused for both create/update you would move this form to its own
// file and import it with different initialValues depending on the use-case. An over-optimization
// for this simple login form however.
const LoginForm = ({errors, isSubmitting, values}) => (
  <Form>
    {errors.authentication && <P><Error>{errors.authentication}</Error></P>}
    <P>
      <Label>Username <Field type='text' name='username' /></Label>
      {errors.username && <Error>{errors.username}</Error>}
    </P>
    <P>
      <Label>Password <Field type='password' name='password' /></Label>
      {errors.password && <Error>{errors.password}</Error>}
    </P>
    <P>
      <Button type='submit' disabled={isSubmitting}>
        Login {isSubmitting && <i className='fa fa-spinner fa-spin' />}
      </Button>
    </P>
  </Form>
)

// FORM CONFIGURATION
const initialValues = {
  username: '',
  password: ''
}

const validationSchema = yup.object().shape({
  username: yup.string().required().label('Username'),
  password: yup.string().required().label('Password')
})

// LOGIN CONTAINER
const mapDispatchToProps = dispatch => ({
  onSubmit: (values, actions) => dispatch(submitLogin({values, actions}))
})

const Container = ({onSubmit}) => (
  <Spread>
    <Section>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={onSubmit}
        render={props => <LoginForm {...props} />}
      />
    </Section>
    <Section>
      <P small>There is one valid username & password combination:</P>
      <P small>Username: <strong>formik</strong><br />Password: <strong>is3asy</strong></P>
      <P small>Invalid username & password combination return an error from our fake API call.</P>
    </Section>
  </Spread>
)

export const Login = connect(null, mapDispatchToProps)(Container)
