import * as yup from "yup";

export const useSchema = yup.object().shape({
    destination: yup.string().required(),
    checkIn: yup.date().required(),
    checkOut: yup.date().required(),
    people: yup.number().required(),
    email: yup.string().email().required(),
    
})
