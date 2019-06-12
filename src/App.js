import React from 'react';
import logo from './logo.svg';
import './App.scss';
import 'antd/dist/antd.css'
import { Button, Select, Layout, Row, Col, Card, Table, Input, Checkbox } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const { Option } = Select;

const selectWidth = 120

const cardStyle = {
  marginTop: "1rem"
}

const Column = props => (
  <Col md={8} sm={12} xs={24} style={{ margin: "0.5rem 0" }}>
    {props.children}
  </Col>
)

const SLOC = () =>
{
  const dataSource = [
    {
      key: '1',
      sloc: 'sloc',
    },
    {
      key: '2',
      name: 'Reused',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'Modified',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: '',
      dataIndex: '',
      key: '',
    },
    {
      title: 'SLOC',
      dataIndex: 'sloc',
      key: 'sloc',
      render: () => <Input />
    },
    {
      title: '% Design Modified',
      dataIndex: 'design_modified',
      key: 'design_modified',
      render: () => <Input />
    },
    {
      title: '% Code Modified',
      dataIndex: 'code_modified',
      key: 'code_modified',
      render: () => <Input />
    },
    {
      title: '% Integration Required',
      dataIndex: 'integration_required',
      key: 'integration_required',
      render: () => <Input />
    },
    {
      title: 'Assessment and Assimilation (0% - 8%)',
      dataIndex: 'assessment_and_assimilation',
      key: 'assessment_and_assimilation',
      render: () => <Input />
    },
    {
      title: 'Software Understanding (0% - 50%)',
      dataIndex: 'software_understanding',
      key: 'software_understanding',
      render: () => <Input />
    },
    {
      title: 'Unfamiliarity',
      dataIndex: 'unfamiliarity',
      key: 'unfamiliarity',
      render: () => <Input />
    },
  ];
  return (
    <Card title="Software Scale Drivers" style={cardStyle}>
      <Select defaultValue="sloc" style={{ width: '200px' }}>
        <Option value="sloc">Source Lines of Code</Option>
        <Option value="fp">Function Points</Option>
      </Select>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </Card>
  )
}

const DriverOptions = () => (
  <Select defaultValue="nom" style={{ width: selectWidth }}>
    <Option value="v_low">Very Low</Option>
    <Option value="low">Low</Option>
    <Option value="nom">Nominal</Option>
    <Option value="high">High</Option>
    <Option value="v_high">Very High</Option>
    <Option value="e_high">Extra High</Option>
  </Select>
)

const Maintenance = () => (
  <Card title="Maintenance" style={cardStyle}>
    {/* <Checkbox>Maintenance</Checkbox> */}
    <Row>
      <Column>
        <h5>Annual Change Size (ESLOC)</h5>
        <Input style={{ width: selectWidth }} />
      </Column>
      <Column>
        <h5>Software Understanding (0%-50%)</h5>
        <Input style={{ width: selectWidth }} />
      </Column>
      <Column>
        <h5>Maintenance Duration (Years)</h5>
        <Input style={{ width: selectWidth }} />
      </Column>
      <Column>
        <h5>Unfamiliarity (0-1)</h5>
        <Input style={{ width: selectWidth }} />
      </Column>
    </Row>
  </Card>
)

const Labor = () => (
  <Card title="Software Labor Rates" style={cardStyle}>
    <Row>
      <Column>
        <h5>Cost per Person-Month (Dollars)</h5>
        <Input style={{ width: selectWidth }} />
      </Column>
    </Row>
  </Card>
)

const SoftwareScaleDrivers = () => (
  <Card title="Software Scale Drivers" style={cardStyle}>
    <Row>
      <Column>
        <h5>Precedentedness</h5>
        <DriverOptions />
      </Column>
      <Column>
        <h5>Development Flexibility</h5>
        <DriverOptions />
      </Column>
      <Column>
        <h5>Architecture / Risk Resolution</h5>
        <DriverOptions />
      </Column>
      <Column>
        <h5>Team Cohesion</h5>
        <DriverOptions />
      </Column>
      <Column>
        <h5>Process Maturity</h5>
        <DriverOptions />
      </Column>
    </Row>
  </Card>
)


const SoftwareCostDriversProduct = () => (
  <Card title="Software Cost Drivers - Product" style={cardStyle}>
    <Row>
      <Column>
        <h5>Required Software Reliability</h5>
        <DriverOptions />
      </Column>
      <Column>
        <h5>Database Size</h5>
        <DriverOptions />
      </Column>
      <Column>
        <h5>Product Complexity</h5>
        <DriverOptions />
      </Column>
      <Column>
        <h5>Developed for Reusability</h5>
        <DriverOptions />
      </Column>
      <Column>
        <h5>Documentation Match to Lifecycle Needs</h5>
        <DriverOptions />
      </Column>
    </Row>
  </Card>
)

const SoftwareCostDriversPersonnel = () => (
  <Card title="Software Cost Drivers - Personnel" style={cardStyle}>
    <Row>
      <Column>
        <h5>Analyst Capability</h5>
        <DriverOptions />
      </Column>
      <Column>
        <h5>Programmer Capability	</h5>
        <DriverOptions />
      </Column>
      <Column>
        <h5>Personnel Continuity</h5>
        <DriverOptions />
      </Column>
      <Column>
        <h5>Application Experience</h5>
        <DriverOptions />
      </Column>
      <Column>
        <h5>Platform Experience</h5>
        <DriverOptions />
      </Column>
      <Column>
        <h5>Language and Toolset Experience</h5>
        <DriverOptions />
      </Column>
    </Row>
  </Card>
)

const SoftwareCostDriversPlatform = () => (
  <Card title="Software Cost Drivers - Platform" style={cardStyle}>
    <Row>
      <Column>
        <h5>Time Constraint</h5>
        <DriverOptions />
      </Column>
      <Column>
        <h5>Storage Constraint</h5>
        <DriverOptions />
      </Column>
      <Column>
        <h5>Platform Volatility</h5>
        <DriverOptions />
      </Column>
    </Row>
  </Card>
)

const SoftwareCostDriversProject = () => (
  <Card title="Software Cost Drivers - Project" style={cardStyle}>
    <Row>
      <Column>
        <h5>Use of Software Tools</h5>
        <DriverOptions />
      </Column>
      <Column>
        <h5>Multisite Development</h5>
        <DriverOptions />
      </Column>
      <Column>
        <h5>Required Development Schedule</h5>
        <DriverOptions />
      </Column>
    </Row>
  </Card>
)

const App = () => (
  <Layout>
    <Header></Header>
    <Content className="container">
      <SLOC />
      <SoftwareScaleDrivers />
      <SoftwareCostDriversProduct />
      <SoftwareCostDriversPersonnel />
      <SoftwareCostDriversPlatform />
      <SoftwareCostDriversProject />
      <Maintenance />
      <Labor />
    </Content>
    <Footer></Footer>
  </Layout>
)

export default App;
