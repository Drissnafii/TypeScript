interface Persona {
    name: string;
    age: number;
    email: string;
}

interface PersonaWithoutEmail extends Omit<Persona, "email" | "age">{};
const p: PersonaWithoutEmail = {
    name: "Driss"
}

interface PersonaWithNameOnly extends Pick<Persona, "name">{};
const p2: PersonaWithNameOnly = {
    name: "Salma"
}
interface OptionalPerson extends Partial<Persona>{};

const p3: OptionalPerson = {
    age: 77
}

interface ICar {
    name: string;
    model?: string;
}  

interface RequiredCar extends Required<ICar>{};

const car2: RequiredCar