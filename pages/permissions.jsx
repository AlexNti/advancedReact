import React from "react";

import PleaseSignIn from "../components/PleaseSign";
import Permissions from "../components/Permissions";

const PermissionsPage = props => (
  <div>
    <PleaseSignIn>
      <Permissions />
    </PleaseSignIn>
  </div>
);

export default PermissionsPage;
