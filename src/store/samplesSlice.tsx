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
    sampleList: [{
        id: 1,
        content: 'https://img0.baidu.com/it/u=2028084904,3939052004&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500'
    }, {
        id: 2,
        content: 'https://img1.baidu.com/it/u=3031984612,4033725431&fm=253&fmt=auto&app=138&f=JPEG?w=815&h=500'
    }],
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


