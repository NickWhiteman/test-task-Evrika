import { createStore } from "@reduxjs/toolkit";
import { DashboardReducer } from "./reducer";

export const store = createStore(DashboardReducer);
