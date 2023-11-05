import { Navbar } from "react-bootstrap";
import Seriesdetails from "./Seriesdetails";


function Dramamovies() {
    return (
        <div>
        <Navbar/>
            <Seriesdetails
                imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGh8bbXDST1ACD3dUWG8UqhIGfFYT46wMz4ZIk2NozL2Zwrd_j3gqoUqEo-aPY1hk3XqM&usqp=CAU"
                title="A Netflix Original Series"
                sname="The Godfather"
                link="https://www.netflix.com/in/title/60011152"
            />
            <Seriesdetails
                imgsrc="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15987_p_v12_at.jpg"
                title="A Netflix Original Series"
                sname="Shawshank Redemption"
                link="https://www.netflix.com/lu-en/title/70005379"
            />
            <Seriesdetails
                imgsrc="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p162523_p_v8_ad.jpg"
                title="A Netflix Original Series"
                sname="Pursuit of Happyness"
                link="https://www.netflix.com/in/title/70044605"
            />
          
        </div>
    );
}
export default Dramamovies;
