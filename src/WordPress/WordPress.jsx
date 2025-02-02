import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Wordpress as WordPressIcon } from 'react-bootstrap-icons';
import '../styles/components/WordPress.css';

const WordPress = () => {
  const priceInCOP = 449000;
  const exchangeRate = 0.00024;
  const priceInUSD = (priceInCOP * exchangeRate).toFixed(2);

  const features = [
    'Tienda en línea completa',
    'Diseño responsive personalizado',
    'Integración de métodos de pago',
    'Gestión de inventario',
    'Panel de administración',
    'Optimización SEO básica',
    'Capacitación de uso',
    'Soporte técnico ilimitado'
  ];

  return (
    <section id="wordpress" className="wordpress-section py-5">
      <Container>
        <h2 className="text-center mb-4">Desarrollo WordPress</h2>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="pricing-card">
              <Card.Header className="text-center">
                <h3>E-Commerce WordPress Premium</h3>
              </Card.Header>
              
              <Card.Body>
                <div className="price-container">
                  <h2 className="price-cop">${priceInCOP.toLocaleString()} COP</h2>
                  <p className="price-usd">USD ${priceInUSD}</p>
                  <span className="unlimited-support">¡Soporte Ilimitado!</span>
                </div>

                <div className="features-list">
                  {features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <span className="check-icon">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>

                <Button 
                  variant="primary" 
                  size="lg" 
                  className="cta-button"
                  href="#contact"
                >
                  <WordPressIcon className="me-2" />
                  ¡Comienza Tu Proyecto!
                </Button>
              </Card.Body>

              <Card.Footer>
                <p className="text-center mb-0">
                  * Incluye hosting y dominio por el primer año
                </p>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WordPress;