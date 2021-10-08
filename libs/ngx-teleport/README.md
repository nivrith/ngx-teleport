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
<ngx-portal to="destination"> <stuff>...</stuff></ngx-portal>

<!--This can be anwhere in your App-->
<ngx-portal-outlet name="destination"> </ngx-portal-outlet>
<!--content will be rendered here-->
<stuff>...</stuff>
```
