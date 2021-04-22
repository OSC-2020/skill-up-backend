import React from "react";
import Firebase from "./init";

const FirebaseContext = React.createContext<Firebase | null>(null);

export default FirebaseContext;
