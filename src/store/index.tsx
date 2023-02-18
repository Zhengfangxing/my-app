// index.tsx 文件

import {configureStore} from "@reduxjs/toolkit";
import {sampleSliceReducer} from "./samplesSlice";

// configureStore创建一个redux数据
const store = configureStore({
    // 合并多个Slice
    reducer: {
        samples: sampleSliceReducer
    },
});

export default store;

