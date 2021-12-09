import React from 'react';
import "../images/BecomeAReactDeveloper.jpg";
import "../images/FirebaeEssentialTraining.jpg";
import "../images/JavascriptCodeChallenges.jpg";
import "../images/ReactBuildingAnInterface.jpg";
import "../images/ReactComponentsContextAndAccessibility.jpg";
import "../images/ReactEcosystems.jpg";
import "../images/ReactHooks.jpg";
import "../images/ReactTestingAndDebugging.jpg";
import "../images/ReactjsEssentialTraining.jpg";
import "../images/NodejsEssentialTraining.jpg";
import "../images/DevelopingACriticalThinkingMindset.jpg";
import "../images/FullStackWebDeveloperCertificationMiamiDadeCollege.JPG";
import "../images/ReactDesignPatterns.JPG";
import "../images/ReactCreatingAndHostingAFullStackSite.JPG";
import "../images/AcceleratedJavaScriptTrainingUdemy.jpg"

export const Certifications = () => {
    return (
        <>
            <img variant="top" id="certificationsImage" className="d-block mt-2 mb-2 w-75 h-75" src={require("../images/FullStackWebDeveloperCertificationMiamiDadeCollege.JPG").default} alt="Full Stack Web Developer Certification from Miami Dade College"/>
            <img variant="top" id="certificationsImage" className="d-block mt-2 mb-2 w-75 h-75" src={require("../images/AcceleratedJavaScriptTrainingUdemy.jpg").default} alt="Accelerated Javascript Training Udemy"/>
            <img variant="top" id="certificationsImage" className="d-block mt-2 mb-2 w-75 h-75" src={require("../images/BecomeAReactDeveloper.jpg").default} alt="Become A React Developer" />
            <img variant="top" id="certificationsImage" className="d-block mt-2 mb-2 w-75 h-75" src={require("../images/ReactjsEssentialTraining.jpg").default} alt="React essential training"/>
            <img variant="top" id="certificationsImage" className="d-block mt-2 mb-2 w-75 h-75" src={require("../images/ReactHooks.jpg").default} alt="React Hooks" />
            <img variant="top" id="certificationsImage" className="d-block mt-2 mb-2 w-75 h-75" src={require("../images/ReactComponentsContextAndAccessibility.jpg").default} alt="React components context and accessability"/>
            <img variant="top" id="certificationsImage" className="d-block mt-2 mb-2 w-75 h-75" src={require("../images/ReactTestingAndDebugging.jpg").default} alt="React Testing and debugging"/>
            <img variant="top" id="certificationsImage" className="d-block mt-2 mb-2 w-75 h-75" src={require("../images/ReactEcosystems.jpg").default} alt="React Ecosystems" />
            <img variant="top" id="certificationsImage" className="d-block mt-2 mb-2 w-75 h-75" src={require("../images/ReactDesignPatterns.JPG").default} alt="React design patterns"/>
            <img variant="top" id="certificationsImage" className="d-block mt-2 mb-2 w-75 h-75" src={require("../images/NodejsEssentialTraining.jpg").default} alt="Node essential training"/>
            <img variant="top" id="certificationsImage" className="d-block mt-2 mb-2 w-75 h-75" src={require("../images/FirebaeEssentialTraining.jpg").default} alt="Firebase Essential Training" />
            <img variant="top" id="certificationsImage" className="d-block mt-2 mb-2 w-75 h-75" src={require("../images/JavascriptCodeChallenges.jpg").default} alt="Javascript Challenges"/>
            <img variant="top" id="certificationsImage" className="d-block mt-2 mb-2 w-75 h-75" src={require("../images/ReactBuildingAnInterface.jpg").default} alt="React Building an interface"/>
            <img variant="top" id="certificationsImage" className="d-block mt-2 mb-2 w-75 h-75" src={require("../images/DevelopingACriticalThinkingMindset.jpg").default} alt="Developing a critical mindset"/>
            <img variant="top" id="certificationsImage" className="d-block mt-2 mb-2 w-75 h-75" src={require("../images/ReactCreatingAndHostingAFullStackSite.JPG").default} alt="React creating and hosting a full stack site"/>
        </>
    );
}