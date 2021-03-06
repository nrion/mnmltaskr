import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Container, Button, Icon, Dropdown } from 'semantic-ui-react'
import { logout, getUser } from '../actions/firestore/authUser'

const renderSignin = () => (
  <Button as={Link} to='/login' circular animated>
    <Button.Content visible>Login</Button.Content>
    <Button.Content hidden>
      <Icon color='black' name='sign in' />
    </Button.Content>
  </Button>
)

const renderLogout = (toggleSidebar) => {
  const { firstName } = getUser()
  const trigger = (<Menu.Item fitted>
    <Icon name='user circle outline' size='large' />
    <span>{firstName}</span>
  </Menu.Item>)

  const options = [
    { key: 'todo',
      text: <span>Hi, <b>{firstName}</b>!</span>,
      disabled: true
    },
    { key: 'user',
      text: 'My account',
      icon: 'user',
      onClick: toggleSidebar
    },
    { key: 'sign-out',
      text: 'Logout',
      icon: 'sign out',
      onClick: logout
    }
  ]

  return (
    <Dropdown floating
      trigger={trigger}
      options={options}
      pointing='top right'
      icon={null}
    />
  )
}

const items = [
  { link: '/post-a-task', name: 'post a task' },
  { link: '/browse-tasks', name: 'browse tasks' },
  { link: '/my-tasks', name: 'my tasks' }
]

const Header = (props) => {
  const {
    activeItem,
    selectItem,
    isActive,
    toggleSidebar
  } = props

  const whichComponent = isActive
    ? renderLogout(toggleSidebar)
    : renderSignin()

  return (
    <Menu fixed='top' borderless pointing>
      <Container>
        <Menu.Item header as={Link} to='/'
          onClick={() => selectItem(null)}
          style={{ borderRight: '1px solid gainsboro' }}
        ><Icon name='tasks' />MNMLTASKR
        </Menu.Item>
        { getUser()
          ? items.map((item) => (
            <Menu.Item
              as={Link}
              to={item.link}
              key={item.name}
              name={item.name}
              active={activeItem === item.name}
              onClick={(e, {name}) => selectItem(name)}
            />
          ))
          : <Menu.Item disabled>
            <i>Welcome to Mnmltasker! Please login to continue...</i>
          </Menu.Item>
        }
        <Menu.Menu position='right'>
          <Menu.Item>{whichComponent}</Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  )
}

export default Header
