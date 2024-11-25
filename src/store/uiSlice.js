import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const dataUser = {
  user: "sebas",
  pass: "1234"
}

export const pricesByType = {
  "a": 16000,
  "b": 17000,
  "c": 18000,
  "d": 21000,
}

const initialState = {
  isAuthenticate: !!JSON.parse(localStorage.getItem("isAuthenticate") ?? false),
  vehicles: [{
    id: 123,
    type: "b",
    placa: "ttl04g"
  }],
  priceDisccount: null,
  vehicleExist: null
}

export const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    verifyLogin: (state, { payload }) => {
      const { user, pass } = dataUser

      if (payload.user === user && payload.pass === pass) {
        state.isAuthenticate = true
        localStorage.setItem("isAuthenticate", true);
      }
    },
    addVehicle: (state, { payload }) => {
      if (state.vehicles.find(item => item.placa === payload.placa)) {
        toast.error("El vehiculo ya existe")
        return
      }
      state.vehicles = [...state.vehicles, payload]
      toast.success("Vehículo registrado correctamente")
    },
    verifyVehicle: (state, { payload }) => {
      const vehicle = state.vehicles.find(item => item.placa === payload.placa)
      if (vehicle) {
        state.priceDisccount = pricesByType[vehicle?.type]
        state.vehicleExist = true
        return
      }

      state.vehicleExist = false
      state.priceDisccount = null
      toast.warning("¿El vehículo no existe, desea crear uno nuevo?")
    },
  },
})

export const {
  verifyLogin,
  addVehicle,
  verifyVehicle
} = uiSlice.actions

export default uiSlice.reducer