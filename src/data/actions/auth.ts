"use server";

import { z } from "zod";
import { services } from "@/data/services";
import { isAuthError } from "@/data/services/auth";

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
        console.log("Validation failed:", flattenedErrors.fieldErrors);
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

    const responseData = await services.auth.registerUserService(
        {
            "username": validatedFields.data.email,
            ...validatedFields.data
        }
    );

    console.log("Hello From Register User Action2", {
        "username": validatedFields.data.email,
        ...validatedFields.data
    });
    if (!responseData) {
        return {
            success: false,
            message: "Ops! Something went wrong. Please try again.",
            strapiErrors: null,
            zodErrors: null,
            data: {
                ...prevState.data,
                ...fields,
            },
        };
    }
    console.log("Hello From Register User Action23", isAuthError(responseData));

    // Check if responseData is an error response
    if (isAuthError(responseData)) {
        return {
            success: false,
            message: "Failed to Register.",
            strapiErrors: responseData.error,
            zodErrors: null,
            data: {
                ...prevState.data,
                ...fields,
            },
        };
    }

    console.log("#############");
    console.log("User Registered Successfully", responseData);
    console.log("#############");

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
