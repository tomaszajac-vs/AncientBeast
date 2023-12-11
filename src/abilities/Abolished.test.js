/* eslint-disable prettier/prettier */
// Abolished.test.js

import { Damage } from '../damage';
import { Team } from '../utility/team';
import { Creature } from '../creature';
import { Effect } from '../effect';
import * as arrayUtils from '../utility/arrayUtils';
import { getPointFacade } from '../utility/pointfacade';
import AbolishedAbilities from './Abolished';

describe('Abolished Abilities', () => {
	let G;

	beforeEach(() => {
		// Initialize or mock your game object as needed
		G = {
			abilities: [],
			animations: {
				projectile: jest.fn(),
			},
			Phaser: {
				camera: {
					shake: jest.fn(),
				},
			},
			grid: {
				queryDirection: jest.fn(),
			},
		};
	});

	test('Burning Spirit activates correctly', () => {
		// Create a sample game state
		const game = {
			creatures: [
				{
					id: 1,
				},
			],
		};

		const abilities = AbolishedAbilities(G);

		// Assuming G has a creature with ID 1, set it as the active creature
		G.activeCreature = game.creatures.find((creature) => creature.id === 1);

		// Assuming ability index 0 is Burning Spirit
		const burningSpiritAbility = abilities[7][0];

		// Mock the necessary functions or dependencies
		burningSpiritAbility.creature = G.activeCreature;
		burningSpiritAbility.isUpgraded = jest.fn(() => false); // Mock for isUpgraded function

		// Assuming a target creature with ID 2
		const targetCreature = game.creatures.find((creature) => creature.id === 2);

		// Mock the damage object
		const damage = new Damage(G.activeCreature, {}, 1, [], G);

		// Mock the target.addEffect method
		targetCreature.addEffect = jest.fn();

		// Activate the ability
		burningSpiritAbility.activate(damage, targetCreature);

		// Assertions
		expect(targetCreature.addEffect).toHaveBeenCalled();
	});
});
