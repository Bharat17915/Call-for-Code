import { useEffect, useState } from "react";
import { Segment, Grid, Divider, GridRow, GridColumn, Header, Icon, Button, Container, Progress, Transition } from "semantic-ui-react"

function Uploader() {
    const [selectedFile, setSelectedFile] = useState(null)
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if(selectedFile){
        const interval = setInterval(() => {
            setProgress(progress => {
                if (progress >= 100) {
                clearInterval(interval);
                return 100;
                }
                return progress + 25;
            });
        }, 500);
        return () => clearInterval(interval); 
        }
    }, [progress, selectedFile])

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
        
    };

    return(
        <>
        <Segment placeholder>
            <Grid columns={2} stackable textAlign='center'>
                <Divider vertical>Or</Divider>
                <GridRow verticalAlign='middle'>
                <GridColumn>
                    <Header icon>
                    <Icon name='folder open' />
                    Select a photo
                    </Header>
                    <Button primary>
                    <input type="file" id="file" hidden onChange={handleFileChange}/>
                    <label htmlFor="file">
                        Browse files
                    </label>
                    </Button>
                </GridColumn>

                <GridColumn>
                    <Header icon>
                    <Icon name='camera' />
                    Click a photo
                    </Header>
                    <Button primary>Open Camera</Button>
                </GridColumn>
                </GridRow>
            </Grid>
        </Segment>
        <Progress percent={progress} indicating/>
        <br/>
        {progress === 100 &&
        <div>
        <Container fluid>
            <Header as='h2'>Prescription Summary:</Header>
            <Transition animation="fade up" duration={3000}>
            <>
                <p>
                The prescription, dated 7/05/24, is for a 30-year-old female diagnosed with Idiopathic Parkinsonism. The doctor has prescribed a combination of Levodopa (100mg) and Carbidopa (25mg), to be taken as two tablets by mouth three times daily for one month, with food. The prescribing doctor is Dr. XYZ, an Assistant Professor of Neurology, with registration number 345.
                <p>
                <br/>
                <strong>Health Tips:</strong>
                - Stay Active: Regular physical activity, such as walking or stretching, can help maintain mobility and improve balance.
                - Healthy Diet: A balanced diet rich in fiber, fruits, and vegetables can support overall well-being. Make sure to stay hydrated.
                - Medication Timing: It's important to take the medication as prescribed, with food, to avoid nausea and improve absorption.
                - Rest and Relaxation: Ensure you get enough rest, and practice relaxation techniques to reduce stress, as it may help manage symptoms.
                </p>
                <p>
                <strong>Positive Reinforcement:</strong>
                You’re Taking Control: By starting treatment, you’re actively managing your health and improving your ability to function day to day.
                Every Step Counts: Small changes in routine, like exercising regularly and eating well, will contribute to your overall progress.
                Stay Optimistic: While the journey may seem challenging, you’re making important progress in managing your condition.
                </p>
                <p>
                <strong>Positive Statistics:</strong>
                Levodopa’s Effectiveness: Levodopa, especially when combined with Carbidopa, has been shown to significantly reduce symptoms in 70-80% of Parkinson's patients, improving quality of life for many.
                Living Well with Parkinson’s: Many patients live fulfilling lives for decades with appropriate treatment, and ongoing advances in medication and therapy offer increasing hope for symptom management.
                New Treatments: Research and new treatments are constantly evolving, with promising advances in symptom control and therapies, ensuring better outcomes over time.
                </p>
                <br/>
                Keep up the good work—every step you take is leading toward better management of your condition, and you’re well on your way to living a healthier, fuller life!
                </p>
                <br/><br/>
            </>
            </Transition>
        </Container>
        </div>
        }
        </>
    )
}

export default function DocumentUploader() {
    return(
        <div style={{paddingInlineStart:'6rem', paddingInlineEnd:'2rem'}}>
            <Uploader/>
        </div>
    )
}