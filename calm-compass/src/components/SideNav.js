import '../App.css';
import { useState } from 'react';
import { Icon, Menu, Sidebar, Button, Search, Popup} from 'semantic-ui-react';
import { Link, Outlet } from 'react-router-dom';

export default function SideNav () {
  const [expanded, setExpanded] = useState(false);

  // Toggles the expanded state
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <Sidebar
    as={Menu}
    animation="overlay"
    inverted
    vertical
    onHide={() => setExpanded(false)}
    visible
    width={expanded ? 'ui sidebar' : 'very thin sidebar'}
    style={{backgroundColor:'#1E90FF'}}
    >
        {/* Expand/Collapse Button */}
        <Menu.Item onClick={toggleExpand} className='sidenav-item'>
            <Icon size='big' name={expanded ? 'angle double left' : 'angle double right'}/>
        </Menu.Item>

        {/* Menu Items */}
        <Menu.Item as={Link} to="/" >
            <Popup content='Home' size='mini' position='right' className='sidenav-item' trigger={<div>
                <Icon size='big' name="home" />
                {expanded && <span style={{ marginLeft: '10px' }}>Home</span>}
                </div>}
            />
            
        </Menu.Item>
        <Menu.Item as={Link} to="/helper">
            <Popup content='Helper' size='mini' position='right' className='sidenav-item' trigger={<div>
                <Icon size='big' name="rocketchat" />
                {expanded && <span style={{ marginLeft: '10px' }}>Helper</span>}
                </div>}
            />
        </Menu.Item>
        <Menu.Item as={Link} to="/document-uploader">
            <Popup content='Document uploader' size='mini' position='right' className='sidenav-item' trigger={<div>
                <Icon size='big' name="upload" />
                {expanded && <span style={{ marginLeft: '10px' }}>Document uploader</span>}
                </div>}
            />
        </Menu.Item>
        <Menu.Item as={Link} to="/medical-history">
            <Popup content='Medical history' size='mini' position='right' className='sidenav-item' trigger={<div>
                <Icon size='big' name="history" />
                {expanded && <span style={{ marginLeft: '10px' }}>Medical history</span>}
                </div>}
            />
        </Menu.Item>
        <Menu.Item as={Link} to="/profile">
            <Popup content='Profile' size='mini' position='right' className='sidenav-item' trigger={<div>
                <Icon size='big' name="user" />
                {expanded && <span style={{ marginLeft: '10px' }}>Profile</span>}
                </div>}
            />
        </Menu.Item>
        <Menu.Item as={Link} to="/blogs">
            <Popup content='Blogs' size='mini' position='right' className='sidenav-item' trigger={<div>
                <Icon size='big' name="blogger" />
                {expanded && <span style={{ marginLeft: '10px' }}>Blogs</span>}
                </div>}
            />
        </Menu.Item>
    </Sidebar>
    <div style={{display:'flex'}}>
        <div style={{ width: '1100px' }} className='header-search'>
            <div><Search  input={{ fluid: true }} placeholder="Search..." /></div>
        </div>
        <div className='logout-button'>
            <Button className="medium primary button">Logout</Button>
        </div>      
    </div>
    <Outlet/>
    </>
  );
};

