import {
    registerUserService,
    loginUserService,
    getUserMeService,
} from "./auth";
import { updateProfileService, updateProfileCoursesService } from "./profile";
import { getCourseByCourseTypeService } from "./courses";

export const services = {
    auth: {
        registerUserService,
        loginUserService,
        getUserMeService,
    },
    profile: {
        updateProfileService,
        updateProfileCoursesService,
    },
    courses: {
        getCourseByCourseTypeService,
    }
};