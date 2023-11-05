import { Navbar } from "react-bootstrap";
import Seriesdetails from "./Seriesdetails";


function Scifimovies() {
    return (
        <div>
        <Navbar/>
            <Seriesdetails
                imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqRrtrQ10aZRnOMw9zV0niEAnAe42b8NpbQy4pbXf4Hi7jpGxJ_vjt5EDPG7u9XNI4kmY&usqp=CAU"
                title="A Netflix Original Series"
                sname="Interstellar"
                link="https://www.netflix.com/lu-en/title/70305903"
            />
            <Seriesdetails
                imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgO1oBBOXGKp7yK14L2Nd97Zp_6DqL6bJUTLvuSwKib4DH9eAjuXzR82GaKZbRgFWA9qg&usqp=CAU"
                title="A Netflix Original Series"
                sname="Tenet"
                link="https://www.netflix.com/be/title/81198930"
            />
            <Seriesdetails
                imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIKCZtmKFiTqQ2RBXkmmBPXnD4aU-KOvTsLEPRBVBnO57PFfGzAClRFBSVFfo9A1ndztg&usqp=CAU"
                title="A Netflix Original Series"
                sname="Blade runner 2049"
                link="https://www.netflix.com/pl-en/title/80185760"
            />
            
        </div>
    );
}
export default Scifimovies;
