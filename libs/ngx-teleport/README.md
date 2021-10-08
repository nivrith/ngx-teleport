# ngx-teleport

Render Angular content anywhere in your Angular app in a declarative manner

## Installation

```shell
npm install ngx-teleport
```

or using yarn

```shell

yarn add ngx-teleport

```

## Usage Example

```html
<!--This can be anwhere in your App-->
<ngx-teleport to="destination"> <stuff>...</stuff></ngx-teleport>

<!--This can be anwhere in your App-->
<ngx-teleport-outlet name="destination"> </ngx-teleport-outlet>
<!--content will be rendered here-->
<stuff>...</stuff>
```
