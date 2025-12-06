"use server";
import { services } from "@/data/services";

type CourseTypeFormState = {
    success?: boolean;
    message?: string;
    data?: {
        courses?: any[];
        title?: string;
        description?: any[];
        
    } | null;
    strapiErrors?: {
        status: number;
        name: string;
        message: string;
        details?: Record<string, string[]>;
    } | null;
    zodErrors?: {
        courses?: any[];
        title?: string[];
        description?: any[];
        
    } | null;
};

export async function getCourseByCourseType(
    documentId: string
): Promise<CourseTypeFormState> {
    console.log("Hello From Get Courses Action");

    const responseData = await services.courses.getCourseByCourseTypeService(
        documentId
    );
    console.log("get courses data")

    if (!responseData) {
        console.log(responseData.data)
        return {
            success: false,
            message: "Ops! Something went wrong. Please try again.",
            strapiErrors: null,
            zodErrors: null,
            data: responseData.data
            ,
        };
    }

    if (responseData.error) {
        console.log(responseData.data)
        return {
            success: false,
            message: "Failed to Login.",
            strapiErrors: responseData.error,
            zodErrors: null,
            data: responseData.data,
        };
    }
    
    return {
        success: true,
        message: "Successfully found data",
        strapiErrors: null,
        zodErrors: null,
        data: responseData.data,
    };
    
}