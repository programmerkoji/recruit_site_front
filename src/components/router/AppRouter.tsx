import { Route, Routes } from "react-router-dom"
import { JobOffer } from "../pages/jobOffer/JobOffer"
import { Test } from "../pages/test/Test"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<JobOffer />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  )
}
