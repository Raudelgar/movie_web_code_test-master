import React from 'react';

import './content.scss';

export default function Container({ children }) {
	return <div className='container'>{children}</div>;
}
