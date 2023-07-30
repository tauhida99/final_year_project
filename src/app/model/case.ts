import { CaseProceeding } from "./case-proceeding";
import { Client } from "./client";
import { Lawyer } from "./lawyer";
import { User } from "./user";

export class Case {
    public  caseId!: number;
    public  caseName!: string;
    public  caseType!: string;
    public  creationDate!: Date;
    public  caseSource!: string;
    public  location!: string;
    public  witnessFirstName!: string;
    public  witnessLastName!: string;
    public  witnessAddress!: string;
    public  witnessPhoneNo!: string;

    // relation of case with client
    public  client!: Client;

    // relation of case with lawyer
    public  lawyer!: Lawyer;

    // relation of case with case proceeding
     caseProceeding!: CaseProceeding[];

}


