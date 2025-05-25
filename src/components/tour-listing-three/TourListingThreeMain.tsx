import React from 'react';
import CtaTourListing from '../common/CtaTourListing';
import TourListingAreaThree from './TourListingAreaThree';
import Breadcrumb from '../common/breadcrumb/BreadCrumb';

const TourListingThreeMain = () => {
    return (
        <>
            <Breadcrumb titleOne='Tour Packages' titleTwo='Tour Packages'/>
            <TourListingAreaThree />
            <CtaTourListing />
        </>
    );
};

export default TourListingThreeMain;