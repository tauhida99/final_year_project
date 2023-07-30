import { User } from "./user";

export class Lawyer extends User{
    public override userId!: number;
    public  license!: string;
    public  specialization!: string;
    public  workingExperience!: string;

}
