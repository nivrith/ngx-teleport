<div id="top"></div>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- [![Contributors][contributors-shield]][contributors-url] -->
<!-- [![Forks][forks-shield]][forks-url] -->
<!-- [![Stargazers][stars-shield]][stars-url] -->

[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/nivrith/ngx-teleport">
    <img src="ngx-teleport-logo.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Ngx Teleport</h3>
  <h3 align="center">
  Render content anywhere in your angular app in a declarative manner. Render DOM outside of a component, anywhere in your app!
  </h3>
  <br />

```html
<!--This can be anwhere in your App-->
<ngx-teleport to="destination"> <stuff>...</stuff></ngx-teleport>

<!--This can be anwhere in your App-->

<ngx-teleport-outlet name="destination"> </ngx-teleport-outlet>

<!--content will be rendered here-->

<stuff>...</stuff>
```

  <p align="center">
    <!-- <a href="https://github.com/nivrith/ngx-teleport"><strong>Explore the docs »</strong></a> -->
    <a href="https://github.com/nivrith/ngx-teleport">View Source</a>
    ·
    <a href="https://github.com/nivrith/ngx-teleport/issues">Report Bug</a>
    ·
    <a href="https://github.com/nivrith/ngx-teleport/issues">Request Feature</a>

  </p>
  <p align="center">
    <!-- <a href="https://github.com/nivrith/ngx-teleport"><strong>Explore the docs »</strong></a> -->
    🚀 &nbsp; Declarative ·
    🎉 &nbsp; Very Simple to use ·
    🍻 &nbsp; No Auxilary Routing ·
    💚 &nbsp; No Imperative Portal Creation and Lifecycle Management

  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://nivrith.github.io/ngx-teleport)

There are many situations where we would want to break the unidirectional top-down rendering of template/components and render DOM outside of a component, anywhere in your app

Here are few use cases:

- You want to render different template in your toolbar or sidebar based on different routes but you want to bind properties and events in the child component
- You want to conditionally show some template in different corners of your application which may not be hierarchically related

Use the `NgxTeleport` to get started.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

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

- Just Import `NgxTeleportModule` in the NgModule of which ever components you are using `ngx-teleport` and `ngx-teleport-outlet` in

```ts
import { NgxTeleportModule } from 'ngx-teleport';

@NgModule({
  //...
  imports: [
    //..
    NgxTeleportModule,
    //..
  ],
})
export class SomeModule {}
```

_For more examples, please refer to the [Documentation](https://nivrith.github.io/ngx-teleport)_

<p align="right">(<a href="#top">back to top</a>)</p>

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.md` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Nivrith - [@\_Nivrith\_](https://twitter.com/_Nivrith_) - nivrithgomatam@gmail.com

Project Link: [https://github.com/nivrith/ngx-teleport](https://github.com/your_username/ngx-teleport)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/nivrith/ngx-teleport.svg?style=for-the-badge
[contributors-url]: https://github.com/nivrith/ngx-teleport/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/nivrith/ngx-teleport.svg?style=for-the-badge
[forks-url]: https://github.com/nivrith/ngx-teleport/network/members
[stars-shield]: https://img.shields.io/github/stars/nivrith/ngx-teleport.svg?style=for-the-badge
[stars-url]: https://github.com/nivrith/ngx-teleport/stargazers
[issues-shield]: https://img.shields.io/github/issues/nivrith/ngx-teleport.svg?style=for-the-badge
[issues-url]: https://github.com/nivrith/ngx-teleport/issues
[license-shield]: https://img.shields.io/github/license/nivrith/ngx-teleport.svg?style=for-the-badge
[license-url]: https://github.com/nivrith/ngx-teleport/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/nivrith
[product-screenshot]: ngx-teleport-readme-image.svg
