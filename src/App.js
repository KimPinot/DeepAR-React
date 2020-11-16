import React, {useEffect, useRef} from 'react';

function App() {
	const {DeepAR, innerHeight, innerWidth} = window;

	const canvasRef = useRef(null);

	useEffect(() => {
		const deepAR = DeepAR({
			canvasWidth: innerWidth,
			canvasHeight: innerHeight,
			licenseKey: process.env.REACT_APP_DEEPAR_KEY,
			canvas: canvasRef.current,
			numberOfFaces: 1,
			libPath: '/lib',
			segmentationInfoZip: 'segmentation.zip',
			onInitialize: () => {
				console.log('deepAR Ready');

				deepAR.startVideo(true);

				deepAR.switchEffect(0, 'slot', '/effects/flowers', () => {
					console.log('flower loaded');
				})
			}
		});

		deepAR.downloadFaceTrackingModel('/lib/models-68-extreme.bin');
	}, [DeepAR, innerHeight, innerWidth]);

	return (
			<>
				<canvas ref={canvasRef} />
			</>
	);
}

export default App;
