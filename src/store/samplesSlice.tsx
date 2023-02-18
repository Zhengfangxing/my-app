// counterSlice.ts 文件

import {createEntityAdapter, createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';


export type SampleState = {
    id: number;
    content: string
}

export interface SamplesList {
    sampleList: SampleState[];
    selectedSampleId: number;
}

const initialState: SamplesList = {
    sampleList: [],
    selectedSampleId: 0,
};

// 创建一个 Slice 
const sampleSlice = createSlice({
    name: 'sample',
    initialState,
    // 定义 reducers 并生成关联的操作
    reducers: {
        setSelectedSampleId: (state: SamplesList, action: PayloadAction<number>) => {
            state.selectedSampleId = action.payload;
        },
        setSamples: (state: SamplesList, action: PayloadAction<SampleState[]>) => {
            state.sampleList = action.payload;
        },
    },
});

let samplesListEntityAdapter = createEntityAdapter<SamplesList>({
    selectId: (sample) => sample.selectedSampleId
});
export const sampleSelector = createSelector((state: any) => state, (state) => state);

export const {setSelectedSampleId, setSamples} = sampleSlice.actions;
export const sampleSliceReducer = sampleSlice.reducer;


