const FetchAndMergeCourseData = (courseid) => {
  const fileList = [
    // "webDevelopmentData",
    "programming",
    "robotics",
  ];
  var courseData = [];
  const mergeJSONData = async () => {
    let mergedData = [];
    try {
      for (let i = 0; i < fileList.length; i++) {
        const jsonModule = await import(`../data/${fileList[i]}.json`);
        const jsonData = jsonModule.default;
        mergedData = mergedData.concat(jsonData);
      }
    //   setMergedData(mergedData);
      const filteredResults = mergedData?.filter((course) =>
        course?.slug?.toLowerCase().includes(courseid?.toLowerCase())
      );
    //   setCourseInfo(filteredResults[0]);
    console.log(filteredResults[0]);
    return filteredResults[0]
    } catch (error) {
      console.error("Error merging JSON files:", error);
    }
  };
};


export default FetchAndMergeCourseData;