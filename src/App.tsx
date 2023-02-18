import './App.css';
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {sampleSelector, SamplesList, setSamples, setSelectedSampleId} from "./store/samplesSlice";
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
