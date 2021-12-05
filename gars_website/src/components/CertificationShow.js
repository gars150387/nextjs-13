import React from 'react'
import { CertificationsData } from './CertificationsData'
import { Card, Button } from 'react-bootstrap'
// import "../images/GustavoRodriguezSanteliz_SoftwareDeveloper.pdf"
import "../images/BecomeAReactDeveloper.jpg";
import "../images/BuildAGoogleMapAppWithJavascript.jpg";
import "../images/FirebaeEssentialTraining.jpg";
import "../images/JavascriptCodeChallenges.jpg";
import "../images/ReactBuildingAnInterface.jpg";
import "../images/ReactComponentsContextAndAccessibility.jpg";
import "../images/ReactEcosystems.jpg";
import "../images/ReactHooks.jpg";
import "../images/ReactTestingAndDebugging.jpg";
import "../images/ReactEssentialTraining.jpg";
import "../images/NodejsEssentialTraining.jpg";
import "../images/DevelopingACriticalThinkingMindset.jpg";
import "../images/FullStackWebDeveloperCertificationMiamiDadeCollege.jpg";
import "../images/ReactDesignPatterns.jpg";
import "../images/ReactCreatingAndHostingAFullStackSite.jpg";

export const CertificationShow = ({ id, title, company, href, img }) => {
	return (
		<>
			{CertificationsData.map(item => {
				return (
                    <>
                    <div>{item.id}</div>
                    </>
				// 	<Card
				// 		key={id}
				// 		md={6}
				// 		className="m-auto"
				// 		style={{ width: "40%", borderTop: "white", borderLeft: "white", borderRight: "white" }}>
				// 		<Card.Title className="text-center bg-gray">{title}</Card.Title>
				// 		<Card.Img variant="top" src={`/${img}`.jpg} />
				// 		<Card.Body>
				// 			<Card.Text>
				// 				{" "}
				// 				<h5>{company}</h5>
				// 			</Card.Text>
				// 			<Button className="m-auto" variant="primary" href={href}>
				// 				Click and Check it out
				// 			</Button>
				// 		</Card.Body>
                // </Card>
            )
        }
        )}
        </>
    )
}