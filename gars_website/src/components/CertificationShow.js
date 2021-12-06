import React from 'react'
import CertificationsData from '../../src/components/CertificationsData'
import BecomeAReactDeveloper from "../images/BecomeAReactDeveloper.jpg";
import BuildAGoogleMapAppWithJavascript from "../images/BuildAGoogleMapAppWithJavascript.jpg";
import FirebaeEssentialTraining from "../images/FirebaeEssentialTraining.jpg";
import JavascriptCodeChallenges from "../images/JavascriptCodeChallenges.jpg";
import ReactBuildingAnInterface from "../images/ReactBuildingAnInterface.jpg";
import ReactComponentsContextAndAccessibility from "../images/ReactComponentsContextAndAccessibility.jpg";
import ReactEcosystems from "../images/ReactEcosystems.jpg";
import ReactHooks from "../images/ReactHooks.jpg";
import ReactTestingAndDebugging from "../images/ReactTestingAndDebugging.jpg";
import ReactEssentialTraining from "../images/ReactEssentialTraining.jpg";
// import NodejsEssentialTraining from "../images/NodejsEssentialTraining.jpg";
// import DevelopingACriticalThinkingMindset from "../images/DevelopingACriticalThinkingMindset.jpg";
import FullStackWebDeveloperCertificationMiamiDadeCollege from "../images/FullStackWebDeveloperCertificationMiamiDadeCollege.jpg";
import ReactDesignPatterns from "../images/ReactDesignPatterns.jpg";
import ReactCreatingAndHostingAFullStackSite from "../images/ReactCreatingAndHostingAFullStackSite.jpg";


export const CertificationShow = () => {
	return (
		<>
                {CertificationsData.map((item)=>{
                    return (
                        <img src={BecomeAReactDeveloper} key={item.id}/>
                    )
                })}

        </>
    )
}