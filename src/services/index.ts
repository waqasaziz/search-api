import searchRoutes from "./search/routes";
import userRoutes from "./user/routes";
import commentRoutes from "./comment/routes";

export default [...searchRoutes, ...userRoutes, ...commentRoutes];
