import { getStrapiURL } from "@/lib/utils";
import type { TStrapiResponse, TAuthUser } from "@/types";
import { services } from "@/data/services";
import { actions } from "@/data/actions";
import { api } from "@/data/data-api";

type TUpdateProfile = {
    firstname: string;
    lastname: string;
};

type TUpdateCourses = {
    courses: Array<number>
};

const baseUrl = getStrapiURL();

export async function updateProfileService(
    profileData: TUpdateProfile
): Promise<TStrapiResponse<TAuthUser>> {
    const userId = (await services.auth.getUserMeService()).data?.id;
    if (!userId) throw new Error("User Id is required");

    const authToken = await actions.auth.getAuthTokenAction();
    if (!authToken) throw new Error("You are not authorized");

    const url = new URL("/api/users/" + userId, baseUrl);
    const result = await api.put<TAuthUser, TUpdateProfile>(
        url.href,
        profileData,
        { authToken }
    );

    console.log("######### actual profile update response");
    console.dir(result, { depth: null });

    return result;
}


export async function updateProfileCoursesService(
    courseId: number
): Promise<TStrapiResponse<TAuthUser>> {
    const user = (await services.auth.getUserMeService()).data
    const userId = user?.id;
    if (!userId) throw new Error("User Id is required");

    const authToken = await actions.auth.getAuthTokenAction();
    if (!authToken) throw new Error("You are not authorized");
    let courses = user?.courses.map((item) => item.id);
    console.log("courses", courses)
    courses = {...courses, courseId}
    console.log("courses22", courses)
    
    const url = new URL("/api/users/" + userId, baseUrl);
    const result = await api.put<TAuthUser, TUpdateCourses>(
        url.href,
        courses,
        { authToken }
    );


    return result;
}
