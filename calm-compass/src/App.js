import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import SideNav from './components/SideNav';
import Profile from './components/Profile';
import DocumentUploader from './components/DocumentsUploader';
import WallpaperHeader from './components/WallpaperHeader';
import Helper from './components/Helper';
import MedicalHistory from './components/MedicalHistory';
import Blogs from './components/Blogs';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<SideNav/>}>
                    <Route path='/' element={<WallpaperHeader/>}/>
                    <Route path='/helper' element={<Helper/>}/>
                    <Route path='/document-uploader' element={<DocumentUploader/>}/>
                    <Route path='/medical-history' element={<MedicalHistory/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='blogs' element={<Blogs/>}/>
                </Route>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
