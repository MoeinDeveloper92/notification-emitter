import React, { useRef, useState } from "react";
//we check to see whether the user is logged in or not//
// to let the user have access to protected routes
function useAuthStatus() {
  const [loggedIn, setLoggedIn] = useState(null);
  const [checkingStatus, setCheckingStatus] = useState(null);
  const isMounted = useRef(true);
}

export default useAuthStatus;
