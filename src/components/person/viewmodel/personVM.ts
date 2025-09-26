import { useState } from "react";
import type { Person } from "../model/PersonModel";
import {PersonRepository} from "../repo/PersonRepository"

export const usePersonVM = () => {
    const _person = PersonRepository();
    const [person, setPerson] = useState<Person>({
    firstName: "",
    lastName: "",
    idNumber: "",
    gender:"",
    id:""
  });
const handleInputChange = (field: keyof Person, value: string | number) => {
    setPerson((prev) => ({ ...prev, [field]: value }));
  };
const submitForm = () => {
    console.log("Form Submitted:", person); 
    _person.create(person);
    
    // Add API call or business logic here
  };

 return { person, handleInputChange, submitForm };
}