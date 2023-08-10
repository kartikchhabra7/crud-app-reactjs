import Create from "../containers/Create/Create";
import Edit from "../containers/Edit/Edit";
import Read from "../containers/Read/Read";
import Show from "../containers/Show/Show";
import PageNotFound from "../containers/PageNotFound/PageNotFound";

import {
  CREATE,
  EDIT,
  PAGENOTFOUND,
  READ,
  SHOW,
} from "../utils/constants/routes";

const createRoutePath = [
  {
    path: CREATE,
    element: <Create />,
    exact: true,
  },
  {
    path: SHOW,
    element: <Show />,
    exact: true,
  },
  {
    path: EDIT,
    element: <Edit />,
    exact: true,
  },
  {
    path: READ,
    element: <Read />,
    exact: true,
  },
  {
    path: PAGENOTFOUND,
    element: <PageNotFound />,
    exact: true,
  },
];

export default createRoutePath;
