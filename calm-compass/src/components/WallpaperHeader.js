
import { Header } from 'semantic-ui-react';

export default function WallpaperHeader() {
    return(
        <>
        <div className='header-wallpaper'>
            <div className='blurred-background'></div>
            <div className='wallpaper-content'>
                <Header size='huge' className='wallpaper-text' style={{marginInlineStart:'36rem'}}>
                    <div>Calm Compass</div>
                </Header>
                <br/>
                <Header size='huge' className='wallpaper-text' style={{marginInlineStart:'30rem'}}>
                    <div>Your Health, Our Mission</div>
                </Header>
                <Header size='huge' className='wallpaper-text' style={{marginInlineStart:'13rem'}}>
                    <div>Empowering Health For Every Generation And Community</div>
                </Header>
            </div>
        </div>
        </>
    )
}