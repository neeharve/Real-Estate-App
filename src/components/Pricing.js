import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import '../assets/styles/pricing.css'

function Pricing() {
	const data = [
		{
			id: 1,
			name: "Basic",
			amount: "$29",
			details: "per user, per month",
			bestValue: false,
			features: [
				{
					id: 1,
					name: "99.5% Uptime Guarantee",
					isAvailable: true,
				},
				{
					id: 2,
					name: "120GB CDN Bandwidth",
					isAvailable: true,
				},
				{
					id: 3,
					name: "5GB Cloud Storage",
					isAvailable: true,
				},
				{
					id: 4,
					name: "Personal Help Support",
					isAvailable: false,
				},
				{
					id: 5,
					name: "Enterprise SLA",
					isAvailable: false,
				},
			],
		},
		{
			id: 2,
			name: "Standard",
			amount: "$49",
			details: "per user, per month",
			bestValue: true,
			features: [
				{
					id: 1,
					name: "99.5% Uptime Guarantee",
					isAvailable: true,
				},
				{
					id: 2,
					name: "120GB CDN Bandwidth",
					isAvailable: true,
				},
				{
					id: 3,
					name: "5GB Cloud Storage",
					isAvailable: true,
				},
				{
					id: 4,
					name: "Personal Help Support",
					isAvailable: true,
				},
				{
					id: 5,
					name: "Enterprise SLA",
					isAvailable: false,
				},
			],
		},
		{
			id: 3,
			name: "Platinum",
			amount: "$79",
			details: "2 users, per month",
			bestValue: false,
			features: [
				{
					id: 1,
					name: "99.5% Uptime Guarantee",
					isAvailable: true,
				},
				{
					id: 2,
					name: "120GB CDN Bandwidth",
					isAvailable: true,
				},
				{
					id: 3,
					name: "5GB Cloud Storage",
					isAvailable: true,
				},
				{
					id: 4,
					name: "Personal Help Support",
					isAvailable: true,
				},
				{
					id: 5,
					name: "Enterprise SLA",
					isAvailable: true,
				},
			],
		},
	];

	return (
		<Container className="pricing-container">
			<Row xs={1} sm={2} md={3} className="g-12 align-items-center justify-content-center">
				{data.map((card) => (
					<Col key={card.id}>
						<Card className="price-card">
							<Card.Body>
								{card.bestValue && (
									<Button className="best-value-button">Best Value</Button>
								)}
								<Card.Title className="text-center feature-name">
									{card.name}
								</Card.Title>
								<Card.Title className="text-center feature-price">
									{card.amount}
								</Card.Title>
								<Card.Subtitle className="text-center feature-details">
									{card.details}
								</Card.Subtitle>
								{card.features.map((feature) => (
									<Card.Text
										key={feature.id}
										className={`feature 
                  ${feature.isAvailable
												? "feature-available"
												: "feature-not-available"
											}`}
									>
										{feature.name}
									</Card.Text>
								))}
								<Button
									variant="outline-success"
									size="lg"
									className="feature-button"
								>{`Start ${card.name}`}</Button>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default Pricing;
