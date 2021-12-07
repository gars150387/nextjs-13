import BecomeAReactDeveloper from '../images/BecomeAReactDeveloper.jpg';
import { CertificationShow } from '../components/CertificationShow';

export const Certifications = () =>{
    return (
        <>
        {CertificationShow.map((item) =>{
            return (
                <img src={`./${item.img}.jpg`} key={item.id} />
            )
        })}
        </>
    );
}