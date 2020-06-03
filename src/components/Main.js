import React, { Component } from "react";
import { Tabs, Typography } from "antd";
import BarGraph from "./BarGraph";
import GraphTable from "./Table";
import DataTable from "./DataTable";
import "../styles.css";
import "antd/dist/antd.css";
import campusData from "./../data/CampusRecruitment.json";
import processor from "./../data/DataProcessor";

const { TabPane } = Tabs;
const { Link } = Typography;

class Main extends Component {
  constructor(props) {
    super();
    this.state = {
      hscDistribution: {
        "10": { name: "0-10", value: 0 },
        "20": { name: "10-20", value: 0 },
        "30": { name: "20-30", value: 0 },
        "40": { name: "30-40", value: 0 },
        "50": { name: "40-50", value: 0 },
        "60": { name: "50-60", value: 0 },
        "70": { name: "60-70", value: 0 },
        "80": { name: "70-80", value: 0 },
        "90": { name: "80-90", value: 0 },
        "100": { name: "90-100", value: 0 }
      },
      sscDistribution: {
        "10": { name: "0-10", value: 0 },
        "20": { name: "10-20", value: 0 },
        "30": { name: "20-30", value: 0 },
        "40": { name: "30-40", value: 0 },
        "50": { name: "40-50", value: 0 },
        "60": { name: "50-60", value: 0 },
        "70": { name: "60-70", value: 0 },
        "80": { name: "70-80", value: 0 },
        "90": { name: "80-90", value: 0 },
        "100": { name: "90-100", value: 0 }
      },
      degreeDistribution: {
        "10": { name: "0-10", value: 0 },
        "20": { name: "10-20", value: 0 },
        "30": { name: "20-30", value: 0 },
        "40": { name: "30-40", value: 0 },
        "50": { name: "40-50", value: 0 },
        "60": { name: "50-60", value: 0 },
        "70": { name: "60-70", value: 0 },
        "80": { name: "70-80", value: 0 },
        "90": { name: "80-90", value: 0 },
        "100": { name: "90-100", value: 0 }
      }
    };
  }

  nearest10Place = num => {
    return Math.ceil(Math.ceil(num) / 10) * 10;
  };

  render() {
    const { hscDistribution, sscDistribution, degreeDistribution } = processor(
      campusData
    );
    const numberOfStudents = campusData.length;

    const hscValues = Object.values(hscDistribution);
    const sscValues = Object.values(sscDistribution);
    const degreeValues = Object.values(degreeDistribution);

    return (
      <>
        <div>
          <b>
            <i>Number of Students = {numberOfStudents}</i>
          </b>
        </div>

        <div>
          <Link
            href="https://www.kaggle.com/benroshan/factors-affecting-campus-placement"
            target="_blank"
          >
            Campus Placement Data Source
          </Link>
          <DataTable dataSource={campusData} />
        </div>

        <div>
          <Tabs defaultActiveKey="1">
            <TabPane tab="HSC Distribution" key="1">
              <BarGraph data={hscValues} numberOfStudents={numberOfStudents} />
              <GraphTable dataSource={hscValues} />
            </TabPane>
            <TabPane tab="SSC Distribution" key="2">
              <BarGraph data={sscValues} numberOfStudents={numberOfStudents} />
              <GraphTable dataSource={sscValues} />
            </TabPane>
            <TabPane tab="Degree Distribution" key="3">
              <BarGraph
                data={degreeValues}
                numberOfStudents={numberOfStudents}
              />
              <GraphTable dataSource={degreeValues} />
            </TabPane>
          </Tabs>
        </div>
      </>
    );
  }
}

export default Main;
