import { Navbar } from "react-bootstrap";
import Seriesdetails from "./Seriesdetails";


function Actionmovies() {
    return (
        <div>
        <Navbar/>
            <Seriesdetails
                imgsrc="https://i.etsystatic.com/23402008/r/il/010224/2374206073/il_794xN.2374206073_78bv.jpg"
                title="A Netflix Original Series"
                sname="Matrix"
                link="https://www.netflix.com/lu-en/title/20557937"
            />
            <Seriesdetails
                imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzD4zmiozIGt6ERWo0y--t9MS-ipUciSy3pPG_Aa8SvVc9c7jRp6VJVChe91agQhSQHgM&usqp=CAU"
                title="A Netflix Original Series"
                sname="The Dark Knight"
                link="https://www.netflix.com/in/title/80057281"
            />
            <Seriesdetails
                imgsrc="https://i.etsystatic.com/10683147/r/il/e62898/2147626739/il_1080xN.2147626739_nyh5.jpg"
                title="A Netflix Original Series"
                sname="Inception"
                link="https://www.netflix.com/lu-en/title/70131314"
            />
            
        </div>
    );
}
export default Actionmovies;
