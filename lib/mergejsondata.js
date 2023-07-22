// import {programming} from '../data/programming'
// import {robotics} from '../data/robotics'

import data from '../data/programming.json'
import data1 from '../data/robotics.json'

export default function mergeJson() {
    const fileList = [
        "webDevelopmentData",
        "programming",
        "robotics"
    ]
    let courseData = [];
    console.log(data);
    console.log(data1);

    // const jsonModule = await import(`./path/to/json-files/file${i}.json`);
    // const jsonData = jsonModule.default;
    // mergedData = mergedData.concat(jsonData);

    // fileList.map((fname) => {
    //     const fileName = `${fname}.json`
    //     const rawData = fs.readFileSync(fileName);
    //     const jsonData = JSON.parse(rawData);
    //     courseData = courseData.concat(jsonData)
    // });
    return courseData;
}

// const fs = require('fs');

// // Function to read and merge JSON files into a single array
// function mergeJSONFiles() {
//   let mergedData = [];

//   for (let i = 1; i <= 10; i++) {
//     const filename = `file${i}.json`;
//     const rawData = fs.readFileSync(filename);
//     const jsonData = JSON.parse(rawData);
//     mergedData = mergedData.concat(jsonData);
//   }

//   return mergedData;
// }

// const mergedJSONData = mergeJSONFiles();
// fs.writeFileSync('merged_data.json', JSON.stringify(mergedJSONData));
