# Scrollery

React TypeScript library for animating your **image gallery** on **scroll**.

<image src="https://raw.githubusercontent.com/nguyend-nam/scrollery/main/public/preview.gif"></image>

[Demo](https://scrollery-demo.vercel.app/)

## Installation

```bash
npm i @nguyend-nam/scrollery-ts
```

or install using yarn:

```bash
yarn add @nguyend-nam/scrollery-ts
```

## Usage

Import wrapper components:

```javascript
import {
  LinearlyScaledCardWrapper,
  StackedCardWrapper,
} from "@nguyend-nam/scrollery-ts";
```

Put the `img`s inside the wrappers with some custom style/className:

```javascript
// ...

<LinearlyScaledCardWrapper className="w-full flex flex-col items-center gap-[800px] !mt-8 !mb-[800px]">
  <img
    src="/img/cat1.png"
    className="w-full h-full object-cover"
    alt="Coding cat"
  />
</LinearlyScaledCardWrapper>

<StackedCardWrapper className="w-full space-y-[1400px] !mt-8 !mb-40 px-4">
  <img
    src="/img/cat2.png"
    className="w-full h-full object-cover"
    alt="Flexing cat"
  />
  <img
    src="/img/cat3.png"
    className="w-full h-full object-cover"
    alt="Sitting cat"
  />
  <img
    src="/img/cat4.png"
    className="w-full h-full object-cover"
    alt="Sleepy cat"
  />
</StackedCardWrapper>

// ...
```

<image src="https://raw.githubusercontent.com/nguyend-nam/scrollery/main/public/example.gif"></image>

## Official website & documentation

_Coming soon_

## Contributing

Contributions are always welcome!

## License

[ISC](https://choosealicense.com/licenses/isc/)
