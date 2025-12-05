


export default {
    async assign(ctx) {
        const user = ctx.state.user; // current logged-in user from JWT
        //if (!user) {
        //    return ctx.unauthorized("You must be logged in");
        //}
//
        //const { courseId } = ctx.request.body;
//
        //if (!courseId) {
        //    return ctx.badRequest("courseId is required");
        //}
//
        //// Check course exists
        //const course = await strapi.entityService.findOne("api::course.course", courseId);
        //if (!course) {
        //    return ctx.notFound("Course not found");
        //}
//
        //// Fetch current user with courses
        //const fullUser = await strapi.entityService.findOne(
        //    "plugin::users-permissions.user",
        //    user.id,
        //    { populate: ["courses"] }
        //);
//
        //const currentCourseIds = (fullUser.courses || []).map((c: any) => c.id);
//
        //// Avoid duplicates
        //if (currentCourseIds.includes(courseId)) {
        //    return ctx.send({ success: true, alreadyAssigned: true });
        //}
//
        //const updatedCourseIds = [...currentCourseIds, courseId];
//
        //// Update user courses
        //await strapi.entityService.update("plugin::users-permissions.user", user.id, {
        //    data: {
        //        courses: updatedCourseIds,
        //    },
        //});
//
        //return ctx.send({ success: true });
    },
};
