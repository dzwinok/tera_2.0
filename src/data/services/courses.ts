import { getStrapiURL } from "@/lib/utils";
import type {TStrapiResponse, TCourseType} from "@/types";
import { api } from "@/data/data-api";


const baseUrl = getStrapiURL();

export async function getCourseByCourseTypeService(
    documentId: string
): Promise<TStrapiResponse<TCourseType>> {
    

    const url = new URL("/api/course-types/" + documentId + "?populate=courses", baseUrl);
    const result = await api.get(url.href);
    console.log("GET REQUEST SUCCESSFUL", result)
    
    return result;
}
