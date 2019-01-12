---
templateKey: blog-post
title: Prototype vs __proto__
image: /img/protovs__proto__.jpeg
date: 2019-01-12T20:59:52.502Z
description: >-
  This blog post is about the mysterious  __proto__ that resides within objects
  and how it related to prototype. Lets keep this as short as possible
tags:
  - javascript
  - prototype
  - __proto__
  - javascript-object-creation
---
## What is a `prototype`

Prototype is the property on an function that is set as property if you are using the `new` keyword.

## Definition of `__proto__`

`__proto__`is the property on an object that points out the prototype that has been set out for that object

Let's have a look an example to get some clarity:

#### Example 1:

Lets say you had to type in the following in your browser console

```
function Dog() {};
//Then type
Dog.prototype;
```

There will automatically be a an object created to that function. 

![prototype screenshot](/img/prototype.png "prototype screenshot from browser console")

However if you had to create an basic `object literal` like `giraffe`

```
let Giraffe = {};
//Then type
Giraffe.prototype;
```

Giraffe.prototype would be undefined. Hence going back to the definition of prototype.  "A property on a `function`..." 

`__proto__` is added to constructor when the keyword `new` is used. It essentially acts as a reference point so that the constructor can know which prototype to reference.

```
if we create a dog constructor
function Dog() {};
Dog.proto.breed = "Bulldog";
```

Then create a myDoggie constructor

```
let myDoggie = new Dog();
```

My myDoggie will have a `__proto__` that 
references the prototype of Dog.prototype

![__proto__](/img/breed.png "__proto__")

if we  can a new attribute to the prototype like `color`, `__proto__` will reference the updated `prototype`
```
Dog.prototype.color = "maroon";
```
`myDoggie`'s `__proto__` will equal `Dog.prototype`

Anyways, thats all for today. Happy coding!

