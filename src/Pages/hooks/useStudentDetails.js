import { useEffect, useState } from 'react';

const useStudentDetails = (id) => {
    const [studentDetails, setStudentDetails] = useState({});
    useEffect(() => {
        const url = `https://blooming-citadel-98536.herokuapp.com/students/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setStudentDetails(data))
    }, [])
    return [studentDetails]
};

export default useStudentDetails;