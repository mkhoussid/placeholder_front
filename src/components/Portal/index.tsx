import * as React from 'react';
import ReactDOM from 'react-dom';

interface PortalPropsBase {
	children: React.ReactNode;
	show?: boolean;
}
interface PortalWithNode extends PortalPropsBase {
	elementId?: never;
	element?: Element;
}
interface PortalWithElementId extends PortalPropsBase {
	elementId: string;
	element?: never;
}
type PortalProps = PortalWithElementId | PortalWithNode;

const Portaled = React.memo(({ elementId, element, children, show = true }: PortalProps) => {
	const [portal, setPortal] = React.useState<React.ReactPortal>();

	React.useEffect(() => {
		if (!show || (!element && !elementId)) return;

		const node = document.getElementById(elementId as string);

		if (!element && !node) return;

		const el = ReactDOM.createPortal(children, (element || node) as Element);

		setPortal(el);
	}, [element, show]);

	return portal || null;
});

export default Portaled;
