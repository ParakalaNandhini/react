
import { Route,Routes } from "react-router-dom"
import HomeScreen from "../../pages/homescreen"
import SettingScreen from "../../pages/settingscreen"
import AboutScreen from "../../pages/aboutscreen"
import ProfileScreen from "../../pages/profile"
import InvalidScreen from "../../pages/invalidscreen"
import ProductDetail from "../../pages/product-detailscreen"


const PostRoute=()=>{
    return(
        <Routes>
                <Route path="/" Component={HomeScreen} />
                <Route path="/settings" Component={SettingScreen} />
                <Route path="/about" Component={AboutScreen} />
                <Route path="/Profile" Component={ProfileScreen} />
                <Route path="/home" Component={HomeScreen} />
                <Route path="*" Component={InvalidScreen} />

                <Route path="/:category/:id" Component={ProductDetail}/>
            </Routes> 
    )
}
export default PostRoute