"use server";

import { z } from "zod";
import { SignupFormSchema, type FormState } from "@/data/validation/auth";

export async function registerUserAction(
    prevState: FormState,
    formData: FormData
): Promise<FormState> {
    console.log("Hello From Register User Action");

    const fields = {
        firstname: formData.get("firstname") as string,
        lastname: formData.get("lastname") as string,
        password: formData.get("password") as string,
        email: formData.get("email") as string,
        gender: formData.get("gender") as string,
        birthdate: formData.get("birthdate") as Date,
    };

    const validatedFields = SignupFormSchema.safeParse(fields);

    if (!validatedFields.success) {
        const flattenedErrors = validatedFields.error.flatten();
        console.log("Validation failed:", flattenedErrors.fieldErrors)
        return {
            success: false,
            message: "Validation failed",
            strapiErrors: null,
            zodErrors: flattenedErrors.fieldErrors,
            data: {
                ...prevState.data,
                ...fields,
            },
        };
    }


    console.log("Validation successful:", validatedFields.data);

    // TODO: WE WILL ADD STRAPI LOGIC HERE LATER

    return {
        success: true,
        message: "User registration successful",
        strapiErrors: null,
        zodErrors: null,
        data: {
            ...prevState.data,
            ...fields,
        },
    };
}