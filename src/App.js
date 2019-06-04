import React from 'react';
import logo from './logo.svg';
import './App.scss';
import 'antd/dist/antd.css'
import { Button, Select, Layout, Row, Col, Card } from 'antd';

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
      <SoftwareScaleDrivers />
      <SoftwareCostDriversProduct />
      <SoftwareCostDriversPersonnel />
      <SoftwareCostDriversPlatform />
      <SoftwareCostDriversProject />
    </Content>
    <Footer></Footer>
  </Layout>
)

export default App;
