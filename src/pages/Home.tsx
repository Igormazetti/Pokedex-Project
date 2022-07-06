import React from "react";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import FilterButtons from "../components/FilterButtons";

export default function Home() {
  return (
    <>
      <Header />
      <FilterButtons />
      <Dashboard />
    </>
  );
}
