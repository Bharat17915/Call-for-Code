import {Segment, Accordion, Icon, Header, List, ListItem, ListContent, ListHeader, ListDescription} from 'semantic-ui-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function History() {
    const [activeIndex, setActiveIndex] = useState(2);

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle active index
    };

    return(
        <div style={{width:'49%'}}>
            <Segment>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <Header size='large'>Medical History</Header>
                    <Link to="/document-uploader" >Edit &nbsp;<Icon name='edit' /></Link>
                </div>   
                <Accordion styled>
                    {/* First Item */}
                    <Accordion.Title
                        active={activeIndex === 0}
                        index={0}
                        onClick={() => handleClick(0)}
                    >
                        <Icon name='dropdown' />
                        Summary for Date: 01-02-2019
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                    <p><p>The doctor has prescribed a combination of Levodopa (100mg) and Carbidopa (25mg), to be taken as two tablets by mouth three times daily for one month, with food. The prescribing doctor is Dr. XYZ, an Assistant Professor of Neurology, with registration number 345.</p>
                    <p><strong>Health Tips:</strong><br/>Stay Active: Regular physical activity, such as walking or stretching, can help maintain mobility and improve balance. - Healthy Diet: A balanced diet rich in fiber, fruits, and vegetables can support overall well-being. Make sure to stay hydrated. - Medication Timing: It's important to take the medication as prescribed, with food, to avoid nausea and improve absorption. - Rest and Relaxation: Ensure you get enough rest, and practice relaxation techniques to reduce stress, as it may help manage symptoms.</p>
                    <p><strong>Positive Statistics:</strong><br/>Levodopa’s Effectiveness: Levodopa, especially when combined with Carbidopa, has been shown to significantly reduce symptoms in 70-80% of Parkinson's patients, improving quality of life for many. Living Well with Parkinson’s: Many patients live fulfilling lives for decades with appropriate treatment, and ongoing advances in medication and therapy offer increasing hope for symptom management. New Treatments: Research and new treatments are constantly evolving, with promising advances in symptom control and therapies, ensuring better outcomes over time.</p></p>
                    </Accordion.Content>

                    {/* Second Item */}
                    <Accordion.Title
                        active={activeIndex === 1}
                        index={1}
                        onClick={() => handleClick(1)}
                    >
                        <Icon name='dropdown' />
                        Summary for Date 2:  28-08-2021
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 1}>
                        <p>
                        <p>The doctor has prescribed a combination of MontairLC (100mg) and AZ-500, to be taken as two tablets by mouth three times daily for 1 week, with food. The prescribing doctor is Dr. XYZ, MD, with registration number 349.</p>
                        <p><strong>Health Tips:</strong> <br/>Stay Hydrated,Drink plenty of water to help ease the irritation caused by tonsillitis and support your immune system.
                        <br/>Rest: Adequate rest will help your body recover faster from both allergies and tonsillitis.
                        <br/>Warm Salt Water Gargle: This can soothe your throat and help reduce tonsillitis symptoms.
                        <br/>Allergen Control: If you know what triggers your allergies (dust, pollen, etc.), try to limit exposure to these irritants.</p>
                        <p><strong>Positive Statistics:</strong><br/>Tonsillitis Recovery: Around 85% of people with mild to moderate tonsillitis feel significant improvement within a week with proper treatment.
                        <br/>Allergy Control: More than 70% of people who follow prescribed allergy medications, like Montair LC, report a substantial reduction in their symptoms within the first week.</p>
                        </p>
                    </Accordion.Content>

                    {/* Third Item */}
                    <Accordion.Title
                        active={activeIndex === 2}
                        index={2}
                        onClick={() => handleClick(2)}
                    >
                        <Icon name='dropdown' />
                        Summary for Date 2:  28-08-2021
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 2}>
                        <p>
                        <p>The doctor has prescribed a combination of MontairLC (100mg) and AZ-500, to be taken as two tablets by mouth three times daily for 1 week, with food. The prescribing doctor is Dr. XYZ, MD, with registration number 349.</p>
                        <p><strong>Health Tips:</strong> <br/>Stay Hydrated,Drink plenty of water to help ease the irritation caused by tonsillitis and support your immune system.
                        <br/>Rest: Adequate rest will help your body recover faster from both allergies and tonsillitis.
                        <br/>Warm Salt Water Gargle: This can soothe your throat and help reduce tonsillitis symptoms.
                        <br/>Allergen Control: If you know what triggers your allergies (dust, pollen, etc.), try to limit exposure to these irritants.</p>
                        <p><strong>Positive Statistics:</strong><br/>Tonsillitis Recovery: Around 85% of people with mild to moderate tonsillitis feel significant improvement within a week with proper treatment.
                        <br/>Allergy Control: More than 70% of people who follow prescribed allergy medications, like Montair LC, report a substantial reduction in their symptoms within the first week.</p>
                        </p>
                    </Accordion.Content>
                </Accordion>
            </Segment>
        </div>
    )
}

