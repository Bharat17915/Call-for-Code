import { Link } from "react-router-dom";
import { Header, Segment, Grid, GridColumn, GridRow, Image } from "semantic-ui-react";


export default function Blogs(){
    return(
        <div className="blogs-main-div">
            <Segment>
                <Header size='large'>AI Curated blogs for you ...</Header>
                <br/>
                <Grid columns={2} divided>
                    <GridRow>
                        <GridColumn>
                            <div style={{display:'flex'}}>
                                <div><Image src='/images/immune-system.jpg' size='big' rounded style={{width:'620px',height:'150px'}}/></div>
                                <div style={{paddingInlineStart:'1rem'}}>
                                <Header size="medium"><Link to='https://www.nrfmp.com.au/post/how-to-supercharge-your-immune-system-and-fight-off-illness' target="_blank">Supercharge Your Immune System</Link></Header>
                                <p>
                                The world has been hit hard by the recent pandemic, and it is now more important than ever to take care of our health. 
                                Our immune system is our first line of defense against illnesses and diseases.....
                                </p>
                                </div>
                            </div>                           
                        </GridColumn>
                        <GridColumn>
                            <div style={{display:'flex'}}>
                                <div><Image src='/images/covid-vaccine.jpg' size='big' rounded style={{width:'620px',height:'150px'}}/></div>
                                <div style={{paddingInlineStart:'1rem'}}>
                                <Header size="medium"><Link to='https://www.nrfmp.com.au/post/what-you-need-to-know-about-the-fourth-and-fifth-covid-19-booster-shot' target="_blank">COVID-19 Booster Shot</Link></Header>
                                <p>
                                In recent months, individuals suffering from respiratory pathogen infections, 
                                including COVID-19, have placed an increased pressure on the Australian healthcare system, particularly hospitals......
                                </p>
                                </div>
                            </div>                           
                        </GridColumn>
                    </GridRow>
                    <br/>
                    <GridRow>
                        <GridColumn>
                            <div style={{display:'flex'}}>
                                <div><Image src='/images/peanut-allergy.jpg' size='big' rounded style={{width:'620px',height:'150px'}}/></div>
                                <div style={{paddingInlineStart:'1rem'}}>
                                <Header size="medium"><Link to='https://www.mayoclinic.org/diseases-conditions/peanut-allergy/symptoms-causes/syc-20376175' target="_blank">Peanut allergy</Link></Header>
                                <p>
                                Peanut allergy is a condition that causes the body's germ-fighting 
                                immune system to react to peanuts. It's one of the most common causes of a life-threatening allergic reaction to food....
                                </p>
                                </div>
                            </div>                          
                        </GridColumn>
                        <GridColumn>
                            <div style={{display:'flex'}}>
                                <div><Image src='/images/diabetes-diagnosis.jpg' size='big' rounded style={{width:'620px',height:'150px'}}/></div>
                                <div style={{paddingInlineStart:'1rem'}}>
                                <Header size="medium"><Link to='https://www.nrfmp.com.au/post/5-ways-to-keep-your-blood-sugar-levels-low-throughout-the-day' target="_blank">5 Ways to keep Your Blood Sugar Levels</Link></Header>
                                <p>
                                People with diabetes and those who are on the border of developing diabetes have to be especially 
                                aware of what they're eating so their glucose levels stay even throughout the day.....
                                </p>
                                </div>
                            </div>                           
                        </GridColumn>
                    </GridRow>
                    <br/>
                    <GridRow>
                        <GridColumn>
                            <div style={{display:'flex'}}>
                                <div><Image src='/images/yoga.jpg' size='big' rounded style={{width:'65rem',height:'150px'}}/></div>
                                <div style={{paddingInlineStart:'1rem'}}>
                                <Header size="medium"><Link to='https://menopausefriend.com/2023/10/yoga-poses-to-help-menopause-symptoms/' target="_blank">Yoga Poses to Help Menopause Symptoms</Link></Header>
                                <p>
                                As women age, they go through many changes, including hormonal fluctuations that can lead to a variety 
                                of menopause symptoms. These symptoms can be uncomfortable and affect a woman’s quality of life, 
                                including changes in skin tone, mood swings, hot flashes, and more.....
                                </p>
                                </div>
                            </div>                          
                        </GridColumn>
                        <GridColumn>
                            <div style={{display:'flex'}}>
                                <div><Image src='/images/nutrition-food.jpg' size='big' rounded style={{width:'65rem',height:'150px'}}/></div>
                                <div style={{paddingInlineStart:'1rem'}}>
                                <Header size="medium"><Link to='https://menopausefriend.com/2023/10/nutrition-for-skin-during-menopause/' target="_blank">Nutrition for Skin During Menopause</Link></Header>
                                <p>
                                Menopause is a natural transition that occurs in a woman’s life as she ages. During this phase, 
                                the body undergoes several changes due to the hormonal shifts that take place. 
                                Your menopausal skin goes through changes too! All these changes can be quite challenging.....
                                </p>
                                </div>
                            </div>                           
                        </GridColumn>
                    </GridRow>
                </Grid>
            </Segment>
        </div>
    )
}