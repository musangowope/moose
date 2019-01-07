---
templateKey: blog-post
title: JS Object Constructors and Prototypes
image: /img/prototype.jpg
date: 2019-01-07T13:31:42.812Z
description: >-
  This post explores the basics of Object constructor and prototypes. Giving
  some basic examples
tags:
  - javascript
  - javascript-object-creation
  - prototype
  - inheritence
  - object-constructor
---
## Object Types (Blueprints) (Classes):

This are some occasions where you will need to create "blueprint" for several objects that hold the same "type". In order to achieve this we can use an object constructor function. This can be seen `Example 1`

<strong>Example 1</strong>

```
function Soldier(name, type, weapon, healthPoints, attackPoints) {
  this.name = name;
  this.type = type;
  this.weapon = weapon;
  this.healthPoints = healthPoints;
  this.attackPoints = attackPoints;
}

let huntress = new Soldier("Glynda", "huntress", "Rapier", "100HP", "400ATTK");
let assasin = new Soldier("Creed", "assasin", "Dagger", "80HP", "600ATTK");

//Adding a method to the Soldier constructor
huntress.changingNameSpell = name => {
  this.name = name;
  console.log(`My name is now ${this.name}`);
};

huntress.changingNameSpell("Helga");

//Adding a property to the assassin constructor
assasin.color = "maroon"
```

However it is not possible to add `property` or `method` to an `object constructor`. In this case that would be the `Soldier` constructor function.

## Prototype Inheritance:

Prototypes are a nice inheritance model. All javascript objects inherit properties and methods from a prototype. Date objects inherit from Date.prototype. Array objects inherit from Array.prototype. Our `Soldier` objects inherit the `Soldier.prototype`

There are some cases where we may want to add properties or methods to created objects of a certain type or an object constructor.

This can be achieved using `prototypes`. Lets take a look at `Example 2`. In example 2, we are going to add a property to the `Soldier` constructor.

<strong>Example 2: Adding a property to Soldier constructor:</strong>
```
function Soldier(name, type, weapon, healthPoints, attackPoints) {
  this.name = name;
  this.type = type;
  this.weapon = weapon;
  this.healthPoints = healthPoints;
  this.attackPoints = attackPoints;
}
//Adding a race prop to the Soldier constructor
Soldier.prototype.race =  'Asgardian';
```
In this example we added the `race` properties to the Object constructor.

Hope this give you some kind of entry level understanding into prototypes. There is ALOT more to delve in with regards to this topic which I am still trying to wrap my head around.. Buuut baby steps
