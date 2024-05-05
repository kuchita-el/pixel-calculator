
import {array, mixed, number, object, string, ValidationError} from "yup";

export const canvasLengthSchema = number().required().integer().min(1);

export const indicatorStringSchema = string().required().trim().transform((value: string) => value.replace(/\s+/g, " ")).matches(/^[0-9 ]+$/)

export const indicatorNumericSchema = array().required().min(1).of(number().required().positive().integer())

export const indicatorSchema = mixed((value): value is number[] => Array.isArray(value) && value.every(e => Number.isInteger(e)))
    .transform((value, originalValue, schema) => {
        if (schema.isType(value)) {
            return value;
        }
       return indicatorStringSchema.validateSync(value).split(" ").map(item => Number.parseInt(item));
    })
    .test(value => {
        try {
            indicatorNumericSchema.validateSync(value);
            return true;
        } catch(e){
            if (e instanceof ValidationError) {
                return e;
            } else {
                throw e;
            }
        }
    })

export const useCalculatorForm = () => useForm<{ canvasLength: number, indicator: number[] }>({
    validationSchema: toTypedSchema(object({
        canvasLength: canvasLengthSchema,
        indicator: indicatorSchema
    }))
})
