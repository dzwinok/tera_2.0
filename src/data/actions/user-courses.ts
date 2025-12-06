"use server";
import { z } from "zod";
import { services } from "@/data/services";
import {
    ProfileFormSchema,
    type ProfileCoursesFormState,
} from "@/data/validation/profile";

export async function updateProfileCoursesAction(
    //prevState: ProfileCoursesFormState,
    courseId: number
): Promise<ProfileCoursesFormState> {
    console.log("Hello From Courses User Action");
    
    const responseData = await services.profile.updateProfileCoursesService(
        courseId
    );

    if (!responseData) {
        console.log(courseId)
        return {
            success: false,
            message: "Ops! Something went wrong. Please try again.",
            strapiErrors: null,
            zodErrors: null,
            data: courseId,
        };
    }

    if (responseData.error) {
        console.log(courseId)
        return {
            success: false,
            message: "Failed to Login.",
            strapiErrors: responseData.error,
            zodErrors: null,
            data: courseId,
        };
    }

    console.log("#############");
    console.log("User Login Successfully", responseData);
    console.log("#############");
    console.log(courseId)
    return {
        success: false,
        message: "Successfully updated form",
        strapiErrors: null,
        zodErrors: null,
        data: courseId,
    }
}
