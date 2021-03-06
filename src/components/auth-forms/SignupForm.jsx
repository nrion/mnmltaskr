import React from 'react'
import { Button, Form, Input, Divider, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Field } from 'redux-form'

const renderInput = (field) => {
  const { meta, placeholder } = field
  const hasError = meta.touched && meta.error

  return (
    <Form.Field>
      <label>{placeholder}</label>
      <Input {...field} />
      { hasError &&
        <Label color='red' pointing='above'
          style={{ float: 'right', marginBottom: '1ex' }}
        >{meta.error}
        </Label>
      }
    </Form.Field>
  )
}

const options = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' }
]

const SignupForm = (props) => {
  const { handleSubmit, submitting } = props

  return (
    <Form loading={submitting} inverted onSubmit={handleSubmit}>
      <div style={{ paddingTop: '2em', paddingBottom: '2em' }}>
        <Field
          name='first'
          type='text'
          icon='id badge'
          placeholder='Enter your first name'
          component={renderInput}
        />
        <Field
          name='last'
          type='text'
          icon='id badge'
          placeholder='Enter your last name'
          component={renderInput}
        />
        <Field
          name='email'
          type='email'
          icon='user'
          placeholder='Now your email'
          component={renderInput}
        />
        <Field
          name='password'
          type='password'
          icon='lock'
          placeholder='Decide for a secure password'
          component={renderInput}
        />
        <Form.Field>
          <Divider />
          { options.map((option, index) => (
            <label key={index} style={{ color: 'white' }}>
              <Field
                name='sex'
                type='radio'
                component='input'
                value={option.value}
              /> {option.label}
            </label>
          ))}
          <Divider />
        </Form.Field>
        <Field
          name='phoneNumber'
          type='number'
          icon='phone'
          placeholder='Can I get your digits?'
          component={renderInput}
        />
        <Field
          name='address'
          type='text'
          icon='home'
          placeholder='Where do you live?'
          component={renderInput}
        />
      </div>
      <div>
        <Divider />
        <Button as={Link} to='/' icon='arrow left' basic circular inverted />
        <Button as={Link} to='/login' inverted basic circular disabled={submitting}>
          Log in instead
        </Button>
        <Button type='submit' circular disabled={submitting}>Sign up</Button>
      </div>
    </Form>
  )
}

export default SignupForm
