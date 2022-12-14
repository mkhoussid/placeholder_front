import * as React from 'react';

const Button = React.memo((props: React.HTMLAttributes<HTMLButtonElement>) => {
	return <button {...props} />;
});

export default Button;
