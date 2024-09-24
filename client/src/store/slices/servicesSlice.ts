import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
}

interface ServicesState {
  services: Service[];
}

const initialState: ServicesState = {
  services: [
    { id: '1', name: 'שיעורי גיטרה', description: 'שיעור נגינה בגיטרה', price: 150 },
    { id: '2', name: 'שיעורי פסנתר', description: 'ללמוד לנגן בפסנתר', price: 180 },
    { id: '3', name: 'הרצאות מוזיקליות', description: 'הרצאה על נושאים מוזיקליים', price: 100 }
  ]
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    addService: (state, action: PayloadAction<Service>) => {
      state.services.push(action.payload);
    },
  },
});

export const { addService } = servicesSlice.actions;
export default servicesSlice.reducer;
