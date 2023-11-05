import { Navbar } from "react-bootstrap";
import Seriesdetails from "./Seriesdetails";


function Comedymovies() {
    return (
        <div>
        <Navbar/>
            <Seriesdetails
                imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Ie8c_UXTtk2aUDYa7L7dK9ab7q5ubEyWEy49vtzZ4fgdaRvb_A2w9GLfFhZyCv038Ro&usqp=CAU"
                title="A Netflix Original Series"
                sname="The Hangover"
                link="https://www.netflix.com/in/title/70113002"
            />
            <Seriesdetails
                imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtlwdI2iTwRetGxeS4PAYyn8CPZJ0YV2PU9bZaiU1plxKkaQ5lKakCHlotPGULUMlz_Fc&usqp=CAU"
                title="A Netflix Original Series"
                sname="Superbad"
                link="https://www.netflix.com/title/70058023"
            />
            <Seriesdetails
                imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDRvjcs0-cKpnjWQnuddOXbgaoi_ekhgwV48jBUypzOF9pu6ladn_fS0NQn0tDK_X3R9s&usqp=CAU"
                title="A Netflix Original Series"
                sname="We're the Millers"
                link="https://www.netflix.com/ca/title/70270408"
            />
           
        </div>
    );
}
export default Comedymovies;
