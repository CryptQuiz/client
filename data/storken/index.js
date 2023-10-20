import { createStore } from 'storken'

export const [Storken, { useStorken }] = createStore({
  storkenOptions: {},
  initialValues: {
    isPopUp: false,
   
  },
})

export default { Storken, useStorken }
