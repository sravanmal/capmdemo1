sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ust/sravan/productorderapp/test/integration/FirstJourney',
		'ust/sravan/productorderapp/test/integration/pages/POsList',
		'ust/sravan/productorderapp/test/integration/pages/POsObjectPage',
		'ust/sravan/productorderapp/test/integration/pages/POItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage, POItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ust/sravan/productorderapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage,
					onThePOItemsObjectPage: POItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);