import 'bootstrap/dist/css/bootstrap.min.css';
import VantaBackground from "@/components/VantaBackground";
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div className="custom-home-hero-main position-relative">
        <VantaBackground />
        <Container className='custom-home-hero cs-container-xl'>
          <Row className='pf-flex-lg-col-reverse align-content-center gy-4'>
            <Col className="col-12 col-lg-6 d-grid align-content-center">
              <div className='custom-home-hero-content d-grid gap-3 text-center text-lg-start p-2 p-md-4'>
                <h5 className='m-0'>Hey, I am <span className='contra-color'>Ravi</span></h5>
                <h1 className='m-0'>I create product design and brand experience</h1>
                <p className='m-0 fs-sm-14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
              </div>
            </Col>
            <Col className="col-12 col-lg-6">
              <div className='d-grid'>
                <div className='custom-person-img-holder'>
                  <Image src={require('../public/images/Add a heading (4).png')} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
