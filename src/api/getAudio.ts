// import { useContext } from "react"
// import { DataContext } from "../contexts/data.context"

export default function getAudio() {


    // // send api
    const sampleData = {
        audio: 'http://103.156.188.31:8000/stream'
    }

    return new Promise(res => {
        // res(sampleData)
        setTimeout(() => {
            res(sampleData);

        }, 5000);
    })
}