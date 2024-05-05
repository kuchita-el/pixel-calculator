import {string} from "yup";

export const indicatorStringSchema = string().required().trim().transform((value: string) => value.replace(/\s+/g, " ")).matches(/^[0-9 ]+$/)
