
/**
 * Copyright (c) 2015, Arthur Schiwon <blizzz@owncloud.com>
 * This file is licensed under the Affero General Public License version 3 or later.
 * See the COPYING-README file.
 */

OCA = OCA || {};

(function() {

	/**
	 * @classdesc detects groups for the groups tab
	 *
	 * @constructor
	 */
	const WizardDetectorGroupsForGroups = OCA.LDAP.Wizard.WizardDetectorFeatureAbstract.subClass({
		/** @inheritdoc */
		init() {
			// given, it is not a configuration key
			this.setTargetKey('ldap_groupfilter_groups')
			this.wizardMethod = 'determineGroupsForGroups'
			this.featureName = 'GroupsForGroups'
			this.runsOnRequest = true
		},
	})

	OCA.LDAP.Wizard.WizardDetectorGroupsForGroups = WizardDetectorGroupsForGroups
})()
