import { Data } from "../contexts/data.context";

export default function getScripts() {

    const sampleText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula imperdiet nunc vel suscipit. Duis quis nulla sapien. Proin ut rhoncus tortor. Donec quis sagittis tellus, et varius nisl. Etiam pellentesque purus laoreet, molestie libero ut, eleifend sapien. Praesent neque quam, fringilla at accumsan quis, rhoncus at quam. Nulla in nunc nibh. Donec fermentum tincidunt fringilla. Morbi elementum id massa ac suscipit.

Nulla tincidunt iaculis ultricies. Morbi sit amet faucibus mi, vel convallis est. Phasellus suscipit dapibus aliquet. Suspendisse potenti. Nulla varius commodo velit, non vestibulum nunc scelerisque ut. Vivamus eu ipsum sollicitudin, efficitur velit nec, sollicitudin lacus. Vivamus efficitur enim vitae neque ultrices suscipit. Etiam tempor pulvinar turpis a efficitur.

Cras tristique turpis mi, a feugiat orci varius vitae. Fusce nec mollis metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque orci ligula, hendrerit vitae ligula ut, rhoncus sagittis risus. Quisque tincidunt turpis purus, id varius sapien ultricies id. Pellentesque auctor quam nec diam placerat, at varius mauris finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed ligula vitae urna imperdiet tincidunt sit amet nec purus. Quisque commodo scelerisque felis et ornare. Fusce vulputate egestas lacus eu mollis. Maecenas facilisis varius erat, at venenatis tortor fermentum eu. Proin eu tincidunt nunc, ut ornare sem. In pharetra diam ut ex finibus, sit amet tristique nunc dapibus.

Vivamus a metus eget justo ultrices sodales id ut tellus. Donec metus leo, tempus nec semper condimentum, dignissim sed augue. Donec sapien metus, venenatis sed eros eget, blandit ultrices purus. Duis eu libero justo. Proin molestie convallis tellus, eu efficitur mauris varius non. Vivamus vel elit tincidunt, cursus risus et, pharetra augue. Mauris arcu libero, vehicula vel facilisis eget, sollicitudin id ex. Integer id tortor leo. Nulla fermentum massa quis leo ultricies porta. In sem est, tincidunt ut cursus sed, pharetra non nunc. Cras blandit, quam ut mattis iaculis, risus eros porttitor nibh, eu faucibus arcu dui quis lectus. Praesent congue sit amet risus ac consequat. Proin laoreet efficitur eros et tempus. Proin ac pellentesque enim.

Phasellus vel mauris vel risus lobortis gravida. Mauris consequat mauris at ultricies maximus. Duis pulvinar ex turpis, nec faucibus felis dapibus sed. Pellentesque in dapibus ipsum. Morbi consequat finibus tortor vel mollis. Aliquam augue mi, elementum vel tellus sed, pellentesque efficitur eros. Nullam condimentum risus mauris, ac tempor risus blandit id. Donec mattis velit leo, eu tincidunt ligula sagittis at. Etiam lorem mi, efficitur id mauris quis, venenatis cursus felis. Nullam interdum, lorem ac cursus scelerisque, eros odio vestibulum ex, id malesuada orci nisi nec purus.`
    const sampleData: Data = {
        script1: {
            text: sampleText,
            audio: "sample",
            state: 'pending'
        },
        script2: {
            text: "aaaa".repeat(100),
            audio: "sample",
            state: 'pending'
        },
        script3: {
            text: "bbb".repeat(100),
            audio: "sample",
            state: 'pending'
        }
    }
    return new Promise(res => {
        res(sampleData)
        // setTimeout(() => res(sampleData), 5000);
    })
}