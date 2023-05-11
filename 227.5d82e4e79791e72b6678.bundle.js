"use strict";(self.webpackChunkancientbeast=self.webpackChunkancientbeast||[]).push([[227],{27097:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var i=r(19755),a=r(16255),n=r(83355),s=r(23315),c=r(67790),o=r(68861);const u=function(e){e.abilities[14]=[{trigger:"onCreatureSummon onDamage onHeal",require:function(){return!0},activate:function(){if(!this.creature.dead){var t=this.isUpgraded()?5:7,r=Math.floor(this.creature.health/t*3),i=r==this._lastBonus;this._lastBonus=r;for(var a=["pierce","slash","crush"],n={},s=0;s<a.length;s++)n[a[s]]=r;this.creature.replaceEffect(new o.Q("Gooey Body",this.creature,this.creature,"",{alterations:n,deleteTrigger:"",stackable:!1,noLog:i},e)),i||e.log("%CreatureName"+this.creature.id+"% receives "+r+" pierce, slash and crush")}},_lastBonus:0},{trigger:"onQuery",require:function(){return this.testRequirements()},query:function(){var t=this,r=[[1,1],[1,1,1],[1,1]],i=this.creature.y%2!=0?-1:0,a=-1,s=[e.grid.getHexMap(this.creature.x+1+i,this.creature.y-2+a,0,!1,r),e.grid.getHexMap(this.creature.x+2+i,this.creature.y+a,0,!1,r),e.grid.getHexMap(this.creature.x+1+i,this.creature.y+2+a,0,!1,r),e.grid.getHexMap(this.creature.x-1+i,this.creature.y+2+a,0,!1,r),e.grid.getHexMap(this.creature.x-2+i,this.creature.y+a,0,!1,r),e.grid.getHexMap(this.creature.x-1+i,this.creature.y-2+a,0,!1,r)];s.sort((function(e,t){return e.length<t.length})),e.grid.queryChoice({fnOnCancel:function(){e.activeCreature.queryMove()},fnOnConfirm:function(){t.animation.apply(t,arguments)},team:n.S.Both,id:this.creature.id,requireCreature:!1,choices:s})},activate:function(t){var r=this;r.end(),e.Phaser.camera.shake(.02,333,!0,e.Phaser.camera.SHAKE_VERTICAL,!0);var s=r.getTargets(t),c=i.extend({},r.damages);if(this.isUpgraded())for(var o in c)({}).hasOwnProperty.call(c,o)&&(c[o]*=2);for(var u=0,h=0;h<s.length;h++)if(void 0!==s[h]){var f=this.damages;(0,n.H)(this.creature,s[h].target,n.S.Enemy)&&(f=c);var g=new a.h(this.creature,f,s[h].hexesHit,[],e);u+=s[h].target.takeDamage(g).kill+0}u>1&&this.creature.player.score.push({type:"combo",kills:u})}},{trigger:"onQuery",require:function(){return this.testRequirements()},query:function(){var t=this,r=this.creature,i=this.isUpgraded()?3:1,a=r.hexagons.concat(e.grid.getFlyingRange(r.x,r.y,i,r.size,r.id));e.grid.queryHexes({fnOnConfirm:function(){t.animation.apply(t,arguments)},size:r.size,flipped:r.player.flipped,id:r.id,hexes:a,ownCreatureHexShade:!0,hideNonTarget:!0})},activate:function(t){this.end();var r=this;e.Phaser.camera.shake(.01,100,!0,e.Phaser.camera.SHAKE_VERTICAL,!0);var i=function(){var i=new o.Q("Royal Seal",r.creature,t,"onStepIn",{requireFn:function(){var e=this.trap.hex.creature;return e&&e.type!==this.owner.type},effectFn:function(e,t){0===this.trap.turnLifetime&&(t.remainingMove=0,this.trap.turnLifetime=1,this.trap.ownerCreature=t)},alterations:{moveable:!1},deleteTrigger:"onStartPhase",turnLifetime:1},e);t.createTrap("royal-seal",[i],r.creature.player,{ownerCreature:r.creature,fullTurnLifetime:!0}).hide()};t.x!==this.creature.x||t.y!==this.creature.y?this.creature.moveTo(t,{callback:function(){e.activeCreature.queryMove(),i()},ignoreMovementPoint:!0,ignorePath:!0,overrideSpeed:200,animation:"push"}):i()}},{trigger:"onQuery",directions:[1,1,1,1,1,1],_targetTeam:n.S.Enemy,require:function(){return!!this.testRequirements()&&!!this.testDirection({team:this._targetTeam,directions:this.directions})},query:function(){var t=this,r=this.creature;e.grid.queryDirection({fnOnConfirm:function(){t.animation.apply(t,arguments)},flipped:r.player.flipped,team:this._targetTeam,id:this.creature.id,requireCreature:!0,x:r.x,y:r.y,directions:this.directions})},activate:function(t,r){this.end(),e.Phaser.camera.shake(.02,300,!0,e.Phaser.camera.SHAKE_HORIZONTAL,!0);var i=c.Z$(t).creature,n=t[0].creature===i?{sonic:20,crush:10}:{sonic:20},o=[];switch(r.direction){case 0:o=e.grid.getHexMap(i.x,i.y-8,0,i.flipped,s.pe).reverse();break;case 1:o=e.grid.getHexMap(i.x,i.y,0,i.flipped,s.hi);break;case 2:o=e.grid.getHexMap(i.x,i.y,0,i.flipped,s.m$);break;case 3:o=e.grid.getHexMap(i.x,i.y,-4,i.flipped,s.pe);break;case 4:o=e.grid.getHexMap(i.x,i.y,0,!i.flipped,s.hi);break;case 5:o=e.grid.getHexMap(i.x,i.y-8,-4,i.flipped,s.m$).reverse()}var u=o.length>1&&o[1].isWalkable(i.size,i.id,!0)&&i.stats.moveable;this.isUpgraded()&&!u&&(n.sonic+=10);var h=new a.h(this.creature,n,1,[],e);i.takeDamage(h,{ignoreRetaliation:!0}).kill||u&&i.moveTo(o[1],{ignoreMovementPoint:!0,ignorePath:!0,callback:function(){e.activeCreature.queryMove()},animation:"push"})}}]}},68861:(e,t,r)=>{r.d(t,{Q:()=>c});var i=r(15671),a=r(43144),n=r(19755),s=r(18394),c=function(){function e(t,r,a,s,c,o){(0,i.Z)(this,e),this.id=o.effectId++,this.game=o,this.name=t,this.owner=r,this.target=a,this.trigger=s,this.creationTurn=o.turn;var u=n.extend({requireFn:function(){return!0},effectFn:function(){},alterations:{},turnLifetime:0,deleteTrigger:"onStartOfRound",stackable:!0,noLog:!1,specialHint:void 0,deleteOnOwnerDeath:!1},c);n.extend(this,u),o.effects.push(this)}return(0,a.Z)(e,[{key:"animation",value:function(){this.activate.apply(this,arguments)}},{key:"activate",value:function(e){if(!this.requireFn(e))return!1;this.noLog||console.log("Effect "+this.name+" triggered"),e instanceof s.j&&e.addEffect(this),this.effectFn(this,e)}},{key:"deleteEffect",value:function(){var e=this.target.effects.indexOf(this);this.target.effects[e]?this.target.effects.splice(e,1):console.warn("Failed to find effect on target.",this);var t=this.game.effects.indexOf(this);this.game.effects[t]?this.game.effects.splice(t,1):console.warn("Failed to find effect on game.",this),this.target.updateAlteration()}}]),e}()}}]);