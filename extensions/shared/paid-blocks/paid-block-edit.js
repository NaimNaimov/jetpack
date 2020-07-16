
/**
 * WordPress dependencies
 */
import { Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';

import { PanelBody } from '@wordpress/components';

/**
 * Internal dependencies
 */
import UpgradePlanBanner from './upgrade-plan-banner';

export default OriginalBlockEdit => props => {
	return (
		<Fragment>
			<InspectorControls>
				<PanelBody>
					<UpgradePlanBanner description={ null } />
				</PanelBody>
			</InspectorControls>

			<UpgradePlanBanner align={ props?.attributes?.align } />
			<OriginalBlockEdit { ...props } />
		</Fragment>
	);
};
