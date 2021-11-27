import { useParams } from 'react-router';
import "./Doctor.css";

// Doctor components Doctor js file
const Doctor = () => {
    const { doctorId } = useParams();

    return (
        <div className="doctor">
            <h3>Name:{doctorId}</h3>

        </div>
    );
};

export default Doctor;