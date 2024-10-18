import { Segment, Header, Icon, Accordion, Card, List, ListItem, Button, CardContent, CardMeta, CardHeader, CardDescription, CardGroup, Image } from "semantic-ui-react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Chatbot from './Chatbot';

function Meets(){
    const [activeIndex, setActiveIndex] = useState(0);
    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle active index
    };

    return(
        <Segment>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <Header size='large' style={{display:'contents'}}>Scheduled Doctor's Appointments</Header>
                <Link style={{display:'flex',alignItems:'center'}}>Add &nbsp;<Chatbot/></Link>
            </div>
            <br/>
            <Accordion styled>
                {/* First Item */}
                <Accordion.Title
                    active={activeIndex === 0}
                    index={0}
                    onClick={() => handleClick(0)}
                >
                    <Icon name='dropdown' />
                    Upcoming
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                    <Card link color="red">
                        <CardContent>
                            <CardHeader>2024-11-19</CardHeader>
                            <CardMeta>Dr. Khanna</CardMeta>
                            <CardDescription>
                                <List>
                                    <ListItem icon='hospital' content='Concern Allergies' />
                                    <ListItem icon='marker' content='New York, NY' />
                                    <ListItem icon='clock outline' content='11:30 AM' />
                                </List>
                            </CardDescription>
                        </CardContent>
                        <CardContent extra>
                            <div className='ui two buttons'>
                            <Button basic color='green'>
                                Done &nbsp;<Icon name="check circle" color="green"/>
                            </Button>
                            <Button basic color='red'>
                                Missed &nbsp;<Icon name="frown" color="red"/>
                            </Button>
                            </div>
                        </CardContent>
                    </Card>
                    <Card link color="red">
                        <CardContent>
                            <CardHeader>2024-11-25</CardHeader>
                            <CardMeta>Dr. Khanna</CardMeta>
                            <CardDescription>
                                <List>
                                    <ListItem icon='hospital' content='Concern Allergies' />
                                    <ListItem icon='marker' content='New York, NY' />
                                    <ListItem icon='clock outline' content='11:30 AM' />
                                </List>
                            </CardDescription>
                        </CardContent>
                        <CardContent extra>
                            <div className='ui two buttons'>
                            <Button basic color='green'>
                                Done &nbsp;<Icon name="check circle" color="green"/>
                            </Button>
                            <Button basic color='red'>
                                Missed &nbsp;<Icon name="frown" color="red"/>
                            </Button>
                            </div>
                        </CardContent>
                    </Card>
                </Accordion.Content>

                {/* Second Item */}
                <Accordion.Title
                    active={activeIndex === 1}
                    index={1}
                    onClick={() => handleClick(1)}
                >
                    <Icon name='dropdown' />
                    Completed
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                    <CardGroup>
                    <Card link color="green">
                            <CardContent>
                                <CardHeader>2024-05-03</CardHeader>
                                <CardMeta>Dr. Smiri</CardMeta>
                                <CardDescription>
                                    <List>
                                        <ListItem icon='hospital' content='Concern Skin Rashes' />
                                        <ListItem icon='marker' content='New York, NY' />
                                        <ListItem icon='clock outline' content='09:15 AM' />
                                    </List>
                                </CardDescription>
                            </CardContent>
                            <CardContent extra>
                                <Button basic color='green'>
                                    Completed &nbsp;<Icon name="check circle" color="green"/>
                                </Button>
                            </CardContent>
                        </Card>
                        <Card link color="blue">
                            <CardContent>
                                <CardHeader>2024-05-02</CardHeader>
                                <CardMeta>Dr. Smiri</CardMeta>
                                <CardDescription>
                                    <List>
                                        <ListItem icon='hospital' content='Concern Fever' />
                                        <ListItem icon='marker' content='New York, NY' />
                                        <ListItem icon='clock outline' content='1:00 PM' />
                                    </List>
                                </CardDescription>
                            </CardContent>
                            <CardContent extra>
                                <Button basic color='red'>
                                    Missed &nbsp;<Icon name="frown" color="red"/>
                                </Button>
                            </CardContent>
                        </Card>
                    </CardGroup>
                </Accordion.Content>
            </Accordion>
        </Segment>
    )
}

function Stats() {
    return(
        <Segment>
            <Image src="/images/stats-1.png"/>
            <br/>
            <Image src="/images/stats-2.png"/>
        </Segment>
    )
}
export default function Meetings(){
    return(
        <div className="meetings-div" style={{display:'flex', width:'100%'}}>
            <div style={{width:'60%'}}>
                <Meets/>
            </div>
            <div style={{width:'40%', paddingInlineStart:'1rem'}}>         
                <Stats/>
            </div>
        </div>
    )
}