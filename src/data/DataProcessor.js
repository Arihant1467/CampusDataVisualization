const nearest10Place = num => {
  return Math.ceil(Math.ceil(num) / 10) * 10;
};

const processor = data => {
  const hscDistribution = {
    "10": { name: "0-10", value: 0, key: 1 },
    "20": { name: "10-20", value: 0, key: 2 },
    "30": { name: "20-30", value: 0, key: 3 },
    "40": { name: "30-40", value: 0, key: 4 },
    "50": { name: "40-50", value: 0, key: 5 },
    "60": { name: "50-60", value: 0, key: 6 },
    "70": { name: "60-70", value: 0, key: 7 },
    "80": { name: "70-80", value: 0, key: 8 },
    "90": { name: "80-90", value: 0, key: 9 },
    "100": { name: "90-100", value: 0, key: 10 }
  };

  const sscDistribution = {
    "10": { name: "0-10", value: 0, key: 1 },
    "20": { name: "10-20", value: 0, key: 2 },
    "30": { name: "20-30", value: 0, key: 3 },
    "40": { name: "30-40", value: 0, key: 4 },
    "50": { name: "40-50", value: 0, key: 5 },
    "60": { name: "50-60", value: 0, key: 6 },
    "70": { name: "60-70", value: 0, key: 7 },
    "80": { name: "70-80", value: 0, key: 8 },
    "90": { name: "80-90", value: 0, key: 9 },
    "100": { name: "90-100", value: 0, key: 10 }
  };

  const degreeDistribution = {
    "10": { name: "0-10", value: 0, key: 1 },
    "20": { name: "10-20", value: 0, key: 2 },
    "30": { name: "20-30", value: 0, key: 3 },
    "40": { name: "30-40", value: 0, key: 4 },
    "50": { name: "40-50", value: 0, key: 5 },
    "60": { name: "50-60", value: 0, key: 6 },
    "70": { name: "60-70", value: 0, key: 7 },
    "80": { name: "70-80", value: 0, key: 8 },
    "90": { name: "80-90", value: 0, key: 9 },
    "100": { name: "90-100", value: 0, key: 10 }
  };

  data.forEach((element, idx) => {
    const { hsc_p, ssc_p, degree_p } = element;
    const hscKey = nearest10Place(hsc_p);
    const sscKey = nearest10Place(ssc_p);
    const degreeKey = nearest10Place(degree_p);

    hscDistribution[hscKey].value = hscDistribution[hscKey].value + 1;
    sscDistribution[sscKey].value = sscDistribution[sscKey].value + 1;
    degreeDistribution[degreeKey].value =
      degreeDistribution[degreeKey].value + 1;
  });

  return { hscDistribution, sscDistribution, degreeDistribution };
};

export default processor;
