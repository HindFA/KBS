import { answer } from "src/app/Model/AnswersModel";
import { PostAanswer } from "./PostAanswer";
import { User } from "./User";

export class qustion {

    //<----- Qustions --->
    id?: Number;
    dataqustions?: string;
    qustions?: string;
    qustions_name?: string;
    qustions_title?: string;
    email?: string;
    date?: Date
    username?: string
    //<----- User --->
    user_qustion?: User;
    //<----- Aanswer --->
    answer?: answer[];
  //  user_answer?:{id:string};
    // <------ Post-Aanswer ----->
    answers?: PostAanswer[];


}