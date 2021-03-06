import React from 'react'
import { Form, Button, Icon, Popup } from 'semantic-ui-react'
import CustomField from '../../custom/CustomField'

const Budget = (props) => {
  const {
    handleSubmit,
    pristine,
    submitting,
    goToPrev
  } = props

  return (
    <Form loading={submitting} as='form' onSubmit={handleSubmit}>
      <CustomField
        title='How many people do you need for your task?'
        info='If you need more hands, you can have up to 20 taskers to complete your task'
        name='manpower'
        type='number'
        placeholder='Number of taskers'
        isLabeled={true}
        labelPosition='right'
        labelText='taskers'
      />
      <CustomField
        title='What is your budget?'
        info='Weigh up how long it will take and the skills needed. Then suggest a fair budget to get more offers at a higher quality.'
        name='budget'
        type='number'
        placeholder='Amount'
        isLabeled={true}
        labelPosition='left'
        labelText='&#8369;'
      />
      <Form.Field style={{ color: 'grey', textAlign: 'right', paddingRight: '1em' }}>
        <i>What happens next?</i>
        <Popup trigger={<Icon style={{ paddingLeft: '1em' }} name='info circle' />}
          on='hover'
          content={<i>
            Pretty soon you&apos;ll start getting offers
            from Taskers. Just so you know, task
            details can be changed any time
            before you accept an offer and you
            have no obligations to hire.
          </i>}
        />
      </Form.Field>
      <Button.Group floated='right'>
        <Button onClick={goToPrev} animated>
          <Button.Content visible>Previous</Button.Content>
          <Button.Content hidden>
            <Icon name='left arrow' />
          </Button.Content>
        </Button>
        <Button.Or />
        <Button type='submit' animated disabled={pristine || submitting}>
          <Button.Content visible>Submit</Button.Content>
          <Button.Content hidden>
            <Icon name='right arrow' />
          </Button.Content>
        </Button>
      </Button.Group>
    </Form>
  )
}

export default Budget
