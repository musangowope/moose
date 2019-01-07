---
templateKey: blog-post
title: 'Javascript Object Creation: This and Bind'
image: /img/this-and-bind.jpeg
date: 2016-12-17T15:04:10.000Z
description: >-
  This and bind are crucial fundamentals that should be understood for Object
  Creation in Javascript.
tags:
  - javascript
  - bind
  - this
  - javascript-object-creation
---
I've noticed terms `this` and `bind` in various codes of javascript but never really took to the time to actually understand what it means and how it is used in javascript.

`this` is all about context. `this` is a javascript keyword that refer to the object that it belongs to.

Let take a simple example:
Below, have an object called `dog`

<strong>Example 1: `this` explanation</strong>

```
let dog = {
  type: 'Shiba Inu'
  color: 'blue',
  description: function() {
    return 
      'Dog type:' + this.type + ', Dog color:' + this.color
  }
}
```

If I had to run the following code:

```
dog.description();
```

the expected output would be `Dog type: Shiba Inu, Dog color: blue`

`this.type` would have the value `Shiba Inu` because it refers to that property of that object it belongs just. The same applies for `this.color`

if I had to assign `dog.description()` to another variable `describeDog` and run that that method `describeDog()`, the following would happen in this example

<strong>Example 2: Assigning object property with `this` to variable with a bind</strong>

```
let dog = {
  type: 'Shiba Inu',
  color: 'blue',
  description: function() {
    return 
      'Dog type:' + this.type + ', Dog color:' + this.color
  }
}

let describeDog =  dog.description;
console.log(describeDog());
// The expected result from the console would be
// Dog type:undefined, Dog color:undefined
```

the `console.log(describeDog());` was output 

```
Dog type:undefined, Dog color:undefined
```

because `describeDog` does not have the context for `this.type` and `this.color`. This is where `bind` comes in.

The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

here is an example of using bind.

<strong>Example 3</strong>

```
let dog = {
  type: "Shiba Inu",
  color: "blue",
  description: function() {
    return "Dog type:" + this.type + ", Dog color:" + this.color;
  }
};
let describeDog = dog.description;
let boundDescribeDog = describeDog.bind(dog);

console.log(boundDescribeDog());
```

the method `boundDescribeDog()` now has reference object which is `dog` hence `this.type` and `this.color` can be referenced
which means that the expected output for the `console.log(boundDescribeDog());` will be 

```
Dog type:Shiba Inu, Dog color:blue
```



I hope this demystifies the concepts of `this` and `bind`

Happy coding :)
