import React from 'react'
import { Field } from 'redux-form'
import { Link } from 'react-router-dom'
import { Divider, Modal, Segment, Icon,
  Form, Input, Header, TextArea, Button } from 'semantic-ui-react'

const renderInput = (field) => (
  <Input
    {...field}
    label='&#8369;'
    size='big'
  />
)

const renderTextArea = (field) => (
  <TextArea
    {...field.input}
    rows='10'
    placeholder='
      e.g. I will be great for this task.
      I have the necessarcy experience,
      skills and equipment required
      to get this done
    '
  />
)

const renderFees = (offer) => {
  const mnmltaskrProfit = offer * 0.15
  const taskerFee = offer - mnmltaskrProfit

  return (
    <div style={{ marginTop: '1em' }}>
      <i>
        You will receive &#8369; {taskerFee}
        <div style={{ padding: '3px' }} />
        mnmltaskr fee of &#8369; {mnmltaskrProfit}
      </i>
    </div>
  )
}

const Bidding = (props) => {
  const { offer } = props
  return (
    <Modal open basic size='mini'>
      <Segment vertical>

        <Header inverted>MAKE AN OFFER</Header>
        <Form inverted>
          <Form.Field>
            <label>How much?</label>
            <Field
              name='offer'
              type='number'
              component={renderInput}
            />
            {offer && renderFees(offer)}
          </Form.Field>
          <Divider inverted />
          <Form.Field>
            <label>Why are you the best person for this task?</label>
            <Field
              name='reason'
              component={renderTextArea}
            />
          </Form.Field>
          <Divider />
          <Button
            as={Link}
            to='/browse-tasks'
            icon circular
            basic inverted
          >
            <Icon name='arrow left' />
          </Button>
          <Button
            type='submit'
            floated='right'
            circular
          >
            Continue
          </Button>
        </Form>
      </Segment>
    </Modal>
  )
}

export default Bidding
