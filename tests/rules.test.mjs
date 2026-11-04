import test from 'node:test';
import assert from 'node:assert/strict';
import {overlap,collision,arithmetic,waterPath} from '../arcade-engine.mjs';
test('stack trims to the true overlap',()=>{assert.deepEqual(overlap(20,50,45),{left:45,width:25});assert.equal(overlap(20,10,40).width,0);});
test('flight collides only when the wall overlaps the plane',()=>{assert(collision(15,10,50));assert(!collision(15,50,50));assert(!collision(50,10,50));});
test('arithmetic produces four distinct answers',()=>{for(let level=0;level<3;level++)for(let i=0;i<100;i++){const q=arithmetic(level);assert.equal(new Set(q.choices).size,4);assert(q.choices.includes(q.answer));assert(q.answer>=0);}});
test('water needs reciprocal ports from source to destination',()=>{const t=[{ports:[3,1],rot:0},{ports:[3,2],rot:0},{ports:[0,1],rot:0},{ports:[0,1],rot:0}];assert(waterPath(2,t).won);t[0].rot=1;assert(!waterPath(2,t).won);});
