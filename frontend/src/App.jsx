import { FormProvider } from "./components/FormContext"
import HotelForm from "./components/HotelForm"

function App() {
  return (
    <>
      <FormProvider>
        <HotelForm/>
      </FormProvider>
    </>
  )
}

export default App