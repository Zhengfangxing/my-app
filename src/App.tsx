import './App.css';
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {sampleSelector, SamplesList, setSamples, setSelectedSampleId} from "./store/samplesSlice";
import store from "./store";

const App = () => {

    return <BrowserRouter>
        <Routes>
            <Route path="/samples" element={<Samples/>}/>
            <Route path="/classify" element={<Classify/>}/>
            <Route path="/tags" element={<Tags/>}/>
            <Route path="/description" element={<Description/>}/>
            <Route path="/" element={<Samples/>}/>
        </Routes>
    </BrowserRouter>
}
const Samples = () => {

    let dispatch = useDispatch();
    const navigate = useNavigate();
    dispatch(setSamples([{
        id: 3,
        content: 'https://img2.baidu.com/it/u=2904600073,3540507419&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
    }, {
        id: 4,
        content: 'https://inews.gtimg.com/newsapp_bt/0/14673243385/1000'
    }]))
    let sam: SamplesList = store.getState().samples;
    let content = sam.sampleList[0].content;
    let {selectedSampleId, sampleList}: SamplesList = useSelector(sampleSelector).samples;
    console.log(selectedSampleId, sampleList[0].content)


    const useDispatch1 = useDispatch();
    useDispatch1(setSelectedSampleId(3))

    const onClick = () => {
        navigate('/Classify');
    }
    return (<div>samples页面
        <img alt='sunflower' src={content} width='300' onClick={onClick}/>
    </div>)
}


const Classify = () => {
    const navigate = useNavigate();
    let {selectedSampleId, sampleList}: SamplesList = store.getState().samples;
    let filter = sampleList.filter((sample) => {
        return sample.id === selectedSampleId
    });
    let abc;
    if (filter.length === 1) {
        abc = filter[0].content
    }
    return <div>classify页面
        <form>
            classify: <input name={"classify"} type={"checkbox"} value={"cat"}/>
            <button type="submit" name='save' onClick={() => {
                console.log("submited")
                navigate('/samples')
            }
            }>save
            </button>
            <button onClick={() => {
                navigate('/samples')
            }
            }>cancel
            </button>
            <button onClick={() => {
                navigate('/tags')
            }
            }>next
            </button>
        </form>
        <img src={abc} alt="abc"/>
    </div>
}

const Tags = () => {
    const navigate = useNavigate();

    return <div>tags页面
        <button onClick={() => {
            navigate('/samples')
        }
        }>save</button>
        <button onClick={() => {
            navigate('/samples')
        }}>cancel
        </button>
        <button onClick={() => {
            navigate('/description')
        }
        }>next
        </button>
    </div>
}

const Description = () => {
    const navigate = useNavigate();
    return <div>description页面 <button onClick={() => {
        navigate('/samples')
    }
    }>save</button>
        <button onClick={() => {
            navigate('/samples')
        }}>cancel
        </button>
    </div>
}


export default App;
