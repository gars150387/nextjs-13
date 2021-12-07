import React from 'react';
import "../images/BecomeAReactDeveloper";
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
import "../images/FullStackWebDeveloperCertificationMiamiDadeCollege";
import "../images/ReactDesignPatterns.jpg";
import "../images/ReactCreatingAndHostingAFullStackSite.jpg";
import {CertificationsData} from '../components/CertificationsData';


export const CertificationShow = () => {
	return (
		<>
        {CertificationsData.map((item)=>{
            return (
                <div>
                    <img variant="top" className="d-block mt-2 mb-2 w-75 h-75" src={`${item.img}`} key={item.id} />
                </div>
                
                )
        })}
        </>
    )
};