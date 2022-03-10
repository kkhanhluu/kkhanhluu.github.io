---
title: '📚 Javascript foundation: Loose Equality vs Strict Equality '
date: '2022-03-05T00:00:00.000Z'
description: 'Loose equality and strict equality in javascript'
time: 10
---

> In this appendix, I present some of the problematic features of JavaScript that are easily avoided. By simply avoiding these features, you make JavaScript a better language, and yourself a better programmer:
> **== (loose equality)**

That’s how the great Douglas Crockford in his excellent _[Javascript: The Good Parts](https://www.amazon.de/-/en/Douglas-Crockford/dp/0596517742)_ introduced the bad parts in javascript and listed the loose equality aka `==` operator as the first bad part of this programming language. It’s a very common advice for javascript newcomers to completely abandon `==` and use his twin `===` operator instead. There's also an eslint rule [eqeqeq](https://eslint.org/docs/rules/eqeqeq) to force developer completely get rid of `==`. What's really `==`, how does it work under the hood and how is it different to their twin `===`? If those questions intrigue you, this post can give you the answer.

<aside>
💡 Before reading this post, you should have an idea about types and type coercion in javascript. You can check <a href="https://kkhanhluu.github.io/types-in-javascript/" target="__blank">this</a> out to read about those topics

</aside>

### The quiz - magic number

_To get started, i have a warm-up challenge for you. The answer and explanation can be found at the end of this post._

Can you define the variable `magicNumber` so that the string `"magic"` is printed to the console?

```jsx
const magicNumber = ?????

if (magicNumber == 1 && magicNumber == 2 && magicNumber == 3) {
	console.log('magic');
}
```

## Strict equality

Here’s the full [definition](https://262.ecma-international.org/5.1/#sec-11.9.6) of the strict equality comparison algorithm in the spec. To sum it up, `===` **disallows** **coercion**. If two values have different types, the comparison’s result is always `false`.

```jsx
1 === 1; // true
1 === '1'; // false
1 === true; // false
```

## Loose equality

In contrast to `===`, `==` **allows coercion** in the equality comparison. Take a look at the loose equality comparison algorithm described in the [specification](https://262.ecma-international.org/5.1/#sec-11.9.3). Let me summarize how the double equal works:

- If two values have the same type, `==` behaves exactly like `===`
- If both of them are `null` or `undefined`, it returns `true`
- If either or both of them are **not primitive**, they will be converted to primitive first by `ToPrimitive`
- If both of them are primitive, there are 2 possible scenarios:
  - If they have the same type, `===`’s algorithm is applied.
  - If they have different types, `ToNumber` is preferred to convert them to the same type.

<aside>
💡 As you can see, it’s actually very <b>safe</b> to use `==` if you're 100% sure that the values you’re comparing have the same type.

</aside>

Let’s examine an example to understand the algorithm better:

```jsx
const num1 = 25;
const num2 = [25];
if (num1 == num2) {
  console.log('They are equal');
}

// Output: They are equal
```

Here’s what took place:

- `[25]` is not primitive so it has to be converted to primitive (Take a look at this [post](https://kkhanhluu.github.io/types-in-javascript/) to understand how `ToPrimitive` works), the result of `ToPrimitive([25])` is `"25"`
- Both `25` and `"25"` are primitive but the have different type, `ToNumber` will come into play to convert `"25"` to number and the result is the number `25`
- Because `25` is of course equals to `25`, the string `They are equal` is logged to the console.

### Double equals corner cases

Because the value can be converted during the comparison, it will lead to some _“weird”_ results if we don’t have a strong grip on type coercion. Let’s see some edge cases with double equal to understand why this feature gets so much hatred from developers

### `[] == ![]` is true

Let’s do the comparison step by step:

- both of values are not primitive so they will be converted to primitive. `ToPrimitive([])` returns `""`, so this is equivalent to `"" == !""`
- The exclamation mark converts `""` to a boolean value, which is `false`. So this’s equivalent to `"" == false`
- Both `""` and `false` are primitive but have different types, `false` will be converted to number first by `ToNumber`, which is `0`
- Then `""` is also converted to number, which is `0`
- The expression is equivalent to: `0 == 0` and returns `true`

---

### Another edge case

```jsx
const emptyArray = [];

if (emptyArray) {
  console.log('yes');
}

if (emptyArray == true) {
  console.log('đúng');
}

if (emptyArray == false) {
  console.log('ja');
}

// Output:
// yes
// ja
```

1. In the first `if` statement, we check if `emptyArray` is truthy value. According to the [spec](https://262.ecma-international.org/5.1/#sec-9.2), `[]` is not a falsy value, so it’s truthy. That’s why the string `"yes"` is printed to console.
2. With the second `if` statement, we compare `[]` with `true`. Let’s do it step by step:
   - `[]` is not primitive, so it is converted to primitive, which is `""`, and this is equivalent to `"" == true`
   - Both of them are primitive but have different types, `true` is converted to number first, which returns `1`
   - Next, the `""` is converted to number by `ToNumber` and the result is 0
   - The expression is `0 == 1` and of course the string `"đúng"` is not printed.
3. The same logic happens as in case 2.

### Cases for loose equality

After having some foundations of strict and loose equal, the next question is should we continue ignoring `==` and sticking to `===`? The ball is on your court.

Personally, the only case I use `==` is `obj == null` for checking if the object is `null` or `undefined`. If both of 2 values is `null` or `undefined`, they are equal so only one `==` comparison is enough to check both cases. In comparison to `===`, the code is prettier and much more concise .

[Kyle Simpson has a controversial opinion that the usage of `==` should be preferred and `===` should only be a last option](https://levelup.gitconnected.com/kyle-simpson-ive-forgotten-more-javascript-than-most-people-ever-learn-3bddc6c13e93). Dr. Axel Rauschmayer also wrote a [blog post](https://2ality.com/2011/12/strict-equality-exemptions.html) about possibles usage of `==` in javascript. Please checkout those resources, take the time and make a wise choice for yourself.

## Magic number - solution

```jsx
const magicNumber = {
  value: 1,
  valueOf() {
    return this.value++;
  },
};

if (magicNumber == 1 && magicNumber == 2 && magicNumber == 3) {
  console.log('magic');
}

// Output: "magic"
```

There’s no number that can be equals to 1, 2 and 3 at the same time but we are using `==` for the comparison, that means **type coercion** is allowed. Let’s see what happens when comparing `magicNumber == 1`

- `magicNumber` is converted to [primitive](https://kkhanhluu.github.io/types-in-javascript/). The **abstract operator** `ToPrimitive` is used to convert `magicNumber` to primitive. Because we are comparing `magicNumber` with a number, the hint **_“number”_** will be sent to `ToPrimitive`. Therefore, `Object.prototype.valueOf()` will be executed firstly.
- The `valueOf` of `magicNumber` performs 2 things at the same time: it returns the `value` property which is currently `1` and increment `value` by 1.
- Therefore, in the next comparison, `valueOf()` returns `2` and increment `value` by 1.
- The process repeats after and after and now we have a magic number that **loosely equals** to 1, 2 and 3
