import { User } from "./user";

export class Client extends User {
    public override userId!: number;
    public medicalHistory!: string;
    public legalStatus!: string;
    public numberOfWitness!: number;
    public documentEvidence!: string;

}
