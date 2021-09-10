# Single page application


## jQuery -> React

- Render content at backend side, Python Jinjia, EJS
- Render content at frontend side
	- Contact strings and append the string to DOM
	- Handbar.js


## React

- Facebook open sourced React, a data driven, component based UI solution

**component UI = f(props, state)**



![siblings](./pictures/siblings.png)

<br>
<br>
<br>

**What if a component wants to access its sibling component's data**

- Problem 1: over usage of props drilling
	- defined in another sibling componnet
	- or its ancessor component


<br>
<br>
<br>
<br>

- Solution: store the state to global
	- Define context provider
	- Use Redux/Mobx, etc.


**Define Context provider**

![context solution](./pictures/global.01.png);

<br>
<br>




**Use Redux/Mobx**

![Redux solution](./pictures/global.02.png)
![Redux Solution-2](./pictures/global.05.png)
