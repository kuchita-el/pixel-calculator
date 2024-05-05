
import {array, number, string} from "yup";

export const indicatorStringSchema = string().required().trim().transform((value: string) => value.replace(/\s+/g, " ")).matches(/^[0-9 ]+$/)

export const indicatorNumericSchema = array().required().min(1).of(number().required().positive().integer())
