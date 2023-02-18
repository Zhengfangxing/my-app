import './App.css';
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux";
import {SamplesList, setSamples, setSelectedSampleId} from "./store/samplesSlice";
import store from "./store";

const App = () => {

    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    </BrowserRouter>
}


const Home = () => {
    let dispatch = useDispatch();
    dispatch(setSamples([{
        id: 1,
        content: 'https://img0.baidu.com/it/u=2028084904,3939052004&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500'
    }, {
        id: 2,
        content: 'https://img1.baidu.com/it/u=3031984612,4033725431&fm=253&fmt=auto&app=138&f=JPEG?w=815&h=500'
    }]))
    let message: SamplesList = store.getState().samples;
    let content = message.sampleList[0].content;
    // let useSelector1 : SamplesList = useSelector(sampleSelector);
    let navigate = useNavigate();
    const useDispatch1 = useDispatch();
    useDispatch1(setSelectedSampleId(2))

    const onClick = () => {
        navigate('/About');
    }
    return (<div>hello world
        <img alt='sunflower' src={content} width='300' onClick={onClick}/>
    </div>)
}


const About = () => {
    let {selectedSampleId, sampleList}: SamplesList = store.getState().samples;
    let filter = sampleList.filter((sample) => {
        return sample.id === selectedSampleId
    });
    let abc;
    if (filter.length === 1) {
        abc = filter[0].content
    }
    return <div>这里是William的主页
        <img src={abc} alt="abc"/>
    </div>
}

const Dashboard = () => {
    return <div>今日点击次数: 42</div>
}


export default App;