function Habits() {
    return(
        <div style={{width:'49%'}}>
            <Segment>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <Header size='large'>Lifestyle & Dietary Habits</Header>
                    <Link to="#" >Edit &nbsp;<Icon name='edit' /></Link>
                </div>               
                <List divided verticalAlign='middle'>
                    <ListItem>
                        <Icon name='football ball' size='large'/>
                        <ListContent>
                            <ListHeader>What type of exercise do you undertake to stay active?</ListHeader>
                            <br/>
                            <ListDescription style={{color:'red'}}>Indoor activities</ListDescription>
                        </ListContent>
                    </ListItem>
                    <br/>
                    <ListItem>
                        <br/>
                        <Icon name='child' size='large'/>
                        <ListContent>
                            <ListHeader>Exercise type</ListHeader>
                            <br/>
                            <ListDescription style={{color:'darkseagreen'}}>Yoga</ListDescription>
                        </ListContent>
                    </ListItem>
                    <br/>
                    <ListItem>
                        <br/>
                        <Icon name='smile' size='large'/>
                        <ListContent>
                            <ListHeader>What is your diet preference?</ListHeader>
                            <br/>
                            <ListDescription style={{color:'blue'}}>Vegan</ListDescription>
                        </ListContent>
                    </ListItem>
                    <br/>
                    <ListItem>
                        <br/>
                        <Icon name='street view' size='large'/>
                        <ListContent>
                            <ListHeader>How often do you eat outside?</ListHeader>
                            <br/>
                            <ListDescription style={{color:'red'}}>Frequently</ListDescription>
                        </ListContent>
                    </ListItem>
                    <br/>
                    <ListItem>
                        <br/>
                        <Icon name='meh outline' size='large'/>
                        <ListContent>
                            <ListHeader>Do you have any food sensitivity or allergies?</ListHeader>
                            <br/>
                            <ListDescription style={{color:'darkseagreen'}}>Nuts</ListDescription>
                        </ListContent>
                    </ListItem>
                    <br/>
                    <ListItem>
                        <br/>
                        <Icon name='beer' size='large'/>
                        <ListContent>
                            <ListHeader>Do you consume alcohol or tobacco?</ListHeader>
                            <br/>
                            <ListDescription style={{color:'blue'}}>No</ListDescription>
                        </ListContent>
                    </ListItem>
                    <br/>
                    <ListItem>
                        <br/>
                        <Icon name='pills icon' size='large'/>
                        <ListContent>
                            <ListHeader>Do you take any supplements?</ListHeader>
                            <br/>
                            <ListDescription style={{color:'red'}}>Vitamin B12</ListDescription>
                        </ListContent>
                    </ListItem>
                </List>
            </Segment>
        </div>
    )
}

export default function MedicalHistory() {
    return(
        <div className='page-main-div'>
            <History/>
            <Habits/>
        </div>
    )
}