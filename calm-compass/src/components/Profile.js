import { Card, CardContent, CardHeader, CardDescription, Image, Icon, Progress, Header, Segment } from "semantic-ui-react"

function ProfileCard() {
    return(
        <>
        <Card color="blue" style={{width:'480px'}}>
            <CardContent>
                <div style={{display:'flex'}}>
                        <Image
                            className="circular"
                            floated='right'
                            size='tiny'
                            src='/images/nan.jpg'
                        />
                        <CardHeader className="profile-name header">Nancy Sanders</CardHeader>
                </div>
                <CardDescription>
                    <strong>Contact details:</strong>
                </CardDescription>
            </CardContent>
            <CardContent extra>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <div><Icon size="small" name="phone"/> +91-9838839022</div>
                    <div style={{paddingInlineEnd:'11rem'}}><Icon size="small" name="envelope"/>nancy@gmail.com</div>
                </div>
                <br/>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <div><Icon size="small" name="language"/>English</div>
                    <div style={{paddingInlineEnd:'5rem'}}><Icon size="small" name="home"/>44 street, west Andheri, 400053</div>
                </div>
                <br/>
            </CardContent>
        </Card>
        </>
    )
}

function OverviewCard () {
    return(
        <div>
        <Card color="blue" input={{ fluid: true }} style={{ width: '480px', height: '230px' }} >
            <CardContent>
                <CardHeader>Overview:</CardHeader>
                <br/>
                <CardDescription>
                    <div style={{display:'flex', justifyContent:'space-between', padding:'2px'}}>
                        <div>
                            <div>Gender:</div>
                            <div><strong>Female</strong></div>
                        </div>
                        <div>
                            <div>Date of birth:</div>
                            <div><strong>06/04/1998</strong></div>
                        </div>
                        <div>
                            <div>Next of kin:</div>
                            <div><strong>Joe Sanders</strong></div>
                        </div>
                    </div>
                    <br/>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <div>
                            <div>Blood group:</div>
                            <div><strong>A+</strong></div>
                        </div>
                        <div>
                            <div>Weight:</div>
                            <div><strong>58 kgs</strong></div>
                        </div>
                        <div>
                            <div>Height:</div>
                            <div><strong>157 cm</strong></div>
                        </div>
                    </div>
                    <br/>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <div>
                            <div>Previous visit:</div>
                            <div><strong>14/10/2024</strong></div>
                        </div>
                        <div>
                            <div>Known diseases:</div>
                            <div><strong>Dibetes</strong></div>
                        </div>
                        <div>
                            <div>Allergies:</div>
                            <div><strong>Hayfever</strong></div>
                        </div>
                    </div>
                </CardDescription>
            </CardContent>
        </Card>
        </div>
    )
}

function GeneralReport() {
    return(
        <div style={{paddingInlineStart:'2rem'}}>
            <Card color="blue" input={{ fluid: true }} style={{ width: '600px', height: '' }}>
                <CardContent>
                    <CardHeader>General report:</CardHeader>
                    <Segment>
                        <Header as='h4'>Heartbeat</Header>
                        <Progress 
                            value={140} 
                            total={200}
                            color='green'
                            indicating 
                            progress 
                            label={`140 BPM`} 
                        />
                    </Segment>
                    <Segment>
                        <Header as='h4'>Blood pressure</Header>
                        <Progress 
                            value={120} 
                            total={180}
                            color='green'
                            indicating 
                            progress 
                            label={`120 mmHg`} 
                        />
                    </Segment>
                    <Segment>
                        <Header as='h4'>Hemoglobin</Header>
                        <Progress 
                            value={12} 
                            total={14}
                            color='green'
                            indicating 
                            progress 
                            label={`12 G/dL`} 
                        />
                    </Segment>
                    <Segment>
                        <Header as='h4'>Sugar</Header>
                        <Progress 
                            value={78} 
                            total={120}
                            color='red'
                            indicating 
                            progress 
                            label={`78 mmHg`} 
                        />
                    </Segment>
                </CardContent>
            </Card>
        </div>
    )
}

export default function Profile () {
    return(
        <div style={{paddingInlineStart:'6rem', paddingTop:'2rem'}}>
            <div style={{display:'flex'}}>
                <div>
                    <ProfileCard/>
                    <OverviewCard/>
                </div>
                
                <GeneralReport/>
            </div>     
        </div>
    )
}